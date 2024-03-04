import { Link } from 'react-router-dom'
import Categoria from '../../../model/Categoria';

interface CardCategoriaProps {
  categoria: Categoria
}
function CardCategoria({ categoria }: CardCategoriaProps) {

  return (
    <div className='border flex flex-col rounded-2xl overflow-hidden justify-between mx-0'>
      <header className='flex justify-center py-2 px-6 bg-amber-200 text-amber-900 font-bold text-2xl mx-0'>{categoria.nomeCategoria}</header>
      <div className="flex">
        <Link to={`/editarCategoria/${categoria.id}`} className='w-full text-slate-100  bg-yellow-500  hover:bg-yellow-600 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarCategoria/${categoria.id}`} className='text-slate-100 bg-yellow-800 hover:bg-yellow-900 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
    
  )
}

export default CardCategoria;