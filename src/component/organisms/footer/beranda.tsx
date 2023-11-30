import Image from 'next/image';
import { LinksImage } from 'src/component/molecules/links/image';
import { LinksText } from 'src/component/molecules/links/text';
import { Constant } from './beranda.constant';

export function FooterBeranda() {
  return (
    <footer className='bg_blue'>
      <div className='grid grid-cols-2 md:grid-cols-4 grid-rows-2 md:grid-rows-1 gap-x-3 gap-y-5 p-12'>
        <div className='text-white'>
          <Image
            src={Constant.logo}
            alt="Logo" />
          <p className='mt-2 text_style_label'>Lawan dan laporkan tindak kekerasan</p>
        </div>

        <div className='text-white flex justify-end md:justify-center'>
          <div>
            <LinksText
              className='flex flex-col space-y-4'
              itemsClassName='hover:underline underline-offset-4 font-semibold text_style_label'
              linkList={Constant.navigationList} />
          </div>
        </div>

        <div className='text-white flex justify-start md:justify-center'>
          <div>
            <p className='mb-2 font-semibold'>Kunjungi Kami:</p>
            <LinksImage
              className='grid grid-cols-2 md:grid-cols-4'
              linkList={Constant.socialMedia} />
          </div>
        </div>

        <div className='text-white flex justify-end'>
          <div>
            <p className='mb-2 font-semibold'>Download:</p>
            <LinksImage
              className='flex'
              itemsClassName='group'
              imageClassName='group-hover:scale-95 duration-500'
              linkList={Constant.downloadLinks} />
          </div>
        </div>
      </div>
    </footer>
  )
}