// М6 «Stroking» (3.2, Jack's room a year on, after the piece `unfold`: Laohu awake for Qingming, rubbing against him):
// lead slowly — a dashed ring on the tiger (`laohu`), two slow strokes down his back (`laohu_purr` 0…1). Too quick — he
// grumbles (a mistake), and lies down all the same (scenario §7).
//   What he does: grown Jack strokes the paper tiger, awake for the first time since she died.
//   What he wants: to touch her breath once more.
//   How it is for him: an empty room, a rustle, the day she always burned paper.
//   What the player feels: slowness, tenderness.
//   → { missed }
import { keys, settle, slowly, count } from './hands.js';

export default {
  title: tr('Stroking'),
  about: 5,
  skipped: { missed: false },
  missed: { missed: true },
  points: ['laohu'],
  keys: ['laohu_purr'],
  async run(g, b, opts, signal) {
    const mg = g.minigame({ phrase: tr('Laohu rubs against his hand.') });
    const send = keys(g);
    const over = settle(signal, () => g.set('laohu_purr', 1));
    g.set('laohu_purr', 0);
    const r = await slowly(g, b, mg, { at: 'laohu', pulls: 2, frame: u => send('laohu_purr', u) });
    if (!r) return this.skipped;
    if (!(await count(mg, 0.6))) return this.skipped;
    over();
    await mg.end({ as: r.self ? 'neutral' : r.jerks ? 'flawed' : 'clean' });
    return { missed: r.jerks > 0 };
  },
};
