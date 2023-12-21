import { FirebaseOptions } from 'firebase/app';
import { set, get, update, remove, query, equalTo, orderByChild } from 'firebase/database';
import { Case } from './case.entity'
import { DatabaseCollection } from './_collection';
import { Helper } from './_helper';
import { Firebase} from './_type';

export class CaseCollectionService extends DatabaseCollection implements Firebase.Collection.Service {
  constructor(config: FirebaseOptions){
    super(config);
  }

  async create(dto: Case.Create, imageFile: File | null): Promise<Firebase.Collection.Data<Case.Expose>> {
    const id = this.getId('cases');

    let evidence_img = dto.evidence_img || '';
    if(imageFile){
      const { fullpath } = Helper.savePath(imageFile, 'uploads/cases', id);
      evidence_img = fullpath;
      await this.uploadFile(imageFile, fullpath)
    }
    
    const date_incident = dto.date_incident.toISOString() as unknown as Date;
    const caseDto = new Case.Entity({ ...dto, status: "masuk", id, date_incident, evidence_img});
    await set(this.caseRef(id), caseDto);
    return Helper.transformAs<Case.Expose>(caseDto);
  }

  async find(): Promise<Firebase.Collection.Data<Record<string, Case.Expose>>> {
    const result = await get(this.caseRef());
    return Helper.transform<Record<string, Case.Expose>>(result);
  }

  async findWhere(key: keyof Case.Expose, value: any): Promise<Firebase.Collection.Data<Record<string, Case.Expose>>> {
    const q = query(this.caseRef(), orderByChild(key), equalTo(value));
    const result = await get(q)
    return Helper.transform<Record<string, Case.Expose>>(result);
  }

  async findId(id: string): Promise<Firebase.Collection.Data<Case.Expose>> {
    const q = query(this.caseRef(id));
    const result = await get(q)
    return Helper.transform<Case.Expose>(result);
  }

  async updateId(id: string, dto: Case.Update): Promise<Firebase.Collection.Data<Case.Expose>> {
    this.WithUser();
    const clean = Helper.clean<Case.Update>(dto);
    await update(this.caseRef(id), clean);
    return await this.findId(id);
  }

  async removeId(id: string): Promise<Firebase.Collection.Data<Case.Expose>> {
    const result = await this.findId(id);
    await remove(this.caseRef(id));
    return result;
  }
}