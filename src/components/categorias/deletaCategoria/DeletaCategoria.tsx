import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { buscar, deletar } from "../../../services/Service";
import { AuthContext } from "../../../context/AuthContext";
import { toastAlerta } from "../../../util/toastAlerta";
import Categoria from "../../../model/Categoria";

function DeletarCategoria() {
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categoria/${id}`, setCategoria, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        toastAlerta("O token expirou, favor logar novamente", "erro");
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (token === "") {
      toastAlerta("Você precisa estar logado", "info");
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function retornar() {
    navigate("/categorias");
  }

  async function deletarCategoria() {
    try {
      await deletar(`/categoria/${id}`, {
        headers: {
          Authorization: token,
        },
      });

      toastAlerta("Categoria apagada com sucesso", "sucesso");
    } catch (error) {
      toastAlerta("Erro ao apagar o Categoria", "erro");
    }

    retornar();
  }
  return (
    <div className="container w-1/3 mx-auto">
      <h1 className="text-4xl text-center my-0 py-8">Deletar categoria</h1>

      <p className="text-center font-semibold mb-4">
        Tem certeza que deseja apagar a categoria?
      </p>

      <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
        <header className="flex justify-center py-2 px-6 bg-amber-200  text-amber-900 font-bold text-2xl">
          {categoria.nomeCategoria}
        </header>{" "}
        <div className="flex">
          <button
            className="text-slate-100  bg-yellow-500  hover:bg-yellow-600 w-full py-2"
            onClick={retornar}
          >
            Não
          </button>
          <button
            className="w-full text-slate-100 bg-yellow-800 hover:bg-yellow-900 flex items-center justify-center"
            onClick={deletarCategoria}
          >
            Sim
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarCategoria;
