import { useSelector } from 'react-redux';

import Counter from './Counter';
import InputColor from './InputColor';

function App() {
  const color = useSelector((store) => store.color);
  
  return (
    <div>
      <h3 style={{ color: color }}>App</h3>
      <Counter />
      <hr />
      <InputColor />
    </div>
  );
}

export default App;
