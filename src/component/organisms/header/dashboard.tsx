import Image from "next/image";
import { PngLogo } from 'src/component/static-file/logo'

export function HeaderDashboard() {
  return (
    <div className='flex items-center justify-between px-12 py-2 bg_blue'>
      <a href="/">
        <Image
          className="w-10 lg:w-12"
          src={PngLogo.largeWhite}
          alt="Logo" />
      </a>
    </div>
  )
}