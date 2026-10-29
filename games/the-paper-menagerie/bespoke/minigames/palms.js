// М1 «Palms» (П.2, the kitchen after Christmas, after the piece `palms`: the paper tiger in Jack's cupped hands, Mom
// bending to breathe on it): hold — a groove on his palms (`jack#hands`), SECONDS from the first touch, while she
// breathes and the tiger warms and rises (`laohu_breath` 0…1). Let go — the tiger rolls off his palms onto the table (a
// mistake): it stands up and growls all the same (scenario §7). The count out — it stands on its paws (clean; flawed if
// let go).
//   What he does: a five-year-old holds a paper tiger still while his mother breathes on it.
//   What he wants: his robot back — and then, suddenly, this.
//   How it is for him: tears, wrapping paper, Mom's breath.
//   What the player feels: holding something small, about to be alive, very still.
//   → { missed }
import { keys, keep, settle } from './hands.js';

const SECONDS = 8;

export default {
  title: tr('Palms'),
  about: 8,
  skipped: { missed: false },
  missed: { missed: true },
  points: ['jack#hands'],
  keys: ['laohu_breath'],
  async run(g, b, opts, signal) {
    const mg = g.minigame({ phrase: tr('A tiger of red paper with gold stars in his palms. Mom breathes on it.') });
    const send = keys(g);
    const over = settle(signal, () => g.set('laohu_breath', 1));
    g.set('laohu_breath', 0);
    const r = await keep(g, b, mg, { at: 'jack#hands', seconds: SECONDS, take: 0.8,
      frame: ({ t, held }) => { if (held) send('laohu_breath', Math.min(1, t / SECONDS)); },
      slip: () => mg.plate.set({ phrase: tr('The tiger rolls off his palms onto the table.') }) });
    if (!r) return this.skipped;
    g.set('laohu_breath', 1, 0.6);
    over();
    await mg.end({ as: r.slips ? 'flawed' : 'clean' });
    return { missed: r.slips > 0 };
  },
};
