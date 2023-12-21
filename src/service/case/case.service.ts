import { DataSnapshot, onValue, off, } from 'firebase/database';
import { DatabaseService, type Case, ErrorCB } from 'src/database/database';
import { CaseDto } from './case.dto';

export type Snapshot = DataSnapshot;
export type { Case };

const db = new DatabaseService();
export namespace CaseService {
  export async function create({ imageFile, ...dto}: CaseDto.Create){
    return await db.cases.create(dto, imageFile);
  }

  export async function findIncoming(){
    return await db.cases.findWhere('status', "masuk");
  }

  export async function approve(id:string) {
    return await db.cases.updateId(id, { status: 'proses' })
  }

  export async function finish(id:string) {
    return await db.cases.updateId(id, { status: 'selesai' })
  }

  export async function reject(id:string) {
    return await db.cases.updateId(id, { status: 'tolak' })
  }

  export async function remove(id:string) {
    return await db.cases.removeId(id);
  }
}

export namespace CaseOn {
  export const Value =(cb: (ds:DataSnapshot)=>unknown, eCb?: ErrorCB)=> onValue(db.cases.dbRef('cases'),cb, eCb);
}

export namespace CaseOff {
  export const Value =(cb: (ds:DataSnapshot, prevId?: string | null)=>unknown) => off(db.cases.dbRef('cases'), 'value', cb);
}

export namespace CaseUtil {
  export function filterCase(ds:DataSnapshot, status: Case.Status): Case.Expose[] | []{
    const result = ds.toJSON();
    if(!result) return [];
    const cases = Object.values(result) as Case.Expose[];
    return cases.filter((cs) => cs.status === status);
  }
}