import * as React from 'react';
import * as Slider from '@radix-ui/react-slider';
import { Volume2, Sliders, Waves } from 'lucide-react';

export function SliderDemo() {
  const [volume, setVolume] = React.useState([75]);
  const [bass, setBass] = React.useState([40]);
  const [treble, setTreble] = React.useState([60]);

  return (
    <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            3. Sliders Acessíveis de Áudio
          </h3>
          <p className="text-xs text-slate-400">
            Primitiva <code>@radix-ui/react-slider</code>: arraste ou ajuste com setas <kbd className="px-1 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-violet-300">←</kbd> <kbd className="px-1 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-violet-300">→</kbd>.
          </p>
        </div>
      </div>

      <div className="space-y-5 max-w-xl">
        {/* Slider 1: Volume Principal */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-semibold">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Volume2 className="w-4 h-4 text-violet-400" />
              Volume Master
            </span>
            <span className="font-mono text-violet-400">{volume[0]}%</span>
          </div>

          <Slider.Root
            className="relative flex items-center select-none touch-none w-full h-5 cursor-pointer"
            value={volume}
            onValueChange={setVolume}
            max={100}
            step={1}
            aria-label="Volume Master"
          >
            <Slider.Track className="bg-slate-800 relative grow rounded-full h-2">
              <Slider.Range className="absolute bg-gradient-to-r from-violet-600 to-indigo-500 rounded-full h-full" />
            </Slider.Track>
            <Slider.Thumb className="block w-5 h-5 bg-white rounded-full shadow-lg border-2 border-violet-600 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-violet-500/30 transition-all" />
          </Slider.Root>
        </div>

        {/* Slider 2: Graves (Bass) */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-semibold">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Waves className="w-4 h-4 text-cyan-400" />
              Graves (Bass)
            </span>
            <span className="font-mono text-cyan-400">{bass[0]} dB</span>
          </div>

          <Slider.Root
            className="relative flex items-center select-none touch-none w-full h-5 cursor-pointer"
            value={bass}
            onValueChange={setBass}
            max={100}
            step={1}
            aria-label="Bass Level"
          >
            <Slider.Track className="bg-slate-800 relative grow rounded-full h-2">
              <Slider.Range className="absolute bg-gradient-to-r from-cyan-600 to-blue-500 rounded-full h-full" />
            </Slider.Track>
            <Slider.Thumb className="block w-5 h-5 bg-white rounded-full shadow-lg border-2 border-cyan-500 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-cyan-500/30 transition-all" />
          </Slider.Root>
        </div>

        {/* Slider 3: Agudos (Treble) */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-semibold">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Sliders className="w-4 h-4 text-emerald-400" />
              Agudos (Treble)
            </span>
            <span className="font-mono text-emerald-400">{treble[0]}%</span>
          </div>

          <Slider.Root
            className="relative flex items-center select-none touch-none w-full h-5 cursor-pointer"
            value={treble}
            onValueChange={setTreble}
            max={100}
            step={1}
            aria-label="Treble Level"
          >
            <Slider.Track className="bg-slate-800 relative grow rounded-full h-2">
              <Slider.Range className="absolute bg-gradient-to-r from-emerald-600 to-teal-500 rounded-full h-full" />
            </Slider.Track>
            <Slider.Thumb className="block w-5 h-5 bg-white rounded-full shadow-lg border-2 border-emerald-500 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-emerald-500/30 transition-all" />
          </Slider.Root>
        </div>
      </div>
    </div>
  );
}
