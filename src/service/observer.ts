import { onAuthStateChanged, User, NextOrObserver } from "firebase/auth";
import { DatabaseService } from 'src/database/database';

export type CurrentUser = User;
export namespace ObserveOn {
  const db = new DatabaseService();
  const auth = db.auth;

  export const AuthStateChange = (
    next:NextOrObserver<CurrentUser>,
  ) => onAuthStateChanged(auth, next);

  
}