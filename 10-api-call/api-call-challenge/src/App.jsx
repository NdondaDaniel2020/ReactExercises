import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { ProductList } from './features/rest-products/components/ProductList';
import { CharacterList } from './features/graphql-characters/components/CharacterList';

export default function App() {
  const [activeTab, setActiveTab] = useState('rest');

  return (
    <div className="app-container">
      {/* Barra de Navegação */}
      <Navbar activeTab={activeTab} onSelectTab={setActiveTab} />

      {/* Conteúdo Principal */}
      <main className="main-content">
        {activeTab === 'rest' ? <ProductList /> : <CharacterList />}
      </main>

      {/* Rodapé Comparativo Educacional */}
      <footer className="footer-comparison">
        <div className="comparison-card">
          <div className="comparison-col">
            <h3>🌐 REST + TanStack Query + Axios</h3>
            <ul>
              <li><strong>Motor HTTP:</strong> Axios (interceptores, timeouts, headers).</li>
              <li><strong>Gerenciamento de Cache:</strong> Chaves arbitrárias (<code>queryKey</code>).</li>
              <li><strong>Invalidação:</strong> Manual via <code>queryClient.invalidateQueries()</code>.</li>
              <li><strong>Ponto forte:</strong> Aditivo, simples de acoplar a APIs REST existentes.</li>
            </ul>
          </div>

          <div className="comparison-divider"></div>

          <div className="comparison-col">
            <h3>🚀 GraphQL + Apollo Client</h3>
            <ul>
              <li><strong>Protocolo:</strong> Único endpoint <code>POST /graphql</code>.</li>
              <li><strong>Gerenciamento de Cache:</strong> Normalizado automaticamente (<code>__typename:id</code>).</li>
              <li><strong>Invalidação:</strong> Reativo se a mutação retornar os campos alterados.</li>
              <li><strong>Ponto forte:</strong> Zero over-fetching, tipagem e flexibilidade total no cliente.</li>
            </ul>
          </div>
        </div>

        <p className="footer-note">
          Desafio 08: API Calls • React Exercises
        </p>
      </footer>
    </div>
  );
}
