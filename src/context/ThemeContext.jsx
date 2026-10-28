import { useEffect, useState } from 'react';
import ThemeContext from './themeContext.js';

function getInitialTheme() {
  try {
    const savedTheme = localStorage.getItem('energetics-theme');
    if (savedTheme === 'dark' || savedTheme === 'light') return savedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  } catch {
    return 'light';
  }
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem('energetics-theme', theme);
    } catch {
      // The active theme still works if browser storage is unavailable.
    }
  }, [theme]);

  const toggleTheme = () => setTheme((current) => current === 'light' ? 'dark' : 'light');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
