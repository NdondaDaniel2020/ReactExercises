import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { DropdownMenuDemo } from './components/DropdownMenuDemo';
import { AccordionDemo } from './components/AccordionDemo';
import { SliderDemo } from './components/SliderDemo';
import { PopoverDemo } from './components/PopoverDemo';
import { SelectDemo } from './components/SelectDemo';
import { TooltipDemo } from './components/TooltipDemo';
import { Sparkles, Layers, ShieldCheck, Keyboard, EyeOff } from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('radix-theme');
    if (saved) return saved === 'dark';
    return true; // Padrão dark moderno para estúdio
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('radix-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('radix-theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 transition-colors duration-200">
      {/* Navbar */}
      <Navbar darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />

      {/* Hero Banner Didático */}
      <section className="relative overflow-hidden pt-12 pb-10 border-b border-slate-800 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-950/60 border border-violet-800 text-violet-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Paradigma Headless UI: Acessibilidade Sem Estilos Pré-Definidos</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Dominando o{' '}
            <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
              Radix UI Primitives
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-400 leading-relaxed">
            As bibliotecas "Headless" oferecem a base perfeita para sistemas de design profissionais: todo o comportamento, navegação por teclado e conformidade WAI-ARIA prontos, enquanto você tem 100% de controle sobre o CSS.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto pt-4 text-xs font-medium text-slate-300">
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-center gap-2">
              <EyeOff className="w-4 h-4 text-violet-400" />
              <span>Zero CSS Embutido</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-center gap-2">
              <Keyboard className="w-4 h-4 text-indigo-400" />
              <span>Navegação por Teclado</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>WAI-ARIA Nativas</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>Portals & Focus Trap</span>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de Primitivas em Ação */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Primitiva 1: Dropdown Menu */}
          <DropdownMenuDemo />

          {/* Primitiva 2: Accordion */}
          <AccordionDemo />

          {/* Primitiva 3: Sliders de Áudio */}
          <SliderDemo />

          {/* Primitiva 4: Popover com Collision Detection */}
          <PopoverDemo />

          {/* Primitiva 5: Select Customizado com Typeahead */}
          <SelectDemo />

          {/* Primitiva 6: Tooltips com Delay Controlado */}
          <TooltipDemo />
        </div>

        {/* Rodapé Didático */}
        <footer className="pt-12 pb-8 border-t border-slate-800 text-center space-y-2">
          <p className="text-xs text-slate-400">
            Exercício 09: Headless Component Libraries (Radix UI) • React Roadmap
          </p>
          <p className="text-[11px] text-slate-500">
            Demonstração prática de como bibliotecas headless como Radix UI servem de base para o Shadcn UI e design systems enterprise.
          </p>
        </footer>
      </main>
    </div>
  );
}
