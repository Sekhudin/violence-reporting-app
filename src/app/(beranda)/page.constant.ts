import type { CardImageProps } from 'src/component/molecules/card/image';
import type { LinksImageProps } from 'src/component/molecules/links/image';
import { Icon } from 'src/component/static-file/icon';
import { Illus } from 'src/component/static-file/illustration';
import { Mockup } from 'src/component/static-file/mockup';
import { PlatformConfig } from 'src/config/platform';

export namespace Constant {
  export const illustration1 = Illus.file11;
  export const illustration2 = Illus.file06;
  export const illustration3 = Illus.file07;
  export const illustration4 = Illus.file08;
  export const illustration5 = Illus.file09;
  export const illustration6 = Illus.file10;
  export const mockupIllustration = Mockup.file01;
  export const downloadLinks: LinksImageProps['linkList'] = PlatformConfig.downloadLinks;
  export const objectiveList: CardImageProps['imageList'] = [
    {
      image: Icon.file01,
      title: "Kesejahteraan",
      description: `Membantu membela kesejahteraan korban
      tindakan kekerasan dengan membantu melaporkan.`,
    },
    {
      image: Icon.file03,
      title: "Perlindungan",
      description: `Membantu memberi perlindungan dari
      pihak kepolisian, lembaga sosial, atau pihak lainnya`,
    },
    {
      image: Icon.file02,
      title: "Kesehatan",
      description: `Membantu memberi layanan kesehatan
      meliputi pemeriksaan, tindakan, dan perawatan medis.`,
    }
  ]
}