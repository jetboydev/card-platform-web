import { create } from 'zustand';

type Theme = 'light' | 'dark' | 'system';

interface ThemeState {
  theme: Theme;
  resolvedTheme: 'light' | 'dark';

  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>((set, get) => ({
  theme: 'system',
  resolvedTheme: 'light',

  setTheme: (theme) => {
    const root = window.document.documentElement;

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
      root.classList.remove('light', 'dark');
      root.classList.add(systemTheme);
      set({ theme, resolvedTheme: systemTheme });
    } else {
      root.classList.remove('light', 'dark');
      root.classList.add(theme);
      set({ theme, resolvedTheme: theme });
    }

    localStorage.setItem('theme', theme);
  },

  toggleTheme: () => {
    const { resolvedTheme } = get();
    get().setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
  },
}));
