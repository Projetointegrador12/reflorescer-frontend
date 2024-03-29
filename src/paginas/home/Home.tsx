import { Link } from "react-router-dom";
import imagemHome from "../../assets/img/imagem-home2.png";
import ListaProduto from "../../components/produtos/listaProduto/ListaProduto";


function Home() {
  return (
    <>
      <div className="bg-lime-50">
        <div className=" flex items-center justify-between mx-0">
          <div className="flex items-center text-center pt-8 lg:text-left px-8 md:px-12 lg:w-1/2">
            <div>
              <h2 className="text-3xl font-bold text-amber-950 md:text-4xl">
                Seja Bem Vinde
              </h2>
              <p className="mt-2 text-sm text-gray-500 md:text-base">
                Somos uma empresa dedicada à produção e comercialização de mudas
                para restauração florestal em propriedades rurais. Comprometidos
                com a visão de que o desenvolvimento só é possível com
                sustentabilidade, facilitamos o acesso de milhares de indivíduos
                que compartilham dessa crença. Estamos empenhados em fornecer
                soluções eficazes para a conservação e regeneração do meio
                ambiente, contribuindo assim para um futuro mais sustentável e
                equilibrado.
              </p>
              <div className="flex justify-center lg:justify-start mt-6">
                <Link to={`/categorias`} className="px-4 py-3 bg-amber-950 text-gray-200 text-xs font-semibold rounded hover:bg-amber-900">
                  <button>Navegue Por Categoria</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="hidden lg:block clip-path:polygon(10% 0, 100% 0%, 100% 100%, 0 100%)">
            <img src={imagemHome} alt="" className="" />
          </div>
        </div>
      </div>

      <div className="flex justify-center text-2xl font-bold text-amber-950 md:text-4xl pt-8">
        <h1>Nossas Mudas</h1>
      </div>
      <ListaProduto/>
    </>
  );
}

export default Home;
