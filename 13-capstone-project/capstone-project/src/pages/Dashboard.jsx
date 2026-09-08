import React, { useState } from 'react';
import { useTaskStore } from '../store';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Label } from '../components/ui/Label';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Trash2, Plus } from 'lucide-react';

const taskSchema = z.object({
  title: z.string().min(3, "Mínimo 3 caracteres"),
  priority: z.enum(['low', 'medium', 'high']),
});

export default function Dashboard() {
  const { tasks, addTask, updateTaskStatus, deleteTask } = useTaskStore();
  const [showForm, setShowForm] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(taskSchema),
    defaultValues: { priority: 'medium' }
  });

  const onSubmit = (data) => {
    addTask({ title: data.title, priority: data.priority, status: 'todo' });
    reset();
    setShowForm(false);
  };

  const getPriorityColor = (p) => {
    switch(p) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const columns = [
    { id: 'todo', title: 'A Fazer' },
    { id: 'in-progress', title: 'Em Progresso' },
    { id: 'done', title: 'Concluído' }
  ];

  return (
    <div className="p-8 h-screen flex flex-col bg-gray-50">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Task Manager</h1>
        <Button onClick={() => setShowForm(!showForm)} className="gap-2">
          <Plus size={16} /> Nova Tarefa
        </Button>
      </div>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-md" onClick={(e) => e.stopPropagation()}>
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle>Criar Nova Tarefa</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Título</Label>
                    <Input id="title" {...register('title')} placeholder="Ex: Estudar TypeScript" />
                    {errors.title && <p className="text-sm text-red-500">{errors.title.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="priority">Prioridade</Label>
                    <select 
                      id="priority" 
                      {...register('priority')}
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                      <option value="low">Baixa</option>
                      <option value="medium">Média</option>
                      <option value="high">Alta</option>
                    </select>
                    {errors.priority && <p className="text-sm text-red-500">{errors.priority.message}</p>}
                  </div>
                  <div className="flex gap-2 justify-end pt-2">
                    <Button type="button" variant="ghost" onClick={() => setShowForm(false)}>Cancelar</Button>
                    <Button type="submit">Salvar Tarefa</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      <div className="flex gap-6 flex-1 overflow-x-auto">
        {columns.map(col => (
          <div key={col.id} className="flex-1 min-w-[300px] bg-gray-100 rounded-xl p-4 flex flex-col gap-4">
            <h2 className="font-semibold text-gray-700 flex justify-between items-center">
              {col.title}
              <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-xs">
                {tasks.filter(t => t.status === col.id).length}
              </span>
            </h2>
            
            <div className="flex flex-col gap-3 flex-1">
              {tasks.filter(t => t.status === col.id).map(task => (
                <Card key={task.id} className="cursor-pointer hover:shadow-md transition-shadow">
                  <CardContent className="p-4 flex flex-col gap-3">
                    <div className="flex justify-between items-start gap-2">
                      <p className="font-medium text-sm leading-tight text-gray-900">{task.title}</p>
                      <button onClick={() => deleteTask(task.id)} className="text-gray-400 hover:text-red-500 transition-colors">
                        <Trash2 size={16} />
                      </button>
                    </div>
                    
                    <div className="flex justify-between items-center mt-2">
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${getPriorityColor(task.priority)}`}>
                        {task.priority === 'high' ? 'Alta' : task.priority === 'medium' ? 'Média' : 'Baixa'}
                      </span>
                      
                      <select 
                        value={task.status}
                        onChange={(e) => updateTaskStatus(task.id, e.target.value)}
                        className="text-xs bg-gray-50 border border-gray-200 rounded p-1"
                      >
                        <option value="todo">A Fazer</option>
                        <option value="in-progress">Fazendo</option>
                        <option value="done">Concluído</option>
                      </select>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
