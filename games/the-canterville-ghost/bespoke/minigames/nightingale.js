// М5 «The Nightingale» (3.5, the Tapestry Chamber on an autumn afternoon, as he begins «Far away beyond the pine-woods
// there is a little garden…»): touch nothing — SECONDS; the tapestries darken and the window, instead of the avenue,
// shows moonlit grass (`vision` 0 → 1, held, then back as it ends); the nightingale's song is the game's sound. A touch
// — the vision breaks (`vision` back to 0 at once), a quiet mistake: he breaks off — «You are not listening» — and says
// the rest shorter. The count out — the end (neutral: listening is the action).
//   What she does: Virginia listens to the old man tell of the Garden of Death.
//   What she wants: to understand what he is asking.
//   How it is for her: the room goes dark, and the garden is there in the window.
//   What the player feels: keeping still, so as not to break it.
//   → { touched }
import { until, handsOff, settle } from './hands.js';

const SECONDS = 10;

export default {
  title: tr('The Nightingale'),
  about: 10,
  skipped: { touched: false },
  missed: { touched: true },
  points: [],
  keys: ['vision'],
  async run(g, b, opts, signal) {
    const mg = g.minigame({ phrase: tr('“Far away beyond the pine-woods there is a little garden…”') });
    // (the room's own air again: the limes beyond the window)
    const ROOM = { trees: 0.32 };
    const over = settle(signal, () => { g.set('vision', 0, 1); g.air(ROOM); });
    const sign = handsOff(mg);
    g.set('vision', 1, 3);
    g.air({ nightingale: 0.5, trees: 0.04 });
    let touched = false;
    const off = mg.on('down', () => {
      if (touched) return;
      touched = true;
      g.failed();
      mg.error('early', { chip: true });
      g.set('vision', 0, 0.4);
      g.air(ROOM);
    });
    const t0 = mg.t;
    const done = await until(mg, ({ t }) => {
      mg.plate.set({ fill: Math.min(1, (t - t0) / SECONDS), glow: 'idle' });
      return t - t0 >= SECONDS || (touched && t - t0 >= 1);
    });
    off();
    sign.remove();
    if (!done) return this.skipped;
    g.set('vision', 0, touched ? 0.4 : 2);
    g.air(ROOM);
    over();
    await mg.end({ as: 'neutral' });
    return { touched };
  },
};
