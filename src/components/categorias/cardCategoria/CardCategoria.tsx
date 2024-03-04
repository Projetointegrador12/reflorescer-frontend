import { Link } from 'react-router-dom'
import Categoria from '../../../model/Categoria';

interface CardCategoriaProps {
  categoria: Categoria
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  
  return (
    // <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
    //   <header className='py-2 px-6 bg-yellow-300 text-white font-bold text-2xl'>{categoria.nomeCategoria}</header>
    //   <p className='p-8 text-3xl bg-green-100 h-full'>{categoria.descricaoCategoria}</p>
    //   <div className="flex">
    //     <Link to={`/editarCategoria/${categoria.id}`} className='w-full text-slate-100  bg-yellow-500  hover:bg-yellow-600 flex items-center justify-center py-2'>
    //       <button>Editar</button>
    //     </Link>
    //     <Link to={`/deletarCategoria/${categoria.id}`} className='text-slate-100 bg-yellow-700 hover:bg-yellow-900 w-full flex items-center justify-center'>
    //       <button>Deletar</button>
    //     </Link>
    //   </div>
    // </div>
    <div className="max-w-screen-xl flex flex-wrap md:flex-nowrap mx-auto px-16 py-8 gap-12">
      <div className="flex flex-col gap-2">
        <a href="" className="bg-green-500 rounded-full">
          <img
            src="https://global.cdn.magazord.com.br/vasoeflor/img/2022/09/produto/1182/muda-laranja-lima-do-ceu-90cm-muda.jpg?ims=fit-in/800x800/filters:fill(white)"
            className="hover:translate-x-1 hover:-translate-y-1 delay-50 duration-100 rounded-full"
            alt=""
          />
        </a>

        <a
          href="#"
          className="text-green-500 text-gray-200 font-semibold flex justify-center"
        >
          {" "}
          {categoria.nomeCategoria} {" "}
        </a>

        <div className="flex flex-row flex-wrap gap-2 justify-center">

          <Link to={`/categoria/${categoria.id}`} href="#"
            className="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full flex justify-center">
            <button> {" "}
              Nossas mudas{" "}</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CardCategoria;