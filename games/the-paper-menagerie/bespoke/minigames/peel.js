// М7 «The Tape, Her Last» (3.3, the square, after the first half of the piece `reading`: the letter on the woman's
// knees, the fresh strip of tape over the overlapped tear): lead slowly — a dashed ring on the letter
// (`translator#letter`), three slow pulls peel the strip (`tear`: `taped` → `open`, the edges lying side by side). Too
// quick — the edge of the tear stays curled under (`tear` `curled`, a mistake): «I can't see. Probably — “alone”». The
// same meaning; the paper whole (scenario §7). The mirror of М4: he held while she taped; her last strip he peels.
//   What he does: Jack peels off his mother's last strip of tape.
//   What he wants: the word under it.
//   How it is for him: a stranger reading his mother's life aloud; the bus waiting.
//   What the player feels: care, holding the breath.
//   → { missed }
import { settle, slowly, count } from './hands.js';

export default {
  title: tr('The Tape, Her Last'),
  about: 5,
  skipped: { missed: false },
  missed: { missed: true },
  points: ['translator#letter'],
  keys: ['tear'],
  async run(g, b, opts, signal) {
    const mg = g.minigame({ phrase: tr('A fresh strip of tape over the tear; a word under the overlap.') });
    const over = settle(signal, () => g.set('tear', 'open'));
    g.set('tear', 'taped');
    let curled = false;
    const r = await slowly(g, b, mg, { at: 'translator#letter', pulls: 3, jerk: () => { curled = true; } });
    if (!r) return this.skipped;
    g.set('tear', curled ? 'curled' : 'open');
    if (!(await count(mg, 0.8))) return this.skipped;
    over();
    await mg.end({ as: r.self ? 'neutral' : curled ? 'flawed' : 'clean' });
    return { missed: curled };
  },
};
