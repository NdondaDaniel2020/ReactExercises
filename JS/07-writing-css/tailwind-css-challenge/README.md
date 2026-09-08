# Exercício 07: Writing CSS (Tailwind CSS v4 App)

Aplicação prática do repositório **ReactExercises** dedicada ao domínio do paradigma **Utility-First** utilizando o **Tailwind CSS v4** em conjunto com **React (Vite)** em JavaScript puro (`.jsx`).

---

## 🚀 Como Executar o Projeto

No terminal, acesse a pasta do exercício e inicie o servidor:

```bash
cd /home/nmatondo/Code/ReactExercises/07-writing-css/tailwind-css-challenge

# 1. Instalar dependências (já instaladas)
npm install

# 2. Iniciar servidor Vite
npm run dev
```

Abra no navegador em `http://localhost:5173`.

---

## 🎨 O que há de novo no Tailwind CSS v4?

1. **Configuração Zero-File com `@tailwindcss/vite`:**
   * Não é necessário `postcss.config.js` nem `tailwind.config.js`.
   * Toda a importação é feita no `src/index.css` com:
     ```css
     @import "tailwindcss";
     @custom-variant dark (&:where(.dark, .dark *));
     ```
2. **Motor de Compilação Ultrarrápido:**
   * Escrita em Rust e empacotamento nativo no Vite em frações de segundo.

---

## 🏛️ Estrutura e Módulos do Exercício

```text
src/
├── components/
│   ├── Navbar.jsx              # Cabeçalho com toggle de Dark Mode e status v4
│   ├── StatsGrid.jsx           # Grid responsivo (1 → 2 → 4 colunas) e gradientes
│   ├── ComponentShowcase.jsx   # Botões, inputs com ring, badges e cards com group-hover
│   ├── UtilityPlayground.jsx   # Laboratório interativo para testar classes ao vivo
│   └── Footer.jsx              # Rodapé didático com pilares conceituais
├── App.jsx                     # Gerenciamento de tema (.dark no html) e seções
├── index.css                   # Importação do Tailwind v4 e variantes
└── main.jsx                    # Ponto de montagem da aplicação React
```

---

## 🧠 Conceitos e Classes Fundamentais Aplicados

| Conceito | Classes de Exemplo | Onde foi aplicado |
| :--- | :--- | :--- |
| **Grid Responsivo** | `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6` | `StatsGrid.jsx` |
| **Dark Mode** | `dark:bg-slate-950 dark:text-slate-100` | `App.jsx`, `Navbar.jsx` |
| **Estados & Focus** | `focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500` | `ComponentShowcase.jsx` |
| **Micro-interações** | `active:scale-95 hover:-translate-y-1 transition-all duration-300` | Botões e Cards |
| **Orquestração Pai/Filho** | `group` no pai + `group-hover:scale-110 group-hover:opacity-100` no filho | Card interativo |
| **Gradientes Modernos** | `bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 bg-clip-text text-transparent` | Hero Banner |
