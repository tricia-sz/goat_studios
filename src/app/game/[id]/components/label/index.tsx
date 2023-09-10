interface LabelProps {
  name: string;
}
export function Label({ name }: LabelProps) {
  return (
    <div className='flex-grow ms:flex-grow-0 py-1 px-3 bg-slate-700 text-cyan-400 text-center rounded-md hover:font-bold duration-300'>
      {name}
    </div>
  );
}
