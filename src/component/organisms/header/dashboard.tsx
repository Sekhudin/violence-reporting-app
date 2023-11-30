import Image from "next/image";
import { PngLogo } from 'src/component/static-file/logo'

export function HeaderDashboard() {
  return (
    <div className='flex items-center justify-between px-12 py-2 bg_blue'>
      <a href="/">
        <Image
          src={PngLogo.largeWhite}
          alt="Logo" />
      </a>
    </div>
  )
}