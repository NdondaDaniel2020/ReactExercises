import { useState } from 'react';
import { Copy, Check, Sliders, Play } from 'lucide-react';

export function UtilityPlayground() {
  const [justify, setJustify] = useState('justify-between');
  const [radius, setRadius] = useState('rounded-2xl');
  const [shadow, setShadow] = useState('shadow-xl');
  const [bgGradient, setBgGradient] = useState('from-cyan-500 to-blue-600');
  const [padding, setPadding] = useState('p-6');
  const [isCopied, setIsCopied] = useState(false);

  // String composta das classes ativas
  const activeClasses = `flex items-center ${justify} ${padding} ${radius} ${shadow} bg-gradient-to-r ${bgGradient} text-white transition-all duration-300`;

  const handleCopyClasses = () => {
    navigator.clipboard.writeText(activeClasses);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          Playground Interativo de Utilitários
          <span className="text-xs font-medium px-2 py-0.5 rounded-md bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300">
            Laboratório em Tempo Real
          </span>
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Clique nos botões de controle abaixo para alterar os utilitários Tailwind aplicados à caixa de pré-visualização.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Painel de Controles */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-5 lg:col-span-1">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
            <Sliders className="w-4 h-4 text-blue-500" />
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              Controles de Utilitários
            </h3>
          </div>

          {/* Justify Content */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Flex Justify (Alinhamento Horizontal)
            </label>
            <div className="grid grid-cols-3 gap-1.5">
              {['justify-start', 'justify-center', 'justify-between'].map((val) => (
                <button
                  key={val}
                  onClick={() => setJustify(val)}
                  className={`px-2 py-1.5 text-xs font-medium rounded-lg border transition-all truncate ${
                    justify === val
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {val.replace('justify-', '')}
                </button>
              ))}
            </div>
          </div>

          {/* Border Radius */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Arredondamento (border-radius)
            </label>
            <div className="grid grid-cols-4 gap-1.5">
              {['rounded-none', 'rounded-lg', 'rounded-2xl', 'rounded-full'].map((val) => (
                <button
                  key={val}
                  onClick={() => setRadius(val)}
                  className={`px-2 py-1.5 text-xs font-medium rounded-lg border transition-all truncate ${
                    radius === val
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {val.replace('rounded-', '') || 'none'}
                </button>
              ))}
            </div>
          </div>

          {/* Shadows */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Sombras (box-shadow)
            </label>
            <div className="grid grid-cols-3 gap-1.5">
              {['shadow-none', 'shadow-md', 'shadow-2xl'].map((val) => (
                <button
                  key={val}
                  onClick={() => setShadow(val)}
                  className={`px-2 py-1.5 text-xs font-medium rounded-lg border transition-all truncate ${
                    shadow === val
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {val.replace('shadow-', '') || 'none'}
                </button>
              ))}
            </div>
          </div>

          {/* Gradiente de Fundo */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Gradiente de Fundo
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: 'Cyan → Blue', val: 'from-cyan-500 to-blue-600' },
                { label: 'Purple → Pink', val: 'from-purple-600 to-pink-600' },
                { label: 'Amber → Rose', val: 'from-amber-500 to-rose-600' },
                { label: 'Emerald → Teal', val: 'from-emerald-500 to-teal-700' },
              ].map((grad) => (
                <button
                  key={grad.val}
                  onClick={() => setBgGradient(grad.val)}
                  className={`px-2 py-1.5 text-xs font-medium rounded-lg border transition-all truncate ${
                    bgGradient === grad.val
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {grad.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Caixa de Pré-Visualização e Código Gerado */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-6 lg:col-span-2">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Área de Pré-visualização Dinâmica
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 font-medium">
                Live Preview
              </span>
            </div>

            {/* Elemento Interativo com as classes ativas */}
            <div className="min-h-[160px] flex items-center justify-center p-6 bg-slate-100 dark:bg-slate-950 rounded-2xl border border-dashed border-slate-300 dark:border-slate-800">
              <div className={`w-full max-w-lg ${activeClasses}`}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center font-bold text-lg">
                    ✨
                  </div>
                  <div>
                    <h4 className="font-bold text-base leading-tight">Tailwind Element</h4>
                    <p className="text-xs text-white/80">Estilizado 100% via utilitários</p>
                  </div>
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/25 backdrop-blur-sm">
                  Active
                </span>
              </div>
            </div>
          </div>

          {/* Snippet do Código das Classes */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                Classes aplicadas no elemento:
              </span>
              <button
                onClick={handleCopyClasses}
                className="flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-cyan-400 hover:underline"
              >
                {isCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5" /> Copiado!
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" /> Copiar Classes
                  </>
                )}
              </button>
            </div>

            <pre className="p-3.5 rounded-xl bg-slate-950 text-cyan-300 font-mono text-xs overflow-x-auto border border-slate-800">
              <code>className="{activeClasses}"</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
