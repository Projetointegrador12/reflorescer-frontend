import { LinkedinLogo } from "@phosphor-icons/react";
import imagemSobre from "../../assets/img/a-importancia-do-reflorestamento.jpg";
function Sobre() {
  return (
    <>
      <div className="bg-lime-50 flex items-center justify-center overflow-hidden z-50 ">
        <div className="relative mx-auto h-full px-4  pb-20   md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <div className=" relative ">
              <div className=" absolute top-0 -left-48 z-0  opacity-50 "></div>
              <div className="lg:max-w-xl lg:pr-5 relative z-40">
                <h2 className="mb-6 max-w-lg text-5xl font-light leading-snug tracking-tight text-amber-950 sm:text-7xl sm:leading-snug">
                  Vamos mudar o
                  <span className="my-1 inline-block border-b-8 border-amber-950 px-4 font-bold text-g4 animate__animated animate__flash">
                    mundo?
                  </span>
                </h2>
                <p className="text-base text-black">
                  Bem-vindo ao nosso e-commerce dedicado à preservação do meio
                  ambiente e à luta contra as mudanças climáticas! Aqui, na
                  Reflorescer, estamos comprometidos com uma causa maior:
                  contribuir ativamente para a realização da ODS-13 da ONU, que
                  demanda medidas urgentes para combater as mudanças climáticas
                  e seus impactos.
                  <br />
                  <br />
                  Nosso propósito é claro: fornecer mudas de plantas nativas
                  para reflorestamento de áreas desmatadas em comunidades
                  rurais. Acreditamos que o reflorestamento é uma das melhores
                  formas de restaurar ecossistemas degradados, mitigar os
                  efeitos das mudanças climáticas e promover a biodiversidade.
                  <br />
                  <br />
                  Ao escolher se juntar à nós, você está contribuindo
                  diretamente para projetos de reflorestamento que têm um
                  impacto real e positivo no nosso planeta. Cada muda que
                  vendemos representa um pequeno passo em direção a um futuro
                  mais verde e sustentável para as gerações futuras.
                </p>
              </div>
            </div>
            <div className="relative hidden lg:ml-32 lg:block lg:w-1/2">
              <svg
                xmlns=""
                className="my-6 mx-auto h-10 w-10 animate-bounce rounded-full bg-white p-2 lg:hidden"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16 17l-4 4m0 0l-4-4m4 4V3"
                ></path>
              </svg>
              <div className="abg-orange-400 mx-auto w-fit overflow-hidden rounded-[6rem] rounded-br-none rounded-tl-none">
                <img
                  src={imagemSobre}
                  alt="Imagem de uma pessoa segurando uma muda."
                  className="w-400"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="justify-items-center">
        <div className="flex justify-center flex-wrap -mx-3 mb-0">
          <div className="w-full max-w-full px-3 mb-6  mx-auto">
            <div className="flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] border border-dashed border-stone-600 bg-lime-50 m-5">

              <div className=" flex justify-center py-8 px-9">
                <div>
                  <div className="mb-9 flex justify-center">
                    <h1 className="mb-2 text-[1.75rem] font-semibold text-dark justify-center">NOSSO TIME DE DESENVOLVIMENTO</h1>
                  </div>
                  <div className="flex flex-wrap w-full">
                    <div className="flex flex-col mr-5 text-center mb-11 lg:mr-16">
                      <div className="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                        <img className="inline-block shrink-0 rounded-[.95rem] w-[150px] h-[150px]" src="https://avatars.githubusercontent.com/u/116307469?v=4" alt="avarat image" />
                      </div>
                      <div className="text-center">
                        <a href="javascript:void(0)" className="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out">Daniela Xavier</a>
                        <span className="block font-medium text-muted">Desenvolvedora Jr.</span>
                        <div className="flex justify-center" onClick={() => window.location.href = 'https://www.linkedin.com/in/dani-xavier/'}>
                        <LinkedinLogo size={36} weight="bold" />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col mr-5 text-center mb-11 lg:mr-16">
                      <div className="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                        <img className="inline-block shrink-0 rounded-[.95rem] w-[150px] h-[150px]" src="https://avatars.githubusercontent.com/u/124266810?v=4" alt="avarat image" />
                      </div>
                      <div className="text-center">
                        <a href="javascript:void(0)" className="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out">Giovanni Lima</a>
                        <span className="block font-medium text-muted">Desenvolvedor Jr.</span>
                        <div className="flex justify-center" onClick={() => window.location.href = 'https://www.linkedin.com/in/giovannilimajavadeveloper/'}>
                        <LinkedinLogo size={36} weight="bold" />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col mr-5 text-center mb-11 lg:mr-16">
                      <div className="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                        <img className="inline-block shrink-0 rounded-[.95rem] w-[150px] h-[150px]" src="https://avatars.githubusercontent.com/u/151978010?v=4" alt="avarat image" />
                      </div>
                      <div className="text-center">
                        <a href="javascript:void(0)" className="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out">Andressa Patricio</a>
                        <span className="block font-medium text-muted">Desenvolvedora Jr</span>
                        <div className="flex justify-center" onClick={() => window.location.href = 'https://www.linkedin.com/in/andressa-patricio/'}>
                        <LinkedinLogo size={36} weight="bold" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Sobre;
