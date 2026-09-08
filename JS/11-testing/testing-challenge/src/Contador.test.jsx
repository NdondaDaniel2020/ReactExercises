import { render, screen, fireEvent } from '@testing-library/react';
import { expect, test } from 'vitest';
import Contador from './Contador';

test('deve inicializar com 0 cliques', () => {
  render(<Contador />);
  const textoInicial = screen.getByText('Cliques: 0');
  expect(textoInicial).toBeInTheDocument();
});

test('deve incrementar o número ao clicar no botão', () => {
  render(<Contador />);
  const botao = screen.getByRole('button', { name: /somar/i });
  
  fireEvent.click(botao);
  
  const textoNovo = screen.getByText('Cliques: 1');
  expect(textoNovo).toBeInTheDocument();
});
