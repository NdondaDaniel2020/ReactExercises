import { useState, useRef, useEffect } from 'react'
import './App.css'

// 1. HOC (Desafio Opcional): injeta a prop hoje
function withDataAtual(Component) {
  return function ComponenteComData(props) {
    const hoje = new Date().toLocaleDateString();
    return <Component {...props} hoje={hoje} />;
  }
}

// 2. Render Props (Desafio Opcional): calcula cor aleatória
function ContainerTematico({ render }) {
  const [corDaBorda, setCorDaBorda] = useState('#000000');

  useEffect(() => {
    // Calcula uma cor hexadecimal aleatória no mount
    const corAleatoria = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    setCorDaBorda(corAleatoria);
  }, []);

  return (
    <div style={{ padding: '20px', border: `4px solid ${corDaBorda}`, borderRadius: '12px', marginTop: '20px' }}>
      {render(corDaBorda)}
    </div>
  );
}

// 3. Componente Principal
function MuralDeRecadosBase({ hoje }) {
  // Lists and Keys: estado inicial
  const [recados, setRecados] = useState([{ id: 1, texto: 'Estudar React!' }]);
  const [novoRecado, setNovoRecado] = useState('');
  
  // Refs: para devolver o foco
  const inputRef = useRef(null);

  // Lifecycle (useEffect): atualizar o título da página
  useEffect(() => {
    document.title = `${recados.length} Recados no Mural`;
  }, [recados]);

  // Events: lidar com a mudança no input
  const handleInputChange = (e) => {
    setNovoRecado(e.target.value);
  };

  // Events: lidar com o submit/click
  const handleAdicionar = (e) => {
    e.preventDefault(); // Evita recarregar a página se usar form
    if (novoRecado.trim() === '') return;

    const novoId = recados.length > 0 ? Math.max(...recados.map(r => r.id)) + 1 : 1;
    setRecados([...recados, { id: novoId, texto: novoRecado }]);

    // Esvaziar o input e focar novamente
    setNovoRecado('');
    inputRef.current.focus();
  };

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      {/* Exibindo a prop injetada pelo HOC */}
      <h1>Mural do dia: {hoje}</h1>
      
      <form onSubmit={handleAdicionar} style={{ display: 'flex', gap: '10px' }}>
        <input 
          type="text" 
          value={novoRecado}
          onChange={handleInputChange}
          ref={inputRef}
          placeholder="Digite seu recado..."
          style={{ flex: 1, padding: '10px', fontSize: '16px', borderRadius: '6px', border: '1px solid #ccc' }}
        />
        <button type="submit" style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', borderRadius: '6px', border: 'none', backgroundColor: '#007BFF', color: 'white' }}>
          Adicionar
        </button>
      </form>

      {/* Usando Render Props */}
      <ContainerTematico 
        render={(corDaBorda) => (
          <div>
            <h3 style={{ margin: '0 0 15px 0' }}>Lista de Recados (Borda gerada: {corDaBorda})</h3>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
              {recados.map((recado) => (
                <li key={recado.id} style={{ padding: '10px', backgroundColor: '#f9f9f9', marginBottom: '8px', borderRadius: '4px', borderLeft: `6px solid ${corDaBorda}` }}>
                  {recado.texto}
                </li>
              ))}
            </ul>
          </div>
        )}
      />
    </div>
  );
}

// Envolvendo o componente base com o HOC
const MuralDeRecados = withDataAtual(MuralDeRecadosBase);

function App() {
  return (
    <>
      <MuralDeRecados />
    </>
  )
}

export default App
