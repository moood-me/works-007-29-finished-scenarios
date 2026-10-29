// М4 «The Tape» (1.5, the kitchen in the evening, after the piece `tape`: Laohu's halves laid along the old lines on
// the oilcloth, Mom with the roll): hold — a groove on the tiger (`laohu`), SECONDS from the first touch, while she lays
// the tape along the seam (`tape_laid` 0…1). Let go — the halves slip, the seam comes out crooked (a mistake): the mark
// «Seam», Laohu limps worse to the end (scenario §7).
//   What he does: Jack holds the two halves of his tiger level while his mother tapes them.
//   What he wants: Laohu whole, tonight — tomorrow it will be just paper.
//   How it is for him: her hands beside his; what was said in the yard.
//   What the player feels: holding still for someone else's hands.
//   → { missed }
import { keys, keep, settle } from './hands.js';

const SECONDS = 6;

export default {
  title: tr('The Tape'),
  about: 6,
  skipped: { missed: false },
  missed: { missed: true },
  points: ['laohu'],
  keys: ['tape_laid'],
  async run(g, b, opts, signal) {
    const mg = g.minigame({ phrase: tr('Two halves of the tiger, a roll of tape. Hold them level.') });
    const send = keys(g);
    const over = settle(signal, () => g.set('tape_laid', 1));
    g.set('tape_laid', 0);
    const r = await keep(g, b, mg, { at: 'laohu', seconds: SECONDS, take: 0.8,
      frame: ({ t, held }) => { if (held) send('tape_laid', Math.min(1, t / SECONDS)); },
      slip: () => mg.plate.set({ phrase: tr('The halves slip. Hold them again.') }) });
    if (!r) return this.skipped;
    g.set('tape_laid', 1, 0.4);
    over();
    await mg.end({ as: r.slips ? 'flawed' : 'clean' });
    return { missed: r.slips > 0 };
  },
};
