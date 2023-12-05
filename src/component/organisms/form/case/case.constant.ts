import type { CaseType } from "src/service/case/form/create";
import type { ItemComboboxProps } from 'src/component/molecules/form-item/combo-box';

export namespace Constant {
  export const typeCaseList: ItemComboboxProps<CaseType>['listValue'] = [
    { label: 'Verbal', value: 'verbal' },
    { label: 'Fisik', value: 'fisik' },
    { label: 'Psikologis', value: 'psikologis' },
    { label: 'Seksual', value: 'seksual' },
    { label: 'KDRT', value: 'kekerasan dalam rumah tangga' },
    { label: 'Lainya', value: 'lainya' },
  ]
}