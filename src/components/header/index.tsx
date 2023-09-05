import logoImage from 'public/cabrita-logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { GiGoat } from 'react-icons/gi';
import { Input } from '@/components/input/';

export function Header() {
  return (
    <header className='w-full h-36  bg-slate-900 text-cyan-100 px-2'>
      <div className='max-w-screen-xl  pt-8 mx-auto flex justify-center items-center h-28 sm:justify-between'>
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
          <Link href='/films'>Games</Link>
          <Link href='/films'>Filmes</Link>
          <Link href='/series'>Séries</Link>
          <Link href='/profile'>Perfil</Link>
          {/* <Input /> */}
        </nav>
        <div className='hidden sm:flex justify-center items-center'>
          <Link href={'/profile'}>
            <GiGoat color='#fff' size={28} />
          </Link>
        </div>
      </div>
    </header>
  );
}
