import { Firebase } from './_type'

export namespace Case {
  export class Entity {
    readonly id!:string;
    readonly id_card!: string;
    readonly name!: string;
    readonly address!: string;
    readonly phone!: string;
    readonly status!: Status;
    readonly title!: string;
    readonly date_incident!: Date;
    readonly type_incident!: Type;
    readonly location_incident!: string;
    readonly description!: string;
    readonly evidence?: string;
    readonly evidence_img?: string;
    constructor(values: Entity){
      Object.assign(this, values)
    }
  }

  export type Expose = Omit<Entity, ''>;
  export type Unique = Pick<Entity, 'id' >;
  export type Create = Omit<Entity, 'id' | 'status'>;
  export type Update = Pick<Entity, 'status'>;
  export type Type = Firebase.Case.Type;
  export type Status = Firebase.Case.status;
  export const TYPES: Type[] = ['verbal', 'fisik', 'psikologis', 'seksual', 'kekerasan dalam rumah tangga', 'lainya'];
  export const STATUS: Status[] = ['masuk', 'proses', 'selesai', 'tolak'];
}