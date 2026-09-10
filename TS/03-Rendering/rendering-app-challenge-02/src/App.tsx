import { useState, useRef, useEffect, type ReactNode, type ComponentType, type FormEvent } from 'react'
import './App.css'

// Tipagem para uma medição climática
interface Medicao {
  id: number;
  temperatura: string | number;
  horario: string;
}

// Props do componente CalculadoraDeMedia (Render Props)
interface CalculadoraDeMediaProps {
  medicoes: Medicao[];
  render: (media: number) => ReactNode;
}

function CalculadoraDeMedia({ medicoes, render }: CalculadoraDeMediaProps): React.JSX.Element {
  const total: number = medicoes.length;
  const soma: number = medicoes.reduce((acc: number, curr: Medicao) => acc + Number(curr.temperatura), 0);
  const media: number = total > 0 ? soma / total : 0;

  return (
    <>
      {render(media)}
    </>
  );
}

// 5. Higher Order Component (HOC)
function withSimulacaoDeRede<P extends object>(
  ComponenteOriginal: ComponentType<P>
) {
  return function ComponenteAprimorado(props: P): React.JSX.Element {
    const [isConectando, setIsConectando] = useState<boolean>(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsConectando(false);
      }, 3000);
      
      return () => clearTimeout(timer);
    }, []);

    if (isConectando) {
      return <h2>Estabelecendo conexão via satélite... 🛰️</h2>;
    }

    return <ComponenteOriginal {...props} />;
  };
}

function Dashboard(): React.JSX.Element {
  const [listaDeMedicoes, setListaDeMedicoes] = useState<Medicao[]>([
    { id: 1, temperatura: 26, horario: '14:30' },
  ]);

  const inputValue = useRef<HTMLInputElement>(null);

  const reportarAnomalia = (): void => {
    // 2. Refs: Foco automático e alteração direta do valor no DOM nativo
    if (inputValue.current) {
      inputValue.current.focus();
      inputValue.current.value = '99';
    }
  };

  const AddlistaDeMedicoes = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    
    // Ler o valor real direto do DOM (ideal já que usamos ref para alterar e podemos ter estado defasado)
    const valorAtual: string | undefined = inputValue.current?.value;
    if (!valorAtual) return;

    const new_id: number = listaDeMedicoes.length > 0 ? Math.max(...listaDeMedicoes.map((r) => r.id)) + 1 : 1;
    const agora = new Date();
    const hora: string = agora.getHours().toString().padStart(2, '0');
    const minutos: string = agora.getMinutes().toString().padStart(2, '0');
    
    setListaDeMedicoes([
      ...listaDeMedicoes,
      { id: new_id, temperatura: valorAtual, horario: `${hora}:${minutos}` },
    ]);

    // Limpar input via ref
    if (inputValue.current) {
      inputValue.current.value = '';
      inputValue.current.focus();
    }
  };

  useEffect(() => {
    // 3. Component Lifecycle (Monitoramento da lista)
    if (listaDeMedicoes.length > 0) {
      const ultimaTemp: number = Number(listaDeMedicoes[listaDeMedicoes.length - 1].temperatura);
      if (ultimaTemp > 35 || ultimaTemp < 0) {
        alert(`ALERTA: Temperatura Extrema de ${ultimaTemp} graus Registrada!`);
      }
    }
    
    // 3. Component Lifecycle (Fase de desmontagem)
    return () => {
      console.log('Desconectando satélites e limpando sensores...');
    };
  }, [listaDeMedicoes]);

  return (
    <>
      <h1>Sistema de Monitoramento Climático 🌡️</h1>
      {/* 1. Events */}
      <form onSubmit={AddlistaDeMedicoes}>
        <input type="number" name="numero" id="numero" ref={inputValue} placeholder="Ex: 25" />
        <button type="submit">Registrar Medição</button>
        <button type="button" onClick={reportarAnomalia}>Reportar Anomalia</button>
      </form>

      <h3>Lista de Temperaturas</h3>
      <ul>
        {/* 1. Lists and Keys (Usar 'key' em vez de 'id' no elemento renderizado) */}
        {listaDeMedicoes.map((m) => (
          <li key={m.id}>
            Temperatura registrada {m.temperatura}°C às {m.horario} horas
          </li>
        ))}
      </ul>

      {/* 4. Render Props */}
      <CalculadoraDeMedia 
        medicoes={listaDeMedicoes}
        render={(media: number) => (
          <h3 style={{ color: media >= 30 ? 'red' : 'blue' }}>
            Temperatura Média Geral: {media.toFixed(1)}°C
          </h3>
        )} 
      />
    </>
  );
}

// Embrulhando o Dashboard no HOC de Simulação de Rede
const DashboardComRede = withSimulacaoDeRede(Dashboard);

function App(): React.JSX.Element {
  const [mostrarDashboard, setMostrarDashboard] = useState<boolean>(true);

  return (
    <>
      <button onClick={() => setMostrarDashboard(!mostrarDashboard)}>
        {mostrarDashboard ? 'Desligar Sistema' : 'Ligar Sistema'}
      </button>
      <br /><br />
      {/* Quando desligamos o sistema, o Dashboard é Desmontado e o alerta no useEffect vai aparecer no console */}
      {mostrarDashboard && <DashboardComRede />}
    </>
  );
}

export default App;
