# Desafio 08: Modern API Calls (REST vs GraphQL)

Projeto prático do repositório **ReactExercises** dedicado ao estudo e comparação aprofundada entre os dois principais padrões de comunicação com servidores no ecossistema moderno de React:
1. **REST** com **TanStack Query (React Query v5) + Axios**
2. **GraphQL** com **Apollo Client v4**

---

## 🚀 Como Executar

Dentro desta pasta:

```bash
# 1. Instalar as dependências (já instaladas)
npm install

# 2. Iniciar o servidor de desenvolvimento
npm run dev
```

Abra no navegador em `http://localhost:5173`.

---

## 📂 Arquitetura do Projeto

```text
src/
├── service/
│   ├── api.js                     # Instância centralizada do Axios com interceptors
│   └── apollo.js                  # Instância do Apollo Client com InMemoryCache
│
├── components/
│   ├── Navbar.jsx                 # Barra de navegação com alternador de abas (REST vs GraphQL)
│   └── LoadingSpinner.jsx         # Indicador visual de carregamento
│
├── features/
│   ├── rest-products/             # 🌐 MÓDULO REST
│   │   ├── hooks/
│   │   │   ├── useProducts.js     # useQuery (busca dinâmica + cache inteligente)
│   │   │   └── useCreateProduct.js# useMutation (invalidação com queryClient.invalidateQueries)
│   │   └── components/
│   │       ├── ProductCard.jsx    # Card individual de produto da DummyJSON
│   │       ├── ProductList.jsx    # Grid de produtos, busca e indicador de sync em background
│   │       └── CreateProductModal.jsx # Modal para cadastro com feedback visual
│   │
│   └── graphql-characters/        # 🚀 MÓDULO GRAPHQL
│       ├── hooks/
│       │   └── useCharacters.js   # useQuery com gql (Rick & Morty GraphQL API)
│       └── components/
│           ├── CharacterCard.jsx  # Card com badge de status e visualização do Cache ID
│           └── CharacterList.jsx  # Grid com busca por nome e filtro por status
│
├── App.jsx                        # Controle da aba ativa e rodapé comparativo didático
├── main.jsx                       # Provedores (QueryClientProvider + ApolloProvider + DevTools)
└── index.css                      # Design system moderno e responsivo
```

---

## 🧠 Conceitos Práticos Aplicados

### 1. REST (TanStack Query + Axios)
* **Axios como Executor HTTP:** Configura a baseURL (`https://dummyjson.com`), adiciona interceptores de requisição para logs e trata erros de forma uniforme.
* **Cache Inteligente (`staleTime`):** Ao navegar ou refazer pesquisas recentes, os dados aparecem **instantaneamente da memória**.
* **Deduplicação de Chamadas:** Múltiplos componentes ou re-renderizações não disparam chamadas duplicadas.
* **Mutação & Invalidação (`useMutation`):** Ao cadastrar um produto via `POST /products/add`, a chave `['products']` é invalidada automaticamente para atualizar a lista sem precisar gerenciar estados paralelos.
* **React Query DevTools:** Ferramenta gráfica inclusa no canto inferior direito para inspecionar queries em tempo real.

### 2. GraphQL (Apollo Client)
* **Consultas Declarativas com `gql`:** O cliente declara estritamente os campos necessários (`id`, `name`, `status`, `species`, `image`, `location`), eliminando *over-fetching*.
* **Cache Normalizado:** O `InMemoryCache` mapeia cada entidade pelo padrão `Character:{id}`.
* **Variáveis Dinâmicas:** Busca por nome e filtros de status reativos diretamente nas variáveis da query.
