import { Database, DatabaseReference, child, get, query, ref, remove, set, update } from 'firebase/database';
import { 
  Auth, 
  deleteUser,
  User as AuthUser,
  setPersistence,
  browserSessionPersistence,
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword
 } from 'firebase/auth';
import { ForbiddenException, UnAuthorizedException } from 'src/util/exception/http.exception';
import { Helper } from './_helper';
import { Collection } from './_collection';
import { FirebaseType as Type } from "./_type";

export namespace User {
  export type UniqueField = Pick<Entity, 'id' | 'username' >;
  export type Payload = Omit<Entity, 'password'>
  export class Entity {
    readonly id!:string;
    readonly id_card!:string;
    readonly name!: string;
    readonly username!: string;
    readonly email!: string;
    readonly password!: string;
    readonly role!: Type.UserRole[];
    constructor(values: Entity){
      Object.assign(this, values)
    }
  }
}


export class UserCollection extends Collection {
  readonly _name: Type.CollectionName ='users';
  readonly colRef: DatabaseReference = ref(this.db, this._name);
  readonly docRef: Type.DocRefFn = (docId) => child(this.colRef, `${docId}`);

  constructor(db: Database, auth:Auth){
    super(db, auth);
  }

  private WithUser(): AuthUser {
    const signedUser = this.auth.currentUser;
    if(!signedUser) throw new ForbiddenException();
    return signedUser;
  }

  private async WithSuperAdmin(): Promise<true>{
    /** @description auth permission */
    const { uid } = this.WithUser()
    const q = query(this.docRef(uid));
    const result = (await get(q)).toJSON() as User.Entity | null;
    const roles: string[] = result ? Object.values(result.role) : [];
    const isSuperAdmin:boolean = roles.includes('super admin');
    if(!isSuperAdmin) throw new UnAuthorizedException();
    return true;
  }

  async findId(id: string ): Promise<Type.Data> {
    const q = query(this.docRef(id));
    const user = await get(q);
    const { password, ...result} = user.toJSON() as any;
    return Helper.transform(result)
  }

  async signUp(dto: Omit<User.Entity, 'id' | 'username' | 'role'>): Promise<Type.Data> {
    /** @description auth permission */
    await this.WithSuperAdmin();

    const { user } = await createUserWithEmailAndPassword(this.auth, dto.email, dto.password);
    // const name = dto.email.trim().toLocaleLowerCase().split('@')[0];
    const id = user.uid;
    const info = user as any
    const password = info.reloadUserInfo.passwordHash as string
    if(!password) throw new ForbiddenException('failed to create new account')

    const entity = new User.Entity({ ...dto, id, username: "", password, role: ['admin' ]});
    await set(this.docRef(id), entity);
    const {password: hiddenPass, ...result} = entity;
    return Helper.transform(result);
  }

  async signUpSuperAdmin(dto: Omit<User.Entity, 'id' | 'username' | 'role'>): Promise<Type.Data> {
    /** @description super admin permission */
    this.WithUser();

    const { user } = await createUserWithEmailAndPassword(this.auth, dto.email, dto.password);
    // const name = dto.email.trim().toLocaleLowerCase().split('@')[0];
    const id = user.uid;
    const info = user as any
    const password = info.reloadUserInfo.passwordHash as string
    if(!password) throw new ForbiddenException('failed to create new account')

    const entity = new User.Entity({ ...dto, id, username: "", password, role: ['admin', 'super admin']});
    await set(this.docRef(id), entity);
    const {password: hiddenPass, ...result} = entity;
    return Helper.transform(result);
  }

  async signIn(email: string, password: string): Promise<Type.Data> {
    await setPersistence(this.auth, browserSessionPersistence);
    const login = await signInWithEmailAndPassword(this.auth, email, password);
    const profile = await this.findId(login.user.uid)
    return profile;
  }

  async signOut(): Promise<boolean> {
     /** @description auth permission */
    this.WithUser()
    await this.auth.signOut()
    return true;
  }

  async update(dto: Partial<Omit<User.Entity, 'id' | 'role'>>): Promise<Type.Data> {
    /** @description auth permission */
    const { uid } = this.WithUser();
    const clean = Helper.cleanDto(dto);
    await update(this.docRef(uid), clean);
    const newProfile = await this.findId(uid);
    return newProfile;
  }

  async deleteAccount(): Promise<boolean> {
    /** @description user permission */
    const user = this.WithUser()
    await deleteUser(user)
    await remove(this.docRef(user.uid))
    return true;
  }
}
