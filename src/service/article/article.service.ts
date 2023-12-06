import { DatabaseService } from 'src/database/database';
import { BadRequestException } from 'src/util/exception/catch';
import { ArticleDto } from './article.dto';

export namespace ArticleService {
  const db = new DatabaseService();
  export async function create({ imageFile, ...dto}: ArticleDto.Create){
    if(!imageFile) throw new BadRequestException("ilustrasi tidak ditemukan");
    return await db.article.create(dto, imageFile);
  }
}