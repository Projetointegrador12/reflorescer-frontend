import { Link } from "react-router-dom";
import homeLogo from "../../assets/img/logo-reflorescer.png";
function Navbar2() {
  return (
    <>
      <div className="w-full bg-lime-50 text-lime-800 flex justify-start px-2 py-4">
        <div className="container flex justify-between text-lg">
          <div className="flex justify gap-2">
            <img src={homeLogo} alt="logo-reflorescer.png" className="w-60" />
          </div>
          <div className="flex gap-6">
            <Link to="/login" className="hover:underline font-bold">
              Login
            </Link>
            <Link to="/home" className="hover:underline font-bold text-wrap">
              Home{" "}
            </Link>
            <Link to="/cadastro" className="hover:underline font-bold">
              Cadastrar
            </Link>
            <Link to="/sobre" className="hover:underline font-bold">
              Sobre
            </Link>
            <Link to="/contato" className="hover:underline font-bold">
              Contato
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar2;
