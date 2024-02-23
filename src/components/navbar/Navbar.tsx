import { Link } from "react-router-dom";
import homeLogo from "../../assets/img/planta-removebg-preview.png"
function Navbar() {
  return (
    <>
      <div className="w-full bg-green-500 text-white flex justify-center py-4">
        <div className="container flex justify-between text-lg">
          <div className="flex justify gap-2">
            <div className="text-4xl font-mono uppercase">Reflorescer</div>
            <img src={homeLogo} alt="muda.png" className='w-9' />
          </div>
          <div className="flex gap-4">
            <Link to="/login" className="hover:underline">
              Login
            </Link>
            <Link to='/home' className='hover:underline'>Home </Link>
            <Link to="/cadastro" className="hover:underline">
              Cadastrar
            </Link>
            <Link to="/sobre" className="hover:underline">
              Sobre
            </Link>
            <Link to="/contato" className="hover:underline">
              Contato
            </Link>

          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;