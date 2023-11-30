import Image from "next/image";
import { FormUserLogin } from "src/component/organisms/form/user/login";
import { AuthorizedContextProvider } from 'src/component/context/authorized.context';
import { Constant } from "./page.constant";

export default function Page() {

  return (
    <AuthorizedContextProvider>
      <main className="relative min-h-screen md:flex md:flex-row-reverse bg-white">
        <section className="h-screen md:w-6/12 flex justify-center md:justify-start px-6 md:px-12">
          <div className="h-full w-full 2xl:w-8/12 flex flex-col space-y-6 items-center">
            <div className="h-1/6 w-10" />
            <Image
              className="object-cover"
              src={Constant.logo}
              alt="illustartion" />
            <h2 className="font-black text-2xl lg:text-3xl">Login Pengelola</h2>
            <FormUserLogin
              forceMsgBox
              className="w-full" />
          </div>
        </section>

        <section className="h-screen md:w-6/12 hidden md:flex md:justify-end md:items-center">
          <Image
            className="object-cover w-full h-full 2xl:w-8/12"
            src={Constant.Illustraion}
            alt="illustartion" />
        </section>
      </main>
    </AuthorizedContextProvider>
  )
}