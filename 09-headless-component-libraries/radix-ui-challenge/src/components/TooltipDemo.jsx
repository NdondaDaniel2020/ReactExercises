import * as React from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import { Info, Play, Pause, FastForward, Rewind, Radio } from 'lucide-react';

export function TooltipDemo() {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const controls = [
    { icon: Rewind, tooltip: 'Retroceder 15 segundos (J)' },
    {
      icon: isPlaying ? Pause : Play,
      tooltip: isPlaying ? 'Pausar reprodução (Espaço)' : 'Iniciar reprodução (Espaço)',
      action: () => setIsPlaying(!isPlaying),
      highlight: true,
    },
    { icon: FastForward, tooltip: 'Avançar 15 segundos (L)' },
    { icon: Radio, tooltip: 'Modo Transmissão Ao Vivo (M)' },
  ];

  return (
    <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
      <div>
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          6. Tooltips com Delay Controlado & Acessibilidade
        </h3>
        <p className="text-xs text-slate-400">
          Primitiva <code>@radix-ui/react-tooltip</code>: posicione o cursor sobre os botões de transporte do player.
        </p>
      </div>

      <Tooltip.Provider delayDuration={200}>
        <div className="flex items-center gap-3 pt-2">
          {controls.map((ctrl, i) => {
            const Icon = ctrl.icon;
            return (
              <Tooltip.Root key={i}>
                <Tooltip.Trigger asChild>
                  <button
                    onClick={ctrl.action}
                    className={`p-3 rounded-xl border transition-all active:scale-95 outline-none focus:ring-2 focus:ring-violet-400 ${
                      ctrl.highlight
                        ? 'bg-violet-600 hover:bg-violet-500 text-white border-violet-500 shadow-lg shadow-violet-500/20'
                        : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-800'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </button>
                </Tooltip.Trigger>

                <Tooltip.Portal>
                  <Tooltip.Content
                    className="px-2.5 py-1.5 rounded-lg bg-slate-800 text-slate-100 text-xs font-semibold shadow-xl border border-slate-700 z-50 animate-in fade-in-0 zoom-in-95 data-[side=top]:slide-in-from-bottom-1"
                    sideOffset={6}
                  >
                    {ctrl.tooltip}
                    <Tooltip.Arrow className="fill-slate-800" />
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            );
          })}
        </div>
      </Tooltip.Provider>
    </div>
  );
}
