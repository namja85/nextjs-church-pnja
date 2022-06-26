import { useState, useEffect } from 'react';

export default function useDarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!localStorage.theme &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      setThemeMode('dark');
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setThemeMode('light');
      setDarkMode(false);
    }
  }, []);

  const getThemeMode = () => localStorage.getItem('theme');
  const setThemeMode = (mode) => localStorage.setItem('theme', mode);

  const toggleDarkMode = () => {
    const theme = getThemeMode();
    if (theme === 'dark') {
      setThemeMode('light');
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else {
      setThemeMode('dark');
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  };

  return [darkMode, toggleDarkMode];
}
