import { useState } from 'react';
import { useProducts } from '../hooks/useProducts';
import { ProductCard } from './ProductCard';
import { CreateProductModal } from './CreateProductModal';
import { LoadingSpinner } from '../../../components/LoadingSpinner';

export function ProductList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    data,
    isPending,
    isError,
    error,
    isFetching,
    refetch,
  } = useProducts(searchTerm);

  const products = data?.products || [];

  return (
    <section className="feature-container">
      {/* Barra de Introdução e Status de Cache */}
      <div className="section-header">
        <div>
          <h2 className="section-title">REST: Catálogo com TanStack Query + Axios</h2>
          <p className="section-subtitle">
            Gerenciamento de <strong>Server State</strong> com cache automático, deduplicação de requisições e mutações com invalidação.
          </p>
        </div>

        <div className="header-actions">
          {isFetching && (
            <span className="sync-badge animate-pulse">
              🔄 Sincronizando em segundo plano...
            </span>
          )}
          <button
            className="btn btn-outline"
            onClick={() => refetch()}
            title="Forçar revalidação da query"
          >
            Refetch Manual
          </button>
          <button
            className="btn btn-primary"
            onClick={() => setIsModalOpen(true)}
          >
            + Cadastrar Produto
          </button>
        </div>
      </div>

      {/* Caixa de Pesquisa Dinâmica */}
      <div className="search-bar-container">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          className="search-input"
          placeholder="Pesquisar produto por título (ex: phone, laptop, perfume)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm && (
          <button className="clear-search" onClick={() => setSearchTerm('')}>
            ✕
          </button>
        )}
      </div>

      {/* Dica Didática */}
      <div className="info-banner">
        <strong>💡 Experimente o Cache:</strong> Digite um termo (ex.: <em>phone</em>), apague e digite novamente. Note que os resultados aparecem <strong>instantaneamente</strong> a partir da memória, sem recarregar a tela inteira!
      </div>

      {/* Estados de Interface */}
      {isPending && (
        <LoadingSpinner message="Buscando produtos na API DummyJSON..." />
      )}

      {isError && (
        <div className="error-card">
          <h3>Erro ao carregar produtos</h3>
          <p>{error.message}</p>
          <button className="btn btn-primary" onClick={() => refetch()}>
            Tentar Novamente
          </button>
        </div>
      )}

      {!isPending && !isError && products.length === 0 && (
        <div className="empty-card">
          <p>Nenhum produto encontrado para o termo "{searchTerm}".</p>
          <button className="btn btn-outline" onClick={() => setSearchTerm('')}>
            Limpar Busca
          </button>
        </div>
      )}

      {/* Grid de Produtos */}
      {!isPending && !isError && products.length > 0 && (
        <div className="grid-cards">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {/* Modal de Criação com useMutation */}
      <CreateProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
