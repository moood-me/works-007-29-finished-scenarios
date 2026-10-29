// М3 «The Scraps» (1.2, the yard on Sunday, after the piece `knight`: Laohu torn, the scraps blown across the wet
// grass, Jack squatting): tap — five marks on the scraps (`scraps#s1` … `scraps#s5`), each pressed picks one up
// (`scraps_left` 5 → 0); SECONDS of wind for all five. Not all caught in time — the ear is carried across the street
// into the drain (a mistake): the mark «Ear», Laohu one-eared to the end (scenario §7).
//   What he does: Jack catches the torn pieces of his tiger in the grass.
//   What he wants: all of him back, before the wind takes them.
//   How it is for him: Mark's «trash», the knight dripping, the wind.
//   What the player feels: hurry, small and precise.
//   → { missed }
import { settle, until } from './hands.js';

const SECONDS = 8, N = 5;

export default {
  title: tr('The Scraps'),
  about: 8,
  skipped: { missed: false },
  missed: { missed: true },
  points: ['scraps#s1', 'scraps#s2', 'scraps#s3', 'scraps#s4', 'scraps#s5'],
  keys: ['scraps_left'],
  async run(g, b, opts, signal) {
    const mg = g.minigame({ phrase: tr('Red scraps on the grass, and the wind.') });
    const over = settle(signal, () => g.set('scraps_left', 0));
    g.set('scraps_left', N);
    let left = N;
    const presses = this.points.map(at => {
      const mark = mg.mark({ at });
      const press = mg.press({ on: mark });
      press.on('press', () => {
        mg.snap({ at: mark });
        mark.remove();
        left--;
        g.set('scraps_left', left);
      });
      return press;
    });
    b.minigame.tricks.teach(mg, presses, { still: [2, 4] });
    const t0 = mg.t;
    const done = await until(mg, ({ t }) => {
      mg.plate.set({ fill: (N - left) / N, glow: 'good' });
      return left <= 0 || t - t0 >= SECONDS;
    });
    if (!done) return this.skipped;
    const missed = left > 0;
    if (missed) {
      g.failed();
      mg.error('behind', { chip: true });
    }
    over();
    await mg.end({ as: missed ? 'flawed' : 'clean' });
    return { missed };
  },
};
