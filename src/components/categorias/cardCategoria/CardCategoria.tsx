import { Link } from 'react-router-dom'
import Categoria from '../../../model/Categoria';

interface CardCategoriaProps {
  categoria: Categoria
}

function CardCategoria({categoria}: CardCategoriaProps) {
  return (
    <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
      <header className='py-2 px-6 bg-yellow-300 text-white font-bold text-2xl'>{categoria.nomeCategoria}</header>
      <p className='p-8 text-3xl bg-green-100 h-full'>{categoria.descricaoCategoria}</p>
      <div className="flex">
        <Link to={`/editarCategoria/${categoria.id}`} className='w-full text-slate-100  bg-yellow-500  hover:bg-yellow-600 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarCategoria/${categoria.id}`} className='text-slate-100 bg-yellow-700 hover:bg-yellow-900 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardCategoria;