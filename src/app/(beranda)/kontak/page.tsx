import { LinksImage } from 'src/component/molecules/links/image';
import { ContactsMap } from 'src/component/molecules/contacts/map';
import { Constant } from './page.constant';

export default function Page() {
  return (
    <main className='min-h-screen max-w-[100vw] overflow-x-hidden relative flex flex-col items-center bg-white pb-24'>
      <section className="py-5 flex flex-col px-12 lg:px-24 xl:px-32 2xl:px-44">
        <h2 className="text-center text-lg md:text-2xl lg:text-3xl
          md:px-12 lg:px-24 2xl:px-56">
          Dapatkan informasi lainnya di sosial media kami, dan anda dapat menghubungi pihak berwajib
          yang tertera di bawah ini
        </h2>

        <div className="flex flex-col items-center py-12 md:py-24">
          <h2 className="text-center font-semibold text-lg md:text-2xl mb-4">
            Kunjungi Kami di:
          </h2>
          <LinksImage
            withLabel={true}
            className='grid grid-cols-2 justify-items-center gap-4 lg:gap-0 lg:flex lg:flex-wrap lg:space-x-4'
            itemsClassName='flex flex-col items-center group'
            imageClassName='w-12 lg:w-14 group-hover:scale-90 duration-500'
            labelClassName='text-sm lg:text-base'
            linkList={Constant.socialMedia} />
        </div>
      </section>


      <section className="flex flex-col items-center mx-12 md:mx-24">
        <h2 className="text-center font-semibold text-lg md:text-2xl mb-4">
          Kontak Polsek Wilayah Batam:
        </h2>
        <ContactsMap
          className='flex flex-wrap justify-center'
          itemClassName='m-4 md:m-6'
          contactList={Constant.dummyContacts} />
      </section>
    </main>
  )
}
