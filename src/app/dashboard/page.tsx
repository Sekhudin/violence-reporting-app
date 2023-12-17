"use client"
import { useEffect } from "react";
import { CardBasic } from "src/component/molecules/card/basic";

export default function Page() {

  return (
    <main className="h-full flex flex-col space-y-2 lg:space-y-4">
      <CardBasic>
        Sekhudin
      </CardBasic>

      <section className="flex space-x-2 lg:space-x-4">
        <CardBasic className="grow">
          Sekhudin
        </CardBasic>

        <CardBasic className="grow">
          Sekhudin
        </CardBasic>

        <CardBasic className="grow">
          Sekhudin
        </CardBasic>
      </section>

      <CardBasic className="grow h-full lg:rounded-b-none">
        Sekhudin
      </CardBasic>
    </main>
  )
}