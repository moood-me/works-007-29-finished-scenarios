// The finale «The Tiger» (§9, the porch step at dusk, after the piece `tiger`'s beginning: the sheet in Jack's hands
// still trembling along the tiger's folds): fold along the lines — a dashed ring on the sheet (`jack#letter`), four slow
// folds (`fold` 0…1: the paper remembers them; the crooked fold at the tail it does not find). Not done in time — the
// folds find themselves (a miss: the paper folds on its own).
//   What he does: Jack folds his mother's letter back into the tiger, her lines inside.
//   What he wants: Laohu, with her breath, one day a year.
//   How it is for him: the light going; the other animals asleep in the box.
//   What the player feels: making, along lines someone else drew.
//   → { missed }
import { keys, settle, slowly, count } from './hands.js';

export default {
  title: tr('Folding the Tiger'),
  about: 8,
  skipped: { missed: false },
  missed: { missed: true },
  points: ['jack#letter'],
  keys: ['fold'],
  async run(g, b, opts, signal) {
    const mg = g.minigame({ phrase: tr('The sheet still trembles along the tiger’s folds.') });
    const send = keys(g);
    const over = settle(signal, () => g.set('fold', 1));
    g.set('fold', 0);
    const r = await slowly(g, b, mg, { at: 'jack#letter', pulls: 4, frame: u => send('fold', u) });
    if (!r) return this.skipped;
    if (!(await count(mg, 0.6))) return this.skipped;
    over();
    await mg.end({ as: r.self ? 'neutral' : r.jerks ? 'flawed' : 'clean' });
    return { missed: r.self };
  },
};
