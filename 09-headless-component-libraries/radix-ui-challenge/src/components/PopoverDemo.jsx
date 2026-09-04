import * as React from 'react';
import * as Popover from '@radix-ui/react-popover';
import { Settings2, X, Sliders, Check } from 'lucide-react';

export function PopoverDemo() {
  const [latency, setLatency] = React.useState('low');
  const [channels, setChannels] = React.useState('stereo');

  return (
    <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
      <div>
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          4. Popover com Detecção Automática de Colisão
        </h3>
        <p className="text-xs text-slate-400">
          Primitiva <code>@radix-ui/react-popover</code>: calcula viewport, não vaza fora da tela e gerencia foco.
        </p>
      </div>

      <div>
        <Popover.Root>
          <Popover.Trigger asChild>
            <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-sm font-semibold border border-slate-700 transition-all outline-none focus:ring-2 focus:ring-violet-400">
              <Settings2 className="w-4 h-4 text-violet-400" />
              Parâmetros da Placa de Áudio
            </button>
          </Popover.Trigger>

          <Popover.Portal>
            <Popover.Content
              className="w-80 rounded-2xl p-5 bg-slate-900 border border-slate-800 text-slate-100 shadow-2xl z-50 animate-in fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2"
              sideOffset={8}
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <h4 className="text-sm font-bold flex items-center gap-2 text-white">
                  <Sliders className="w-4 h-4 text-violet-400" /> Latência & Canais
                </h4>
                <Popover.Close className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
                  <X className="w-4 h-4" />
                </Popover.Close>
              </div>

              <div className="py-4 space-y-4 text-xs">
                <div className="space-y-1.5">
                  <label className="font-semibold text-slate-300">Modo de Latência (Buffer)</label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: 'low', label: 'Ultra Baixa (64s)' },
                      { id: 'safe', label: 'Segura (256s)' },
                    ].map((m) => (
                      <button
                        key={m.id}
                        onClick={() => setLatency(m.id)}
                        className={`p-2 rounded-lg border text-left font-medium transition-all ${
                          latency === m.id
                            ? 'bg-violet-600/20 border-violet-500 text-violet-300'
                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-800'
                        }`}
                      >
                        {m.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-semibold text-slate-300">Canais de Saída</label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: 'stereo', label: 'Estéreo (L/R)' },
                      { id: 'surround', label: 'Surround 5.1' },
                    ].map((c) => (
                      <button
                        key={c.id}
                        onClick={() => setChannels(c.id)}
                        className={`p-2 rounded-lg border text-left font-medium transition-all ${
                          channels === c.id
                            ? 'bg-violet-600/20 border-violet-500 text-violet-300'
                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-800'
                        }`}
                      >
                        {c.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <Popover.Arrow className="fill-slate-900" />
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      </div>
    </div>
  );
}
