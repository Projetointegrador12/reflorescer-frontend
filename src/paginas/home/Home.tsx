import banner from "../../assets/img/Banner_reflorescer_4.png"


function Home() {
    return (
        <>
        {/* <div className="bg-indigo-900 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Seja bem vinde!</h2>
              <p className='text-xl'>Expresse aqui seus pensamentos e opniões</p>

              <div className="flex justify-around gap-4">
              </div>
            </div> */}

            <div className="flex justify-around ">
              <img src={banner} alt="banner" className='w-auto' />

            </div>
          {/* </div>
        </div> */}

      </>
    );
}

export default Home;