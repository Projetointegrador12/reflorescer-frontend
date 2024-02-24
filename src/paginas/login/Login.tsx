import { ChangeEvent, useContext, useEffect, useState } from 'react';
import './Login.css';

import { Link, useNavigate } from 'react-router-dom';


import { RotatingLines } from 'react-loader-spinner';
import UsuarioLogin from '../../model/UsuarioLogin';
import { AuthContext } from '../../context/AuthContext';
import imagemLogin from "../../assets/img/pexels-greta-hoffman-7728882.jpg";

function Login() {
  const navigate = useNavigate();

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  );

  const { usuario, handleLogin } = useContext(AuthContext);

  const { isLoading } = useContext(AuthContext)

  useEffect(() => {
    if (usuario.token !== "") {
      navigate('/home')
    }
  }, [usuario])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value
    })
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    handleLogin(usuarioLogin)
  }

  return (
    <>
     {/* <!-- component --> */}
<div className="bg-lime-50 flex justify-center items-center h-screen">
    {/* <!-- Left: Image --> */}
<div className="w-1/2 h-screen hidden lg:block">
  <img src={imagemLogin} alt="Placeholder Image" className="object-cover w-full h-full rounded-r-[6rem]"/>
</div>
{/* <!-- Right: Login Form --> */}
<div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
  <h1 className="text-2xl font-semibold mb-4">Entrar</h1>
  <form onSubmit={login}>
    {/* <!-- Username Input --> */}
    <div className="mb-4">
      <label htmlFor="email" className="block text-gray-600">Email</label>
      <input type="text" id="usuario" name="usuario" placeholder="Usuario" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-green-900" autoComplete="off" value={usuarioLogin.usuario} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
    </div>
    {/* <!-- Password Input --> */}
    <div className="mb-4">
      <label htmlFor="password" className="block text-gray-600">Senha</label>
      <input type="password" id="senha" name="senha" placeholder="Senha" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-green-900" autoComplete="off" value={usuarioLogin.senha} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}/>
    </div>
    {/* <!-- Remember Me Checkbox --> */}
    <div className="mb-4 flex items-center">
      <input type="checkbox" id="remember" name="remember" className="text-blue-500"/>
      <label className="text-gray-600 ml-2">Lembrar Informações</label>
    </div>
    {/* <!-- Login Button --> */}
    <button  type='submit' className="rounded bg-green-500 hover:bg-green-900 text-white w-1/2 py-2 flex justify-center">
           {isLoading ? <RotatingLines
            strokeColor="white"
            strokeWidth="5"
            animationDuration="0.75"
            width="24"
            visible={true}
          /> :
            <span>Entrar</span>}
          </button>
  </form>
  {/* <!-- Sign up  Link --> */}
  <p className="text-gray-600 font-semibold rounded-md">
            Ainda não tem uma conta?{' '}
            <Link to="/cadastro" className="text-indigo-800 hover:underline">
              Cadastre-se
            </Link>
          </p>
</div>
</div>
    </>
  );
}

export default Login;