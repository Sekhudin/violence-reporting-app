import { FirebaseOptions } from 'firebase/app';
import { set, get, update, remove, query, equalTo, orderByChild, } from 'firebase/database';
import { Article} from './article.entity'
import { DatabaseCollection } from './_collection';
import { Helper } from './_helper';
import { Firebase } from './_type';

export class ArticleCollectionService extends DatabaseCollection implements Firebase.Collection.Service {
  constructor(config: FirebaseOptions){
    super(config);
  }

  async create(dto: Article.Create, imageFile: File): Promise<Firebase.Collection.Data<Article.Expose>> {
    const { uid: author_id } = this.WithUser();
    const id = this.getId('articles');
    const { fullpath: image } = Helper.savePath(imageFile, 'uploads/articles', id);
    await this.uploadFile(imageFile, image);
    const article = new Article.Entity({ ...dto, id, author_id, image  });
    await set(this.articleRef(id), article);
    return Helper.transformAs<Article.Expose>(article);
  }

  async find(): Promise<Firebase.Collection.Data<Record<string, Article.Expose>>> {
    const result = await get(this.articleRef())
    return Helper.transform<Record<string, Article.Expose>>(result);
  }

  async findWhere(key: keyof Article.Entity, value: any): Promise<Firebase.Collection.Data<Record<string, Article.Expose>>> {
    const q = query(this.articleRef(), orderByChild(key), equalTo(value));
    const result = await get(q);
    return Helper.transform<Record<string, Article.Expose>>(result);
  }

  async findId(id: string): Promise<Firebase.Collection.Data<Article.Expose>> {
    const q = query(this.articleRef(id));
    const result = await get(q)
    return Helper.transform<Article.Expose>(result);
  }

  async updateId(id: string, dto: Article.Update): Promise<Firebase.Collection.Data<Article.Expose>> {
    this.WithUser();
    const clean = Helper.clean<Article.Update>(dto);
    await update(this.articleRef(id), clean);
    return await this.findId(id);
  }

  async removeId(id: string): Promise<Firebase.Collection.Data<Article.Expose>> {
    this.WithUser();
    const result = await this.findId(id);
    await remove(this.articleRef(id));
    return result;
  }
}