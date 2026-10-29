// М8в «The Threshold» (4С.4 «stay», the corridor at night, after the piece `farewell_go`: she on her threshold, Papa
// asleep in the chair, the old man going away to the far door): touch nothing — SECONDS while his light goes away down
// the corridor (`simon_d` on toward the far end, his light kept before him — `ghost_d` — and dimming, `ghost_light`). A
// touch — she takes half a step over the threshold (`virginia_d` + 0.3) and stops, a quiet mistake; he does not turn.
// The count out — the end (neutral: staying is the action).
//   What she does: Virginia stays at her door and lets him go.
//   What she wants: to keep her word to Papa — by herself.
//   How it is for her: he came not to ask but to take his leave; he will not sleep, ever.
//   What the player feels: not moving while someone goes away.
//   → { stepped }
import { keys, until, handsOff, settle } from './hands.js';

const SECONDS = 6, FROM = 12.4, TO = 13.4;

export default {
  title: tr('The Threshold'),
  about: 6,
  skipped: { stepped: false },
  missed: { stepped: true },
  points: [],
  keys: ['simon_d', 'ghost_d', 'ghost_light', 'virginia_d'],
  async run(g, b, opts, signal) {
    const mg = g.minigame({ phrase: tr('His light is going away down the corridor.') });
    const send = keys(g);
    const over = settle(signal, () => { g.set('simon_d', TO); g.set('ghost_d', TO - 0.6); g.set('ghost_light', 0.3); });
    const sign = handsOff(mg);
    let stepped = false;
    const off = mg.on('down', () => {
      if (stepped) return;
      stepped = true;
      g.failed();
      mg.error('early', { chip: true });
      const d = g.get('virginia_d');
      if (typeof d === 'number') g.set('virginia_d', d + 0.3, 0.6);
    });
    const t0 = mg.t;
    const done = await until(mg, ({ t }) => {
      const u = Math.min(1, (t - t0) / SECONDS);
      send('simon_d', FROM + (TO - FROM) * u);
      send('ghost_d', FROM + (TO - FROM) * u - 0.6);
      send('ghost_light', 1 - 0.7 * u);
      mg.plate.set({ fill: u, glow: 'idle' });
      return u >= 1;
    });
    off();
    sign.remove();
    if (!done) return this.skipped;
    over();
    await mg.end({ as: 'neutral' });
    return { stepped };
  },
};
