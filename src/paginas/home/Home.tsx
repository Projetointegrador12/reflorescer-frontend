
import imagemHome from "../../assets/img/imagem-home2.png";
import ListaCategoria from "../../components/categorias/listaCategoria/ListaCategoria";

function Home() {
  return (
    <>
      <div className="flex bg-lime-50 height:600px;">
        <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
          <div>
            <h2 className="text-3xl font-bold text-amber-950 md:text-4xl">Seja Bem Vindo</h2>
            <p className="mt-2 text-sm text-gray-500 md:text-base">Somos uma empresa dedicada à produção e comercialização de mudas para
              restauração florestal em propriedades rurais. Comprometidos com a
              visão de que o desenvolvimento só é possível com sustentabilidade,
              facilitamos o acesso de milhares de indivíduos que compartilham dessa
              crença. Estamos empenhados em fornecer soluções eficazes para a
              conservação e regeneração do meio ambiente, contribuindo assim para um
              futuro mais sustentável e equilibrado.</p>
            <div className="flex justify-center lg:justify-start mt-6">
              <a className="px-4 py-3 bg-amber-950 text-gray-200 text-xs font-semibold rounded hover:bg-amber-900" href="#">Nossas Mudas</a>

            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/2 clip-path:polygon(10% 0, 100% 0%, 100% 100%, 0 100%)">
          <img src={imagemHome} alt="" className="max-w-full" />
          <div className=" ">

          </div>
        </div>

      </div>
      <ListaCategoria />

    </>
  );
}

export default Home;
