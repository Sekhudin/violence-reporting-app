import { onAuthStateChanged, User as AuthUser, NextOrObserver } from "firebase/auth";
import { onValue, off, } from 'firebase/database';
import { DatabaseService, type User, Snapshot, ErrorCB, PayloadFrom } from 'src/database/database';
import { UserDto } from './user.dto';

type CurrentUser = AuthUser;
export type { User, CurrentUser, Snapshot, ErrorCB };

const db = new DatabaseService();
export namespace UserService {
  export async function signInEmailPwd(dto: UserDto.Login) {
    return db.user.signIn(dto.email, dto.password);
  }

  export async function creaateAdmin({ imageFile, ...dto}: UserDto.Create) {
    return await db.user.create(dto, imageFile);
  }

  export async function createSuperAdmin({imageFile, ...dto}: UserDto.Create) {
    return await db.user.createSuperAdmin(dto, imageFile);
  }

  export async function findUserById(id:string) {
    return await db.user.findUserById(id);
  }

  export async function signOut() {
    return await db.user.signOut();
  }
}

export namespace UserOn {
  export const AuthStateChange = (next:NextOrObserver<CurrentUser>) => onAuthStateChanged(db.auth, next);
  export const Value =(cb: (ds:Snapshot)=>unknown, eCb?: ErrorCB)=> onValue(db.user.dbRef('users'),cb, eCb);
}

export namespace UserOff {
  export const Value =(cb: (ds:Snapshot, prevId?: string | null)=>unknown) => off(db.cases.dbRef('users'), 'value', cb);
}

export namespace UserUtil {
  export function returnData(ds:Snapshot): User.Expose[] | []{
    const result = ds.toJSON();
    if(!result) return [];
    const articles = Object.values(result) as User.Expose[];
    return articles;
  }

  export function payload(dp: PayloadFrom<User.Expose>){
    const { values } = dp;
    return values;
  }
}