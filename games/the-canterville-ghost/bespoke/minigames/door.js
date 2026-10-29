// М2 «The Door» (1.1, the corridor at one at night, after the piece `chains`: her door shut, his light coming down the
// corridor): pull slowly — a dashed ring on the handle (`door_virginia#handle`); each slow pull opens the door a little
// more (`door_virginia` 270 shut → 292, a crack). Too fast — it creaks (a mistake; that pull spent): the ghost will turn
// at the sound. Open a crack — the end (clean; flawed if it creaked).
//   What she does: Virginia opens her door a crack at one in the morning.
//   What she wants: to see who clanks and groans in the corridor — unseen.
//   How it is for her: fear and curiosity; the house asleep.
//   What the player feels: a slow pull, holding the creak in.
//   → { creaked }
import { keys, settle, slowly, count } from './hands.js';

const SHUT = 270, CRACK = 292;

export default {
  title: tr('The Door'),
  about: 6,
  skipped: { creaked: false },
  missed: { creaked: true },
  points: ['door_virginia#handle'],
  keys: ['door_virginia'],
  async run(g, b, opts, signal) {
    const mg = g.minigame({ phrase: tr('In the corridor: chains, steps, a groan. The door is shut.') });
    const send = keys(g);
    const over = settle(signal, () => g.set('door_virginia', CRACK));
    send('door_virginia', SHUT);
    const r = await slowly(g, b, mg, { at: 'door_virginia#handle', pulls: 3, frame: u => send('door_virginia', SHUT + (CRACK - SHUT) * u) });
    if (!r) return this.skipped;
    if (!(await count(mg, 0.6))) return this.skipped;
    over();
    await mg.end({ as: r.self ? 'neutral' : r.jerks ? 'flawed' : 'clean' });
    return { creaked: r.jerks > 0 };
  },
};
