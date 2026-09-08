import { BookOpen, CheckCircle2, Cpu, Sparkles } from 'lucide-react';

export function Footer() {
  const concepts = [
    {
      title: 'Zero-Config v4',
      desc: 'Plugin @tailwindcss/vite dispensa postcss.config.js e tailwind.config.js.',
      icon: Cpu,
    },
    {
      title: 'Mobile-First',
      desc: 'Classes sem prefixo valem para mobile; sm:, md: e lg: aplicam min-width.',
      icon: CheckCircle2,
    },
    {
      title: 'Pseudo-Classes',
      desc: 'hover:, focus:, active:, disabled: e group-hover: para interatividade fluida.',
      icon: Sparkles,
    },
    {
      title: 'Dark Mode Nativo',
      desc: 'Variante dark: acoplada à classe .dark no html para troca instantânea.',
      icon: BookOpen,
    },
  ];

  return (
    <footer className="mt-16 pt-12 pb-8 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {concepts.map((concept, idx) => {
          const Icon = concept.icon;
          return (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 space-y-2"
            >
              <div className="flex items-center gap-2 text-blue-600 dark:text-cyan-400">
                <Icon className="w-4 h-4" />
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  {concept.title}
                </h4>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {concept.desc}
              </p>
            </div>
          );
        })}
      </div>

      <div className="text-center text-xs text-slate-400 dark:text-slate-500">
        <p>Exercício 07: Writing CSS (Tailwind CSS v4) • React Exercises Roadmap</p>
      </div>
    </footer>
  );
}
