import { Auth, User as AuthUser } from 'firebase/auth';
import { Database, DatabaseReference, ref, child, push, set, get, update, remove, query, orderByChild, equalTo } from 'firebase/database';
import { UnAuthorizedException, InternalServerErrorException, NotFoundException, BadRequestException } from 'src/util/exception/http.exception';
import { Collection } from './_collection';
import { Helper } from './_helper';
import { FirebaseType as Type } from './_type';

export namespace Article {
  export type UniqueField = Pick<Entity, 'id' >
  export class Entity {
    readonly id!: string;
    readonly author_id!: Type.UserId;
    readonly title!: string;
    readonly article!: string;
    readonly image!: string;

    constructor(values: Entity){
      Object.assign(this, values)
    }
  }
}

export class ArticleCollection extends Collection implements Type.Collection {
  readonly _name: Type.CollectionName ='articles'
  readonly colRef: DatabaseReference = ref(this.db, this._name);
  readonly docRef: Type.DocRefFn = (docId) => child(this.colRef, `${docId}`);

  constructor(db:Database, auth:Auth){
    super(db, auth);
  }

  private WithUser(): AuthUser {
    const signedUser = this.auth.currentUser;
    if(!signedUser) throw new UnAuthorizedException();
    return signedUser;
  }
  
  async create(dto: Omit<Article.Entity, 'id' | 'author_id' | 'image'>, imageFile: File): Promise<Type.Data> {
    /** @description auth permision */
    const user = this.WithUser();

    const id = push(child(this.colRef, '/')).key;
    if(!id) throw new InternalServerErrorException();
    const author_id = user.uid;
    const { fileName, folder, fullPath } = Helper.savePath(imageFile, '/articles', id);
    const uploaded = await this.uploadImage(imageFile, fileName, folder);
    if(!uploaded) throw new InternalServerErrorException("gambar gagal diupload");
    const article= new Article.Entity({ ...dto, id, author_id, image: fullPath });
    await set(this.docRef(id), article);
    return Helper.transform(article);
  }

  async find(): Promise<Type.Data> {
    const articles = (await get(this.colRef)).toJSON()
    return Helper.transform(articles);
  }

  async findWhere(key: keyof Article.Entity, value: any): Promise<Type.Data> {
    if(!key || !value) throw new BadRequestException();

    const q = query(this.colRef, orderByChild(key), equalTo(value));
    const articles = (await get(q)).toJSON();
    return Helper.transform(articles);
  }

  async findId(id: string): Promise<Type.Data> {
    const q = query(this.docRef(id));
    const article = (await get(q)).toJSON();

    if(!article) throw new NotFoundException();
    return Helper.transform(article);
  }

  async updateId(id: string, dto: Partial<Omit<Article.Entity, 'id'>>): Promise<Type.Data> {
    /** @description auth permission */
    this.WithUser()

    await this.findId(id);
    const clean = Helper.cleanDto(dto);
    await update(this.docRef(id), clean);
    return await this.findId(id);
  }
  
  async removeId(id: string): Promise<Type.Data> {
    /** @description auth permission */
    this.WithUser()

    const forDelete = await this.findId(id);
    await remove(this.docRef(id));
    return forDelete;
  }
  
}