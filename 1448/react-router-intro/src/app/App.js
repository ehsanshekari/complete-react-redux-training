import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="container mt-3">
      <BrowserRouter>
        <Navbar />
        <Routes />
      </BrowserRouter>
    </div>
  );
};

export default App;
