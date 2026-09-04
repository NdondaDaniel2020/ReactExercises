import * as React from 'react';
import * as Select from '@radix-ui/react-select';
import { ChevronDown, Check, Mic2 } from 'lucide-react';

export function SelectDemo() {
  const [device, setDevice] = React.useState('condenser');

  return (
    <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
      <div>
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          5. Select Customizado Acessível com Typeahead
        </h3>
        <p className="text-xs text-slate-400">
          Primitiva <code>@radix-ui/react-select</code>: digite a primeira letra para navegar instantaneamente!
        </p>
      </div>

      <div className="max-w-md">
        <Select.Root value={device} onValueChange={setDevice}>
          <Select.Trigger
            className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-sm font-medium hover:border-slate-700 outline-none focus:ring-2 focus:ring-violet-400 transition-all cursor-pointer"
            aria-label="Microfone Principal"
          >
            <span className="flex items-center gap-2">
              <Mic2 className="w-4 h-4 text-violet-400" />
              <Select.Value placeholder="Selecione o dispositivo..." />
            </span>
            <Select.Icon>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </Select.Icon>
          </Select.Trigger>

          <Select.Portal>
            <Select.Content
              className="overflow-hidden bg-slate-900 text-slate-100 rounded-xl border border-slate-800 shadow-2xl z-50 animate-in fade-in-0 zoom-in-95"
              position="popper"
              sideOffset={5}
            >
              <Select.Viewport className="p-1.5">
                <Select.Group>
                  <Select.Label className="px-3 py-1.5 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Dispositivos de Entrada (Microfones)
                  </Select.Label>

                  {[
                    { value: 'condenser', label: 'Shure SM7B (Microfone Dinâmico)' },
                    { value: 'rode', label: 'Rode NT1-A (Condensador de Estúdio)' },
                    { value: 'usb', label: 'Blue Yeti Pro (Conexão USB-C)' },
                    { value: 'wireless', label: 'Sennheiser Wireless G4' },
                  ].map((item) => (
                    <Select.Item
                      key={item.value}
                      value={item.value}
                      className="flex items-center justify-between px-3 py-2 text-xs font-medium rounded-lg cursor-pointer outline-none hover:bg-violet-600 hover:text-white focus:bg-violet-600 focus:text-white transition-colors"
                    >
                      <Select.ItemText>{item.label}</Select.ItemText>
                      <Select.ItemIndicator>
                        <Check className="w-3.5 h-3.5 text-violet-300" />
                      </Select.ItemIndicator>
                    </Select.Item>
                  ))}
                </Select.Group>
              </Select.Viewport>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
      </div>
    </div>
  );
}
