import Image from 'next/image'
import { DialogUserLogin } from 'src/component/organisms/dialog/user/login';
import { Button } from 'src/component/ui/button';
import { Constant } from './page.constant';
import css from './style.module.css';

export default function Page() {
  return (
    <main className='min-h-screen max-w-[100vw] overflow-x-hidden relative bg-white flex flex-col pb-24'>
      <section className={`${css['section_1']} sticky top-0 flex flex-none justify-center items-center`}>
        <div className={`${css['container_section']} text-center`}>
          <h1>Kepolisian Republik Indonesia</h1>
          <DialogUserLogin forceMsgBox>
            <Button type="submit" className={`${css['get_started']} font-semibold px-10 hover:opacity-90`}>
              Pengelola
            </Button>
          </DialogUserLogin>
        </div>
      </section>

      <section className='relative bg-white grow block lg:flex space-x-0 lg:space-x-16
        justify-center items-center py-20 px-12 lg:px-24 xl:px-32 2xl:px-44'>
        <div className="grow mb-4 text-center lg:text-start">
          <h2 className="semi_heading_2 text_blue mb-2">
            Polsek (Kepolisian Sektor)
          </h2>
          <p className="text_style_label">
            Kami bekerja sama dengan kepolisian republik indonesia terutama kepolisian sektor yang ada di kota Batam,
            nantinya laporan yang masuk akan dikelola oleh polsek di masing masing wilayah pelapor.
          </p>
        </div>

        <div className='flex-none flex justify-center lg:justify-start'>
          <Image
            className='object-cover w-[450px]'
            src={Constant.illustrationImage}
            alt="polsek-image" />
        </div>
      </section>
    </main>
  )
}