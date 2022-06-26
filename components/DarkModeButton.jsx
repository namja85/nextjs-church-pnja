import DarkIcon from './DarkIcon';
import LightIcon from './LightIcon';

export default function DarkModeButton({ darkMode, toggleDarkMode }) {
  return (
    <div
      className="flex items-center w-16 h-9 cursor-pointer ring ring-amber-500 dark:ring-sky-500 p-2 rounded-full dark:bg-sky-500/10"
      onClick={toggleDarkMode}
    >
      <span className="flex-none dark:flex-1 transition-all"></span>
      <button className={`${darkMode ? 'text-sky-400' : 'text-amber-400'}`}>
        {darkMode ? <DarkIcon /> : <LightIcon />}
      </button>
    </div>
  );
}
