import Layout from "./Layout";
import AppDefault from './Home';
import { Produtos, ProdutoDetalhe } from './Produtos';
import { Routes, Route } from 'react-router-dom'

function App() {
  
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<AppDefault />}/>
        <Route path="/produtos" element={<Produtos />}/>
        <Route path="/produtos/:id" element={<ProdutoDetalhe />}/>
      </Route>
    </Routes>
  );
}

export default App
