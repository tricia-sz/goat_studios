import { Logo } from './MainNavigation/Logo';
import { NavItem } from './MainNavigation/NavItem';
import { Clapperboard, Gamepad, Popcorn, User, UserPlus } from 'lucide-react';

export function Header() {
  return (
    <header className='w-full bg-slate-900 flex justify-center items-stretch gap-20 pt-10 pb-8 text-bold'>
        <Logo />
      <nav className='max-w-screen-xl gap-4 text-xl flex justify-center items-center '>
        <NavItem title='Games' icon={Gamepad}  />
        <NavItem title='Filmes' icon={Popcorn} />
        <NavItem title='Séries' icon={Clapperboard} />
        <NavItem title='Perfil' icon={User} />
        </nav>
    </header>
  );
}
