// М3 «The Sketch» (1.5, the garden by the castle on a summer morning, Virginia at her easel before the dry almond),
// in the insert `board` (the sheet close, the almond half drawn on it — opened by `board_open`): trace — the brush
// along the old trunk, from its root to its fork (`board#root` → `board#fork`), the line coming on the sheet with it
// (`sketch_line` 0…1). Off the trunk — the brush slips: a blot on the trunk (`blot` 1), a mistake; it stays on the
// sketch (in «The Stain» she leaves him that very sketch). The line drawn — the insert closes, the end (clean; flawed
// with a blot).
//   What she does: Virginia paints the old dry almond tree.
//   What she wants: to get the old trunk right, in one stroke.
//   How it is for her: a quiet morning of her own; her reds are going somewhere.
//   What the player feels: care, following a line.
//   → { blot }
import { keys, settle, count, line } from './hands.js';

export default {
  title: tr('The Sketch'),
  about: 10,
  skipped: { blot: false },
  missed: { blot: true },
  points: ['board#root', 'board#fork'],
  keys: ['board_open', 'sketch_line', 'blot'],
  async run(g, b, opts, signal) {
    const mg = g.minigame({ phrase: tr('The old dry almond tree, the easel, a wet brush.') });
    const over = settle(signal, () => { g.set('sketch_line', 1); g.set('board_open', 0, 0.4); });
    g.set('sketch_line', 0);
    g.set('blot', 0);
    g.set('board_open', 1, 0.4);
    const send = keys(g);
    const r = await line(g, b, mg, { from: 'board#root', to: 'board#fork', progress: u => send('sketch_line', u),
      off: () => g.set('blot', 1) });
    if (!r) return this.skipped;
    const blot = r.offs > 0;
    if (!(await count(mg, 0.8))) return this.skipped;
    g.set('board_open', 0, 0.4);
    over();
    await mg.end({ as: blot ? 'flawed' : 'clean' });
    return { blot };
  },
};
