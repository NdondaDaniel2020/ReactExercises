import * as React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown, Sparkles, HelpCircle, Layers, ShieldCheck } from 'lucide-react';

export function AccordionDemo() {
  const faqs = [
    {
      id: 'item-1',
      title: 'O que significa um componente ser "Headless"?',
      icon: Sparkles,
      content:
        'Significa que a biblioteca fornece 100% da lógica, ciclo de vida, WAI-ARIA, foco e acessibilidade, mas NÃO traz estilos CSS pré-definidos. Você tem liberdade total para aplicar Tailwind, CSS Modules ou qualquer framework visual sem precisar sobrescrever estilos impostos.',
    },
    {
      id: 'item-2',
      title: 'Como o Radix UI gerencia acessibilidade por teclado?',
      icon: HelpCircle,
      content:
        'O Radix implementa as diretrizes oficiais do W3C. No Accordion, por exemplo, as setas cima/baixo navegam entre os gatilhos, as teclas Home/End vão direto para o primeiro e último item, e Enter ou Espaço abrem e fecham as seções sem necessidade de você escrever um único useEffect.',
    },
    {
      id: 'item-3',
      title: 'Como funcionam as animações de altura (height)?',
      icon: Layers,
      content:
        'O Radix expõe a variável CSS nativa --radix-accordion-content-height. Isso permite criar animações de sanfona perfeitamente suaves no CSS sem que você precise medir dimensões de elementos via JavaScript ou bibliotecas pesadas de animação.',
    },
  ];

  return (
    <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
      <div>
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          2. Accordion Acessível com Navegação por Teclado
        </h3>
        <p className="text-xs text-slate-400">
          Primitiva <code>@radix-ui/react-accordion</code>: use <kbd className="px-1 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-violet-300">Tab</kbd>, <kbd className="px-1 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-violet-300">↑</kbd>, <kbd className="px-1 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-violet-300">↓</kbd> e <kbd className="px-1 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-violet-300">Enter</kbd>.
        </p>
      </div>

      <Accordion.Root type="single" defaultValue="item-1" collapsible className="w-full space-y-2">
        {faqs.map((faq) => {
          const Icon = faq.icon;
          return (
            <Accordion.Item
              key={faq.id}
              value={faq.id}
              className="rounded-xl border border-slate-800/80 bg-slate-900/60 overflow-hidden transition-colors data-[state=open]:border-violet-500/50"
            >
              <Accordion.Header className="flex">
                <Accordion.Trigger className="group flex flex-1 items-center justify-between p-4 text-left text-sm font-semibold text-slate-200 hover:text-white transition-all outline-none focus-visible:ring-2 focus-visible:ring-violet-400">
                  <span className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4 text-violet-400 shrink-0" />
                    {faq.title}
                  </span>
                  <ChevronDown className="w-4 h-4 text-slate-400 transition-transform duration-200 ease-out group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>

              <Accordion.Content className="radix-accordion-content overflow-hidden text-xs text-slate-400 px-4 pb-4 leading-relaxed">
                <div className="pt-2 border-t border-slate-800/60">
                  {faq.content}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          );
        })}
      </Accordion.Root>
    </div>
  );
}
