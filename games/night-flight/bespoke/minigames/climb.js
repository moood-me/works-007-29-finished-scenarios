// М6 «Up» (3.4, the cockpit in the storm, after the minute's piece — `key_held`, `lamp_note` or `laugh_note`): pull
// slowly — a dashed ring on Fabien's hands (`fabien#hands`): each slow pull draws the plane up toward the gap (`climb`
// 0…1: the nose up, the cloud tops sinking past, the light growing). Too sharp — Fabien drags it up himself, with a
// jerk (a mistake: the rest comes by itself, quickly). Up — the end (clean; flawed if he dragged it).
//   What he does: Fabien pulls the plane up out of the storm, toward the stars.
//   What he wants: the light — though from up there there is no coming back.
//   How it is for him: thirty minutes of fuel; the minute over.
//   What the player feels: a slow, steady pull upward.
//   → { jerked }
import { keys, settle, slowly, count } from './hands.js';

export default {
  title: tr('Up'),
  about: 8,
  skipped: { jerked: false },
  missed: { jerked: true },
  points: ['fabien#hands'],
  keys: ['climb'],
  async run(g, b, opts, signal) {
    const mg = g.minigame({ phrase: tr('The minute is over. Overhead, in the gap, the stars.') });
    const send = keys(g);
    const over = settle(signal, () => g.set('climb', 1));
    g.set('climb', 0);
    let jerked = false;
    const r = await slowly(g, b, mg, { at: 'fabien#hands', pulls: 4, frame: u => send('climb', u),
      jerk: () => {
        jerked = true;
        mg.plate.set({ phrase: tr('Too sharp. Fabien drags it up himself, with a jerk.') });
        return true;
      } });
    if (!r) return this.skipped;
    if (r.self && !jerked) { jerked = true; mg.plate.set({ phrase: tr('Fabien drags it up himself, with a jerk.') }); }
    g.set('climb', 1);
    if (!(await count(mg, 0.6))) return this.skipped;
    over();
    await mg.end({ as: jerked ? 'flawed' : 'clean' });
    return { jerked };
  },
};
