import { GameCard } from '@/components/GameCard';
import { Input } from '@/components/Input';
import { Container } from '@/components/container';
import { GameProps } from '@/utils/types/game';

async function getData(title: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game&title=${title}`
    );

    return res.json();
  } catch (err) {
    return null;
  }
}
export default async function Search({
  params: { title },
}: {
  params: { title: string };
}) {
  const games: GameProps[] = await getData(title);

  return (
    <main className='w-full text-slate-600'>
      <Container>
        <Input />
        <h1 className='font-bold text-2xl mt-8 mb-8'>
          Resultado da busca:
          {!games && (
            <p className='font-bold text-3xl mt-8 mb-5  text-sky-400'>
              Desculpe, não foi localizar este game...
            </p>
          )}
          <section className='grid gap-7 ms:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {games &&
              games.map((item) => <GameCard key={item.id} data={item} />)}
          </section>
        </h1>
      </Container>
    </main>
  );
}
