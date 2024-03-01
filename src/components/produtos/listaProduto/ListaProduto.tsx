import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { buscar } from '../../../services/Service';
import { toastAlerta } from '../../../util/toastAlerta';
import Produto from '../../../model/Produto';
import CardProduto from '../cardProduto/CardProduto';
import { AuthContext } from '../../../context/AuthContext';
//import { Dna } from 'react-loader-spinner';
// import { Dna } from '@phosphor-icons/react';


function ListaProduto() {
  const [produto, setProdutos] = useState<Produto[]>([]);

  const navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado', 'info');
      navigate('/');
    }
  }, [token]);

  async function buscarProdutos() {
    try {
      await buscar(`/produtos`, setProdutos, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente', 'info')
        handleLogout()
      }
    }
  }

  useEffect(() => {
    buscarProdutos();
  }, [produto.length]);
  return (
    <>
      {produto.length === 0 && (
        // <Dna
        //   visible={true}
        //   height="200"
        //   width="200"
        //   ariaLabel="dna-loading"
        //   wrapperStyle={{}}
        //   wrapperClass="dna-wrapper mx-auto"
        // />   
        <h1>carregando produtos</h1>
      )}
      <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {produto.map((produto) => (
          <CardProduto key={produto.id} post={produto} />
        ))}
      </div>
    </>
  );
}

export default ListaProduto;