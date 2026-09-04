import * as React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import {
  ChevronRight,
  Check,
  Circle,
  Menu,
  FilePlus,
  FolderOpen,
  Save,
  Share2,
  Trash,
  Settings,
  SlidersHorizontal,
} from 'lucide-react';

export function DropdownMenuDemo() {
  const [showToolbar, setShowToolbar] = React.useState(true);
  const [showBookmarks, setShowBookmarks] = React.useState(false);
  const [audioFormat, setAudioFormat] = React.useState('wav');

  return (
    <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            1. Dropdown Menu com Submenus & Atalhos
          </h3>
          <p className="text-xs text-slate-400">
            Primitiva <code>@radix-ui/react-dropdown-menu</code>: navegue com <kbd className="px-1 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-violet-300">↑</kbd> <kbd className="px-1 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-violet-300">↓</kbd> <kbd className="px-1 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-violet-300">→</kbd> <kbd className="px-1 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-violet-300">ESC</kbd>.
          </p>
        </div>
      </div>

      <div className="pt-2">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold shadow-lg shadow-violet-500/25 transition-all outline-none focus:ring-2 focus:ring-violet-400">
              <Menu className="w-4 h-4" />
              Menu do Estúdio (Opções)
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content
              className="min-w-[220px] bg-slate-900 text-slate-100 rounded-xl p-1.5 shadow-2xl border border-slate-800 z-50 animate-in fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2"
              sideOffset={6}
            >
              <DropdownMenu.Item className="flex items-center justify-between px-3 py-2 text-xs font-medium rounded-lg cursor-pointer outline-none hover:bg-violet-600 hover:text-white focus:bg-violet-600 focus:text-white transition-colors">
                <span className="flex items-center gap-2">
                  <FilePlus className="w-3.5 h-3.5" /> Novo Projeto
                </span>
                <span className="text-[10px] font-mono text-slate-400">⌘N</span>
              </DropdownMenu.Item>

              <DropdownMenu.Item className="flex items-center justify-between px-3 py-2 text-xs font-medium rounded-lg cursor-pointer outline-none hover:bg-violet-600 hover:text-white focus:bg-violet-600 focus:text-white transition-colors">
                <span className="flex items-center gap-2">
                  <FolderOpen className="w-3.5 h-3.5" /> Abrir Arquivo...
                </span>
                <span className="text-[10px] font-mono text-slate-400">⌘O</span>
              </DropdownMenu.Item>

              <DropdownMenu.Item className="flex items-center justify-between px-3 py-2 text-xs font-medium rounded-lg cursor-pointer outline-none hover:bg-violet-600 hover:text-white focus:bg-violet-600 focus:text-white transition-colors">
                <span className="flex items-center gap-2">
                  <Save className="w-3.5 h-3.5" /> Salvar Sessão
                </span>
                <span className="text-[10px] font-mono text-slate-400">⌘S</span>
              </DropdownMenu.Item>

              {/* Submenu Aninhado */}
              <DropdownMenu.Sub>
                <DropdownMenu.SubTrigger className="flex items-center justify-between px-3 py-2 text-xs font-medium rounded-lg cursor-pointer outline-none hover:bg-violet-600 hover:text-white focus:bg-violet-600 focus:text-white data-[state=open]:bg-violet-600 data-[state=open]:text-white transition-colors">
                  <span className="flex items-center gap-2">
                    <Share2 className="w-3.5 h-3.5" /> Exportar Mix
                  </span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </DropdownMenu.SubTrigger>

                <DropdownMenu.Portal>
                  <DropdownMenu.SubContent
                    className="min-w-[180px] bg-slate-900 text-slate-100 rounded-xl p-1.5 shadow-2xl border border-slate-800 z-50 animate-in fade-in-0 zoom-in-95"
                    sideOffset={4}
                  >
                    <DropdownMenu.RadioGroup value={audioFormat} onValueChange={setAudioFormat}>
                      <DropdownMenu.RadioItem
                        value="wav"
                        className="flex items-center justify-between px-3 py-2 text-xs font-medium rounded-lg cursor-pointer outline-none hover:bg-violet-600 hover:text-white focus:bg-violet-600 focus:text-white transition-colors"
                      >
                        <span>WAV (Sem Perdas)</span>
                        <DropdownMenu.ItemIndicator>
                          <Check className="w-3.5 h-3.5 text-violet-400" />
                        </DropdownMenu.ItemIndicator>
                      </DropdownMenu.RadioItem>

                      <DropdownMenu.RadioItem
                        value="mp3"
                        className="flex items-center justify-between px-3 py-2 text-xs font-medium rounded-lg cursor-pointer outline-none hover:bg-violet-600 hover:text-white focus:bg-violet-600 focus:text-white transition-colors"
                      >
                        <span>MP3 (320 kbps)</span>
                        <DropdownMenu.ItemIndicator>
                          <Check className="w-3.5 h-3.5 text-violet-400" />
                        </DropdownMenu.ItemIndicator>
                      </DropdownMenu.RadioItem>

                      <DropdownMenu.RadioItem
                        value="flac"
                        className="flex items-center justify-between px-3 py-2 text-xs font-medium rounded-lg cursor-pointer outline-none hover:bg-violet-600 hover:text-white focus:bg-violet-600 focus:text-white transition-colors"
                      >
                        <span>FLAC (Audiophile)</span>
                        <DropdownMenu.ItemIndicator>
                          <Check className="w-3.5 h-3.5 text-violet-400" />
                        </DropdownMenu.ItemIndicator>
                      </DropdownMenu.RadioItem>
                    </DropdownMenu.RadioGroup>
                  </DropdownMenu.SubContent>
                </DropdownMenu.Portal>
              </DropdownMenu.Sub>

              <DropdownMenu.Separator className="h-px bg-slate-800 my-1.5" />

              {/* Checkbox Items */}
              <DropdownMenu.CheckboxItem
                checked={showToolbar}
                onCheckedChange={setShowToolbar}
                className="flex items-center justify-between px-3 py-2 text-xs font-medium rounded-lg cursor-pointer outline-none hover:bg-violet-600 hover:text-white focus:bg-violet-600 focus:text-white transition-colors"
              >
                <span>Exibir Barra de Efeitos</span>
                <DropdownMenu.ItemIndicator>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                </DropdownMenu.ItemIndicator>
              </DropdownMenu.CheckboxItem>

              <DropdownMenu.CheckboxItem
                checked={showBookmarks}
                onCheckedChange={setShowBookmarks}
                className="flex items-center justify-between px-3 py-2 text-xs font-medium rounded-lg cursor-pointer outline-none hover:bg-violet-600 hover:text-white focus:bg-violet-600 focus:text-white transition-colors"
              >
                <span>Marcadores de Tempo</span>
                <DropdownMenu.ItemIndicator>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                </DropdownMenu.ItemIndicator>
              </DropdownMenu.CheckboxItem>

              <DropdownMenu.Separator className="h-px bg-slate-800 my-1.5" />

              <DropdownMenu.Item className="flex items-center justify-between px-3 py-2 text-xs font-medium rounded-lg cursor-pointer outline-none text-rose-400 hover:bg-rose-600 hover:text-white focus:bg-rose-600 focus:text-white transition-colors">
                <span className="flex items-center gap-2">
                  <Trash className="w-3.5 h-3.5" /> Limpar Faixas
                </span>
                <span className="text-[10px] font-mono">⇧⌘⌫</span>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>

      <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-400 flex flex-wrap items-center gap-4">
        <span>Estado ativo: Formato <strong>{audioFormat.toUpperCase()}</strong></span>
        <span>Barra de Efeitos: <strong>{showToolbar ? 'Ligada' : 'Desligada'}</strong></span>
        <span>Marcadores: <strong>{showBookmarks ? 'Visíveis' : 'Ocultos'}</strong></span>
      </div>
    </div>
  );
}
