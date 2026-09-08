# Capstone Project: Kanban Task Dashboard 🏆

Este é o projeto final da Trilha de React Moderno. O objetivo deste projeto não é apenas ser um gerenciador de tarefas bonito, mas servir como um **mosaico arquitetural**, onde cada engrenagem foi construída baseada nos temas individuais estudados ao longo da jornada.

Abaixo está o mapa exato de onde você encontra a aplicação de cada módulo de estudo dentro do código:

---

### 🗺️ Tema: Roteamento (Routing)
**Onde encontrar:** `src/App.jsx`
Embora este seja um dashboard de uma página principal, a infraestrutura de rotas está preparada. O `React Router DOM` envolve a aplicação e intercepta a raiz `/` redirecionando para a rota nomeada `/dashboard` usando o componente `<Navigate />`.

### 📦 Tema: Gerenciamento de Estado Global (State Management)
**Onde encontrar:** `src/store.js`
Nós não passamos *props* do Dashboard para os Cards infinitamente (prop drilling). Em vez disso, utilizamos o **Zustand** para criar uma *Store* global e reativa. As funções `addTask`, `updateTaskStatus` e `deleteTask` vivem globalmente, e qualquer componente pode importá-las instanciando o hook `useTaskStore()`.

### 💅 Tema: Estilização e UI Components (Styling)
**Onde encontrar:** `src/components/ui/` e `tailwind.config.js`
Nós aplicamos a arquitetura limpa focada em "posse", semelhante ao **Shadcn UI**. No lugar de instalar pesadas bibliotecas UI prontas (como Bootstrap ou Material), nós trouxemos os nossos componentes básicos (`Button.jsx`, `Card.jsx`, `Input.jsx`) pro nosso código. Eles foram montados usando **Tailwind CSS** puro (v3) combinado com as ferramentas utilitárias `clsx` e `tailwind-merge` (visíveis no arquivo `src/lib/utils.js`).

### 📝 Tema: Formulários de Alta Performance (Forms)
**Onde encontrar:** `src/pages/Dashboard.jsx` (Lógica do formulário de criação)
O formulário para criar uma Nova Tarefa não utiliza o `useState` padrão do React em cada campo (o que causaria lentidão a cada tecla digitada). Nós usamos o **React Hook Form** (RHF) com a função de registro `{...register('title')}`, lidando com inputs não-controlados na surdina.

### 💎 Tema: Validação Robusta (Type & Validation)
**Onde encontrar:** `src/pages/Dashboard.jsx` (Início do arquivo)
O HTML dos nossos inputs está totalmente limpo. Não há regras sujas como `required={true}` ou `minLength`. As regras de validação foram externalizadas para o objeto `taskSchema` criado com a biblioteca **Zod**. Nós acoplamos o Zod ao formulário através do `zodResolver`, e as mensagens de erro (em vermelho) são injetadas na tela magicamente pelo objeto `errors`.

### 🪝 Tema: React Hooks
**Onde encontrar:** `src/pages/Dashboard.jsx`
O tradicional `useState` ainda tem seu papel valioso! Ele está sendo usado para controlar um estado *local efêmero* que não afeta ninguém fora da tela: a abertura e fechamento do painel/modal de criação de tarefas (`showForm` e `setShowForm`).

---

### 🚀 Rodando o Projeto Localmente
Certifique-se de que está utilizando o Node.js. Navegue até o diretório da aplicação e inicie o ambiente de desenvolvimento:

```bash
npm install
npm run dev
```
