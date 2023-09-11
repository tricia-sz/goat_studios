import logoImage from 'public/cabrita-logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { BiJoystick, BiUser } from 'react-icons/bi';
import { BiMoviePlay } from 'react-icons/bi';
import { TbMovie } from 'react-icons/tb';
import { Input } from '../Input';

export function Header() {
  return (
    <header className='w-full h-36 pt-2  bg-slate-900 text-slate-400 px-2 border-b  border-sky-400 shadow-lg'>
      <div className='max-w-screen-xl  pt-8 mx-auto flex justify-center items-center h-28 sm:justify-center '>
        <nav className='flex justify-center items-center gap-20 '>
          <Link href='/'>
            <Image
              alt='Logo do Site Cabritas Studios'
              src={logoImage}
              quality={100}
              priority={true}
              width={65}
              height={65}
              className='w-full'
            />
          </Link>
          <div className='flex justify-center'>
            <Link href='/films' className=''>
              Games
            </Link>
            <BiJoystick color='#838e9c' size={28} />
          </div>
          <div className='flex justify-center'>
            <Link href='/films'>Filmes</Link>
            <BiMoviePlay color='#838e9c' size={28} />
          </div>
          <div className='flex justify-center'>
            <Link href='/series'>Séries</Link>
            <TbMovie color='#838e9c' size={28} />
          </div>
          <div className='flex justify-center'>
            <Link href='/profile'>Perfil</Link>
            <BiUser color='#838e9c' size={28} />
          </div>
        </nav>
      </div>
    </header>
  );
}
