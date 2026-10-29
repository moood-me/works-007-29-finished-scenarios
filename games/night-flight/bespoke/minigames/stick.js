// М5 «The Stick» (2.2, the cockpit in the storm, after the piece `storm`): balance — the plane is what tilts (a quiet
// ring on Fabien's hands on the stick, `fabien#hands`; the gusts throw it side to side, the finger leads it back): the
// plane's roll follows the arrow (`roll`). Off too far — the plane goes over on a wing (`roll` toward ±60, a mistake),
// and in the lightning, for a moment, there is water below (`water`); Fabien rights it himself. SECONDS from the first
// touch — the end (clean; flawed if it went over).
//   What he does: Fabien holds the plane level while the storm throws it about.
//   What he wants: to keep it in the air till he knows where to go.
//   How it is for him: darkness, lightning, no ground, no answer.
//   What the player feels: carrying something through gusts.
//   → { lost: it went over on a wing }
import { keys, settle, balance, wobble } from './hands.js';

const SECONDS = 10, ROLL = 22, OVER = 60, RIGHT = 1.6; // s Fabien takes to right it

export default {
  title: tr('The Stick'),
  about: SECONDS,
  skipped: { lost: false },
  missed: { lost: true },
  points: ['fabien#hands'],
  keys: ['roll', 'water'],
  async run(g, b, opts, signal) {
    const mg = g.minigame({ phrase: tr('Darkness, lightning; the plane is thrown about. Keep it level.') });
    const send = keys(g);
    const over = settle(signal, () => { g.set('roll', 0, 0.8); g.set('water', 0, 0.5); });
    // (gone over: the wing down for a moment, the water below in the flash, then Fabien rights it)
    let lost = false, at = -Infinity, side = 1;
    const r = await balance(g, b, mg, { at: 'fabien#hands', seconds: SECONDS, width: 0.45,
      push: t => wobble(t, 1.1, 0.4),
      frame: ({ arrow }) => {
        const k = mg.t - at;
        if (k < RIGHT) {
          const down = Math.sin(Math.PI * Math.min(1, k / RIGHT));
          send('roll', side * OVER * down);
          send('water', down);
        } else {
          send('roll', ROLL * arrow);
          send('water', 0);
        }
      },
      slip: () => {
        lost = true;
        at = mg.t;
        side = Math.sign(g.get('roll') || 1);
        mg.plate.set({ phrase: tr('Over on a wing — and water below, in the lightning. Fabien rights it.') });
      } });
    if (!r) return this.skipped;
    g.set('roll', 0, 0.8);
    g.set('water', 0, 0.5);
    over();
    await mg.end({ as: r.alone ? 'neutral' : r.as });
    return { lost };
  },
};
