import { useState } from 'react';
import { Sparkles, Mail, Lock, Check, AlertCircle, Send, Heart, Eye } from 'lucide-react';

export function ComponentShowcase() {
  const [btnLoading, setBtnLoading] = useState(false);
  const [copiedBadge, setCopiedBadge] = useState('');
  const [likes, setLikes] = useState(142);
  const [liked, setLiked] = useState(false);

  const handleCopy = (text) => {
    setCopiedBadge(text);
    setTimeout(() => setCopiedBadge(''), 2000);
  };

  const handleToggleLike = () => {
    setLiked(!liked);
    setLikes((prev) => (liked ? prev - 1 : prev + 1));
  };

  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          Showcase de Componentes Reutilizáveis
          <span className="text-xs font-medium px-2 py-0.5 rounded-md bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300">
            Design Tokens & Estados
          </span>
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Exemplos de como compor estados (<code>hover:</code>, <code>focus:</code>, <code>active:</code>, <code>group-hover:</code>) em componentes profissionais.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* BLOCO 1: Botões e Variantes */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-6">
          <div>
            <h3 className="text-base font-semibold text-slate-900 dark:text-white">
              1. Botões & Variantes
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Uso de <code>active:scale-95</code>, sombras coloridas e gradientes.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {/* Primary */}
            <button className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-md shadow-blue-500/25 active:scale-95 transition-all">
              Primary Button
            </button>

            {/* Gradient */}
            <button className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 hover:opacity-95 text-white text-sm font-semibold shadow-lg shadow-purple-500/20 active:scale-95 transition-all">
              Gradient Glow
            </button>

            {/* Secondary */}
            <button className="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-sm font-semibold active:scale-95 transition-all">
              Secondary
            </button>

            {/* Outline */}
            <button className="px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-cyan-500 hover:text-cyan-500 text-slate-700 dark:text-slate-300 text-sm font-semibold active:scale-95 transition-all">
              Outline
            </button>

            {/* Loading Action */}
            <button
              onClick={() => {
                setBtnLoading(true);
                setTimeout(() => setBtnLoading(false), 2000);
              }}
              disabled={btnLoading}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-semibold active:scale-95 disabled:opacity-75 disabled:cursor-not-allowed transition-all"
            >
              {btnLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  <span>Processando...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Testar Loading</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* BLOCO 2: Inputs com Focus Ring */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-6">
          <div>
            <h3 className="text-base font-semibold text-slate-900 dark:text-white">
              2. Formulários & Focus Rings
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Uso de <code>focus:ring-4 focus:ring-blue-500/20</code> e estados de validação.
            </p>
          </div>

          <div className="space-y-4">
            {/* Input com Ícone */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Mail className="w-4 h-4" />
              </div>
              <input
                type="email"
                placeholder="nome@empresa.com"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
              />
            </div>

            {/* Input com Erro */}
            <div className="space-y-1">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-red-500">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type="password"
                  defaultValue="12345"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-red-50/50 dark:bg-red-950/20 border border-red-300 dark:border-red-900/60 text-sm text-red-900 dark:text-red-200 placeholder-red-400 focus:outline-none focus:ring-4 focus:ring-red-500/20 focus:border-red-500 transition-all"
                />
              </div>
              <p className="text-[11px] text-red-500 flex items-center gap-1 font-medium pl-1">
                <AlertCircle className="w-3 h-3" /> Senha muito curta (mínimo de 8 caracteres)
              </p>
            </div>
          </div>
        </div>

        {/* BLOCO 3: Badges & Tags */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-6">
          <div>
            <h3 className="text-base font-semibold text-slate-900 dark:text-white">
              3. Badges, Pílulas e Chips
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Cores semânticas usando opacidades suaves (ex.: <code>bg-emerald-50 text-emerald-700</code>).
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {[
              { label: 'Sucesso', dot: 'bg-emerald-500', color: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800' },
              { label: 'Alerta', dot: 'bg-amber-500', color: 'bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-400 border-amber-200 dark:border-amber-800' },
              { label: 'Erro Crítico', dot: 'bg-rose-500', color: 'bg-rose-50 text-rose-700 dark:bg-rose-950/50 dark:text-rose-400 border-rose-200 dark:border-rose-800' },
              { label: 'Em Desenvolvimento', dot: 'bg-blue-500', color: 'bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-400 border-blue-200 dark:border-blue-800' },
              { label: 'Tailwind v4', dot: 'bg-cyan-500', color: 'bg-cyan-50 text-cyan-700 dark:bg-cyan-950/50 dark:text-cyan-400 border-cyan-200 dark:border-cyan-800' },
            ].map((badge, idx) => (
              <span
                key={idx}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${badge.color}`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${badge.dot}`} />
                {badge.label}
              </span>
            ))}
          </div>
        </div>

        {/* BLOCO 4: Card Interativo com Group-Hover */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-6">
          <div>
            <h3 className="text-base font-semibold text-slate-900 dark:text-white">
              4. Card com <code>group-hover</code> e Zoom
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Passe o cursor sobre o card abaixo para ver as animações orquestradas pelo pai.
            </p>
          </div>

          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-tr from-slate-900 to-indigo-950 p-6 text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/20">
            {/* Imagem de fundo com zoom ao hover */}
            <div className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:scale-110 group-hover:opacity-40 transition-all duration-500" style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)' }} />

            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-500/30 text-indigo-300 border border-indigo-400/30">
                  Card de Demonstração
                </span>
                <button
                  onClick={handleToggleLike}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all active:scale-90"
                >
                  <Heart
                    className={`w-4 h-4 transition-colors ${
                      liked ? 'fill-rose-500 text-rose-500' : 'text-white'
                    }`}
                  />
                </button>
              </div>

              <div>
                <h4 className="text-lg font-bold group-hover:text-cyan-300 transition-colors">
                  Orquestração com <code>group-hover</code>
                </h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Quando o card recebe foco ou hover, elementos filhos disparam animações conjuntas: o botão abaixo surge suavemente!
                </p>
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-xs text-slate-400">{likes} curtidas</span>
                <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white text-slate-900 text-xs font-semibold opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all duration-300 shadow-lg">
                  <span>Ver Detalhes</span>
                  <Eye className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
