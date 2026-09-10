import Layout from './Layout';
import Home from './Home';
import { Produtos, ProdutoDetalhe } from './Produtos';
import { Routes, Route } from 'react-router-dom';

export default function App(): React.JSX.Element {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/produtos/:id" element={<ProdutoDetalhe />} />
      </Route>
    </Routes>
  );
}
