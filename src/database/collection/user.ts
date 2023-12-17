import { FirebaseOptions } from 'firebase/app';
import { set, get, update, query, } from 'firebase/database';
import { User } from './user.entity'
import { DatabaseCollection } from './_collection';
import { Helper } from './_helper';
import { Firebase} from './_type';


export class UserCollectionService extends DatabaseCollection {
  private readonly defaultImage: string = "/uploads/users/default.jpg";
  constructor(config: FirebaseOptions){
    super(config);
  }

  private async findId(id:string): Promise<User.Expose>{
    const q = query(this.userRef(id));
    const result = await get(q);
    const { password, ...exposed} = result.toJSON() as User.Entity;
    return exposed;
  }

  async create(dto: User.Create, imageFile: File | null): Promise<Firebase.Collection.Data<User.Expose>> {
    await this.WithSuperAdmin();
    const { id, hashedPassword: password} = await this.signUpAccount(dto.email, dto.password);
    
    let image:string = this.defaultImage;
    if(imageFile){
      const { fullpath } = Helper.savePath(imageFile, 'uploads/users', id);
      await this.uploadFile(imageFile, fullpath);
      image = fullpath;
    }

    const entity = new User.Entity({ ...dto, id, password, username: "", image, role: ['admin' ]});
    await set(this.userRef(id), entity);
    const { password: hidden, ...result} = entity;
    return Helper.transformAs<User.Expose>(result);
  }

  async createSuperAdmin(dto:User.Create, imageFile: File | null): Promise<Firebase.Collection.Data<User.Expose>> {
    const { id, hashedPassword: password} = await this.signUpAccount(dto.email, dto.password);

    let image:string = this.defaultImage;
    if(imageFile){
      const { fullpath } = Helper.savePath(imageFile, 'uploads/users', id);
      await this.uploadFile(imageFile, fullpath);
      image = fullpath;
    }

    const entity = new User.Entity({ ...dto, id, password, image, username: "", role: ['admin', 'super admin']});
    await set(this.userRef(id), entity);
    const { password: hidden, ...result} = entity;
    return Helper.transformAs<User.Expose>(result);
  }

  async signIn(email:string, password: string): Promise<Firebase.Collection.Data<User.Expose>> {
    const { user } = await this.signInAccount(email, password);
    const result = await this.findId(user.uid);
    return Helper.transformAs<User.Expose>(result);
  }

  async signOut(): Promise<Firebase.Collection.Data<User.Expose>> {
    const { uid } = this.WithUser();
    const result = await this.findId(uid);
    await this.signOutAccount();
    return Helper.transformAs<User.Expose>(result);
  }

  async update(dto: User.Update): Promise<Firebase.Collection.Data<User.Expose>> {
    const { uid } = this.WithUser();
    const clean = Helper.clean(dto);
    await update(this.userRef(uid), clean);
    const result = await this.findId(uid);
    return Helper.transformAs<User.Expose>(result);
  }

  async remove(): Promise<Firebase.Collection.Data<User.Expose>> {
    const id = await this.deleteAccount();
    const result = await this.findId(id);
    return Helper.transformAs<User.Expose>(result);
  }
}
