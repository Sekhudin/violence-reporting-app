import { Icon2 } from "src/component/static-file/icon2";

export namespace PlatformConfig {
  type PlatFormLink = {
    title: string;
    src: typeof Icon2.facebook;
    href?:string;
  }
  
  export const socialMedia: PlatFormLink[] = [
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

  export const downloadLinks: PlatFormLink[] = [
    {
      title: "Lawan id",
      src: Icon2.googlePlay,
      href: "/",
    }
  ]
}