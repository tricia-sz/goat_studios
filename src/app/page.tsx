import { Container } from '@/components/container';
import { GameProps } from '@/utils/types/game';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRightCircle } from 'react-icons/bs';
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

export default async function Home() {
  const cabritaStudio: GameProps = await getCabritasStudios();
  console.log(cabritaStudio);

  return (
    <main className='w-full'>
      <Container>
        <h1 className='text-center font-bold text-xl mt-8 mb-5'>
          Recomendações da semana Cabrita's Games
        </h1>
        <Link href={`/game/${cabritaStudio.id}`}>
          <section className='w-full bg-black rounded-lg'>
            <div className='w-full max-h-96 h-96 relative rounded-lg '>
              <div className='absolute flex justify-center items-center gap-2 z-20 bottom-0 p-3 '>
                <p className='font-bold text-xl text-white'>
                  {cabritaStudio.title}
                  <BsArrowRightCircle size={24} color='#ffffff' />
                </p>
              </div>
              <Image
                src={cabritaStudio.image_url}
                alt={cabritaStudio.title}
                priority={true}
                quality={100}
                fill={true}
                className='max-h-96 object-cover rounded-lg opacity-50 hover:opacity-100 transition-all duration-300'
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 44vw'
              />
            </div>
          </section>
        </Link>
      </Container>
    </main>
  );
}
