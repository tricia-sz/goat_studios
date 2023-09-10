import { Container } from '@/components/container';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import { Label } from './components/label';
import { GameProps } from '@/utils/types/game';
import { GameCard } from '@/components/gameCard';

async function getData(id: string) {
  // https://sujeitoprogramador.com/next-api/?api=game&id=15
  try {
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game&id=${id}`,
      { next: { revalidate: 60 } }
    );
    return res.json();
  } catch (err) {
    throw new Error('Falied to fetch data');
  }
}

async function getGameSorted() {
  try {
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game_day`,
      { cache: 'no-store' } //rota que busca games aleatorios
    );
    return res.json();
  } catch (err) {
    throw new Error('Falied to fetch data');
  }
}

export default async function GameDetails({
  params: { id },
}: {
  params: { id: string };
}) {
  const data: GameProps = await getData(id);
  const sortedGame: GameProps = await getGameSorted();

  if (!data) {
    redirect('/');
  }

  return (
    <main className='w-full text-black'>
      <div className='bg-black h-80 sm:h-96 w-full relative'>
        <Image
          className='object-cover w-full h-80 sm:h-96 opacity-90'
          src={data.image_url}
          alt={data.title}
          priority={true}
          quality={100}
          fill={true}
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 44vw'
        />
      </div>

      <Container>
        <h1 className='font-bold text-xl text-white my-4'>{data.title}</h1>
        <p className='font-bold text-lg mt-7 mb-2 text-white my-4'>
          {data.description}
        </p>

        <h2 className='font-bold text-lg mt-7 mb-2 text-white'>Plataforma</h2>
        <div className='flex gap-2 flex-wrap text-white'>
          {data.platforms.map((item: any) => (
            <Label name={item} key={item} />
          ))}
        </div>

        <h2 className='font-bold text-lg mt-7 mb-2 text-white'>Categorias</h2>
        <div className='flex gap-2 flex-wrap text-white'>
          {data.categories.map((item: any) => (
            <Label name={item} key={item} />
          ))}
        </div>
        <h2 className='font-bold text-lg mt-7 mb-2 text-white'>
          Jogo recomendado
        </h2>
        <div className='flex'>
          <div className='flex-grow'>
            <GameCard data={sortedGame} />
          </div>
        </div>
      </Container>
    </main>
  );
}
