import { Case } from 'src/database/collection/case.entity';

export namespace CaseDto {
  export type Type = Case.Type;
  const [type, ...otherType] = [...Case.TYPES] as const;
  export const TYPE_CASE: readonly[string, ...string[]] = [type, ...otherType] as const;
  export class Create implements Case.Create{
  id_card!: string;
  name!: string;
  address!: string;
  phone!: string;
  title!: string;
  type_incident!: Case.Type
  location_incident!: string;
  date_incident!: Date;
  description!: string;
  evidence?: string;
  evidence_img?: string;
}
}