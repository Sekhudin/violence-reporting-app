import { User } from "src/database/collection/user";

export namespace UserDto {
  export type Payload = User.Payload;
  export class Login implements Pick<User.Entity, 'email' | 'password'>{
    email!: string;
    password!: string;
  }

  export class Create implements Pick<User.Entity,
  'id_card' 
  | 'name' 
  | 'email' 
  | 'password'
  >{
    id_card!: string;
    name!: string;
    email!: string;
    password!: string;
  }
}