import { DatabaseService, type Article } from 'src/database/database';
import { BadRequestException } from 'src/util/exception/catch';
import { ArticleDto } from './article.dto';

export { Article };

const db = new DatabaseService();
export namespace ArticleService {
  export async function create({ imageFile, ...dto}: ArticleDto.Create){
    if(!imageFile) throw new BadRequestException("ilustrasi tidak ditemukan");
    return await db.article.create(dto, imageFile);
  }
}

export namespace ArticleStorage {
  export async function getUrl(path: string) {
    return await db.article.viewFile(path);
  }
}