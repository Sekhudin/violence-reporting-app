import { FirebaseType } from 'src/database/collection/_type';
import { Case } from 'src/database/collection/case';

export namespace CaseDto {
  export type TypeCase = Case.TypeCase;
  const [typcase, ...otherTypeCase] = [...Case.TYPE_CASE] as const;
  export const TYPE_CASE: readonly[string, ...string[]] = [typcase, ...otherTypeCase] as const;
  export class Create implements Pick<Case.Entity,
   'id_card'
  | 'name'
  | 'address'
  | 'phone'
  | 'title'
  | 'type_incident'
  | 'location_incident'
  | 'date_incident'
  | 'description'
  | 'evidence'
  | 'evidence_img'
  >
{
  id_card!: string;
  name!: string;
  address!: string;
  phone!: string;
  title!: string;
  type_incident!: FirebaseType.CaseType;
  location_incident!: string;
  date_incident!: Date;
  description!: string;
  evidence?: string;
  evidence_img?: string;
}
}