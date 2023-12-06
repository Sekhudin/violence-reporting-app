import { Article } from 'src/database/collection/article.entity'

export namespace ArticleDto {
  export class Create implements Article.Create{
    title: string = "";
    article: string = "";
    image: string = "";
    imageFile: File | null = null;
  }
}