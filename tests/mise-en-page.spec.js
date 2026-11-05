import { test, expect } from '@playwright/test'
import { open, card, photo, title, footer, box, near, textBox } from './helpers.js'

// Spec §4 — S1 à S5 (positions de la maquette Penpot, à 1 px près)

test('S1 — 1440 × 800 : carte desktop, photo à droite', async ({ page }) => {
  await open(page, 1440, 800)
  near(await box(card(page)), { x: 165, y: 177, width: 1110, height: 446 }, 'carte')
  near(await box(photo(page)), { x: 735, y: 177, width: 540, height: 446 }, 'photo')
})

test('S2 — 375 × 956 : carte mobile, photo en haut', async ({ page }) => {
  await open(page, 375, 956)
  near(await box(card(page)), { x: 24, y: 88, width: 327, height: 780 }, 'carte')
  near(await box(photo(page)), { x: 24, y: 88, width: 327, height: 240 }, 'photo')
})

test('S3 — 768 × 1024 : carte mobile centrée ; 1023 px mobile, 1024 px desktop (Q-B4)', async ({ page }) => {
  await open(page, 768, 1024)
  near(await box(card(page)), { x: 220.5, y: 122, width: 327, height: 780 }, 'carte')
  await open(page, 1023, 1000)
  const [c1, p1] = [await box(card(page)), await box(photo(page))]
  expect(c1.width, '1023 px : carte mobile').toBe(327)
  expect(p1.y, '1023 px : photo en haut').toBe(c1.y)
  await open(page, 1024, 800)
  const [c2, p2] = [await box(card(page)), await box(photo(page))]
  expect(c2.width, '1024 px : carte desktop').toBeGreaterThan(327)
  expect(p2.x + p2.width, '1024 px : photo à droite').toBe(c2.x + c2.width)
})

for (const width of [320, 375, 768, 1023, 1024, 1440]) {
  test(`S4 — ${width} px : pas de défilement horizontal`, async ({ page }) => {
    await open(page, width, 900)
    // présence d'abord : une page vide n'a jamais de défilement
    await expect(title(page)).toBeVisible()
    expect(await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)).toBe(0)
  })
}

test('S5 — 1440 × 800 : pied de page centré sous la carte, dans la fenêtre', async ({ page }) => {
  await open(page, 1440, 800)
  const c = await box(card(page))
  // boîte sans arrondi (somme de deux demi-pixels)
  const f = await footer(page).boundingBox()
  const t = await textBox(footer(page))
  expect(f.y).toBeGreaterThanOrEqual(c.y + c.height)
  expect(f.y + f.height).toBeLessThanOrEqual(800)
  expect(Math.abs((t.left + t.right) / 2 - 720)).toBeLessThanOrEqual(1)
})
