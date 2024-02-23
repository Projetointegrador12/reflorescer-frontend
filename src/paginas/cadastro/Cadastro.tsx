import { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Usuario from '../../model/Usuario'
import { cadastrarUsuario } from '../../services/Service'
import './Cadastro.css'

function Cadastro() {

  const navigate = useNavigate()

  const [confirmaSenha, setConfirmaSenha] = useState<string>("")

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nomeUsuario: '',
    usuario: '',
    senha: '',
    foto: ''
  })

  const [usuarioResposta, setUsuarioResposta] = useState<Usuario>({
    id: 0,
    nomeUsuario: '',
    usuario: '',
    senha: '',
    foto: ''
  })

  useEffect(() => {
    if (usuarioResposta.id !== 0) {
      back()
    }
  }, [usuarioResposta])

  function back() {
    navigate('/login')
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value)
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }

  async function cadastrarNovoUsuario(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {

      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuarioResposta)
        alert('Usuário cadastrado com sucesso')

      } catch (error) {
        alert('Erro ao cadastrar o Usuário')
      }

    } else {
      alert('Dados inconsistentes. Verifique as informações de cadastro.')
      setUsuario({ ...usuario, senha: "" }) // Reinicia o campo de Senha
      setConfirmaSenha("")                  // Reinicia o campo de Confirmar Senha
    }
  }

  return (
    <>
     {/* <!-- component -->
<!-- Create by joker banny --> */}
<div className="h-screen bg-indigo-100 flex justify-center items-center">
	<div className="lg:w-2/5 md:w-1/2 w-2/3">
		<form className ="bg-white p-10 rounded-lg shadow-lg min-w-full" onSubmit={cadastrarNovoUsuario}>
			<h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">Cadastrar</h1>
			<div>
				<label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="username">Nome Completo</label>
				<input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="nomeUsuario" id="nomeUsuario" placeholder="Nome" value={usuario.nomeUsuario} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
      </div>
				<div>
					<label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="email">Email</label>
					<input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="usuario" id="usuario" placeholder="Usuario" value={usuario.usuario} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
      </div>
      <div>
					<label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="foto">Foto</label>
					<input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="foto" id="foto" placeholder="Foto" value={usuario.foto} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
      </div>
					<div>
						<label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="password">Senha</label>
						<input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="senha" id="senha" placeholder="Senha" value={usuario.senha} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}/>
      </div>
						<div>
							<label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="confirm">Confirmar Senha</label>
							<input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="confirmarSenha" id="confirmarSenha" placeholder="Confirmar Senha" value={confirmaSenha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}/>
      </div>
							<button type="submit" className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans">Cadastrar</button>
							<button type="submit" className="w-full mt-6 mb-3 bg-indigo-100 rounded-lg px-4 py-2 text-lg text-gray-800 tracking-wide font-semibold font-sans" onClick={back} >Cancelar</button>
		</form>
	</div>
</div>
    </>
  )
}

export default Cadastro