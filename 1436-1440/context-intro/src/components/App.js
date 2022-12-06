import { useState } from 'react';

import ThemeSelector from './ThemeSelector';
import Parent from './Parent';
import { ThemeProvider } from '../contexts/ThemeContext';

function App() {
  const [theme, setTheme] = useState('dark');

  return (
    <div>
      <ThemeProvider
        value={{ theme: theme, onThemeChange: (theme) => setTheme(theme) }}
      >
        <ThemeSelector />
        <hr />
        <Parent/>
      </ThemeProvider>
    </div>
  );
}

export default App;
