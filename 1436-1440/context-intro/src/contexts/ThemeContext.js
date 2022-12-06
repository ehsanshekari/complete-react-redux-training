import React from 'react';

const ThemeContext = React.createContext({
  theme: 'dark',
  onThemeChange: () => {}
});

export const ThemeProvider = ThemeContext.Provider;
export default ThemeContext;