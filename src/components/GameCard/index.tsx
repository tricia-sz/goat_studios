import Link from 'next/link';
import { BiRightArrowCircle } from 'react-icons/bi';
import { GameProps } from '@/utils/types/game';
import Image from 'next/image';

interface GameCardProps {
  data: GameProps;
}
export function GameCard({ data }: GameCardProps) {
  return (
    <Link href={`/game/${data.id}`}>
      <section className='w-full bg-slate-900 border border-slate-700 rounded-lg p-4 mb-5 shadow-lg shadow-slate-600/10'>
        <div className='relative w-full h-56 hover:scale-105 transition-all duration-300'>
          <Image
            className='rouded-lg object-cover'
            src={data.image_url}
            alt={data.title}
            quality={100}
            fill={true}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 44vw'
            style={{ borderRadius: '2%' }}
          />
        </div>
        <div className='flex items-center mt-4 justify-between'>
          <p className='text-sm font-bold px-2 text-sky-100 text-ellipsis truncate whitespace-nowrap overflow-hidden'>
            {data.title}
          </p>
          <BiRightArrowCircle size={24} color='#cfeaff' />
        </div>
      </section>
    </Link>
  );
}
