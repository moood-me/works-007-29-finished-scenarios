// М4 «The Candle» (2.5 «warn», the corridor at a quarter to midnight, after the piece `candle_walk` begins: Virginia at
// her door, a candle in her hand, the turnip ghost standing at the corner): balance — the flame is what tilts (a quiet
// ring on it, `virginia#flame`; the draught pushes it side to side, the finger leads it back); she walks down the
// corridor as the count goes (`virginia_d` 6.3 → 13.4 over SECONDS), the flame's light breathing with the tilt
// (`virginia_candle`). Off too far — it goes out (`virginia_candle` 0, a mistake; she walks on in the dark). The count
// out — at his door, the end (clean; flawed if it went out).
//   What she does: Virginia carries a candle down the dark corridor to the murderer's room.
//   What she wants: to warn him without anyone hearing — and not be left in the dark.
//   How it is for her: alone, at a quarter to midnight, the turnip grinning at the corner.
//   What the player feels: steadying a small flame.
//   → { out }
import { keys, settle, balance, wobble } from './hands.js';

const SECONDS = 8, FROM = 6.3, TO = 13.4;

export default {
  title: tr('The Candle'),
  about: 8,
  skipped: { out: false },
  missed: { out: true },
  points: ['virginia#flame'],
  keys: ['virginia_d', 'virginia_candle'],
  async run(g, b, opts, signal) {
    const mg = g.minigame({ phrase: tr('A quarter to midnight. A candle, and the long corridor to the Tapestry Chamber.') });
    const send = keys(g);
    const over = settle(signal, () => g.set('virginia_d', TO));
    g.set('virginia_candle', 1);
    let out = false;
    const r = await balance(g, b, mg, { at: 'virginia#flame', seconds: SECONDS, width: 0.5,
      push: t => wobble(t, 0.8, 1.3),
      frame: ({ arrow, t }) => {
        send('virginia_d', FROM + (TO - FROM) * Math.min(1, t / SECONDS));
        if (!out) send('virginia_candle', 1 - 0.5 * Math.min(1, Math.abs(arrow)));
      },
      slip: () => { if (!out) { out = true; g.set('virginia_candle', 0, 0.3); mg.plate.set({ phrase: tr('The flame is out. The corridor is dark to its end.') }); } } });
    if (!r) return this.skipped;
    g.set('virginia_d', TO, 0.6);
    over();
    await mg.end({ as: r.alone ? 'neutral' : out ? 'flawed' : 'clean' });
    return { out };
  },
};
