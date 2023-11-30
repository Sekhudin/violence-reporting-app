import Image from 'next/image';
import Link from 'next/link';
import { Button } from 'src/component/ui/button';
import { CardImage } from 'src/component/molecules/card/image';
import { LinksImage } from 'src/component/molecules/links/image';
import { ListReportingFlow } from 'src/component/organisms/list-odd-even/reporting-flow';
import { LawanCrossText } from 'src/component/organisms/text-mapper/lawan';
import { DialogCaseCreate } from 'src/component/organisms/dialog/case/create'
import { Constant } from './page.constant';

export default function Page() {
  return (
    <main className='min-h-screen relative bg-white pb-24'>
      <section className="sticky top-0 flex flex-col items-center px-12 md:px-24">
        <h2 className='mt-6 semi_heading_1'>
          Lawan!
        </h2>
        <p className='md:max-w-xl mt-4 text-center normal_heading_2'>
          Membantu membela kesejahteraan korban tindak
          <span className='text-red-500'>{" kekerasan "}</span>
          dengan melaporkan
        </p>
        <a href="#lawan!" className='mt-4'>
          <Button className='hover:bg-amber-500 hover:text-white
            px-12 text-xl font-medium button_amber'>
            Jelajahi
          </Button>
        </a>
      </section>

      <section className='relative flex flex-col items-center bg-white py-12'>
        <div className='max-w-screen-2xl grid grid-cols-3 md:grid-cols-5 grid-rows-1 
          gap-4 lg:gap-6 px-6'>
          <div className='md:col-span-1'>
            <div className='h-20 w-full rounded-xl bg-gradient-to-l
            from-amber-500 to-amber-400' />
            <Image
              className='w-full object-cover rounded-xl mt-4 lg:mt-6'
              src={Constant.illustration1}
              alt='image' />
          </div>

          <div className='col-span-2 md:col-span-3 flex items-end space-x-0 md:space-x-4 lg:space-x-6'>
            <div className='h-4/6 w-40 rounded-xl bg-gradient-to-t
            from-cyan-900 to-cyan-700 hidden md:block'/>
            <Image
              className='object-cover rounded-xl w-full h-3/6'
              src={Constant.illustration2}
              alt='image' />
            <div className='h-4/6 w-40 rounded-xl bg-gradient-to-t
            from-amber-500 to-amber-400 hidden md:block'/>
          </div>

          <div className='hidden md:flex md:flex-col justify-end md:col-span-1'>
            <Image
              className='w-full object-cover rounded-xl'
              src={Constant.illustration3}
              alt='image' />
            <div className='h-20 w-full rounded-xl bg-gradient-to-l
            from-cyan-900 to-cyan-700 mt-4 lg:mt-6'/>
          </div>
        </div>

        <div id='lawan!' className='w-full py-6 px-6 2xl:px-12 lg:py-12'>
          <p className='w-full px-4 block text-center text-white md:text-lg xl:text-xl
            bg-gradient-to-t from-cyan-900 to-cyan-700 py-4 rounded-xl'>
            Didedikasikan untuk masyarakat Kota Batam
            <span className='flex justify-center'>{" yang berperang dalam kesejahteraanfisik dan psikis "}</span>
            <span className='block mt-4 font-semibold'>{" Tertanda Lawan!"}</span>
          </p>
        </div>
      </section>

      <section className='relative bg-white flex justify-center
        xl:justify-around px-6 md:space-x-6 py-12 lg:py-24'>
        <Image
          className='object-cover rounded-xl'
          src={Constant.illustration4}
          alt='image' />

        <div className='flex flex-col items-start lg:items-center lg:justify-center px-4'>
          <p className='text-start lg:text-center normal_heading_3'>
            Tidak ada yang lebih
            <span className='text-red-500'>{" berbahaya "}</span>daripada
            <span className='text-red-500'>{" kekerasan "}</span>
            yang dilakukan oleh orang-orang
            <span className='text-red-500'>{" bermaksud buruk "}</span>
            yang untuk tujuan yang menguntungkan
          </p>
          <Link href="/edukasi" className='rounded-lg mt-6'>
            <Button className='w-9/12 md:w-fit truncate hover:bg-amber-500 hover:text-white
              px-12 text-xl font-medium max-w-xs space-x-1 button_amber'>
              Pelajari
            </Button>
          </Link>
        </div>

        <div className='hidden lg:block'>
          <Image
            className='object-cover rounded-xl h-3/5'
            src={Constant.illustration5}
            alt='image' />
        </div>
      </section>

      <section className='relative bg-white py-12 px-6'>
        <CardImage
          className='flex flex-wrap justify-center'
          itemClassName='sm:max-w-sm flex flex-col items-center
          mb-6 mx-3 p-8 rounded-xl border_amber'
          imageClassName='mb-6'
          textClassName='flex flex-col items-center text-center space-y-4'
          imageList={Constant.objectiveList} />

        <div className='flex flex-col md:flex-row md:space-x-4 xl:space-x-8
        bg-white md:bg-cyan-900 md:rounded-xl
          md:items-center md:justify-center my-12 lg:my-24'>
          <Image
            className='w-full md:1/2 xl:max-w-3xl object-cover rounded-xl
            md:rounded-tr-none md:rounded-br-none'
            src={Constant.illustration6}
            alt='images'
          />

          <div className='w-full md:1/2 flex flex-col items-center md:items-start space-y-4 py-6
            md:text-white'>
            <p className='max-w-sm md:max-w-md lg:max-w-lg font-medium text-lg md:text-xl lg:text-2xl'>
              {`" Kekerasan bagaikan rumput liar yang tidak akan mati dimusim kemarau "`}
            </p>

            <DialogCaseCreate
              className=''
              forceMsgBox>
              <Button className='hover:bg-amber-500 hover:text-white
               px-12 text-xl font-medium button_amber'>
                Laporakan Sekarang
              </Button>
            </DialogCaseCreate>
          </div>
        </div>
      </section>

      <section className="relative grow bg-white pb-24 px-12 md:px-24 lg:px-36 2xl:px-56">
        <ListReportingFlow />
      </section>

      <section className='relative bg-white'>
        <LawanCrossText />

        <div className='flex flex-col lg:flex-row items-center lg:justify-center
          px-6 md:px-12 lg:px-24'>
          <Image
            src={Constant.mockupIllustration}
            alt="images" />
          <div className='mt-6 lg: ml-6 '>
            <h2 className='font-bold text-xl md:text-2xl lg:text-3xl text-center lg:text-left'>
              Ayo Lawan Kekerasan di Kota Batam
              <span className='block font-normal text-lg lg:text-xl xl:text-2xl'>Download Aplikasinya sekarang</span>
            </h2>
            <LinksImage
              className='mt-4 flex justify-center lg:justify-start'
              itemsClassName='group'
              imageClassName='group-hover:scale-95 duration-500'
              linkList={Constant.downloadLinks} />
          </div>
        </div>
      </section>
    </main>
  )
}
