import { Link } from "react-router-dom";
import imagemHome from "../../assets/img/imagem-home2.png";
import ListaCategoria from "../../components/categorias/listaCategoria/ListaCategoria";
//import ListaProduto from "../../components/produtos/listaProduto/ListaProduto";

function Home() {
  return (
    <>
      <div className="bg-lime-50">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto">
          <div className="flex items-center text-center pt-8 lg:text-left px-8 md:px-12 lg:w-1/2">
            <div>
              <h2 className="text-3xl font-bold text-amber-950 md:text-4xl">
                Seja Bem Vindo
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
                <Link to={`/produtos`} className="px-4 py-3 bg-amber-950 text-gray-200 text-xs font-semibold rounded hover:bg-amber-900"
                  href="#">
                <button>Nossas Mudas</button>
               </Link>
              </div>
            </div>
          </div>

          <div className="hidden lg:block clip-path:polygon(10% 0, 100% 0%, 100% 100%, 0 100%)">
            <img src={imagemHome} alt="" className="" />
          </div>
        </div>

      </div>

        <div className="py-12 bg-lime-50 flex items-center justify-center border-radius auto">
          <h2 className="text-3xl font-bold text-amber-950 md:text-4xl">
            Categorias
          </h2>
        </div>
        
        {/* <div className="max-w-screen-xl flex flex-wrap md:flex-nowrap mx-auto px-16 py-8 gap-12">
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
              FRUTÍFERA{" "}
            </a>

            <div className="flex flex-row flex-wrap gap-2 flex justify-center">
              <a
                href="#"
                className="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full flex justify-center"
              >
                {" "}
                Nossas mudas{" "}
              </a>
            </div>
          </div>

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
              FRUTÍFERA{" "}
            </a>

            <div className="flex flex-row flex-wrap gap-2 flex justify-center">
              <a
                href="#"
                className="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full flex justify-center"
              >
                {" "}
                Nossas mudas{" "}
              </a>
            </div>
          </div>

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
              FRUTÍFERA{" "}
            </a>

            <div className="flex flex-row flex-wrap gap-2 flex justify-center">
              <a
                href="#"
                className="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full flex justify-center"
              >
                {" "}
                Nossas mudas{" "}
              </a>
            </div>
          </div>

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
              HERBÁCEAS{" "}
            </a>

            <div className="flex flex-row flex-wrap gap-2 flex justify-center">
              <a
                href="#"
                className="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full flex justify-center"
              >
                {" "}
                Nossas mudas{" "}
              </a>
            </div>
          </div>

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
              NATIVAS{" "}
            </a>

            <div className="flex flex-row flex-wrap gap-2 flex justify-center">
              <a
                href="#"
                className="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full flex justify-center"
              >
                {" "}
                Nossas mudas{" "}
              </a>
            </div>
          </div>

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
              GRANDE PORTE{" "}
            </a>

            <div className="flex flex-row flex-wrap gap-2 flex justify-center">
              <a
                href="#"
                className="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full flex justify-center"
              >
                {" "}
                Nossas mudas{" "}
              </a>
            </div>
          </div>
        </div> */}
        <ListaCategoria />
    </>
  );
}

export default Home;
