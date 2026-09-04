export function CharacterCard({ character }) {
  const getStatusClass = (status) => {
    switch (status?.toLowerCase()) {
      case 'alive':
        return 'status-alive';
      case 'dead':
        return 'status-dead';
      default:
        return 'status-unknown';
    }
  };

  return (
    <article className="card character-card">
      <div className="card-image-wrapper">
        <img
          src={character.image}
          alt={character.name}
          className="card-image"
          loading="lazy"
        />
        <span className={`status-pill ${getStatusClass(character.status)}`}>
          <span className="status-dot"></span>
          {character.status}
        </span>
      </div>

      <div className="card-body">
        <h3 className="card-title" title={character.name}>
          {character.name}
        </h3>

        <div className="character-meta">
          <p>
            <span className="meta-label">Espécie:</span> {character.species}
          </p>
          <p>
            <span className="meta-label">Gênero:</span> {character.gender}
          </p>
          <p className="location-text" title={character.location?.name}>
            <span className="meta-label">Localização:</span>{' '}
            {character.location?.name || 'Desconhecida'}
          </p>
        </div>

        {/* Demonstração didática do identificador no cache normalizado do Apollo */}
        <div className="apollo-cache-tag" title="Identificador único no InMemoryCache do Apollo Client">
          <code>Cache ID: Character:{character.id}</code>
        </div>
      </div>
    </article>
  );
}
