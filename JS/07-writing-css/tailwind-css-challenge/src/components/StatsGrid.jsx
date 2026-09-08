import { TrendingUp, Users, Zap, ShieldCheck, ArrowUpRight } from 'lucide-react';

export function StatsGrid() {
  const stats = [
    {
      title: 'Taxa de Conversão',
      value: '24.8%',
      change: '+14.2%',
      isPositive: true,
      icon: TrendingUp,
      gradient: 'from-emerald-500 to-teal-600',
      shadow: 'shadow-emerald-500/20',
      helper: 'Tailwind: flex, items-center, gap-2',
    },
    {
      title: 'Usuários Ativos',
      value: '14,290',
      change: '+28.4%',
      isPositive: true,
      icon: Users,
      gradient: 'from-blue-500 to-indigo-600',
      shadow: 'shadow-blue-500/20',
      helper: 'Tailwind: sm:col-span-1, lg:col-span-1',
    },
    {
      title: 'Tempo de Render',
      value: '1.2ms',
      change: '-45.0%',
      isPositive: true,
      icon: Zap,
      gradient: 'from-amber-500 to-orange-600',
      shadow: 'shadow-amber-500/20',
      helper: 'Tailwind: hover:scale-[1.02] transition',
    },
    {
      title: 'Segurança & Uptime',
      value: '99.98%',
      change: '+0.04%',
      isPositive: true,
      icon: ShieldCheck,
      gradient: 'from-purple-500 to-pink-600',
      shadow: 'shadow-purple-500/20',
      helper: 'Tailwind: dark:bg-slate-900 border',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            Métricas de Desempenho
            <span className="text-xs font-medium px-2 py-0.5 rounded-md bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
              Grid Responsivo (1 → 2 → 4 colunas)
            </span>
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Demonstração de <code>grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6</code>
          </p>
        </div>
      </div>

      {/* Grid de Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-800/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Brilho decorativo no topo do card ao passar o mouse */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${stat.gradient} flex items-center justify-center text-white shadow-lg ${stat.shadow} group-hover:rotate-6 transition-transform`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <span className="inline-flex items-center gap-0.5 text-xs font-semibold px-2 py-1 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                  {stat.change}
                </span>
              </div>

              <div className="space-y-1">
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  {stat.title}
                </p>
                <p className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {stat.value}
                </p>
              </div>

              {/* Dica da classe Tailwind */}
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/60">
                <p className="text-[11px] font-mono text-slate-400 dark:text-slate-500 truncate">
                  {stat.helper}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
