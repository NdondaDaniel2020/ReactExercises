import { useState, useRef, useEffect } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function CalculadoraDeMedia(props) {
  const total = props.medicoes.length;
  const soma = props.medicoes.reduce((acc, curr) => acc + Number(curr.temperatura), 0);
  const media = total > 0 ? soma / total : 0;

  return (
    <>
      {props.render(media)}
    </>
  );
}

// 5. Higher Order Component (HOC)
function withSimulacaoDeRede(ComponenteOriginal) {
  return function ComponenteAprimorado(props) {
    const [isConectando, setIsConectando] = useState(true);

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
  }
}

function Dashboard() {
  const [listaDeMedicoes, setListaDeMedicoes] = useState([{ id: 1, temperatura: 26, horario: '14:30' }])

  const inputValue = useRef(null)

  const reportarAnomalia = () => {
    // 2. Refs: Foco automático e alteração direta do valor no DOM nativo
    inputValue.current.focus();
    inputValue.current.value = '99';
  }

  const AddlistaDeMedicoes = (e) => {
    e.preventDefault();
    
    // Ler o valor real direto do DOM (ideal já que usamos ref para alterar e podemos ter estado defasado)
    const valorAtual = inputValue.current.value;
    if (!valorAtual) return;

    const new_id = listaDeMedicoes.length > 0 ? Math.max(...listaDeMedicoes.map(r => r.id)) + 1 : 1;
    const hora = new Date().getHours().toString().padStart(2, '0');
    const minutos = new Date().getMinutes().toString().padStart(2, '0');
    
    setListaDeMedicoes([...listaDeMedicoes, { id: new_id, temperatura: valorAtual, horario: hora + ':' + minutos }]);

    // Limpar input via ref
    inputValue.current.value = '';
    inputValue.current.focus();
  }

  useEffect(() => {
    // 3. Component Lifecycle (Monitoramento da lista)
    if (listaDeMedicoes.length > 0) {
      const ultimaTemp = Number(listaDeMedicoes[listaDeMedicoes.length - 1].temperatura);
      if (ultimaTemp > 35 || ultimaTemp < 0) {
        alert(`ALERTA: Temperatura Extrema de ${ultimaTemp} graus Registrada!`)
      }
    }
    
    // 3. Component Lifecycle (Fase de desmontagem)
    return () => {
      console.log("Desconectando satélites e limpando sensores...");
    };
  }, [listaDeMedicoes])

  return (
    <>
      <h1>Sistema de Monitoramento Climático 🌡️</h1>
      {/* 1. Events */}
      <form onSubmit={AddlistaDeMedicoes} >
        <input type="number" name="numero" id="numero" ref={inputValue} placeholder="Ex: 25" />
        <button type="submit">Registrar Medição</button>
        <button type="button" onClick={reportarAnomalia}>Reportar Anomalia</button>
      </form>

      <h3>Lista de Temperaturas</h3>
      <ul>
        {/* 1. Lists and Keys (Usar 'key' em vez de 'id' no elemento renderizado) */}
        {listaDeMedicoes.map((m) =>
          <li key={m.id}>Temperatura registrada {m.temperatura}°C às {m.horario} horas</li>
        )}
      </ul>

      {/* 4. Render Props */}
      <CalculadoraDeMedia 
        medicoes={listaDeMedicoes}
        render={(media) => (
          <h3 style={{ color: media >= 30 ? 'red' : 'blue' }}>
            Temperatura Média Geral: {media.toFixed(1)}°C
          </h3>
        )} 
      />
    </>
  )
}

// Embrulhando o Dashboard no HOC de Simulação de Rede
const DashboardComRede = withSimulacaoDeRede(Dashboard);

function App() {
  const [mostrarDashboard, setMostrarDashboard] = useState(true);

  return (
    <>
      <button onClick={() => setMostrarDashboard(!mostrarDashboard)}>
        {mostrarDashboard ? 'Desligar Sistema' : 'Ligar Sistema'}
      </button>
      <br/><br/>
      {/* Quando desligamos o sistema, o Dashboard é Desmontado e o alerta no useEffect vai aparecer no console */}
      {mostrarDashboard && <DashboardComRede />}
    </>
  )
}

export default App
