'use client';

import { FormEvent, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

export function Input() {
  const [input, setInput] = useState('');
  const router = useRouter();

  function handleSearch(event: FormEvent) {
    event.preventDefault();
    if (input === '') return;
    router.push(`/game/search/${input}`);
  }
  return (
    <form
      onSubmit={handleSearch}
      className='w-full bg-slate-900 my-0 gap-2  items-center justify-between rounded-lg p-1 mt-10'
    >
      <input
        className='bg-slate-900 outline-none w-11/12 my-1 flex-center items-center justify-center rounded-lg p-2'
        type='text'
        placeholder='Procurando algo? '
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button>
        <FiSearch size={24} color='#838e9c' />
      </button>
    </form>
  );
}
