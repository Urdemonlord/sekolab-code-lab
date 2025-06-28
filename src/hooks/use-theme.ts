import { useContext } from 'react';
import { ThemeProviderContext } from '@/components/theme-provider';

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return context;
};

// Enhanced theme toggle hook dengan animasi
export const useThemeToggle = () => {
  const { theme, setTheme, isDark } = useTheme();
  
  const toggleTheme = () => {
    if (theme === 'system') {
      setTheme(isDark ? 'light' : 'dark');
    } else {
      setTheme(theme === 'dark' ? 'light' : 'dark');
    }
  };
  
  const cycleTheme = () => {
    const themes = ['light', 'dark', 'system'] as const;
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };
  
  return {
    theme,
    isDark,
    toggleTheme,
    cycleTheme,
    setTheme,
  };
};
