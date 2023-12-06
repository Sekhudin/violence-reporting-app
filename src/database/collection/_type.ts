import { Auth as FirebaseAuth, User as AuthUser } from "firebase/auth";
import { DataSnapshot, DatabaseReference } from "firebase/database";
import { StorageReference, UploadResult, ref } from "firebase/storage";

export namespace Firebase {
  export namespace Case {
    export type status = "masuk" | "proses" | "selesai" | "tolak";
    export type Type = "verbal" | "fisik" | "psikologis" | "seksual" | "kekerasan dalam rumah tangga" | "lainya";
  }

  export namespace User {
    export type Role = "admin" | "super admin";
    export type Id = string;
  }

  export namespace Collection {
    export type Name = 'users' | 'articles' | 'cases';
    export type Data<T extends Record<string, any> = Record<string, any>> = { keys: (keyof T)[]; values: T };
    export type SnapShoot = DataSnapshot;

    export interface Base {
      createRef(ref: DatabaseReference, path:string): DatabaseReference;
      articleRef(path?: string): DatabaseReference;
      caseRef(path?: string): DatabaseReference;
      userRef(path?: string): DatabaseReference;
      storageRef(path?:string): StorageReference;

      uploadFile(file: File | null, fullpath:string): Promise<UploadResult>;
      viewFile(fullpath:string):Promise<string>;

      getId(collectionName: Name): string;
      getAuth(): FirebaseAuth;

      WithUser(): AuthUser;
      IsUser(): boolean;
      WithSuperAdmin(): Promise<any>;
      IsSuperAdmin(): Promise<boolean>;
    }

    export interface Service {
      create(dto:any, extra?:any): Promise<Data<any>>;
      find(): Promise<Data<any>>;
      findWhere(key: string, value: any): Promise<Data<any>>;
      findId(id: string): Promise<Data<any>>;
      updateId(id: string, param:any): Promise<Data<any>>;
      removeId(id: string): Promise<Data<any>>;
    }
  }

  export namespace Folder {
    export type Upload = "uploads/articles" | "uploads/cases" | "uploads/users";
  }

  export namespace Functions {
    export type CollectionReference = (collectionName: Collection.Name)=> DatabaseReference;
    export type DocumentRefrence = (db: DatabaseReference, path:string)=> DatabaseReference;
    export type Transformer<T extends Record<string, any>> = (snapShoot: DataSnapshot) => Collection.Data<T>;
    export type CleanDto<T extends Record<string, any>> = (dto: T)=> T;
    export type GetExtension = (file:File)=>string;
    export type RenameFile = (file: File, newName:string) => string;
    export type SavePath = (file: File, folder: Folder.Upload, name: string)=> { fullpath: string, folder: string, filename: string }
  }

  export namespace Observer {
    export type Callback = (snapshot: DataSnapshot) => unknown;
    export type ErrorCallback = (e: Error) => unknown;
  }
}