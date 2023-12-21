import { ContactsMap } from 'src/component/atoms/contacts/map';
import { AppSocialMedia } from 'src/component/molecules/special/app-social-media';
import { Constant } from './page.constant';

export default function Page() {
  return (
    <>
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
          <AppSocialMedia withLabel
            className='grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 gap-4 md:gap-6' />
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
    </>
  )
}
