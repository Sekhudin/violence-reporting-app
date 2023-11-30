import type { LinksImageProps } from 'src/component/molecules/links/image';
import type { LinksTextProps } from 'src/component/molecules/links/text';
import { PlatformConfig } from 'src/config/platform';
import { NavigationConfig } from 'src/config/navigation';
import { PngLogo } from 'src/component/static-file/logo';


export namespace Constant {
  const [beranda, ...navigations] = NavigationConfig.berandaNavigation;
  export const logo = PngLogo.largeWhite;
  export const socialMedia: LinksImageProps['linkList'] = PlatformConfig.socialMedia;
  export const downloadLinks: LinksImageProps['linkList'] = PlatformConfig.downloadLinks;
  export const navigationList: LinksTextProps['linkList'] = navigations;
}