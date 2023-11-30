export namespace Props {
  type Contact = {
    type: 'Super Admin' | 'Admin Polsek'
    name: string;
    address: string;
    telp: string | number;
    maps: string;
    widthMap?:number;
    heightMap?:number;
  }

  export type ContactsMap = {
    contactList: Contact[],
    className?: string,
    itemClassName?: string;
  }
}