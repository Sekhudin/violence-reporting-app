import { DatabaseService } from 'src/database/database';
import { UserDto } from './user.dto';

export namespace UserService {
  const db = new DatabaseService();
  export async function signInEmailPwd(dto: UserDto.Login) {
    return db.user.signIn(dto.email, dto.password);
  }

  export async function creaateAdmin(dto: UserDto.Create) {
    return await db.user.signUp(dto);
  }

  export async function createSuperAdmin(dto: UserDto.Create) {
    return await db.user.signUpSuperAdmin(dto);
  }
}