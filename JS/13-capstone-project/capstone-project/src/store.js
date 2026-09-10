import { create } from 'zustand';

export const useTaskStore = create((set) => ({
  tasks: [
    { id: 1, title: 'Configurar ambiente', status: 'done', priority: 'high' },
    { id: 2, title: 'Criar componentes UI', status: 'in-progress', priority: 'medium' },
  ],
  addTask: (task) => set((state) => ({ 
    tasks: [...state.tasks, { ...task, id: Date.now() }] 
  })),
  updateTaskStatus: (id, status) => set((state) => ({
    tasks: state.tasks.map(t => t.id === id ? { ...t, status } : t)
  })),
  deleteTask: (id) => set((state) => ({
    tasks: state.tasks.filter(t => t.id !== id)
  }))
}));
