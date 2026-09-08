import { useReducer, useEffect, useRef } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function postReducer(estadoAtual, action) {
  switch (action.type)
  {
    case 'SET_TITULO' : return {...estadoAtual,  titulo: action.payload};
    case 'SET_CONTEUDO' : return {...estadoAtual, conteudo: action.payload};
    case 'SET_TAGS' : return {...estadoAtual, tags: action.payload };
    case 'LIMPAR_TUDO' : return { titulo: '', conteudo: '', tags: '' };
    default: return estadoAtual;
  }
}

function App() {
  const [estado, dispatch] = useReducer(postReducer, {}, () => {
    const salvo = localStorage.getItem('rascunho');
    return salvo ? JSON.parse(salvo) :
    { titulo: '', conteudo: '', tags: '' }
  });

  const inputTituloRef = useRef(null);

  useEffect(() => {
      localStorage.setItem('rascunho', JSON.stringify(estado));
  }, [estado]);

  return (
    <>
      <input
        type="text"
        placeholder='Titulo'
        ref={inputTituloRef}
        value={estado.titulo}
        onChange={(e) => dispatch({ type: 'SET_TITULO', payload: e.target.value})}
        />
      <textarea
        id="conteudo"
        name="conteudo"
        placeholder='digite algo ...'
        value={estado.conteudo}
        onChange={(e) => dispatch({ type: 'SET_CONTEUDO', payload: e.target.value})}
        ></textarea>
      <input
        type="text"
        placeholder='tags'
        value={estado.tags}
        onChange={(e) => dispatch({ type: 'SET_TAGS', payload: e.target.value})}
        />
      <button type="button" onClick={(e) => {dispatch({type: 'LIMPAR_TUDO'}), inputTituloRef.current.focus() }  }>Limpar Rascunho</button>
    </>
  )
}

export default App
