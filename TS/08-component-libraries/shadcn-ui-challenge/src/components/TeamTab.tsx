import { useState, type FormEvent } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { UserPlus, Trash2 } from 'lucide-react';

interface Member {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  avatar: string;
  initials: string;
}

export function TeamTab(): React.JSX.Element {
  const [members, setMembers] = useState<Member[]>([
    { id: 1, name: 'Ndonda Matondo', email: 'nmatondo@workspace.io', role: 'Owner', status: 'Ativo', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80', initials: 'NM' },
    { id: 2, name: 'Camila Santos', email: 'camila@workspace.io', role: 'Admin', status: 'Ativo', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80', initials: 'CS' },
    { id: 3, name: 'Lucas Ferreira', email: 'lucas@workspace.io', role: 'Developer', status: 'Ativo', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80', initials: 'LF' },
    { id: 4, name: 'Mariana Costa', email: 'mariana@workspace.io', role: 'Designer', status: 'Pendente', avatar: '', initials: 'MC' },
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [newEmail, setNewEmail] = useState<string>('');
  const [newName, setNewName] = useState<string>('');
  const [newRole, setNewRole] = useState<string>('Developer');

  const handleInvite = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newEmail.trim() || !newName.trim()) return;

    const newMember: Member = {
      id: Date.now(),
      name: newName.trim(),
      email: newEmail.trim(),
      role: newRole,
      status: 'Pendente',
      avatar: '',
      initials: newName.slice(0, 2).toUpperCase(),
    };

    setMembers((prev) => [...prev, newMember]);
    setNewEmail('');
    setNewName('');
    setIsDialogOpen(false);
  };

  const handleRemoveMember = (id: number) => {
    setMembers((prev) => prev.filter((m) => m.id !== id));
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <CardTitle className="text-xl">Gestão de Equipe & Colaboradores</CardTitle>
            <CardDescription>
              Demonstração do componente <strong>Dialog (Modal)</strong> acessível do Shadcn UI construído com Radix UI.
            </CardDescription>
          </div>

          {/* Dialog / Modal do Shadcn UI */}
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="gap-2 shadow-sm">
                <UserPlus className="w-4 h-4" />
                Convidar Membro
              </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Convidar Novo Membro</DialogTitle>
                <DialogDescription>
                  Envie um convite para colaborar neste workspace. O modal possui focus-trap e fecha com <kbd className="px-1 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-mono">ESC</kbd>.
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleInvite} className="space-y-4 py-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input
                    id="name"
                    placeholder="Ex: Beatriz Lima"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Endereço de E-mail</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="exemplo@workspace.io"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role">Função / Cargo</Label>
                  <select
                    id="role"
                    value={newRole}
                    onChange={(e) => setNewRole(e.target.value)}
                    className="flex h-9 w-full rounded-md border border-slate-200 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors dark:border-slate-800 dark:bg-slate-950 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 dark:focus-visible:ring-slate-300"
                  >
                    <option value="Admin">Admin</option>
                    <option value="Developer">Developer</option>
                    <option value="Designer">Designer</option>
                    <option value="Viewer">Viewer</option>
                  </select>
                </div>

                <DialogFooter className="pt-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsDialogOpen(false)}
                  >
                    Cancelar
                  </Button>
                  <Button type="submit">Enviar Convite</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </CardHeader>

        <CardContent>
          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {members.map((member) => (
              <div
                key={member.id}
                className="py-3.5 flex items-center justify-between gap-4 transition-colors hover:bg-slate-50/50 dark:hover:bg-slate-900/30 px-2 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10 border border-slate-200 dark:border-slate-800">
                    <AvatarImage src={member.avatar} />
                    <AvatarFallback>{member.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                        {member.name}
                      </p>
                      {member.role === 'Owner' && (
                        <Badge variant="default" className="text-[10px] py-0 px-1.5">
                          Owner
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {member.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Badge
                    variant={member.status === 'Ativo' ? 'success' : 'secondary'}
                    className="text-xs"
                  >
                    {member.status}
                  </Badge>

                  <span className="text-xs text-slate-500 dark:text-slate-400 hidden sm:inline-block">
                    {member.role}
                  </span>

                  {member.role !== 'Owner' && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-slate-400 hover:text-red-600 dark:hover:text-red-400"
                      onClick={() => handleRemoveMember(member.id)}
                      title="Remover membro"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
