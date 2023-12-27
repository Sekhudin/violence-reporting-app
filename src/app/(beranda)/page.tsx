import React from 'react';
import Image from 'next/image';
import { TooltipAnchor } from 'src/component/molecules/tooltip/achor';
import { LawanCrossText } from 'src/component/molecules/special/lawan-cross-text';
import { IllustrationDedikasiBeranda } from 'src/component/molecules/special/illustration-dedikasi-beranda';
import { TextParagraph, AnchorButton, TextSpan } from 'src/component/molecules/special/atoms';
import { AppReportingFlow } from 'src/component/molecules/special/app-reporting-flow';
import { AppObjective } from 'src/component/molecules/special/app-objective';
import { DialogCaseCreate } from 'src/component/organisms/dialog/case/create';
import { Mockup } from 'src/component/static-file/mockup';
import { Illus } from 'src/component/static-file/illustration';
import { PlatformConfig } from 'src/config/platform';
import { cn } from 'src/util';


const FirstSection = ({ className, ...props }: Omit<React.HTMLAttributes<HTMLElement>, 'children'>) => (
  <section className={cn(`sticky top-[60px] lg:top-[70px] flex flex-col
    items-center px-12 md:px-24`, className)} {...props}>
    <h2 className='mt-6 font-semibold text-3xl lg:text-4xl'>Lawan!</h2>
    <TextParagraph className='md:max-w-xl'>
      Membantu membela kesejahteraan korban tindak
      <TextSpan text={" dengan melaporkan "} />
      dengan melaporkan
    </TextParagraph>
    <AnchorButton href='#lawan!' className='button_amber mt-2'>
      Jelajahi!
    </AnchorButton>
  </section>);

const DownloadLink = () => (
  <div className='mt-4 flex justify-center lg:justify-start'>{PlatformConfig.downloadLinks.map((v, key) => (
    <TooltipAnchor key={key}
      className='group hover:bg-transparent p-0'
      tooltip={v.title}
      href={v.href}>
      <Image className='group-hover:scale-95 duration-500'
        src={v.src}
        alt={v.title} />
    </TooltipAnchor>
  ))}</div>)

const DownloadApplication = ({ className }: { className?: string }) => (
  <div className={cn(`flex flex-col lg:flex-row items-center
    lg:justify-center px-6 md:px-12 lg:px-24`, className)}>
    <Image
      src={Mockup.file01}
      alt="images" />
    <div className='mt-6 lg: ml-6 '>
      <h2 className='font-bold text-xl md:text-2xl lg:text-3xl text-center lg:text-left'>
        Ayo Lawan Kekerasan di Kota Batam
        <span className='block font-normal text-lg lg:text-xl xl:text-2xl'>
          Download Aplikasinya sekarang
        </span>
      </h2>
      <DownloadLink />
    </div>
  </div>
)

export default function Page() {
  return (
    <>
      <FirstSection />
      <IllustrationDedikasiBeranda />

      <section className='sticky top-0 bg-white flex justify-center
        xl:justify-around md:space-x-6 py-12 lg:py-24 px-6 2xl:px-12'>
        <Image className='object-cover rounded-xl'
          src={Illus.file08}
          alt='image' />

        <div className='flex flex-col items-start lg:items-center lg:justify-center px-4'>
          <p className='text-start lg:text-center text-lg md:text-2xl'>
            Tidak ada yang lebih
            <span className='text-red-500'>{" berbahaya "}</span>daripada
            <span className='text-red-500'>{" kekerasan "}</span>
            yang dilakukan oleh orang-orang
            <span className='text-red-500'>{" bermaksud buruk "}</span>
            yang untuk tujuan yang menguntungkan
          </p>
          <AnchorButton href='/edukasi'
            className='w-9/12 md:w-fit truncate hover:bg-amber-500 hover:text-white
              px-12 text-xl font-medium max-w-xs space-x-1 mt-2 button_amber'>
            Pelajari
          </AnchorButton>
        </div>

        <div className='hidden lg:block'>
          <Image className='object-cover rounded-xl h-3/5'
            src={Illus.file09}
            alt='image' />
        </div>
      </section>

      <div className='relative flex flex-col items-center bg-white py-12 px-6'>
        <h3 className={'text-center mb-6 semi_heading_2'}>
          Tujuan Aplikasi
        </h3>
        <AppObjective />
      </div>

      <section className='sticky top-[0px] py-12 lg:py-24 bg-white px-6'>
        <div className='flex flex-col md:flex-row md:space-x-4 xl:space-x-8 max-h-96 overflow-y-hidden
          md:rounded-xl md:items-center md:justify-center md:bg-cyan-900'>
          <div className='w-full md:1/2 xl:max-w-3xl rounded-md md:rounded-tr-none md:rounded-br-none overflow-hidden'>
            <Image className='object-cover w-full'
              src={Illus.file10}
              alt='images' />
          </div>

          <div className='w-full md:1/2 flex flex-col items-center md:items-start xl:items-center
            space-y-4 py-6 md:text-white'>
            <p className='max-w-sm md:max-w-md lg:max-w-lg text-center md:text-left font-medium
              text-lg md:text-xl lg:text-2xl pr-4'>
              {`" Kekerasan bagaikan rumput liar yang tidak akan mati dimusim kemarau "`}
            </p>
            <DialogCaseCreate forceMsgBox>
              <AnchorButton asButton className='px-12 text-xl font-medium button_amber'>
                Laporakan Sekarang
              </AnchorButton>
            </DialogCaseCreate>
          </div>
        </div>
      </section>

      <section className='relative h-fit bg-white'>
        <div className='pb-24 px-12 md:px-24 lg:px-36 2xl:px-56'>
          <p className={'text-center mb-6 semi_heading_2'}>
            Alur Pelaporan
          </p>
          <AppReportingFlow />
        </div>
        <LawanCrossText />
        <DownloadApplication />
      </section>
    </>
  )
}
