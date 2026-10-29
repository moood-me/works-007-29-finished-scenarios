// М8б «The Shoulder» (4С.4 «wake», the corridor at night, after the piece `farewell_go`: Papa asleep in the armchair at
// her door): pull slowly — a dashed ring on his shoulder (`otis#chest`); each slow pull brings her hand nearer
// (`virginia_reach` toward it as it comes). Too sharp — he starts up, the book falls off his knees (`otis_with` none), a
// mistake. Her hand on his shoulder — the end (clean; flawed if sharp); the piece after it: he wakes and stands.
//   What she does: Virginia wakes her father to stand beside her.
//   What she wants: not to be alone with her word — and not to frighten him.
//   How it is for her: the old man's light at the end of the corridor; Papa so tired.
//   What the player feels: reaching slowly, making up one's mind.
//   → { sharp }
import { settle, slowly, count } from './hands.js';

export default {
  title: tr('The Shoulder'),
  about: 5,
  skipped: { sharp: false },
  missed: { sharp: true },
  points: ['otis#chest'],
  keys: ['virginia_reach', 'otis_with'],
  async run(g, b, opts, signal) {
    const mg = g.minigame({ phrase: tr('Papa asleep in the chair at her door.') });
    const over = settle(signal, () => g.set('virginia_reach', null));
    let sharp = false, reached = false;
    const r = await slowly(g, b, mg, { at: 'otis#chest', pulls: 2,
      frame: u => { if (u > 0.3 && !reached) { reached = true; g.set('virginia_reach', { r: 'otis#chest' }); } },
      jerk: () => {
        if (sharp) return;
        sharp = true;
        g.mood('otis', 'surprised');
        g.set('otis_with', []);
      } });
    if (!r) return this.skipped;
    g.set('virginia_reach', { r: 'otis#chest' });
    if (!(await count(mg, 0.6))) return this.skipped;
    g.set('virginia_reach', null);
    over();
    await mg.end({ as: r.self ? 'neutral' : sharp ? 'flawed' : 'clean' });
    return { sharp };
  },
};
