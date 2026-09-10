import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowUpRight, DollarSign, Users, CreditCard, Activity, Sparkles, type LucideIcon } from 'lucide-react';

export interface OverviewTabProps {
  onGoToTeam: () => void;
}

interface StatItem {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
}

interface RecentMember {
  name: string;
  email: string;
  role: string;
  amount: string;
  avatar: string;
  initials: string;
}

export function OverviewTab({ onGoToTeam }: OverviewTabProps): React.JSX.Element {
  const stats: StatItem[] = [
    {
      title: 'Receita Recorrente (MRR)',
      value: '$45,231.89',
      change: '+20.1% em relação ao mês anterior',
      icon: DollarSign,
    },
    {
      title: 'Assinaturas Ativas',
      value: '+2,350',
      change: '+180.1% em relação ao mês anterior',
      icon: Users,
    },
    {
      title: 'Vendas Realizadas',
      value: '+12,234',
      change: '+19% em relação ao mês anterior',
      icon: CreditCard,
    },
    {
      title: 'Taxa de Conversão',
      value: '+573',
      change: '+201 desde a última hora',
      icon: Activity,
    },
  ];

  const recentMembers: RecentMember[] = [
    { name: 'Olivia Martin', email: 'olivia.martin@email.com', role: 'Designer', amount: '+$1,999.00', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80', initials: 'OM' },
    { name: 'Jackson Lee', email: 'jackson.lee@email.com', role: 'Dev Lead', amount: '+$39.00', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80', initials: 'JL' },
    { name: 'Isabella Nguyen', email: 'isabella.nguyen@email.com', role: 'Product Manager', amount: '+$299.00', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80', initials: 'IN' },
    { name: 'William Kim', email: 'will@email.com', role: 'Frontend Eng', amount: '+$99.00', avatar: '', initials: 'WK' },
  ];

  return (
    <div className="space-y-6">
      {/* Hero Welcome Card */}
      <Card className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-950 text-white border-none shadow-md">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div className="space-y-1">
            <Badge className="bg-white/10 text-white hover:bg-white/20 border-none backdrop-blur-sm">
              ✨ Filosofia Shadcn UI
            </Badge>
            <CardTitle className="text-xl sm:text-2xl font-bold text-white">
              Componentes que pertencem a você
            </CardTitle>
            <CardDescription className="text-slate-300 max-w-xl text-xs sm:text-sm">
              Diferente do Material UI ou Chakra, você não instala o Shadcn como pacote fechado. O código de cada componente fica na pasta <code>src/components/ui/</code> para você customizar livremente.
            </CardDescription>
          </div>
          <Button
            onClick={onGoToTeam}
            className="hidden sm:inline-flex bg-white text-slate-900 hover:bg-slate-100 font-semibold"
          >
            Gerenciar Equipe
          </Button>
        </CardHeader>
      </Card>

      {/* Grid de Métricas */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <Card key={i}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-slate-500 dark:text-slate-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                  {stat.value}
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1">
                  <ArrowUpRight className="h-3 w-3 text-emerald-500" />
                  {stat.change}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Seção Secundária: Membros e Atividade */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle className="text-base">Membros Recentes da Equipe</CardTitle>
            <CardDescription>
              Você tem 4 membros ativos com permissões de acesso ao workspace.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentMembers.map((member, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9">
                      <AvatarImage src={member.avatar} />
                      <AvatarFallback>{member.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium text-slate-900 dark:text-slate-100 leading-none">
                        {member.name}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        {member.email}
                      </p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {member.role}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Card Didático de Dicas do Shadcn */}
        <Card className="col-span-3 bg-slate-50/50 dark:bg-slate-900/30">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-500" />
              Pilares do Radix + CVA
            </CardTitle>
            <CardDescription>O que torna essa arquitetura padrão na indústria:</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
            <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <strong>1. Acessibilidade Radix:</strong> Gerenciamento de foco, teclado (ESC, Tab, setas) e atributos ARIA automáticos.
            </div>
            <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <strong>2. `cva` para Variantes:</strong> Cria variações tipadas (`default`, `destructive`, `ghost`) de forma declarativa.
            </div>
            <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <strong>3. Função `cn()`:</strong> Resolve colisões com `tailwind-merge` (ex: `p-2` sobrescrito por `p-4`).
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
