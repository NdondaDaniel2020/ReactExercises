import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { StatsGrid } from './components/StatsGrid';
import { ComponentShowcase } from './components/ComponentShowcase';
import { UtilityPlayground } from './components/UtilityPlayground';
import { Footer } from './components/Footer';
import { Sparkles, Layers, ArrowRight } from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [activeSection, setActiveSection] = useState('all');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      {/* Barra de Navegação */}
      <Navbar
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
        activeSection={activeSection}
        onSelectSection={setActiveSection}
      />

      {/* Hero Banner */}
      <section className="relative overflow-hidden pt-12 pb-8 border-b border-slate-200/80 dark:border-slate-800/80 bg-gradient-to-b from-white via-slate-50 to-slate-100/50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
        {/* Glow de fundo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-cyan-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tailwind CSS v4 + React 19 no Vite</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Dominando o{' '}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 bg-clip-text text-transparent">
              Utility-First CSS
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Aprenda a construir interfaces responsivas, dinâmicas e acessíveis combinando classes atômicas, pseudo-classes avançadas e modo escuro nativo.
          </p>

          <div className="flex items-center justify-center gap-2 pt-2">
            {['all', 'dashboard', 'components', 'playground'].map((sec) => (
              <button
                key={sec}
                onClick={() => setActiveSection(sec)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  activeSection === sec
                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                }`}
              >
                {sec === 'all'
                  ? 'Ver Tudo'
                  : sec === 'dashboard'
                  ? 'Métricas'
                  : sec === 'components'
                  ? 'Componentes'
                  : 'Playground'}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
        {/* Seção 1: Dashboard & Métricas */}
        {(activeSection === 'all' || activeSection === 'dashboard') && (
          <section className="scroll-mt-20">
            <StatsGrid />
          </section>
        )}

        {/* Seção 2: Showcase de Componentes */}
        {(activeSection === 'all' || activeSection === 'components') && (
          <section className="scroll-mt-20">
            <ComponentShowcase />
          </section>
        )}

        {/* Seção 3: Playground de Utilitários */}
        {(activeSection === 'all' || activeSection === 'playground') && (
          <section className="scroll-mt-20">
            <UtilityPlayground />
          </section>
        )}

        {/* Rodapé Educacional */}
        <Footer />
      </main>
    </div>
  );
}
