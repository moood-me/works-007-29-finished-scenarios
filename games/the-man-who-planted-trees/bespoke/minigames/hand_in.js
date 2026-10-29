// МИ2 «Handing Them» (1.1–1.2, the bare slope at morning, after Elzéard's first holes): pull — an acorn from the pail
// (`pail#top`) to the hole where the rod comes out (`plant_spot`), five times. Let go short of the hole — the acorn falls
// in the grass (a mistake; take another). Five in — done (clean; flawed if one fell). Three fallen, or never touched for
// ALONE s — Elzéard takes up the pail himself and the Traveller stands there empty-handed (§7).
//   What he does: the Traveller hands the old man acorns, one to each hole.
//   What he wants: to be of use beside him.
//   How it is for him: mist, the bare slope, the dull blow of the rod.
//   What the player feels: carrying something small to exactly the right place.
//   → { took: Elzéard took the pail himself }
import { until, teach, settle, count } from './hands.js';

const TIMES = 5, DROPS = 3, ALONE = 12;

export default {
  title: tr('Handing Them'),
  about: 12,
  skipped: { took: false },
  missed: { took: true },
  points: ['pail#top', 'plant_spot'],
  keys: [],
  async run(g, b, opts, signal) {
    const mg = g.minigame({ phrase: tr('The rod comes out of the earth; a hole, and the pail of acorns.') });
    settle(signal, () => {});
    mg.plate.set({ notches: Array.from({ length: TIMES - 1 }, (_, i) => (i + 1) / TIMES) });
    let put = 0, drops = 0, begun = false;
    const t00 = mg.t;
    for (;;) {
      const mark = mg.mark({ at: 'pail#top', kind: 'ring' });
      const pull = mg.pull({ on: mark, to: 'plant_spot', release: 'spring' });
      const taught = teach(b, mg, [pull]);
      let how = null;
      const off = pull.on('release', ({ inTarget }) => { how = inTarget ? 'in' : 'dropped'; });
      const touch = mg.on('down', () => { begun = true; });
      const ok = await until(mg, ({ t }) => {
        mg.plate.set({ fill: (put + (pull.state.held ? 0.5 * pull.state.u : 0)) / TIMES, glow: pull.state.held ? 'good' : 'idle' });
        return how || (!begun && t - t00 >= ALONE);
      });
      off();
      touch();
      taught.remove();
      if (!ok) return this.skipped;
      mark.remove();
      if (!how) return this.missEnd(mg, { took: true });
      if (how === 'in') { put++; mg.snap({ at: 'plant_spot' }); } else { drops++; g.failed(); mg.error('dropped', { chip: true }); }
      if (drops >= DROPS) return this.missEnd(mg, { took: true });
      if (put >= TIMES) break;
    }
    if (!(await count(mg, 0.5))) return this.skipped;
    await mg.end({ as: drops ? 'flawed' : 'clean' });
    return { took: false };
  },
  async missEnd(mg, r) {
    await mg.end({ as: 'flawed' });
    return r;
  },
};
