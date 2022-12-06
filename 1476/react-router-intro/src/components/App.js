import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './Home';
import About from './About';
import Profile from './Profile';
import NotFound from './NotFound';
import Navbar from './Navbar';

function App() {
  return (
    <div>
      <BrowserRouter>
         <Navbar />
         <Routes>
          <Route path="/" element={<Home name="Ehsan"/>}/>
          <Route path="/about" element={<About />}/>
          <Route path="/profile/:userId" element={<Profile />}/>
          <Route path="*" element={<NotFound />}/>
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
