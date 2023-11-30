import { Article } from 'src/database/collection/article'

export namespace ArticleDto {
  export class Create implements Pick<Article.Entity, 'title' | 'article' | 'image' >{
    title!: string;
    article!: string;
    image!: string;
  }
}