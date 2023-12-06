import { DatabaseService } from 'src/database/database';
import { BadRequestException } from 'src/util/exception/catch';
import { UserDto } from './user.dto';

export namespace UserService {
  const db = new DatabaseService();
  export async function signInEmailPwd(dto: UserDto.Login) {
    return db.user.signIn(dto.email, dto.password);
  }

  export async function creaateAdmin({ imageFile, ...dto}: UserDto.Create) {
    if(!imageFile) throw new BadRequestException("Photo tidak ditemukan")
    return await db.user.create(dto, imageFile);
  }

  export async function createSuperAdmin(dto: UserDto.Create) {
    return await db.user.createSuperAdmin(dto);
  }
}