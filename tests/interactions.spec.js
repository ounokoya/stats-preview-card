import { test, expect } from '@playwright/test'
import { open, link, style, cssColor } from './helpers.js'

// Spec §5 et §6 — S10 et S11

const PURPLE = 'hsl(277, 64%, 61%)'

test.beforeEach(async ({ page }) => {
  await open(page, 1440, 800)
})

test('S10 — Tab : les deux liens du pied de page, chacun avec un contour Purple 500 de 2 px au moins', async ({ page }) => {
  const purple = await cssColor(page, PURPLE)
  const seen = []
  for (let i = 0; i < 2; i++) {
    await page.keyboard.press('Tab')
    seen.push(await page.evaluate((c) => {
      const el = document.activeElement
      const s = getComputedStyle(el)
      return { name: el.textContent.trim(), outline: s.outlineStyle !== 'none' && parseFloat(s.outlineWidth) >= 2 && s.outlineColor === c }
    }, purple))
  }
  expect(seen.map((s) => s.name)).toEqual(['Frontend Mentor', 'Koya Esdras'])
  for (const s of seen) expect.soft(s.outline, `contour sur « ${s.name} »`).toBe(true)
})

test('S11 — pied de page : texte blanc à 75 %, liens Purple 500 soulignés, sans soulignement au survol ; bonnes adresses', async ({ page }) => {
  await expect(link(page, 'Frontend Mentor')).toHaveAttribute('href', 'https://www.frontendmentor.io?ref=challenge')
  await expect(link(page, 'Koya Esdras')).toHaveAttribute('href', 'https://www.frontendmentor.io/profile/ounokoya')
  expect(await style(page.getByRole('contentinfo'), 'color'), 'texte').toBe(await cssColor(page, 'hsla(0, 0%, 100%, 0.75)'))
  const purple = await cssColor(page, PURPLE)
  for (const name of ['Frontend Mentor', 'Koya Esdras']) {
    expect(await style(link(page, name), 'color'), name).toBe(purple)
    expect(await style(link(page, name), 'textDecorationLine'), name).toBe('underline')
    await link(page, name).hover()
    await expect.poll(() => style(link(page, name), 'textDecorationLine'), { message: `${name} survolé` }).toBe('none')
  }
})
