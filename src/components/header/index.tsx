import logoImage from 'public/cabrita-logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { BiJoystick } from 'react-icons/bi';
import { BiMoviePlay } from 'react-icons/bi';
import { TbMovie } from 'react-icons/tb';
import { Input } from '../Input';

export function Header() {
  return (
    <header className='w-full h-36  bg-slate-900 text-slate-300 px-2 shadow-lg border-b border-sky-500'>
      <div className='max-w-screen-xl  pt-8 mx-auto flex justify-center items-center h-28 sm:justify-center '>
        <nav className='flex justify-center items-center gap-20 '>
          <Link href='/'>
            <Image
              alt='Logo do Site Cabritas Studios'
              src={logoImage}
              quality={100}
              priority={true}
              className='w-full'
            />
          </Link>
          <div className='flex justify-center'>
            <Link href='/films' className=''>
              Games
            </Link>
            <BiJoystick color='#1abffb' size={28} />
          </div>
          <div className='flex justify-center'>
            <Link href='/films'>Filmes</Link>
            <BiMoviePlay color='#1abffb' size={28} />
          </div>
          <div className='flex justify-center'>
            <Link href='/series'>Séries</Link>
            <TbMovie color='#1abffb' size={28} />
          </div>
        </nav>
      </div>
    </header>
  );
}
