import { AppSocialMedia } from 'src/component/molecules/special/app-social-media';
import { CardListUserContact, TitleCardListUserContact } from 'src/component/organisms/cardlist/user/contact';
import { UserProvider } from 'src/component/context/provider';

export default function Page() {
  return (
    <>
      <section className="py-5 flex flex-col px-6 lg:px-24 xl:px-32 2xl:px-44">
        <h2 className="text-center text-base md:text-xl lg:text-2xl
          md:px-12 lg:px-24 2xl:px-56">
          Dapatkan informasi lainnya di sosial media kami, dan anda dapat menghubungi pihak berwajib
          yang tertera di bawah ini
        </h2>

        <div className="flex flex-col items-center py-12 md:py-24">
          <h2 className="text-center font-semibold text-lg md:text-2xl mb-4">
            Kunjungi Kami di:
          </h2>
          <AppSocialMedia className='grid grid-cols-2 grid-rows-2 md:grid-cols-4
            md:grid-rows-1 gap-4 md:gap-6'
            withLabel={true} />
        </div>
      </section>


      <section className="flex flex-col items-center mx-6 md:mx-24 pt-20">
        <TitleCardListUserContact>
          Kontak Polsek Wilayah:
        </TitleCardListUserContact>
        <UserProvider>
          <CardListUserContact />
        </UserProvider>
      </section>
    </>
  )
}
