import { NotFoundException } from "src/util/exception/http.exception";
import { Firebase } from "./_type"

export namespace Helper {
  const transformer: Firebase.Functions.Transformer<Record<string, any>> = (snapShoot)=> {
    const data = snapShoot.toJSON();
    if(!data) throw new NotFoundException();
    return { keys: Object.keys(data), values: data }
  }

  const cleaner: Firebase.Functions.CleanDto<Record<string, any>> = (dto) => {
    const clean: Record<string, any> = {};
    for (const key in dto) {
      if (dto.hasOwnProperty(key)) {
        const value = dto[key];
        if (value) {
          clean[key] = value;
        }
      }
    }
    return clean;
  }

  const getExtension: Firebase.Functions.GetExtension = (file)=>{
    const _extension = file.name.slice((file.name.lastIndexOf(".") - 1 >>> 0) + 2);
    const extension = `.${_extension}`
    return extension.trim();
  }

  const rename: Firebase.Functions.RenameFile = (file, newName) => {
    const extension = getExtension(file);
    const filename = `${newName}${extension}`;
    return filename.trim();
  }

  export function transform <T extends Record<string, any>>(snapShoot: Firebase.Collection.SnapShoot): Firebase.Collection.Data<T>{
    const result = transformer(snapShoot);
    return result as Firebase.Collection.Data<T>
  }

  export function transformAs <T extends Record<string, any>>(data: Record<string, any> | null): Firebase.Collection.Data<T>{
    if(!data) throw new NotFoundException();
    return { keys: Object.keys(data), values: data } as Firebase.Collection.Data<T>
  }

  export function clean<T extends Record<string, any>>(dto: T): T {
    return cleaner(dto) as T;
  }

  export const savePath: Firebase.Functions.SavePath = (file, folder, saveAs)=> {
    const filename = rename(file, saveAs);
    const fullpath = `/uploads/${folder}/${filename}`.trim();
    return { fullpath, folder, filename };
  }
}