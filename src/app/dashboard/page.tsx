import { PlainCard } from 'src/component/molecules/special/plain-card';

export default function Page() {

  return (
    <section className="h-full flex flex-col space-y-2 lg:space-y-4">
      <PlainCard>
        -
      </PlainCard>

      <section className="flex space-x-2 lg:space-x-4">
        <PlainCard className="grow">
          -
        </PlainCard>

        <PlainCard className="grow">
          -
        </PlainCard>

        <PlainCard className="grow">
          -
        </PlainCard>
      </section>

      <PlainCard className="grow h-full lg:rounded-b-none">
        -
      </PlainCard>
    </section>
  )
}