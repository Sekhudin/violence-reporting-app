import type { LinksImageProps } from 'src/component/molecules/links/image';
import type { ContactsMapProps } from 'src/component/molecules/contacts/map';
import { PlatformConfig } from 'src/config/platform';

export namespace Constant {
  export const socialMedia: LinksImageProps['linkList'] = PlatformConfig.socialMedia;
  const maps ="https://www.google.com/maps/@-7.3967129,109.4616075,15z?entry=ttu";
  export const dummyContacts: ContactsMapProps['contactList'] = [
  {
    type: 'Super Admin',
    name: 'Supriyono',
    address: 'Semarang, Jawa Tengah',
    telp: '061',
    maps: maps
  },
  {
    type: 'Admin Polsek',
    name: 'Prabowo',
    address: 'Bandung, Jawa Barat',
    telp: '061',
    maps: maps
  },
  {
    type: 'Super Admin',
    name: 'Supriyono',
    address: 'Semarang, Jawa Tengah',
    telp: '061',
    maps: maps
  },
  {
    type: 'Admin Polsek',
    name: 'Prabowo',
    address: 'Bandung, Jawa Barat',
    telp: '061',
    maps: maps
  }
]
}