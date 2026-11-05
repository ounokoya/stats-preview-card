import { test, expect } from '@playwright/test'
import { open, card, photo, title, sentence, style, cssColor, paint, STATS } from './helpers.js'

// Spec §2, §3 et §6 — S6 à S9

test('S6 — titre avec « insights », phrase, statistiques libellé puis chiffre ; photo décorative et adaptée à la largeur', async ({ page }) => {
  await open(page, 1440, 800)
  await expect(title(page)).toBeVisible()
  await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1)
  await expect(title(page).getByText('insights', { exact: true })).toBeVisible()
  await expect(sentence(page)).toBeVisible()
  const terms = card(page).getByRole('term'), defs = card(page).getByRole('definition')
  await expect(terms).toHaveText(STATS.map(([t]) => t))
  await expect(defs).toHaveText(STATS.map(([, d]) => d))
  for (let i = 0; i < STATS.length; i++) {
    // ordre de lecture : le libellé avant son chiffre ; à l'écran, le chiffre au-dessus
    const order = await terms.nth(i).evaluate((t, d) => !!(t.compareDocumentPosition(d) & Node.DOCUMENT_POSITION_FOLLOWING), await defs.nth(i).elementHandle())
    expect(order, `${STATS[i][0]} avant ${STATS[i][1]}`).toBe(true)
    expect((await defs.nth(i).boundingBox()).y, `${STATS[i][1]} au-dessus`).toBeLessThan((await terms.nth(i).boundingBox()).y)
  }
  await expect(card(page).getByRole('img')).toHaveCount(0)
  expect(await photo(page).evaluate((img) => img.complete && img.naturalWidth > 0 && img.currentSrc.includes('desktop')), 'photo desktop').toBe(true)
  await open(page, 375, 956)
  expect(await photo(page).evaluate((img) => img.complete && img.naturalWidth > 0 && img.currentSrc.includes('mobile')), 'photo mobile').toBe(true)
})

test('S7 — tailles : titre 36 px (28 px en mobile), phrase 14,5 px, chiffres 24 px, libellés 12 px en majuscules', async ({ page }) => {
  await open(page, 1440, 800)
  expect(await style(title(page), 'fontSize')).toBe('36px')
  expect(await style(sentence(page), 'fontSize')).toBe('14.5px')
  expect(await style(sentence(page), 'lineHeight')).toBe('25px')
  for (const [t, d] of STATS) {
    expect(await style(card(page).getByRole('definition').filter({ hasText: d }), 'fontSize'), d).toBe('24px')
    const term = card(page).getByRole('term').filter({ hasText: t })
    expect(await style(term, 'fontSize'), t).toBe('12px')
    expect(await style(term, 'textTransform'), t).toBe('uppercase')
    expect(await style(term, 'letterSpacing'), t).toBe('1px')
  }
  await open(page, 375, 956)
  expect(await style(title(page), 'fontSize'), 'mobile').toBe('28px')
})

test('S8 — couleurs : titre et chiffres White, « insights » Purple 500, phrase 75 %, libellés 60 %, carte Blue 950', async ({ page }) => {
  await open(page, 1440, 800)
  const white = await cssColor(page, 'hsl(0, 0%, 100%)')
  expect(await style(title(page), 'color'), 'titre').toBe(white)
  expect(await style(title(page).getByText('insights', { exact: true }), 'color'), 'insights').toBe(await cssColor(page, 'hsl(277, 64%, 61%)'))
  expect(await paint(page, await style(sentence(page), 'color')), 'phrase').toEqual(await paint(page, 'hsla(0, 0%, 100%, 0.75)'))
  for (const [t, d] of STATS) {
    expect(await style(card(page).getByRole('definition').filter({ hasText: d }), 'color'), d).toBe(white)
    expect(await paint(page, await style(card(page).getByRole('term').filter({ hasText: t }), 'color')), t).toEqual(await paint(page, 'hsla(0, 0%, 100%, 0.6)'))
  }
  expect(await style(card(page), 'backgroundColor'), 'carte').toBe(await cssColor(page, 'hsl(244, 37%, 16%)'))
})

for (const colorScheme of ['light', 'dark']) {
  test(`S9 — appareil en thème ${colorScheme === 'light' ? 'clair' : 'sombre'} : le fond de la page reste Navy 950 (A6)`, async ({ page }) => {
    await page.emulateMedia({ colorScheme })
    await open(page, 375, 956)
    expect(await page.evaluate(() => getComputedStyle(document.body).backgroundColor)).toBe(await cssColor(page, 'hsl(233, 47%, 7%)'))
  })
}
