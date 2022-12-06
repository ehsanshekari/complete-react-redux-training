import {useContext} from 'react';

import ThemeContext from '../contexts/ThemeContext';

function Child() {
  const themeContext = useContext(ThemeContext);

  return (
    <div>
      This is Child: {themeContext.theme}
    </div>
  );
}

export default Child;
