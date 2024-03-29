import { Link } from 'react-router-dom'
import Produto from '../../../model/Produto'

interface CardProdutoProps {
  post: Produto
}

function CardProduto({post}: CardProdutoProps) {
  return (
    <div className='border-slate-900 border flex flex-col rounded overflow-hidden justify-between'>
      <div>
        <div className="flex w-full bg-amber-200 py-2 px-4 items-center gap-4">
          <img src={post.foto} className='h-12 rounded-full' alt="" />
          <h3 className='text-lg text-amber-950 font-bold text-center uppercase '>{post.nome}</h3>
        </div>
        <div className='p-4 '>
          <p>{post.descricao}</p>
          <br></br>
          <h4 className='flex w-full bg-amber-200 py-2 px-4 items-center gap-4 text-lg font-semibold '>Categoria: {post.categoria?.nomeCategoria}</h4>
        </div>
      </div>
      <div className="flex">
      <Link to={`/editarProduto/${post.id}`} className='w-full text-white  bg-yellow-500  hover:bg-yellow-600 after: flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarProduto/${post.id}`} className='text-white  bg-yellow-700 hover:bg-yellow-900 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardProduto