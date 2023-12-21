import { onAuthStateChanged, User as AuthUser, NextOrObserver } from "firebase/auth";
import { DataSnapshot, onValue, off, } from 'firebase/database';
import { DatabaseService, type User, ErrorCB } from 'src/database/database';
import { BadRequestException } from 'src/util/exception/catch';
import { UserDto } from './user.dto';

export type Snapshot = DataSnapshot;
export type CurrentUser = AuthUser;
export { User };

const db = new DatabaseService();
export namespace UserService {
  export async function signInEmailPwd(dto: UserDto.Login) {
    return db.user.signIn(dto.email, dto.password);
  }

  export async function creaateAdmin({ imageFile, ...dto}: UserDto.Create) {
    if(!imageFile) throw new BadRequestException("Photo tidak ditemukan")
    return await db.user.create(dto, imageFile);
  }

  export async function createSuperAdmin({imageFile, ...dto}: UserDto.Create) {
    db.user.dbRef('db');
    return await db.user.createSuperAdmin(dto, imageFile);
  }

  export const onAuthStateChange = (next:NextOrObserver<CurrentUser>) => onAuthStateChanged(db.auth, next);
}

export namespace UserOn {
  export const AuthStateChange = (next:NextOrObserver<CurrentUser>) => onAuthStateChanged(db.auth, next);
  // export const Value =(cb: (ds:DataSnapshot)=>unknown)=> onValue(db.user.userRef(),cb);
}

export namespace UserOff {

}