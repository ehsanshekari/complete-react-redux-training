import { BrowserRouter} from 'react-router-dom';

import Navbar from './components/Navbar';
import Routes from './Routes';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
