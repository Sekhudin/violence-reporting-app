import { Frown } from 'lucide-react'
import { Button } from 'src/component/ui/button';

export default function NotFound() {
  return (
    <main className="h-screen w-screen overflow-hidden flex flex-col justify-center items-center">
      <div className="flex flex-col items-center">
        <h1 className='text-lg lg:text-2xl font-semibold text-cyan-800'>Not Found</h1>
        <p>Could not find requested resource</p>
      </div>

      <Frown className='w-32 h-32 hidden sm:block stroke-cyan-800/30 mt-4' />

      <a href="/" className='mt-4'>
        <Button variant="blue" className='h-fit font-light'>
          Return Home
        </Button>
      </a>
    </main>
  )
}