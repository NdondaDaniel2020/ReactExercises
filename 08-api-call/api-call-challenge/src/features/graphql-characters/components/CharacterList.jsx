import { useState } from 'react';
import { useCharacters } from '../hooks/useCharacters';
import { CharacterCard } from './CharacterCard';
import { LoadingSpinner } from '../../../components/LoadingSpinner';

export function CharacterList() {
  const [searchName, setSearchName] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');

  const { data, loading, error, refetch, networkStatus } = useCharacters(
    searchName,
    statusFilter
  );

  const characters = data?.characters?.results || [];
  const totalCount = data?.characters?.info?.count || 0;
  const isRefetching = networkStatus === 4; // NetworkStatus.refetch no Apollo

  return (
    <section className="feature-container">
      {/* Header do Módulo GraphQL */}
      <div className="section-header">
        <div>
          <h2 className="section-title">GraphQL: Personagens com Apollo Client</h2>
          <p className="section-subtitle">
            Consultas declarativas com <code>gql</code>, seleção exata de campos (zero over-fetching) e <strong>Cache Normalizado</strong> por <code>__typename:id</code>.
          </p>
        </div>

        <div className="header-actions">
          {isRefetching && (
            <span className="sync-badge animate-pulse">
              🚀 Atualizando query GraphQL...
            </span>
          )}
          <button
            className="btn btn-outline"
            onClick={() => refetch()}
            disabled={loading}
            title="Recarregar dados via query GraphQL"
          >
            Refetch Query
          </button>
        </div>
      </div>

      {/* Barra de Filtros e Pesquisa */}
      <div className="graphql-controls">
        <div className="search-bar-container" style={{ flex: 1 }}>
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="search-input"
            placeholder="Filtrar por nome do personagem (ex: Rick, Morty, Summer, Beth)..."
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
          {searchName && (
            <button className="clear-search" onClick={() => setSearchName('')}>
              ✕
            </button>
          )}
        </div>

        {/* Pílulas de Filtro por Status */}
        <div className="filter-pills">
          {[
            { label: 'Todos', value: 'ALL' },
            { label: 'Vivos', value: 'Alive' },
            { label: 'Mortos', value: 'Dead' },
            { label: 'Desconhecido', value: 'unknown' },
          ].map((item) => (
            <button
              key={item.value}
              className={`pill-button ${statusFilter === item.value ? 'active' : ''}`}
              onClick={() => setStatusFilter(item.value)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Dica Didática */}
      <div className="info-banner graphql-banner">
        <strong>⚡ Poder do GraphQL:</strong> O cliente solicitou apenas os 8 campos necessários para renderizar os cards. Se o banco de dados tivesse 50 colunas, nenhuma informação desnecessária trafegaria na rede!
      </div>

      {/* Contagem */}
      {!loading && !error && (
        <div className="results-count">
          Encontrados: <strong>{totalCount}</strong> personagens no multiverso
        </div>
      )}

      {/* Estados de Interface */}
      {loading && !data && (
        <LoadingSpinner message="Executando query GraphQL no servidor..." />
      )}

      {error && (
        <div className="error-card">
          <h3>Erro na execução da Query GraphQL</h3>
          <p>{error.message}</p>
          <button className="btn btn-primary" onClick={() => refetch()}>
            Tentar Novamente
          </button>
        </div>
      )}

      {!loading && !error && characters.length === 0 && (
        <div className="empty-card">
          <p>Nenhum personagem encontrado com os filtros selecionados.</p>
          <button
            className="btn btn-outline"
            onClick={() => {
              setSearchName('');
              setStatusFilter('ALL');
            }}
          >
            Limpar Filtros
          </button>
        </div>
      )}

      {/* Grid de Personagens */}
      {characters.length > 0 && (
        <div className="grid-cards">
          {characters.map((char) => (
            <CharacterCard key={char.id} character={char} />
          ))}
        </div>
      )}
    </section>
  );
}
