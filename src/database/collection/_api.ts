import { InternalServerErrorException } from "src/util/exception/http.exception";

export class ApiBase {
  private successCode: number[] = [200, 201, 204, 205];

  protected async apiUploadImage(file: File, fullpath:string){
    const form = new FormData();
    form.append('image', file);
    form.append('fullpath', fullpath);
    try {
      const request = await fetch("/api", {
        method: "post",
        body: form
      })
      const result = await request.json();
      return result;
    } catch (error) {
      throw new InternalServerErrorException()
    }
  }
}