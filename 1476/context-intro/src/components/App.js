import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

import ThemeSelector from './ThemeSelector';
import Parent from './Parent';
import { ThemeProvider } from '../contexts/ThemeContext';

const App = () => {
  const [theme, setTheme] = useState('dark');

  return (
    <div className="container mt-3">
      <ThemeProvider value={{theme: theme, onThemeChange: (t) => setTheme(t)}}>
        <ThemeSelector />
        <hr />
        <Parent />
      </ThemeProvider>
    </div>
  );
};

export default App;
