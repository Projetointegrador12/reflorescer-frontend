import imagemSobre from "../../assets/img/a-importancia-do-reflorestamento.jpg";
function Sobre() {
  return (
    <>
      <div className="bg-lime-50 flex items-center justify-center overflow-hidden z-50 ">
        <div className="relative mx-auto h-full px-4  pb-20   md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
          <div className="flex flex-col items-center justify-between lg:flex-row py-16">
            <div className=" relative ">
              <div className=" absolute top-0 -left-48 z-0  opacity-50 "></div>
              <div className="lg:max-w-xl lg:pr-5 relative z-40">
                <p className="flex text-sm uppercase text-g1  ">Sobre nós</p>
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
        <div className="hidden text-9xl varien absolute top-6 left-1/4 text-g/10 z-40    ">
          About Us
        </div>
      </div>
    </>
  );
}
export default Sobre;
