import { ListOddEvenProps } from "src/component/molecules/list/odd-even";

export namespace Constant {
  export const reportingFlow: ListOddEvenProps['textList'] = [
    {
      label: "1",
      text: "Buat Laporan"
    },
    {
      label: "2",
      text: "Laporan diverifikasi"
    },
    {
      label: "3",
      text: "Laporan diproses"
    },
    {
      label: "4",
      text: "Laporan selesai"
    }
  ]
}