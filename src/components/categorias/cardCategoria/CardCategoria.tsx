import { Link } from 'react-router-dom'
import Categoria from '../../../model/Categoria';

interface CardCategoriaProps {
  categoria: Categoria
}
// let img: string
function CardCategoria({ categoria }: CardCategoriaProps) {
  
  // if (categoria.nomeCategoria === "Frutíferas"){
  //           img = "https://images.tcdn.com.br/img/img_prod/350075/muda_de_acerola_gigante_50cm_feita_de_semente_6035_2_20220412114234.jpg"
  // }
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
    
    <div className="max-w-screen-xl flex flex-row md:grid-flow-col mx-auto px-16 gap-4">
      <div className="flex flex-col justify-content align-center gap-2">
        <a href="" className="bg-green-500 rounded-full">
          <img
            src= "https://images.tcdn.com.br/img/img_prod/350075/muda_de_acerola_gigante_50cm_feita_de_semente_6035_2_20220412114234.jpg"
            className="hover:translate-x-1 hover:-translate-y-1 delay-50 duration-100 rounded-full"
            alt=""
          />
      
        </a>
       
        <a
          href="#"
          className="text-green-500 font-semibold flex justify-center"
        >
          {" "}
          {categoria.nomeCategoria} {" "}
        </a>

        <div className="md:flex-1 flex-row flex-wrap gap-2 justify-center py-2 px-2">

          <Link to={`/categoria/${categoria.id}`} href="#"
            className="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-20 rounded-full flex justify-center">
            <button> {" "}
              Nossas mudas{" "}</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CardCategoria;