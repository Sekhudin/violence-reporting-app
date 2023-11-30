import type { ListOddEvenProps } from 'src/component/molecules/list/odd-even';
import { Icon2 } from 'src/component/static-file/icon2';
import { Mockup } from 'src/component/static-file/mockup';

export namespace Constant {
  export const mockupIllustration = Mockup.file02;
  export const googlePlayIcon = Icon2.googlePlay;
  export const misiList: ListOddEvenProps['textList'] = [
    {
      label: "01",
      text: "Menyediakan sarana pelaporan kekerasan dalam bentuk aplikasi"
    },
    {
      label: "02",
      text: "Membantu upaya pencegahan dan penanganan atas berbagai tindak kekerasan"
    },
    {
      label: "03",
      text: "Memberikan edukasi dan informasi terkait pencegahan serta penanganan kekerasan"
    }
  ]

  export const reportList: ListOddEvenProps['textList'] = [
    {
      label: "1",
      text: "Alur Pelaporan"
    },
    {
      label: "2",
      text: "Buat Laporan"
    },
    {
      label: "3",
      text: "Laporan diverifikasi"
    },
    {
      label: "4",
      text: "Laporan diproses"
    },
    {
      label: "5",
      text: "Laporan selesai"
    }
  ]
}