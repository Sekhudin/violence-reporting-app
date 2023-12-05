import { initializeApp, FirebaseApp, FirebaseOptions } from 'firebase/app';
import { getDatabase, Database as FirebaseDatabase, DatabaseReference, ref, child, query, get, push, ThenableReference, orderByChild, equalTo, remove } from "firebase/database";
import { ForbiddenException, InternalServerErrorException, UnAuthorizedException } from "src/util/exception/catch";
import { 
  getAuth, 
  signOut, 
  setPersistence,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  browserSessionPersistence, 
  Auth as FirebaseAuth, 
  User as FirebaseUser, 
  UserCredential as FirebaseUserCredential
} from 'firebase/auth';
import { User } from './user.entity';
import { Firebase } from './_type'

export class DatabaseCollection implements Firebase.Collection.Base {
  constructor(config: FirebaseOptions){
    this._app = initializeApp(config);
    this._auth = getAuth(this._app);
    this._db = getDatabase(this._app);
    // this.storage = getStorage(this.app);
    // this.analythics = getAnalytics(this.app);

    this.articles = this.refTo('articles');
    this.cases = this.refTo('cases');
    this.users = this.refTo('users');
  }
  private readonly _app!: FirebaseApp;
  private readonly _auth!: FirebaseAuth;
  private readonly _db!: FirebaseDatabase;
  // private readonly storage!: FirebaseStorage;
  // private readonly analythics!: Analytics
  private readonly articles!: DatabaseReference;
  private readonly cases!: DatabaseReference;
  private readonly users!: DatabaseReference;

  private refTo: Firebase.Functions.CollectionReference = (collectionName)=> {
    return ref(this._db, collectionName)
  }

  protected async signUpAccount(email:string, password:string): Promise<Record<'id' | 'hashedPassword', string>>{
    const { user } = await createUserWithEmailAndPassword(this._auth, email, password);
    const id = user.uid;
    const info = user as any;
    const hashedPassword = info.reloadUserInfo.passwordHash as string;
    if(!hashedPassword) throw new InternalServerErrorException('failed to create new account')
    return { id, hashedPassword }
  }

  protected async signInAccount(email:string, password: string): Promise<FirebaseUserCredential>{
    await setPersistence(this._auth, browserSessionPersistence);
    return await signInWithEmailAndPassword(this._auth, email, password);
  }

  protected async signOutAccount(): Promise<boolean>{
    await signOut(this._auth);
    return true;
  }

  protected async deleteAccount(): Promise<string>{
    const { uid } = this.WithUser();
    const qArticles = query(this.articles, orderByChild("author_id"), equalTo(uid));
    const articlesDS = await get(qArticles);
    const articleDeleted = articlesDS.forEach((article)=> { remove(article.ref); return true; })
    if(!articleDeleted) throw new InternalServerErrorException('failed to delete account')
    return uid;
  }


  getAuth(): FirebaseAuth { return this._auth; }
  getId(collectionName: Firebase.Collection.Name): string {
      let document: ThenableReference | null = null;
      switch (collectionName) {
        case 'articles':
          document = push(this.articles, '/');
          break;
        case 'cases':
          document = push(this.cases, '/');
          break;
        case 'users':
          throw new InternalServerErrorException("canot generate id");
      }
    if(!document || !document.key) throw new InternalServerErrorException("failed to generate id");
    return document.key;
  }

  createRef(ref: DatabaseReference, path: string): DatabaseReference {
    return child(ref, path);
  }

  articleRef(path?: string): DatabaseReference {
    if(!path) return this.articles;
    return child(this.articles, path);
  }

  caseRef(path?: string): DatabaseReference {
    if(!path) return this.cases;
    return child(this.cases, path);
  }

  userRef(path?: string): DatabaseReference {
    if(!path) return this.users;
    return child(this.users, path);
  }

  WithUser(): FirebaseUser {
    const currentUser = this._auth.currentUser;
    if(!currentUser) throw new ForbiddenException();
    return currentUser;
  }

  IsUser(): boolean {
    this.WithUser();
    return true;
  }

  async WithSuperAdmin(): Promise<User.Expose>{
    const { uid } = this.WithUser()
    const q = query(this.userRef(uid));
    const result = await get(q);
    const profile = result.toJSON();
    if(!profile) throw new UnAuthorizedException();
    const { password, ...expose} = profile as User.Entity;
    return expose;
  }

  async IsSuperAdmin(): Promise<boolean> {
    const user = await this.WithSuperAdmin();
    const isSuperAdmin: boolean = user.role.includes('super admin');
    if(!isSuperAdmin) throw new UnAuthorizedException();
    return true;
  }

}

// protected async apiUploadImage(file: File, fullpath:string){
//   const form = new FormData();
//   form.append('image', file);
//   form.append('fullpath', fullpath);
//   try {
//     const request = await fetch("/api", {
//       method: "post",
//       body: form
//     })
//     const result = await request.json() as Type.ResApiRoute;
//     if(!this.successCode.includes(result.code)) throw new InternalServerErrorException("Gambar gagal diupload");
//     return result;
//   } catch (error) {
//     throw new InternalServerErrorException()
//   }
// }