import { Outlet } from 'react-router-dom';
import Navibar from './Navibar'

export default function Layout() {
    return (
        <div className="layout-container">
            <Navibar />

            <main>
                <Outlet />
            </main>

            <footer>
                <p>© 2026 Meu App - Todos os direitos reservados</p>
            </footer>
        </div>
    );
}