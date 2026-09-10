import { Link, useNavigate, useParams } from 'react-router-dom';

interface Produto {
  id: string;
  nome: string;
}

export function ProdutoDetalhe(): React.JSX.Element {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  return (
    <>
      <p>
        ID do produto <strong> {id}</strong>
      </p>
      <button onClick={() => navigate(-1)}>Voltar</button>
    </>
  );
}

export function Produtos(): React.JSX.Element {
  const produtos: Produto[] = [
    { id: 'a1', nome: 'Teclado Mecânico' },
    { id: 'b2', nome: 'Mouse Gamer' },
  ];

  return (
    <div>
      <h2>Lista de produtos</h2>
      {produtos.map((produto: Produto) => (
        <div key={produto.id}>
          <h3>{produto.nome}</h3>
          <Link to={`/produtos/${produto.id}`}>Ver Detalhes</Link>
        </div>
      ))}
    </div>
  );
}
