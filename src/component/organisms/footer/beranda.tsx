import Image from 'next/image';
import { NavigationConfig } from 'src/config/navigation';
import { PlatformConfig } from 'src/config/platform';
import { TooltipAnchor } from 'src/component/molecules/tooltip/achor';
import { PngLogo } from 'src/component/static-file/logo';
import { cn } from 'src/util';

const [beranda, ...navigationList] = NavigationConfig.berandaNavigation;
const { socialMedia, downloadLinks } = PlatformConfig

const FooterLawanIcon = ({ className }: { className?: string }) => (
  <div className={cn('flex justify-start', className)}>
    <div className='w-full 2xl:w-1/2'>
      <Image src={PngLogo.largeWhite} alt="Logo" />
      <p className='mt-2 text_style_label'>Lawan dan laporkan tindak kekerasan</p>
    </div>
  </div>
)

const FooterNaviagtion = ({ className }: { className?: string }) => (
  <div className='flex justify-end md:justify-center'>
    <div className={cn('w-fit flex flex-col space-y-2', className)}>{
      navigationList.map((v, key) => (
        <a key={key}
          className='w-fit hover:underline underline-offset-4 font-semibold text_style_label'
          href={v.href}>{v.title}</a>
      ))}</div>
  </div>
)

const FooterSocialMedia = ({ className }: { className?: string }) => (
  <div className={cn('flex justify-start md:justify-center', className)}>
    <div className='flex flex-col space-y-4'>
      <p className='mb-2 font-semibold'>Kunjungi Kami:</p>
      <ul className='flex flex-wrap'>{socialMedia.map((v, key) => (
        <TooltipAnchor
          key={key}
          className='w-14 h-14 hover:bg-transparent p-0'
          tooltip={v.title}
          href={v.href}>
          <Image src={v.src} alt={v.title} className='object-cover h-full w-full' />
        </TooltipAnchor>
      ))}</ul>
    </div>
  </div>
)

const FooterDownloadLinks = ({ className }: { className?: string }) => (
  <div className={cn('flex justify-end items-end', className)}>
    <div className='flex flex-col'>
      <p className='mb-2 font-semibold'>Download:</p>
      <ul className='flex flex-wrap'>{downloadLinks.map((v, key) => (
        <TooltipAnchor
          key={key}
          className='group hover:bg-transparent p-0'
          tooltip={v.title}
          href={v.href}>
          <Image
            className='w-full h-full object-cover group-hover:scale-95 duration-500'
            src={v.src}
            alt={v.title} />
        </TooltipAnchor>
      ))}</ul>
    </div>
  </div>
)

export function FooterBeranda({ className }: { className?: string }) {
  return (
    <div className={cn(``, className)}>
      <div className='grow'>Sekhduin</div>
      <footer className={cn(`relative text-white bg_blue px-6 py-10
        lg:px-12 lg:py-16 2xl:px-20 2xl:py-24`)}>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 xl:gap-6 pb-10 lg:pb-12'>
          <FooterLawanIcon />
          <FooterNaviagtion />
          <FooterSocialMedia />
          <FooterDownloadLinks />
        </div>
      </footer>
    </div>
  )
}