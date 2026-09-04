import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Bell, Shield, Key, Check } from 'lucide-react';

export function SettingsTab() {
  const [workspaceName, setWorkspaceName] = useState('React Masterclass Hub');
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [twoFactor, setTwoFactor] = useState(false);
  const [marketingEmails, setMarketingEmails] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      {/* Configurações Gerais */}
      <Card>
        <CardHeader>
          <CardTitle>Configurações do Workspace</CardTitle>
          <CardDescription>
            Demonstração de <strong>Input</strong> e <strong>Label</strong> do Shadcn com estilos semânticos.
          </CardDescription>
        </CardHeader>

        <form onSubmit={handleSave}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="ws-name">Nome do Workspace</Label>
              <Input
                id="ws-name"
                value={workspaceName}
                onChange={(e) => setWorkspaceName(e.target.value)}
                placeholder="Nome da sua organização"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="ws-url">Slug da URL</Label>
              <div className="flex rounded-md shadow-xs">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-500 text-xs font-mono">
                  app.workspace.io/
                </span>
                <Input
                  id="ws-url"
                  defaultValue="react-masterclass"
                  className="rounded-l-none"
                />
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-4">
            {savedSuccess ? (
              <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> Configurações salvas!
              </span>
            ) : (
              <span className="text-xs text-slate-500">Alterações salvas localmente</span>
            )}
            <Button type="submit">Salvar Alterações</Button>
          </CardFooter>
        </form>
      </Card>

      {/* Switches e Acessibilidade (Radix UI Switch) */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="w-5 h-5 text-slate-700 dark:text-slate-300" />
            Preferências & Notificações (Radix Switch)
          </CardTitle>
          <CardDescription>
            O componente <strong>Switch</strong> utiliza as primitivas do Radix UI com suporte nativo a leitores de tela e tecla <kbd className="px-1 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-mono">Space</kbd>.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="flex items-center justify-between space-x-4">
            <div className="space-y-0.5">
              <Label htmlFor="email-notifs" className="text-sm font-semibold">
                Alertas por E-mail em tempo real
              </Label>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Receba notificações quando novos membros forem convidados ou removerem dados.
              </p>
            </div>
            <Switch
              id="email-notifs"
              checked={emailAlerts}
              onCheckedChange={setEmailAlerts}
            />
          </div>

          <div className="border-t border-slate-100 dark:border-slate-800 pt-4 flex items-center justify-between space-x-4">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <Label htmlFor="2fa" className="text-sm font-semibold">
                  Autenticação de Dois Fatores (2FA)
                </Label>
                <Badge variant="outline" className="text-[10px]">Recomendado</Badge>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Exige um token de verificação TOTP ao realizar login administrativo.
              </p>
            </div>
            <Switch
              id="2fa"
              checked={twoFactor}
              onCheckedChange={setTwoFactor}
            />
          </div>

          <div className="border-t border-slate-100 dark:border-slate-800 pt-4 flex items-center justify-between space-x-4">
            <div className="space-y-0.5">
              <Label htmlFor="marketing" className="text-sm font-semibold">
                Atualizações do Ecossistema React
              </Label>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Resumos mensais com novidades do Shadcn UI, Tailwind e React 19.
              </p>
            </div>
            <Switch
              id="marketing"
              checked={marketingEmails}
              onCheckedChange={setMarketingEmails}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
