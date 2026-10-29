// М8 «The Character» (3.5, the porch step at dusk a year on, after the piece `sign`; the insert of the bottom of her
// sheet: her 爱, room under it): trace the strokes — the pen along his 爱 (`hanzi#start` → `hanzi#end`), the sign coming
// with it (`hanzi` 0…1; on «the language at home» 2 from memory, a pale hint; else copying hers). Off the strokes — the
// sign comes out crooked (`hanzi_crooked`, a mistake) and stays so: the finales «The Tiger» and «The Letter» show it.
//   What he does: Jack writes 爱 under his mother's 爱 with his father's pen.
//   What he wants: to answer her, once, in her hand.
//   How it is for him: ten seconds for one sign; dozens of columns on the sheet.
//   What the player feels: slow, unsure strokes.
//   → { missed }
import { keys, settle, count, line } from './hands.js';

export default {
  title: tr('The Character'),
  about: 10,
  skipped: { missed: false },
  missed: { missed: true },
  points: ['hanzi#start', 'hanzi#end'],
  keys: ['hanzi', 'hanzi_crooked'],
  async run(g, b, opts, signal) {
    const mg = g.minigame({ phrase: tr('Her sign at the bottom of the sheet, and room under it.') });
    const send = keys(g);
    const over = settle(signal, () => g.set('hanzi', 1));
    g.set('hanzi', 0);
    g.set('hanzi_crooked', false);
    const r = await line(g, b, mg, { from: 'hanzi#start', to: 'hanzi#end', progress: u => send('hanzi', u), off: () => g.set('hanzi_crooked', true) });
    if (!r) return this.skipped;
    if (!(await count(mg, 0.8))) return this.skipped;
    over();
    await mg.end({ as: r.offs ? 'flawed' : 'clean' });
    return { missed: r.offs > 0 };
  },
};
