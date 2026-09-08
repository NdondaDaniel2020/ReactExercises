export function Navbar({ activeTab, onSelectTab }) {
  return (
    <header className="navbar">
      <div className="navbar-brand">
        <div className="navbar-logo">⚡</div>
        <div>
          <h1 className="navbar-title">Modern API Calls Hub</h1>
          <p className="navbar-subtitle">Desafio 08: REST vs GraphQL no React</p>
        </div>
      </div>

      <nav className="tab-buttons">
        <button
          className={`tab-button ${activeTab === 'rest' ? 'active' : ''}`}
          onClick={() => onSelectTab('rest')}
        >
          <span className="tab-icon">🌐</span>
          <span className="tab-text">REST (TanStack Query + Axios)</span>
          <span className="tab-badge">DummyJSON</span>
        </button>

        <button
          className={`tab-button ${activeTab === 'graphql' ? 'active' : ''}`}
          onClick={() => onSelectTab('graphql')}
        >
          <span className="tab-icon">🚀</span>
          <span className="tab-text">GraphQL (Apollo Client)</span>
          <span className="tab-badge">Rick & Morty</span>
        </button>
      </nav>
    </header>
  );
}
