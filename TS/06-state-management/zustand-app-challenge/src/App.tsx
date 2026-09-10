import { Catalogo } from './Catalogo';
import { PainelDeFavoritos } from './PainelDeFavoritos';

export default function App(): React.JSX.Element {
  return (
    <div style={{ display: 'flex', gap: '50px' }}>
      <section style={{ border: '1px solid gray', padding: '20px' }}>
        <h2>Escolha seus Iniciais</h2>
        <Catalogo />
      </section>

      <aside style={{ background: '#f0f0f0', padding: '20px' }}>
        <h2>Meus Favoritos ⭐</h2>
        <PainelDeFavoritos />
      </aside>
    </div>
  );
}
