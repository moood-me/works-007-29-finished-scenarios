// The finale «The Letter» (§9, the porch step under the lamp, after the piece `letter_end`'s beginning): lead slowly —
// a dashed ring on the sheet on the step (`jack#letter`), two slow strokes of the palm smooth it (`tremble` 1 → 0: it
// trembles along its folds one last time and lies flat). Not done in time — it lies flat by itself (a miss).
//   What he does: Jack smooths his mother's letter flat as the night takes the folds.
//   What he wants: to keep her hand as she wrote it.
//   How it is for him: dusk, the lamp, the last trembling.
//   What the player feels: a slow, flat palm.
//   → { missed }
import { keys, settle, slowly, count } from './hands.js';

export default {
  title: tr('Smoothing the Sheet'),
  about: 8,
  skipped: { missed: false },
  missed: { missed: true },
  points: ['jack#letter'],
  keys: ['tremble'],
  async run(g, b, opts, signal) {
    const mg = g.minigame({ phrase: tr('Her sheet on the step under the lamp.') });
    const send = keys(g);
    const over = settle(signal, () => g.set('tremble', 0));
    g.set('tremble', 1);
    const r = await slowly(g, b, mg, { at: 'jack#letter', pulls: 2, frame: u => send('tremble', 1 - u) });
    if (!r) return this.skipped;
    if (!(await count(mg, 0.6))) return this.skipped;
    over();
    await mg.end({ as: r.self ? 'neutral' : r.jerks ? 'flawed' : 'clean' });
    return { missed: r.self };
  },
};
