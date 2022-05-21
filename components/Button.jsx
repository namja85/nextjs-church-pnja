import cn from 'classnames';

export default function Button({ outlined, children }) {
  return (
    <button
      className={cn(
        'flex flex-row items-center space-x-1 border-2 border-sky-500 rounded-lg px-6 py-2 font-bold',
        {
          'bg-sky-500 text-white hover:bg-sky-400': !outlined,
          'text-sky-500 hover:border-sky-400 hover:text-sky-400': outlined,
        },
      )}
    >
      {children}
    </button>
  );
}
