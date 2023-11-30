import { FirebaseType as Type } from "./_type"

export namespace Helper {
  export const transform: Type.TransformerFn = (data) => {
    if(!data || Object.keys(data).length === 0) return null;
    return {
      keys: Object.keys(data),
      values: data
    }
  }

  export function cleanDto<T extends Record<string, any> = {}>(obj: T): T {
    const clean: Record<string, any> = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];
        if (value) {
          clean[key] = value;
        }
      }
    }
    return clean as T
  }

  export function getExtFile(file:File):string {
    const ext = file.name.slice((file.name.lastIndexOf(".") - 1 >>> 0) + 2);
    return `.${ext}`.trim();
  }

  export function renameFileWitExt(file:File, name:string):string {
    const ext = getExtFile(file);
    return name+ext.trim();
  }

  type ReturnSavePath = {
    fullPath: string;
    fileName: string;
    folder: Type.UploadFolder;
  }

  export function savePath(file:File, folder: Type.UploadFolder, name:string): ReturnSavePath {
    const fileName = renameFileWitExt(file, name);
    const fullPath = `/uploads${folder}/${fileName}`.trim();
    return {
      fullPath,
      fileName,
      folder
    }
  }
}