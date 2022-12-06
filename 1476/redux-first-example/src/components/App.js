import { useSelector } from 'react-redux';

import Counter from './Counter';
import InputColor from './InputColor';

function App() {
  const selectedColor = useSelector((store) => store.color);

  return (
    <div>
      <h3 style={{ backgroundColor: selectedColor }}>APP</h3>
      <Counter />
      <hr />
      <InputColor />
    </div>
  );
}

export default App;
