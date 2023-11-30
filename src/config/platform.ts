import { LinksImageProps } from "src/component/molecules/links/image";
import { Icon2 } from "src/component/static-file/icon2";

export namespace PlatformConfig {
  export const socialMedia: LinksImageProps['linkList'] = [
    {
      title: "@lawan.id.batam",
      src: Icon2.instagram,
      href: "/",
    },
    {
      title: "Lawan id Batam",
      src: Icon2.facebook,
      href: "/",
    },
    {
      title: "Lawan id Batam",
      src: Icon2.twitter,
      href: "/",
    },
    {
      title: "Lawan id Batam",
      src: Icon2.youtube,
      href: "/",
    }
  ]

  export const downloadLinks: LinksImageProps['linkList'] = [
    {
      title: "Lawan id",
      src: Icon2.googlePlay,
      href: "/",
    }
  ]
}