import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./paginas/home/Home";
import Sobre from "./paginas/sobre/Sobre";
import Contato from "./paginas/contato/Contato";
import Login from "./paginas/login/Login";
import Cadastro from "./paginas/cadastro/Cadastro";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh] bg-lime-50">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/sobre" element={<Sobre />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
export default App;
