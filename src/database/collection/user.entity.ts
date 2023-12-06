import { Firebase } from './_type'

export namespace User {
  export class Entity {
    readonly id!:string;
    readonly id_card!:string;
    readonly name!: string;
    readonly username!: string;
    readonly email!: string;
    readonly password!: string;
    readonly role!: Role[];
    readonly image!: string;
    constructor(values: Entity){
      Object.assign(this, values)
    };
  }

  export type Expose = Omit<Entity, 'password'>;
  export type Unique = Pick<Entity, 'id' | 'id_card' | 'email' | 'username'>;
  export type Create = Omit<Entity, 'id' | 'username' | 'role'>;
  export type Update = Partial<Omit<Entity, 'id'>>;
  export type Role = Firebase.User.Role;
  export const ROLES: Role[] = ['admin', 'super admin'];
}