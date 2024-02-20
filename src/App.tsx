import './App.css';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './paginas/home/Home';

function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              {/* <Route path="/contato" element={<Contato />} />
              <Route path="/sobre" element={<Sobre />} /> */}
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  );
}
export default App;