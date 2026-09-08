# Exercício 09: Headless Component Libraries (Radix UI)

Aplicação prática do repositório **ReactExercises** dedicada ao estudo aprofundado do paradigma **Headless** utilizando as **Radix UI Primitives** em conjunto com **Tailwind CSS v4** e **React (Vite)** em JavaScript puro (`.jsx`).

---

## 🚀 Como Executar o Projeto

No terminal, acesse a pasta do exercício:

```bash
cd /home/nmatondo/Code/ReactExercises/09-headless-component-libraries/radix-ui-challenge

# 1. Instalar dependências (já instaladas)
npm install

# 2. Iniciar servidor Vite
npm run dev
```

Abra no navegador em `http://localhost:5173`.

---

## 🧠 O que é o Paradigma "Headless"?

| Aspecto | Bibliotecas Estilizadas Tradicionais (MUI, Ant Design) | Bibliotecas Headless (Radix UI, Headless UI, React Aria) |
| :--- | :--- | :--- |
| **Estilos CSS** | Embutidos e difíceis de customizar | **Zero CSS embutido** (Unstyled) |
| **Acessibilidade** | Depende do pacote | 100% de conformidade WAI-ARIA, foco e teclado nativos |
| **Flexibilidade Visual** | Baixa a Média (sobrescrita pesada de classes) | **Total** (você estiliza via Tailwind, CSS Modules, etc.) |
| **Tamanho do Código** | Inclui CSS e temas que você talvez não use | Você importa apenas a primitiva necessária |

---

## 🏛️ Primitivas Radix UI Implementadas

1. **Dropdown Menu (`@radix-ui/react-dropdown-menu`):**
   * Itens, submenus aninhados, checkboxes, radio items e atalhos de teclado visuais.
   * Navegação acessível completa por setas (<kbd>↑</kbd>, <kbd>↓</kbd>, <kbd>→</kbd>, <kbd>←</kbd>) e <kbd>ESC</kbd>.
2. **Accordion (`@radix-ui/react-accordion`):**
   * Seções sanfonadas com navegação por teclado e animação CSS nativa via variável `--radix-accordion-content-height`.
3. **Slider (`@radix-ui/react-slider`):**
   * Controles de áudio acessíveis via mouse, touch e teclado (<kbd>←</kbd> / <kbd>→</kbd>).
4. **Popover (`@radix-ui/react-popover`):**
   * Painéis flutuantes ancorados com detecção e prevenção de colisão com as bordas da tela (*collision detection*).
5. **Select (`@radix-ui/react-select`):**
   * Dropdown de seleção acessível com navegação por *typeahead* (digitar a primeira letra pula para o item).
6. **Tooltip (`@radix-ui/react-tooltip`):**
   * Dicas de contexto com delay configurável e suporte para leitores de tela.
