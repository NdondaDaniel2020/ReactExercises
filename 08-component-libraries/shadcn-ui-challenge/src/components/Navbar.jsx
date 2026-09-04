import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Sun, Moon, Layers, Terminal } from 'lucide-react';

export function Navbar({ darkMode, onToggleDarkMode }) {
  return (
    <header className="border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-slate-900 dark:bg-slate-50 text-white dark:text-slate-900 flex items-center justify-center font-bold text-base shadow-sm">
            /
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-base tracking-tight text-slate-900 dark:text-slate-50">
                shadcn/ui
              </span>
              <Badge variant="outline" className="text-[10px] py-0 px-1.5 font-mono">
                React 19
              </Badge>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              08-component-libraries • Code Ownership Architecture
            </p>
          </div>
        </div>

        {/* Actions & Avatar */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggleDarkMode}
            title="Alternar Modo Escuro"
            className="rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </Button>

          <div className="h-4 w-px bg-slate-200 dark:bg-slate-800 mx-1" />

          <div className="flex items-center gap-2.5">
            <Avatar className="h-8 w-8 border border-slate-200 dark:border-slate-800">
              <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" />
              <AvatarFallback>NM</AvatarFallback>
            </Avatar>
            <div className="hidden sm:block text-left">
              <p className="text-xs font-semibold text-slate-900 dark:text-slate-100 leading-none">
                N. Matondo
              </p>
              <p className="text-[10px] text-slate-500 dark:text-slate-400">Admin</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
