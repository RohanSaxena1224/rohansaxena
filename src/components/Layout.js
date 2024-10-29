import { useTheme } from '../context/ThemeContext';

export default function Layout({ children }) {
  const { isDark, setIsDark } = useTheme();

  return (
    <div>
      <button 
        className="theme-toggle"
        onClick={() => setIsDark(!isDark)}
      >
        {isDark ? 'light' : 'dark'}
      </button>
      {children}
    </div>
  );
} 