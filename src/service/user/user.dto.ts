import { User } from "src/database/collection/user.entity";

export namespace UserDto {
  export class Login implements Pick<User.Create, 'email' | 'password'>{
    email: string = "";
    password: string = "";
  }

  export class Create implements User.Create{
    id_card: string = "";
    name: string = "";
    email: string = "";
    password: string = "";
    image: string = "";
    imageFile: File | null = null;
  }
}