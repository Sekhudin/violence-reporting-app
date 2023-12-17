import { DataSnapshot, onValue, off, } from 'firebase/database';
import { DatabaseService } from 'src/database/database';
import { type Case } from 'src/database/collection/case.entity';
import { CaseDto } from './case.dto';

export type Snapshot = DataSnapshot;
export type { Case };
export namespace CaseService {
  const db = new DatabaseService();
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

  export function filterStatusCase(ds:DataSnapshot, status: Case.Status): Case.Expose[] | []{
    const result = ds.toJSON();
    if(!result) return [];
    const cases = Object.values(result) as Case.Expose[];
    return cases.filter((cs) => cs.status === status);
  }

  export const onCaseValue =(callback: (ds:DataSnapshot)=>unknown)=> onValue(db.cases.ref(),callback);
  export const offValue =(callback: (ds:DataSnapshot, prevChildName?: string | null)=>unknown) => off(db.cases.ref(), 'value', callback)
}