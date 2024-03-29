import Produto from "./Produto";

export default interface Usuario {
  id: number;
  nomeUsuario: string;
  usuario: string;
  senha: string;
  foto: string;
  pruduto?: Produto | null;
}
