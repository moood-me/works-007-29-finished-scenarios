// МИ1 «A Hundred Acorns» (П.4, inside the house at dusk, after the piece `table`: the heap poured out on the table):
// tap — the table close (the insert `table_close`, key `close` 0 → 1, `acorns` heap): the cracked acorns
// (`table_close#cracked_k`, dashed marks) to be put aside with a tap — each one a bit of `cracked_out` —, the good heap
// (`table_close#heap`, a quiet spot) to be left. The heap tapped — a mistake (nothing is put aside). All the cracked
// ones out — done (clean; flawed if a good one was tapped). Not done LIMIT s after the first touch, or never touched for
// ALONE s — Elzéard finishes the sorting himself, faster, and takes one cracked acorn out of “yours” (§7).
//   What he does: the Traveller sorts acorns with the old man, in silence.
//   What he wants: to be of use; to understand what this man is doing.
//   How it is for him: a stranger's table, soup, the lamp, a man who does not talk.
//   What the player feels: picking carefully, counting with him.
//   → { self: Elzéard finished it }
import { until, teach, settle } from './hands.js';

const CRACKED = 10, ALL = (1 << CRACKED) - 1;
const LIMIT = 20, ALONE = 12;

export default {
  title: tr('A Hundred Acorns'),
  about: 12,
  skipped: { self: false },
  missed: { self: true },
  points: [...Array.from({ length: CRACKED }, (_, k) => `table_close#cracked_${k}`), 'table_close#heap'],
  keys: ['close', 'cracked_out', 'acorns'],
  async run(g, b, opts, signal) {
    const mg = g.minigame({ phrase: tr('A heap of acorns on the table under the lamp; some of them cracked.') });
    const over = settle(signal, () => { g.set('cracked_out', ALL); g.set('close', 0); g.set('acorns', 'sorted'); });
    g.set('acorns', 'heap');
    g.set('cracked_out', 0);
    g.set('close', 1, 0.8);
    let out = 0, wrong = 0, begun = null;
    const presses = [];
    for (let k = 0; k < CRACKED; k++) {
      const mark = mg.mark({ at: `table_close#cracked_${k}`, kind: 'dash' });
      const press = mg.press({ on: mark });
      press.on('press', () => { begun ??= mg.t; mg.snap({ at: mark }); mark.remove(); out |= 1 << k; g.set('cracked_out', out); });
      presses.push(press);
    }
    {
      const mark = mg.mark({ at: 'table_close#heap', kind: 'spot', quiet: true });
      const press = mg.press({ on: mark });
      press.on('press', () => { begun ??= mg.t; wrong++; g.failed(); mg.error('wrong', { at: mark, chip: true }); });
    }
    const taught = teach(b, mg, presses.slice(0, 1));
    const t00 = mg.t;
    let self = false;
    const left = () => CRACKED - presses.filter((_, k) => out & (1 << k)).length;
    const done = await until(mg, ({ t }) => {
      mg.plate.set({ fill: 1 - left() / CRACKED, glow: begun == null ? 'idle' : 'good' });
      if ((begun != null && t - begun >= LIMIT) || (begun == null && t - t00 >= ALONE)) self = true;
      return left() <= 0 || self;
    });
    taught.remove();
    if (!done) return this.skipped;
    if (self) g.set('cracked_out', ALL);
    g.set('acorns', 'sorted');
    g.set('close', 0, 0.8);
    over();
    await mg.end({ as: self ? 'neutral' : wrong ? 'flawed' : 'clean' });
    return { self };
  },
};
