import { Link, useNavigate, useParams } from "react-router-dom";

export function ProdutoDetalhe() {
    const { id } = useParams();
    const navigate = useNavigate();

    return (
        <>
            <p>ID do produto <strong> {id}</strong></p>
            <button onClick={() => navigate(-1)}>Voltar</button>
        </>
     );
}

export function Produtos() {  
    const produtos = [
        { id: 'a1', nome: 'Teclado Mecânico' },
        { id: 'b2', nome: 'Mouse Gamer' }
    ];
    
    return (
        <div>
            <h2>Lista de produtos</h2>
            {produtos.map((produto) => (
                <div key={produto.id}>
                    <h3>{produto.nome}</h3>
                    <Link to={`/produtos/${produto.id}`}>Ver Detalhes</Link>
                </div>
            ))}
        </div>
    );
}

