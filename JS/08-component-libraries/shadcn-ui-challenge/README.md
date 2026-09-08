# Exercício 08: Component Libraries (Shadcn UI App)

Aplicação prática do repositório **ReactExercises** dedicada ao estudo profundo da biblioteca de componentes mais influente do ecossistema React moderno: **Shadcn UI**.

---

## 🚀 Como Executar o Projeto

```bash
cd /home/nmatondo/Code/ReactExercises/08-component-libraries/shadcn-ui-challenge

# 1. Instalar dependências (já instaladas)
npm install

# 2. Iniciar servidor Vite
npm run dev
```

Abra no navegador em `http://localhost:5173`.

---

## 🧠 Por que o Shadcn UI é diferente das bibliotecas tradicionais?

| Característica | Bibliotecas Tradicionais (MUI, AntD, Chakra) | Shadcn UI |
| :--- | :--- | :--- |
| **Instalação** | Pacote fechado via `npm install @mui/material` | Código copiado diretamente para `src/components/ui/` |
| **Propriedade do Código** | O código vive no `node_modules` (difícil customizar) | Você é o dono de cada linha de código |
| **Estilização** | CSS-in-JS ou temas proprietários | 100% Tailwind CSS com variáveis CSS semânticas |
| **Acessibilidade** | Depende da implementação interna | Baseado nas primitivas headless do **Radix UI** |
| **Tamanho do Bundle** | Pode ser monolítico se mal configurado | Você importa apenas os componentes que realmente usa |

---

## 🏛️ Estrutura e Primitivas Implementadas

```text
src/
├── lib/
│   └── utils.js             # Função cn() (clsx + tailwind-merge)
├── components/
│   ├── ui/                  # Componentes do Shadcn UI
│   │   ├── button.jsx       # Button com variantes declarativas via cva
│   │   ├── card.jsx         # Card, CardHeader, CardTitle, CardContent
│   │   ├── badge.jsx        # Badge semântico (default, secondary, success)
│   │   ├── dialog.jsx       # Modal acessível com focus-trap via Radix Dialog
│   │   ├── tabs.jsx         # Abas com navegação acessível via Radix Tabs
│   │   ├── avatar.jsx       # Avatar com imagem e fallback automático
│   │   ├── switch.jsx       # Toggle acessível via Radix Switch
│   │   ├── input.jsx        # Input semântico com focus ring
│   │   └── label.jsx        # Label acessível via Radix Label
│   ├── Navbar.jsx           # Cabeçalho com perfil e Dark Mode
│   ├── OverviewTab.jsx      # Métricas e cartões informativos
│   ├── TeamTab.jsx          # Gestão de membros com Dialog/Modal
│   ├── SettingsTab.jsx      # Preferências com Switches do Radix
│   └── ShowcaseTab.jsx      # Galeria de referência de todos os componentes
├── App.jsx                  # Controle de abas e alternância de tema (.dark)
└── index.css                # Variáveis de cor HSL (:root e .dark)
```

---

## 🔑 Pilares Técnicos Utilizados

1. **`cn()` (`lib/utils.js`):**
   Garante que classes Tailwind passadas como props possam sobrescrever classes padrão sem bugs de especificidade.
2. **`cva` (class-variance-authority):**
   Gerencia variações visuais (`variant` e `size`) de maneira tipada e declarativa.
3. **Radix UI Primitives:**
   Fornece a lógica comportamental e acessibilidade (WAI-ARIA, suporte a teclado com <kbd>Tab</kbd>, <kbd>ESC</kbd>, <kbd>Space</kbd> e bloqueio de scroll no modal).
4. **Dark Mode com Variáveis CSS HSL:**
   Todas as cores principais utilizam `hsl(var(--primary))`, permitindo trocar de tema instantaneamente apenas alternando a classe `.dark` no `<html>`.
