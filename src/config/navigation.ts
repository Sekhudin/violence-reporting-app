export namespace NavigationConfig {
  type Navigation = {
    title: string;
    href: string;
    label?:string;
  }

  export const berandaNavigation: Navigation[] = [
    {
      title: "Beranda",
      href: "/"
    },
    {
      title: "Tentang",
      href: "/tentang"
    },
    {
      title: "Edukasi",
      href: "/edukasi"
    },
    {
      title: "Kontak",
      href: "/kontak"
    },
    {
      title: "Pengelola",
      href: "/pengelola"
    }
  ]
}