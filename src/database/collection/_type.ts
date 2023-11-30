import { DataSnapshot, DatabaseReference } from "firebase/database";

export namespace FirebaseType {
  export type UploadFolder = "/articles" | "/cases" | "/users";
  export type CollectionName = 'users' | 'articles' | 'cases';
  export type DocRefFn = (docId:string)=> DatabaseReference;

  export type UserRole = "admin" | "super admin";
  export type UserId = string;
  export type CaseStatus = "masuk" | "proses" | "selesai" | "tolak";
  export type CaseType = "verbal" | "fisik" | "psikologis" | "seksual" | "kekerasan dalam rumah tangga" | "lainya";

  export type FollowCb = (snapshot: DataSnapshot) => unknown;
  export type FollowErrorCb = (e: Error) => unknown;

  export type Data = {
    keys: string[];
    values: Record<string, any> | Record<string, any>[]
  } | null

  export type TransformerFn = (e:Record<string, any> | Record<string, any>[] | null ) => Data;

  export type ResApiRoute = {
    code :number;
    message: string;
    description: string;
  }

  export interface Collection {
    _name: CollectionName;
    colRef: DatabaseReference;
    docRef: DocRefFn

     create(param:any, extra?:any): Promise<Data>;
     find(): Promise<Data>;
     findWhere(key: string, value: any): Promise<Data>;
     findId(id: string): Promise<Data>;
     updateId(id: string, param:any): Promise<Data>;
     removeId(id: string): Promise<Data>;
  }
}