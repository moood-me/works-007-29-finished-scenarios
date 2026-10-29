// М8 «On Tiptoe» (4С.4 «pass», the corridor at night, after the piece `farewell_go`: Papa asleep in the armchair at her
// door, his light going away down the corridor): balance — her body is what tilts (a quiet ring on her, `virginia#chest`;
// a board's give pushes her side to side, the finger leads her straight); she walks past the chair and on as the count
// goes (`virginia_a` 0.6, `virginia_d` 6.2 → 10 over SECONDS). Off too far — a board creaks (a mistake): Papa mutters
// «Ginny?..» and sleeps on. The count out — past him, the end (clean; flawed if it creaked).
//   What she does: Virginia steals past her sleeping father, breaking her word.
//   What she wants: to go to the old man — without waking him.
//   How it is for her: his face asleep; the book on his knees; her word.
//   What the player feels: holding one's breath, step by step.
//   → { creaked }
import { keys, settle, balance, wobble } from './hands.js';

const SECONDS = 8, FROM = 6.2, TO = 10;

export default {
  title: tr('On Tiptoe'),
  about: 8,
  skipped: { creaked: false },
  missed: { creaked: true },
  points: ['virginia#chest'],
  keys: ['virginia_a', 'virginia_d'],
  async run(g, b, opts, signal) {
    const mg = g.minigame({ phrase: tr('Papa asleep in the chair, the book on his knees. The old boards of the corridor.') });
    const send = keys(g);
    const over = settle(signal, () => { g.set('virginia_a', 0.6); g.set('virginia_d', TO); });
    g.set('virginia_a', 0.6, 0.6);
    let creaked = false;
    const r = await balance(g, b, mg, { at: 'virginia#chest', seconds: SECONDS, width: 0.5,
      push: t => wobble(t, 0.7, 2.1),
      frame: ({ t }) => send('virginia_d', FROM + (TO - FROM) * Math.min(1, t / SECONDS)),
      slip: async () => {
        if (creaked) return;
        creaked = true;
        g.mood('otis', 'thinking');
        await g.say('otis', 'Ginny?..', { how: 'muttered in his sleep, not waking' });
        g.mood('otis', 'eyes_closed');
      } });
    if (!r) return this.skipped;
    g.set('virginia_d', TO, 0.6);
    over();
    await mg.end({ as: r.alone ? 'neutral' : creaked ? 'flawed' : 'clean' });
    return { creaked };
  },
};
