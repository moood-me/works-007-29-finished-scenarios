// М2 «The Fold» (1.1, the kitchen on Qingming morning, after the piece `ingots`; the insert of the yellow square on the
// oilcloth): fold along the line — the finger along the crease (`ingot#start` → `ingot#end`), the paper folding with it
// (`ingot_fold` 0…1). Off the line — the ingot comes out crooked (a mistake; Mom: «For Grandma, this one is good
// enough»). Folded — the end (clean; flawed if crooked).
//   What he does: Jack, ten, folds a paper ingot for the dead across the table from his mother.
//   What he wants: to make it right — and to sign it.
//   How it is for him: a quiet Sunday morning, the two of them.
//   What the player feels: care along a line.
//   → { missed }
import { keys, settle, count, line } from './hands.js';

export default {
  title: tr('The Fold'),
  about: 6,
  skipped: { missed: false },
  missed: { missed: true },
  points: ['ingot#start', 'ingot#end'],
  keys: ['ingot_fold'],
  async run(g, b, opts, signal) {
    const mg = g.minigame({ phrase: tr('A square of yellow paper. Two folds along the lines.') });
    const send = keys(g);
    const over = settle(signal, () => g.set('ingot_fold', 1));
    g.set('ingot_fold', 0);
    const r = await line(g, b, mg, { from: 'ingot#start', to: 'ingot#end', progress: u => send('ingot_fold', u) });
    if (!r) return this.skipped;
    if (!(await count(mg, 0.6))) return this.skipped;
    over();
    await mg.end({ as: r.offs ? 'flawed' : 'clean' });
    return { missed: r.offs > 0 };
  },
};
