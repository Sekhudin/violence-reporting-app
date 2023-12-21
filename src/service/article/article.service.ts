import { onValue, off, } from 'firebase/database';
import { DatabaseService, type Article, Snapshot, ErrorCB } from 'src/database/database';
import { ArticleDto } from './article.dto';

export type { Article, Snapshot, ErrorCB };
const db = new DatabaseService();
export namespace ArticleService {
  export async function create({ imageFile, ...dto}: ArticleDto.Create){
    return await db.article.create(dto, imageFile);
  }
}

export namespace ArticleOn {
  export const Value = (cb: (ds: Snapshot)=> unknown, eCb?: ErrorCB)=> onValue(db.article.dbRef('articles'), cb, eCb)
}

export namespace ArticleOff {
  export const Value =(cb: (ds:Snapshot, prevId?: string | null)=>unknown) => off(db.cases.dbRef('articles'), 'value', cb);
}

export namespace ArticleStorage {
  export async function getUrl(path: string) {
    return await db.article.viewFile(path);
  }
}

export namespace ArticleUtil {
  export function returnData(ds:Snapshot): Article.Expose[] | []{
    const result = ds.toJSON();
    if(!result) return [];
    const articles = Object.values(result) as Article.Expose[];
    return articles;
  }
}