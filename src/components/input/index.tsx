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
      className='w-full bg-slate-200 my-7 gap-2 items-center justify-between rounded-r-lg p-2'
    >
      <input
        className='bg-slate-100 outline-none w-11/12 my-5 flex-initial gap-2 items-center justify-between rounded-lg p-2'
        type='text'
        placeholder='Procurando algo? '
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button>
        <FiSearch size={24} color='#101b31' />
      </button>
    </form>
  );
}
