import { useState } from 'react';
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'


function CardContainer(props) {

  return (
    <div className='card' style={{border: 'none', padding: '3px', backgroundColor: 'white'}}>
      {props.children}
    </div>
  );
}

function ProductInfo(props) {

  return (
    <div className="productinfo">
      <h2>{props.nome}</h2>
      <p>{props.preco}</p>
      {props.emStock && <p style={{color: 'green'}}>Em Stock</p>}
      {!props.emStock && <p style={{color: 'red'}}>Esgotado</p>}
    </div>
  );
}

function App()
{
  const [quantidadeCarrinho, setQuantidadeCarrinho] = useState(0);

  return (
    <>
      <CardContainer>
        <p>No carrinho: {quantidadeCarrinho} itens</p>
        <ProductInfo nome='linguica' preco='3000' emStock={true} />
        <button type="button" onClick={() => {setQuantidadeCarrinho(quantidadeCarrinho + 1)}}> comprar</button>
      </CardContainer>
    </>
  )
}

export default App
