import { DatabaseService } from 'src/database/database';
import { ArticleDto } from './article.dto';

export namespace ArticleService {
  const db = new DatabaseService();
  export async function create(dto: ArticleDto.Create, imageFile: File){
    return await db.article.create(dto, imageFile)
  }
}