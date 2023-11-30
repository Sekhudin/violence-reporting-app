import { DatabaseService } from 'src/database/database';
import { CaseDto } from './case.dto';

export namespace CaseService {
  const db = new DatabaseService();
  export async function create(dto: CaseDto.Create, imageFile: File | null){
    return await db.cases.create(dto, imageFile);
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
}