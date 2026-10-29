# 2026-10-29 — Belarusian (`be`)

Why: Павел: ещё язык — белорусский.

- All 29 worlds in `worlds/`: `"be"` in `languages`, each world's `lang/be.json` and every scene's `lang/be.json` (235 texts). The repository has no games.
- Titles as Belarusian editions or tradition have them: «Лялечны дом», «Звычайнае цуда», «Кветкі для Элджэрнана», «Нябачныя гарады», «Гаспадар і работнік», «Палкоўніку ніхто не піша», «Пра мышэй і людзей», «Гонар і прадузятасць», «Кентэрвільскі прывід», «Равун», «Шкляны звярынец», «Стары і мора», «Паварот шрубы», «Жанчына ў пясках», «Аварыя», «Белыя ночы» and so on; the Canterville prophecy is in verse lines as the scene draws them.

How it was checked: moood's `check` (its `be` branch: `be` in `i18n/languages.json`), `node packages/check/cli.js <repo> --write`
laid the files out, the translations were written into them, then `check` on the whole repository says «all right».
Modern standard Belarusian, the official orthography; translated from the English source, the Russian read beside it as
a second view of meaning and tone. Only translations and the `languages` lists were added; no source text, code or doc
was changed.
