# Trilha de Excelência em React Moderno 🚀

Este repositório consolida o meu aprendizado prático e avançado no ecossistema atual do React. O objetivo desta trilha não foi apenas aprender como fazer, mas aprender **a melhor forma** de se fazer no mercado de trabalho atual.

Abaixo estão os pilares tecnológicos aplicados nos projetos deste repositório, com um resumo **direto ao ponto** do porquê eles são úteis (focado em ferramentas modernas, excluindo padrões obsoletos).

---

## 🏗️ 1. Rendering & Componentização
O coração do React. Aprendi a separar a lógica da interface, criando componentes reutilizáveis, gerenciando a passagem de *props* de forma eficiente e lidando com a renderização condicional. O framework base adotado foi o **Vite** por ser ordens de grandeza mais rápido que o antigo Create React App.

## 🪝 2. React Hooks (O Padrão Moderno)
- **`useState`**: Para lidar com dados locais que mudam a interface instantaneamente.
- **`useEffect`**: Para lidar com "efeitos colaterais" (ex: bater em uma API quando a tela abre).
- **Custom Hooks**: Como encapsular lógicas complexas e repetitivas em funções reutilizáveis.

## 🗺️ 3. Routing (React Router v6)
Como criar uma Single Page Application (SPA) real.
- **`createBrowserRouter`**: Para definir a matriz de rotas da aplicação.
- **Nested Routes (`<Outlet />`)**: Para criar layouts globais (como uma Navbar que nunca recarrega) enquanto o conteúdo da página muda no centro.
- **Dynamic Routing**: Rotas dinâmicas como `/produto/:id`.

## 📦 4. Gerenciamento de Estado Global (Zustand)
Esqueça o boilerplate gigantesco do Redux ou o exagero da Context API.
- O **Zustand** resolve o "Prop Drilling" (passar props de pai pra filho infinitamente) de forma cirúrgica.
- Com meia dúzia de linhas, criamos uma *Store* global que pode ser acessada de qualquer lugar do app de forma tipada e reativa.

## 💅 5. Estilização Moderna (Tailwind CSS + Padrão Shadcn)
O CSS puro e os Styled Components deram espaço ao padrão atual da indústria:
- **Tailwind CSS**: Classes utilitárias que permitem estilizar direto no JSX sem sair do arquivo, mantendo um design system coerente.
- **Arquitetura tipo Shadcn UI**: Em vez de instalar pesadas bibliotecas de componentes de terceiros, usamos o padrão de possuir os nossos próprios componentes base (ex: `Button.jsx`, `Card.jsx`), utilizando `tailwind-merge` e `clsx` para criar componentes bonitos e fáceis de customizar sem ficar preso aos temas padrão das antigas bibliotecas UI.

## 📝 6. Formulários de Alta Performance (React Hook Form + Zod)
Formulários no React costumavam ser lentos e dolorosos. O combo atual resolve tudo:
- **React Hook Form**: Usa *Uncontrolled Components*. Você pode digitar um texto gigante e a tela não vai travar nem piscar, porque o RHF só lê os dados na hora de enviar.
- **Zod**: Biblioteca de validação de Schemas. O HTML fica completamente limpo. As regras (ex: *"A senha deve ter 8 letras"*) ficam em um objeto separado que barra o formulário automaticamente se as condições não forem atingidas.

## 🧪 7. Testes (Vitest + Playwright)
Aplicações que não quebram em produção precisam de testes.
- **Vitest + RTL (React Testing Library)**: O substituto do Jest. Extremamente rápido para testar componentes isolados e verificar se os botões e textos aparecem na tela de forma correta, simulando o DOM via `jsdom`.
- **Playwright**: O peso-pesado para testes End-to-End (E2E). Ele abre literalmente um navegador invisível e simula um usuário real clicando pela aplicação e testando fluxos completos.

## 🌐 8. API Calls
Onde o Frontend encontra o Backend.
- Aprendi os fundamentos de chamadas HTTP usando a API nativa do `fetch` e da biblioteca estendida `Axios`.
- Em projetos complexos com muitos requests, a recomendação atual para cachear e lidar com estados de `loading/error` de forma limpa é utilizar o **React Query (TanStack Query)**.

---

> *"Qualquer tolo consegue escrever código que um computador entenda. Bons programadores escrevem código que humanos entendam."* - Martin Fowler
