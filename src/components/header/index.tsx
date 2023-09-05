import logoImage from 'public/logocabrita.png';
import Image from 'next/image';
import Link from 'next/link';
import { GiGoat } from 'react-icons/gi';

export function Header() {
  return (
    <header className='w-full h-28 bg-slate-800 text-white px-2'>
      <div className='max-w-screen-xl mx-auto flex justify-center items-center h-28 sm:justify-between'>
        <nav className='flex justify-center items-center gap-6'>
          <Link href='/'>
            <Image
              alt='Logo do Site Cabritas Studios'
              src={logoImage}
              quality={100}
              priority={true}
              className='w-full'
              // size={34}
            />
          </Link>
          <Link href='/films'>Filmes</Link>
          <Link href='/series'>Séries</Link>
          <Link href='/profile'>Perfil</Link>
        </nav>
        <div className='hidden sm:flex justify-center items-center'>
          <Link href={'/profile'}>
            <GiGoat color='#f1f1f1' size={28} />
          </Link>
        </div>
      </div>
    </header>
  );
}
