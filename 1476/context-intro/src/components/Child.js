import React, {useContext} from 'react';

import ThemeContext from '../contexts/ThemeContext';

export default function Child() {
  const myThemeContext = useContext(ThemeContext)

  return (
    <div>
      This is Child and you have selected this theme: {myThemeContext.theme}
    </div>
  );
}
