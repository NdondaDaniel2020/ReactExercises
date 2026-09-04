import { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { OverviewTab } from '@/components/OverviewTab';
import { TeamTab } from '@/components/TeamTab';
import { SettingsTab } from '@/components/SettingsTab';
import { ShowcaseTab } from '@/components/ShowcaseTab';
import { LayoutDashboard, Users, Settings, Palette } from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('shadcn-theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('shadcn-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('shadcn-theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      {/* Navbar com perfil e alternador de modo escuro */}
      <Navbar darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />

      {/* Container Principal */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          {/* Barra de Tabs acessível via Radix UI */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-2 border-b border-slate-200 dark:border-slate-800">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
                Workspace Dashboard
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Gerencie sua organização com componentes acessíveis e elegantes do Shadcn UI.
              </p>
            </div>

            <TabsList className="grid grid-cols-4 w-full sm:w-auto">
              <TabsTrigger value="overview" className="gap-1.5 text-xs">
                <LayoutDashboard className="w-3.5 h-3.5 hidden sm:inline-block" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="team" className="gap-1.5 text-xs">
                <Users className="w-3.5 h-3.5 hidden sm:inline-block" />
                Equipe
              </TabsTrigger>
              <TabsTrigger value="settings" className="gap-1.5 text-xs">
                <Settings className="w-3.5 h-3.5 hidden sm:inline-block" />
                Ajustes
              </TabsTrigger>
              <TabsTrigger value="showcase" className="gap-1.5 text-xs">
                <Palette className="w-3.5 h-3.5 hidden sm:inline-block" />
                Galeria UI
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Conteúdo de cada Tab */}
          <TabsContent value="overview">
            <OverviewTab onGoToTeam={() => setActiveTab('team')} />
          </TabsContent>

          <TabsContent value="team">
            <TeamTab />
          </TabsContent>

          <TabsContent value="settings">
            <SettingsTab />
          </TabsContent>

          <TabsContent value="showcase">
            <ShowcaseTab />
          </TabsContent>
        </Tabs>

        {/* Rodapé Didático */}
        <footer className="pt-10 pb-6 border-t border-slate-200 dark:border-slate-800 text-center space-y-1">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Exercício 08: Component Libraries (Shadcn UI) • React Roadmap
          </p>
          <p className="text-[11px] text-slate-400 dark:text-slate-500">
            Construído com React 19, Radix UI Primitives, Tailwind CSS v4 e class-variance-authority.
          </p>
        </footer>
      </main>
    </div>
  );
}
