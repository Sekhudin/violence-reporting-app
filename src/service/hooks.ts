import useSwr from 'swr';
import { User } from 'firebase/auth'
import { DatabaseService } from "src/database/database";

export namespace UseService {
  const db = new DatabaseService();
  const currentUser: User | null = db.auth.currentUser;
  const userId: string | undefined = currentUser?.uid;
  export const value = "";
}