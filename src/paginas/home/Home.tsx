import banner from "../../assets/img/Banner_reflorescer_5.png"


function Home() {
    return (
        <>

            <div className="flex flex-col justify-around ">
                <img src={banner} alt="banner" className='w-auto' />
                <p className="py-6 text-center font-mono text-2xl bg-green-100">Somos uma empresa dedicada à produção e comercialização de mudas para restauração florestal em propriedades rurais. Comprometidos com a visão de que o desenvolvimento só é possível com sustentabilidade, facilitamos o acesso de milhares de indivíduos que compartilham dessa crença. Estamos empenhados em fornecer soluções eficazes para a conservação e regeneração do meio ambiente, contribuindo assim para um futuro mais sustentável e equilibrado.</p>
            </div>


        </>
    );
}

export default Home;