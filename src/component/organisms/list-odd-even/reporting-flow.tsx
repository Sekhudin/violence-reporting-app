import { ListOddEven } from "src/component/molecules/list/odd-even";
import { Constant } from './reporting-flow.constant';

export type ListReportingFlowProps = {
  title?: string;
  labelClassName?: string;
  listClassName?: string;
}

export function ListReportingFlow({ title, labelClassName, listClassName }: ListReportingFlowProps) {
  return (
    <>
      <h3 className={labelClassName || 'text-center mb-6 semi_heading_2'}>
        {title || 'Alur Pelaporan'}
      </h3>
      <ListOddEven
        className={listClassName || 'flex flex-wrap justify-center'}
        oddItemClassName="border-2 p-2 m-4 md:m-6 basis-full md:basis-0 rounded-lg 
          md:font-medium md:text-lg border_color_amber text_blue"
        evenItemClassName="border-2 p-2 m-4 md:m-6 basis-full md:basis-0 rounded-lg 
          md:font-medium md:text-lg border_color_amber text_blue"
        oddClassName="flex items-center space-x-4 p-8"
        evenClassName="flex items-center space-x-4 p-8"
        withLabel={true}
        textList={Constant.reportingFlow} />
    </>
  )
}