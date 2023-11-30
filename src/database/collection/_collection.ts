import { Database } from "firebase/database";
import { Auth } from 'firebase/auth';
import { InternalServerErrorException } from "src/util/exception/http.exception";
import { FirebaseType as Type } from './_type'

export class Collection {
  protected readonly auth!: Auth;
  protected readonly db!: Database;
  
  constructor(db: Database, auth:Auth){
    this.db = db
    this.auth = auth;
  }

  protected async uploadImage(imageFile: File, filename:string, folder: Type.UploadFolder){
    const form = new FormData();
    form.append('image', imageFile);
    form.append('filename', filename);
    form.append('folder', folder);
    try {
      const request = await fetch("/api", {
        method: "post",
        body: form
      })
      const result = await request.json() as Type.ResApiRoute;
      if(result.code !== 201) throw new InternalServerErrorException("Gambar gagal diupload");
      return result;
    } catch (error) {
      throw new InternalServerErrorException()
    }
  }
}