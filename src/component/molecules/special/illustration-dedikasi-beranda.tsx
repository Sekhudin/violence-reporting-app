import React from "react";
import Image from "next/image";
import { Illus } from 'src/component/static-file/illustration';
import { cn } from "src/util";

const ShortBlock = ({ className }: { className?: string }) => (
  <div className={cn('h-20 w-full rounded-xl bg-gradient-to-l', className)} />);

const LongBlock = ({ className }: { className?: string }) => (
  <div className={cn('h-4/6 w-40 rounded-xl bg-gradient-to-t hidden md:block', className)} />);

const TextHoriZontalBlock = ({ className, id }: { className?: string; id?: string }) => (
  <div id='lawan!' className='w-full pt-6 px-6 2xl:px-12 lg:pt-12'>
    <p className='w-full px-4 block text-center text-white md:text-lg xl:text-xl
      bg-gradient-to-t from-cyan-900 to-cyan-700 py-4 rounded-xl'>
      Didedikasikan untuk masyarakat Kota Batam
      <span className='flex justify-center'>
        {" yang berperang dalam kesejahteraanfisik dan psikis "}
      </span>
      <span className='block mt-4 font-semibold'>{" Tertanda Lawan!"}</span>
    </p>
  </div>)


export const IllustrationDedikasiBeranda = ({ className, ...props }: Omit<React.HTMLAttributes<HTMLElement>, 'children'>) => (
  <section className={cn(`relative flex flex-col items-center bg-white pt-12`, className)}>
    <div className='max-w-screen-2xl grid grid-cols-3 md:grid-cols-5 grid-rows-1 gap-4 lg:gap-6 px-6'>
      <div className='md:col-span-1'>
        <ShortBlock className='from-amber-500 to-amber-400' />
        <Image className='w-full object-cover rounded-xl mt-4 lg:mt-6'
          src={Illus.file11}
          alt='image' />
      </div>

      <div className='col-span-2 md:col-span-3 flex items-end space-x-0 md:space-x-4 lg:space-x-6'>
        <LongBlock className='from-cyan-900 to-cyan-700 hidden' />
        <Image className='object-cover rounded-xl w-full h-3/6'
          src={Illus.file06}
          alt='image' />
        <LongBlock className='from-amber-500 to-amber-400 hidden' />
      </div>

      <div className='hidden md:flex md:flex-col justify-end md:col-span-1'>
        <Image className='w-full object-cover rounded-xl'
          src={Illus.file07}
          alt='image' />
        <ShortBlock className='from-cyan-900 to-cyan-700 mt-4 lg:mt-6' />
      </div>
    </div>
    <TextHoriZontalBlock />
  </section>)