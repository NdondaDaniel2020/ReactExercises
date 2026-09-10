import { useReducer, useEffect, useRef, type ChangeEvent } from 'react'
import './App.css'

// Tipagem do estado do post
interface PostState {
  titulo: string;
  conteudo: string;
  tags: string;
}

// Discriminated union para as ações do reducer
type PostAction =
  | { type: 'SET_TITULO'; payload: string }
  | { type: 'SET_CONTEUDO'; payload: string }
  | { type: 'SET_TAGS'; payload: string }
  | { type: 'LIMPAR_TUDO' };

const estadoInicial: PostState = {
  titulo: '',
  conteudo: '',
  tags: '',
};

function postReducer(estadoAtual: PostState, action: PostAction): PostState {
  switch (action.type) {
    case 'SET_TITULO':
      return { ...estadoAtual, titulo: action.payload };
    case 'SET_CONTEUDO':
      return { ...estadoAtual, conteudo: action.payload };
    case 'SET_TAGS':
      return { ...estadoAtual, tags: action.payload };
    case 'LIMPAR_TUDO':
      return { titulo: '', conteudo: '', tags: '' };
    default:
      return estadoAtual;
  }
}

function App(): React.JSX.Element {
  const [estado, dispatch] = useReducer(postReducer, estadoInicial, (): PostState => {
    const salvo: string | null = localStorage.getItem('rascunho');
    if (salvo) {
      try {
        return JSON.parse(salvo) as PostState;
      } catch {
        return estadoInicial;
      }
    }
    return estadoInicial;
  });

  const inputTituloRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    localStorage.setItem('rascunho', JSON.stringify(estado));
  }, [estado]);

  const handleLimpar = (): void => {
    dispatch({ type: 'LIMPAR_TUDO' });
    inputTituloRef.current?.focus();
  };

  return (
    <>
      <input
        type="text"
        placeholder="Titulo"
        ref={inputTituloRef}
        value={estado.titulo}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          dispatch({ type: 'SET_TITULO', payload: e.target.value })
        }
      />
      <textarea
        id="conteudo"
        name="conteudo"
        placeholder="digite algo ..."
        value={estado.conteudo}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          dispatch({ type: 'SET_CONTEUDO', payload: e.target.value })
        }
      ></textarea>
      <input
        type="text"
        placeholder="tags"
        value={estado.tags}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          dispatch({ type: 'SET_TAGS', payload: e.target.value })
        }
      />
      <button type="button" onClick={handleLimpar}>
        Limpar Rascunho
      </button>
    </>
  );
}

export default App;
