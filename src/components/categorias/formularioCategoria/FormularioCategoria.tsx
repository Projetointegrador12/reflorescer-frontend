import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import { atualizar, buscar, cadastrar } from '../../../services/Service';
import Categoria from '../../../model/Categoria';
import { toastAlerta } from '../../../util/toastAlerta';

function FormularioCategoria() {
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

    let navigate = useNavigate();

    const { id } = useParams<{ id: string }>();

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarPorId(id: string) {
        await buscar(`/categoria/${id}`, setCategoria, {
            headers: {
                Authorization: token,
            },
        });
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })

        console.log(JSON.stringify(categoria))
    }

    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            try {
                await atualizar(`/categoria`, categoria, setCategoria, {
                    headers: {
                        'Authorization': token
                    }
                })

                toastAlerta('Categoria atualizado com sucesso', 'sucesso')
                retornar()

            } catch (error: any) {
                if (error.toString().includes('403')) {
                    toastAlerta('O token expirou, favor logar novamente', 'info')
                    handleLogout()
                } else {
                    toastAlerta('Erro ao atualizar a Categoria', 'erro')
                }

            }

        } else {
            try {
                await cadastrar(`/categoria`, categoria, setCategoria, {
                    headers: {
                        'Authorization': token
                    }
                })

                toastAlerta('Categoria cadastrada com sucesso!', 'sucesso')

            } catch (error: any) {
                console.error(error)
                if (error.toString().includes('403')) {
                    toastAlerta('O token expirou, favor logar novamente', 'info')
                    handleLogout()
                } else {
                    toastAlerta('Erro ao atualizar a Categoria', 'erro')
                    toastAlerta('Erro ao cadastrar a Categoria', 'erro')
                }
            }
        }

        retornar()
    }

    function retornar() {
        navigate("/categorias")
    }

    useEffect(() => {
        if (token === '') {
            toastAlerta('Você precisa estar logado', 'erro');
            navigate('/login');
        }
    }, [token]);

    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">
                {id === undefined ? 'Cadastre uma nova categoria' : 'Editar categoria'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Nome da Categoria</label>
                    <input
                        type="text"
                        placeholder="Nome"
                        name='nomeCategoria'
                        className="border-2 border-slate-700 rounded p-2"
                        value={categoria.nomeCategoria}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Descrição da Categoria</label>
                    <input
                        type="text"
                        placeholder="Descrição"
                        name='descricaoCategoria'
                        className="border-2 border-slate-700 rounded p-2"
                        value={categoria.descricaoCategoria}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <button
                    className="rounded text-slate-100 bg-indigo-400 hover:bg-indigo-800 w-1/2 py-2 mx-auto block"
                    type="submit"
                >
                    {id === undefined ? 'Cadastrar' : 'Editar'}
                </button>
            </form>
        </div>
    );
}

export default FormularioCategoria;