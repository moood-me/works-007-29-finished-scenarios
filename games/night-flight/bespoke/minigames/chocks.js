// М7 «The Chocks» (Ш3 «Fly», the field, after the piece `hand_up`: Rivière's hand raised, the European's engine
// running up): hold, then let go — a groove on the raised hand (`riviere#hand_r`): held till full, the engine coming up
// to its full roar (`engine`); then the call to let the hand fall and the arc of time (WAIT s): lifted — the chocks are
// pulled away (clean); not lifted in time — the pilot moves off by himself at the mechanic's sign (held long, neutral).
//   What he does: Rivière lets the next man go into the same night.
//   What he wants: the night kept open — the mail goes.
//   How it is for him: her silhouette in the window above.
//   What the player feels: a raised hand held, then dropped.
//   → { long: the pilot went by himself }
import { keys, letGo, settle, count } from './hands.js';

const WAIT = 5;

export default {
  title: tr('The Chocks'),
  about: 7,
  skipped: { long: false },
  missed: { long: true },
  points: ['riviere#hand_r'],
  keys: ['engine'],
  async run(g, b, opts, signal) {
    const mg = g.minigame({ phrase: tr('Rivière’s hand raised. The engine runs up.') });
    const send = keys(g);
    const over = settle(signal, () => g.set('engine', 1));
    // (the engine from where it runs now up to its full roar)
    const from = Math.min(1, g.get('engine') ?? 1);
    const how = await letGo(g, b, mg, { at: 'riviere#hand_r', take: 1.5, wait: WAIT, held: u => send('engine', from + (1 - from) * u),
      sign: () => { g.set('engine', 1); mg.plate.set({ phrase: tr('The engine at its full roar. Let your hand fall.') }); } });
    if (!how) return this.skipped;
    if (how === 'long') mg.plate.set({ phrase: tr('The mechanic signs to the pilot; the plane moves off by itself.') });
    if (!(await count(mg, 0.8))) return this.skipped;
    over();
    await mg.end({ as: how === 'let' ? 'clean' : 'neutral' });
    return { long: how === 'long' };
  },
};
