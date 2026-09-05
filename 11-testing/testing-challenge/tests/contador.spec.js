import { test, expect } from '@playwright/test';

test('teste E2E do contador', async ({ page }) => {
  // 1. Acessa a página inicial
  await page.goto('/');

  // 2. Verifica se o texto inicial existe
  await expect(page.locator('h2')).toContainText('Cliques: 0');

  // 3. Clica no botão "Somar"
  await page.getByRole('button', { name: 'Somar' }).click();

  // 4. Verifica se atualizou para 1
  await expect(page.locator('h2')).toContainText('Cliques: 1');
  
  // 5. Clica mais 2 vezes
  await page.getByRole('button', { name: 'Somar' }).click();
  await page.getByRole('button', { name: 'Somar' }).click();
  
  // 6. Verifica se o resultado é 3
  await expect(page.locator('h2')).toContainText('Cliques: 3');
});
