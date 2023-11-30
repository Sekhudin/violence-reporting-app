import { Auth } from 'firebase/auth';
import { Database, DatabaseReference, child, equalTo, get, orderByChild, push, query, ref, remove, set, update } from 'firebase/database';
import { BadRequestException, InternalServerErrorException, NotFoundException } from 'src/util/exception/http.exception';
import { Helper } from './_helper';
import { Collection } from './_collection';
import { FirebaseType as Type } from './_type';

export namespace Case {
  export type TypeCase = Type.CaseType;
  export type Status = Type.CaseStatus;
  export const TYPE_CASE: TypeCase[] = ['verbal', 'fisik', 'psikologis', 'seksual', 'kekerasan dalam rumah tangga', 'lainya'];
  export const STATUS: Status[] = ['masuk', 'proses', 'selesai', 'tolak'];

  export type UniqueField = Pick<Entity, 'id' >
  export class Entity {
    readonly id!:string;
    readonly id_card!: string;
    readonly name!: string;
    readonly address!: string;
    readonly phone!: string;
    readonly status!: Status;
    readonly title!: string;
    readonly date_incident!: Date;
    readonly type_incident!: TypeCase;
    readonly location_incident!: string;
    readonly description!: string;
    readonly evidence?: string;
    readonly evidence_img?: string;

    constructor(values: Entity){
      Object.assign(this, values)
    }
  }
}

export class CaseCollection extends Collection implements Type.Collection {
  readonly _name: Type.CollectionName ='cases';
  readonly colRef: DatabaseReference = ref(this.db, this._name);
  readonly docRef: Type.DocRefFn = (docId) => child(this.colRef, `${docId}`);

  constructor(db:Database, auth: Auth){
    super(db, auth)
  }

  async create(dto: Omit<Case.Entity, 'id' | 'status'>, imageFile: File | null): Promise<Type.Data> {
    const id = push(child(this.colRef, '/')).key;
    if(!id) throw new InternalServerErrorException();
    let evidenImg:string = ''
    if(imageFile){
      const { folder, fileName, fullPath  } = Helper.savePath(imageFile, '/cases', id);
      evidenImg = fullPath;
      await this.uploadImage(imageFile, fileName, folder);
    }
    const date_incident = dto.date_incident.toISOString() as unknown as Date;
    const theCase = new Case.Entity({ ...dto, id, status: 'masuk', date_incident, evidence_img: evidenImg  })
    await set(this.docRef(id), theCase);
    return Helper.transform(theCase);
  }
  
  async find(): Promise<Type.Data> {
    const theCases = (await get(this.colRef)).toJSON()
    return Helper.transform(theCases);
  }

  async findWhere(key: keyof Case.Entity, value: any): Promise<Type.Data> {
    if(!key || !value) throw new BadRequestException();

    const q = query(this.colRef, orderByChild(key), equalTo(value));
    const theCases = (await get(q)).toJSON();
    return Helper.transform(theCases);
  }

  async findId(id: string): Promise<Type.Data> {
    const q = query(this.docRef(id));
    const theCase = (await get(q)).toJSON();

    if(!theCase) throw new NotFoundException();
    return Helper.transform(theCase);
  }

  async updateId(id: string, dto: Pick<Case.Entity, 'status'>): Promise<Type.Data> {
    await this.findId(id);
    const clean = Helper.cleanDto(dto);
    await update(this.docRef(id), clean);
    return await this.findId(id);
  }

  async removeId(id: string): Promise<Type.Data> {
    const forDelete = await this.findId(id);
    await remove(this.docRef(id));
    return forDelete;
  }
  
}