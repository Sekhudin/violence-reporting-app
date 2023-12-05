import { Firebase } from './_type'

export namespace Article {
  export type UniqueField = Pick<Entity, 'id' >
  export class Entity {
    readonly id!: string;
    readonly author_id!: Id;
    readonly title!: string;
    readonly article!: string;
    readonly image!: string;
    constructor(values: Entity){
      Object.assign(this, values)
    }
  }

  export type Expose = Omit<Entity, ''>;
  export type Unique = Pick<Entity, 'id'>;
  export type Id = Firebase.User.Id;
  export type Create = Omit<Article.Entity, 'id' | 'author_id' | 'image'>;
  export type Update = Partial<Omit<Entity, 'id' | "author_id">>
}