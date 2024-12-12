import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';
import { CabritaLogoFooter } from './components/CabritaLogoFooter';

export function Footer() {
  return (
    <div>
      <div className='flex justify-center '>
        <CabritaLogoFooter />
      </div>
      <footer className='w-full h-36 bg-slate-900  text-slate-500 shadow-lg shadow-blue-600'>
      <div className='max-w-screen-xl  pt-8 mx-auto flex  justify-center items-center  h-28 sm:justify-center'>
        <AiFillGithub color='#838e9c' size={40} />
        <Link href='/'> By: Trícia Souza © 2023 </Link>
      </div>
    </footer>
    </div>
  );
}



