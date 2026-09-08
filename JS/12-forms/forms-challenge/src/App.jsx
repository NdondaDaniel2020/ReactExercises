import { FormularioRegistro } from './FormularioRegistro';

function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f3f4f6', padding: '20px' }}>
      <h1 style={{ marginBottom: '20px' }}>React Hook Form</h1>
      <FormularioRegistro />
    </div>
  );
}

export default App;
