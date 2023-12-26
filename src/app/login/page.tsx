import Image from "next/image";
import { ModalDemo } from 'src/component/molecules/special/modal-demo';
import { FormUserLogin } from "src/component/organisms/form/user/login";
import { AuthProvider } from 'src/component/context/provider';
import { PngLogo } from "src/component/static-file/logo";
import { Police } from "src/component/static-file/police";

export default function Page() {

  return (
    <AuthProvider>
      <ModalDemo />
      <main className="relative min-h-screen md:flex md:flex-row-reverse bg-white">
        <section className="h-screen md:w-6/12 flex justify-center md:justify-start px-4 md:px-10">
          <div className="h-full w-full 2xl:w-8/12 flex flex-col space-y-6 items-center">
            <div className="h-1/6 w-10" />
            <Image
              className="object-cover"
              src={PngLogo.large}
              alt="illustartion"
              placeholder="blur"
              blurDataURL={PngLogo.large.src}
              priority={true} />
            <h2 className="font-black text-2xl lg:text-3xl">Login Pengelola</h2>
            <FormUserLogin
              className="w-full p-2"
              submitClassName="mt-4"
              forceMsgBox />
          </div>
        </section>

        <section className="h-screen md:w-6/12 hidden md:flex md:justify-end md:items-center">
          <Image
            className="object-cover w-full h-full 2xl:w-8/12"
            src={Police.file01}
            alt="illustartion"
            placeholder="blur"
            blurDataURL={Police.file01.src}
            priority={true} />
        </section>
      </main>
    </AuthProvider>
  )
}