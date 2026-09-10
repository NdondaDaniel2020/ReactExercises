import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Terminal, Copy, Check } from 'lucide-react';
import { useState } from 'react';

export function ShowcaseTab(): React.JSX.Element {
  const [copied, setCopied] = useState<string>('');

  const copyCode = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(''), 2000);
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Galeria de Variantes do Shadcn UI
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Referência rápida de como consumir os componentes criados via <code>cva</code> e Radix UI.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* 1. Botões & Variantes */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Button (`cva` Variants)</CardTitle>
            <CardDescription>
              Variantes tipadas e manipuladas via <code>buttonVariants</code>.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Button variant="default">default</Button>
              <Button variant="secondary">secondary</Button>
              <Button variant="outline">outline</Button>
              <Button variant="destructive">destructive</Button>
              <Button variant="ghost">ghost</Button>
              <Button variant="link">link</Button>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <Button size="sm">Tamanho sm</Button>
              <Button size="default">Tamanho default</Button>
              <Button size="lg">Tamanho lg</Button>
              <Button size="icon" variant="outline" title="Icon size">
                ★
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* 2. Badges */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Badge (`cva` Variants)</CardTitle>
            <CardDescription>
              Etiquetas e pílulas semânticas para estados e contagens.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Badge variant="default">default</Badge>
              <Badge variant="secondary">secondary</Badge>
              <Badge variant="outline">outline</Badge>
              <Badge variant="destructive">destructive</Badge>
              <Badge variant="success">success</Badge>
            </div>

            <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-600 dark:text-slate-400">
              <code>&lt;Badge variant="success"&gt;Ativo&lt;/Badge&gt;</code>
            </div>
          </CardContent>
        </Card>

        {/* 3. Avatar (Radix Primitive) */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Avatar (Radix UI Primitive)</CardTitle>
            <CardDescription>
              Fallback automático em caso de erro no carregamento da imagem.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="text-center space-y-1">
                <Avatar className="h-12 w-12 border">
                  <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" />
                  <AvatarFallback>NM</AvatarFallback>
                </Avatar>
                <p className="text-[10px] text-slate-500">Imagem ativa</p>
              </div>

              <div className="text-center space-y-1">
                <Avatar className="h-12 w-12 border">
                  <AvatarImage src="url-quebrada.jpg" />
                  <AvatarFallback className="bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-300 font-bold">
                    JS
                  </AvatarFallback>
                </Avatar>
                <p className="text-[10px] text-slate-500">Fallback visual</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 4. Switch Toggle (Radix Primitive) */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Switch (Radix UI Primitive)</CardTitle>
            <CardDescription>
              Toggle 100% acessível via teclado e leitor de tela.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Switch id="demo-checked" defaultChecked />
                <Label htmlFor="demo-checked" className="text-xs">Ativado</Label>
              </div>

              <div className="flex items-center gap-2">
                <Switch id="demo-unchecked" />
                <Label htmlFor="demo-unchecked" className="text-xs">Desativado</Label>
              </div>

              <div className="flex items-center gap-2">
                <Switch id="demo-disabled" disabled />
                <Label htmlFor="demo-disabled" className="text-xs text-slate-400">Desabilitado</Label>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Snippet didático de como o Shadcn funciona */}
      <Card className="bg-slate-950 text-slate-100 border-slate-800">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-mono flex items-center gap-2 text-cyan-400">
              <Terminal className="w-4 h-4" />
              Como utilizar no seu projeto:
            </CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => copyCode('import { Button } from "@/components/ui/button";\nimport { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";')}
              className="text-xs text-slate-400 hover:text-white"
            >
              {copied ? <Check className="w-3.5 h-3.5 mr-1 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 mr-1" />}
              {copied ? 'Copiado!' : 'Copiar'}
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <pre className="text-xs font-mono text-slate-300 overflow-x-auto">
{`import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";

export function MeuComponente() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Título com Shadcn UI</CardTitle>
      </CardHeader>
      <CardContent>
        <Button variant="outline">Clique aqui</Button>
      </CardContent>
    </Card>
  );
}`}
          </pre>
        </CardContent>
      </Card>
    </div>
  );
}
