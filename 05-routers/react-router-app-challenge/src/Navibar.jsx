import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <Link to="/" >Pagina Inicial</Link>
            <Link to="/produtos">Produtos</Link>
        </nav>
    );
}