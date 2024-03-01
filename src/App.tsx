import './App.css';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './paginas/home/Home';
import Sobre from './paginas/sobre/Sobre'
import Contato from './paginas/contato/Contato'
import Login from './paginas/login/Login';
import Cadastro from './paginas/cadastro/Cadastro';
import { AuthProvider } from './context/AuthContext';
import ListaCategoria from './components/categorias/listaCategoria/ListaCategoria';
import FormularioCategoria from './components/categorias/formularioCategoria/FormularioCategoria';
import DeletarCategoria from './components/categorias/deletaCategoria/DeletaCategoria';

function App() {
  return (
    <>
    <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/categorias" element={<ListaCategoria />} />
              <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
              <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
              <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
export default App;