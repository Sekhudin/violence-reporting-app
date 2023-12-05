import useSwr from 'swr';
import { DatabaseService } from "src/database/database";

export namespace UseService {
  const db = new DatabaseService();
  export const value = "";
}