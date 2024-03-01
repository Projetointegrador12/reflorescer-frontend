import { Link, useNavigate } from "react-router-dom";
import homeLogo from "../../assets/img/logo-reflorescer.png"
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

function Navbar() {
  const navigate = useNavigate()

  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {
    handleLogout()
    alert('Usuário deslogado com sucesso')
    navigate('/login')
  }

  return (
    <>
      <div className="w-full bg-lime-50 text-lime-800 flex justify-start px-2 py-4">
        <div className="container flex justify-between text-lg">
          <div className="flex justify gap-2">
            <img src={homeLogo} alt="logo-reflorescer.png" className='w-60' />
          </div>
          <div className="flex gap-6">
            <Link to="/login" className="hover:underline font-bold">
              Login
            </Link>
            <Link to='/home' className='hover:underline font-bold'>Home
            </Link>
            <Link to="/sobre" className="hover:underline font-bold">
              Sobre
            </Link>
            <Link to="/contato" className="hover:underline font-bold">
              Contato
            </Link>
            <Link to="/cadastroCategoria" className="hoover:underline font-bold">
              Categoria
            </Link>
            <Link to='' onClick={logout} className='hover:underline'>Sair</Link>


          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;