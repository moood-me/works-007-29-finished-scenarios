// М1 «The Window» (П.3, the library in the storm, after the piece `window_face`: Virginia looking at the dark window,
// the family laughing behind her): touch nothing — SECONDS of the play's time; the lightning flashes in the painted
// window (`flash`), and in the glass, behind the family's backs, the old face comes up (`face`) and looks at the clean
// floor. A touch — the lightning goes out sooner (`flash` and `face` down at once), a quiet mistake; she will not be
// sure what she saw. The count out — the face fades, the end (neutral either way: watching is the action).
//   What she does: Virginia looks at the dark window while everyone laughs.
//   What she wants: to see — whatever it is.
//   How it is for her: a storm, the family's noise behind her, something in the glass only she sees.
//   What the player feels: not moving, so as not to lose it.
//   → { touched }
import { until, handsOff, settle } from './hands.js';

const SECONDS = 6;

export default {
  title: tr('The Window'),
  about: 6,
  skipped: { touched: false },
  missed: { touched: true },
  points: [],
  keys: ['flash', 'face'],
  async run(g, b, opts, signal) {
    const mg = g.minigame({ phrase: tr('Everyone is laughing. The window is dark, and the rain lashes it.') });
    const over = settle(signal, () => { g.set('flash', 0); g.set('face', 0); });
    g.set('face', 0);
    const sign = handsOff(mg);
    let touched = false;
    const off = mg.on('down', () => {
      if (touched) return;
      touched = true;
      g.failed();
      mg.error('early', { chip: true });
      g.set('flash', 0, 0.2);
      g.set('face', 0, 0.3);
    });
    const t0 = mg.t;
    let lit = false, again = false;
    const done = await until(mg, ({ t }) => {
      const k = t - t0;
      if (!touched) {
        // (the lightning: a flash at 1 s, the face rising in it, held, a second flash at 4 s)
        if (!lit && k >= 1) { lit = true; g.set('flash', 1, 0.1); g.set('face', 1, 1.2); g.sound('thunder', { delay: 1.4, loud: 0.7 }); }
        if (k >= 1.6 && k < 1.7) g.set('flash', 0.5, 0.6);
        if (k >= 4 && k < 4.1 && !again) { again = true; g.set('flash', 1, 0.1); g.sound('thunder', { delay: 0.9, loud: 0.9 }); }
      }
      mg.plate.set({ fill: Math.min(1, k / SECONDS), glow: 'idle' });
      return k >= SECONDS || (touched && k >= 1.5);
    });
    off();
    sign.remove();
    if (!done) return this.skipped;
    g.set('flash', 0, 0.8);
    g.set('face', 0, 1);
    over();
    await mg.end({ as: 'neutral' });
    return { touched };
  },
};
