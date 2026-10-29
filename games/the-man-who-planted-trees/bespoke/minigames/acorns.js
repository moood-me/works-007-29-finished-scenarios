// МИ1 «A Hundred Acorns» (П.4, the house at dusk, Elzéard and the Traveller): tap — the acorns laid out between their
// hands (a row of marks between `elzeard#hands` and `traveller#hands`): the cracked ones (dashed marks) to be thrown
// out with a tap, the good ones (quiet spots) to be left. A good one tapped — a mistake (it is not thrown out). All the
// cracked ones out — done (clean; flawed if a good one was tapped). Not done LIMIT s after the first touch, or never
// touched for ALONE s — Elzéard finishes the sorting himself, faster, and takes one cracked acorn out of “yours” (§7).
//   What he does: the Traveller sorts acorns with the old man, in silence.
//   What he wants: to be of use; to understand what this man is doing.
//   How it is for him: a stranger's table, soup, the lamp, a man who does not talk.
//   What the player feels: picking carefully, counting with him.
//   → { self: Elzéard finished it }
import { until, teach, settle } from './hands.js';

const CRACKED = [1, 3, 4, 6, 8, 9, 11, 12], GOOD = [0, 2, 5, 7, 10]; // the row's places, left to right
const LIMIT = 20, ALONE = 12;

export default {
  title: tr('A Hundred Acorns'),
  about: 12,
  skipped: { self: false },
  missed: { self: true },
  points: ['elzeard#hands', 'traveller#hands'],
  keys: [],
  async run(g, b, opts, signal) {
    const mg = g.minigame({ phrase: tr('A heap of acorns on the table under the lamp; some of them cracked.') });
    settle(signal, () => {});
    const n = CRACKED.length + GOOD.length;
    // (a place of the row: a page point between their hands, the row bowed a little up)
    const place = i => () => {
      const a = b.where('elzeard#hands'), c = b.where('traveller#hands');
      if (!a || !c) return null;
      const u = (i + 0.5) / n;
      return { x: a.x + (c.x - a.x) * u, y: a.y + (c.y - a.y) * u - Math.sin(Math.PI * u) * 0.04 * (b.frame().h) };
    };
    let left = CRACKED.length, wrong = 0, begun = null;
    const marks = [];
    for (const i of CRACKED) {
      const mark = mg.mark({ at: place(i), kind: 'dash' });
      const press = mg.press({ on: mark });
      press.on('press', () => { begun ??= mg.t; mg.snap({ at: mark }); mark.remove(); left--; });
      marks.push(press);
    }
    for (const i of GOOD) {
      const mark = mg.mark({ at: place(i), kind: 'spot', quiet: true });
      const press = mg.press({ on: mark });
      press.on('press', () => { begun ??= mg.t; wrong++; g.failed(); mg.error('wrong', { at: mark, chip: true }); });
    }
    const taught = teach(b, mg, marks.slice(0, 1));
    const t00 = mg.t;
    let self = false;
    const done = await until(mg, ({ t }) => {
      mg.plate.set({ fill: 1 - left / CRACKED.length, glow: begun == null ? 'idle' : 'good' });
      if ((begun != null && t - begun >= LIMIT) || (begun == null && t - t00 >= ALONE)) self = true;
      return left <= 0 || self;
    });
    taught.remove();
    if (!done) return this.skipped;
    await mg.end({ as: self ? 'neutral' : wrong ? 'flawed' : 'clean' });
    return { self };
  },
};
