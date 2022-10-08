import { test, expect } from '@playwright/test'

test('should navigate to the stats page', async ({ page }) => {
  await page.goto('/')
  await page.click('text=Stats')
  await expect(page).toHaveURL('/stats')
  await expect(page.locator('h2')).toContainText('Stats')
})

test('should navigate to the settings page', async ({ page }) => {
  await page.goto('/')
  await page.click('text=Settings')
  await expect(page).toHaveURL('/settings')
  await expect(page.locator('h2')).toContainText('Settings')
})
