import { Container } from '@/components/Container';
import { GameProps } from '@/utils/types/game';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRightCircle } from 'react-icons/bs';
import { Input } from '@/components/Input';
import { GameCard } from '@/components/GameCard';

async function getCabritasStudios() {
  try {
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game_day`,
      { next: { revalidate: 320 } }
    );

    return res.json();
  } catch (err) {
    throw new Error('Failed to fetch data');
  }
}
async function getCabritasStudiosData() {
  try {
    const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=games`, {
      next: { revalidate: 320 },
    });

    return res.json();
  } catch (err) {
    throw new Error('Failed to fetch data');
  }
}

export default async function Home() {
  const cabritaStudio: GameProps = await getCabritasStudios();
  const data: GameProps = await getCabritasStudiosData();
  return (
    <main className='w-full'>
      <Container>
        <Input />
        <h1 className='text-left font-bold text-3xl mt-20 mb-10 text-slate-400'></h1>
        <Link href={`/game/${cabritaStudio.id}`}>
          <section className='w-full  rounded-lgborder-indigo-500/100'>
            <div className='w-full max-h-96 h-96 relative rounded-lg '>
              <div className='absolute justify-center items-center gap-2 z-20 bottom-0 p-4 '>
                <p className='font-bold text-xl text-slate-300 flex gap-2'>
                  {cabritaStudio.title}
                  <BsArrowRightCircle size={24} color='#e3f0ff' />
                </p>
              </div>
              <Image
                src={cabritaStudio.image_url}
                alt={cabritaStudio.title}
                priority={true}
                quality={100}
                fill={true}
                className='max-h-96 object-cover rounded-lg hover:opacity-100 transition-all duration-300 box shadow-lg shadow-sky-700/50 '
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 44vw'
              />
            </div>
          </section>
        </Link>

        <h2 className='text-left font-bold text-4xl mt-20 mb-20  text-slate-900'>
          Os Mais Jogados da Semana
        </h2>
        <section className='bg-slate-950 grid gap-7 ms:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {data.map((item) => (
            <GameCard key={item.id} data={item} />
          ))}
        </section>
        <h2 className='mt-40 mb-40'></h2>
      </Container>
    </main>
  );
}
