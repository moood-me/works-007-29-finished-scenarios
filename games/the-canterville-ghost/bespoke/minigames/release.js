// М7 «Let Go» (4.5 and 4С.5, the Garden of Death, after the piece `tears`: the casket in her palm, his hand in hers):
// hold, then let go — a groove on their hands (`simon#hand_r`): held till full, the hands together (`simon_reach` on
// hers); then his hand grows weak (the plate says so) and the arc of time runs: lifted — she lets it go (clean); not
// lifted in WAIT s — it slips out of hers by itself (held long, neutral).
//   What she does: Virginia lets the old man's hand go as he falls asleep.
//   What she wants: to let him sleep at last.
//   How it is for her: tears given; the nightingale, or the silence.
//   What the player feels: opening the hand.
//   → { long: held long }
import { letGo, settle, count } from './hands.js';

const WAIT = 5;
const HERS = { r: 'virginia#hand_l' };

export default {
  title: tr('Let Go'),
  about: 6,
  skipped: { long: false },
  missed: { long: true },
  points: ['simon#hand_r'],
  keys: ['simon_reach'],
  async run(g, b, opts, signal) {
    const mg = g.minigame({ phrase: tr('A cold old hand in a warm one, under the yew.') });
    const over = settle(signal, () => g.set('simon_reach', null));
    g.set('simon_reach', HERS);
    const how = await letGo(g, b, mg, { at: 'simon#hand_r', take: 1.2, wait: WAIT, sign: () => {
      mg.plate.set({ phrase: tr('His hand is growing weak.') });
    } });
    if (!how) return this.skipped;
    g.set('simon_reach', null);
    if (!(await count(mg, 0.8))) return this.skipped;
    over();
    await mg.end({ as: how === 'let' ? 'clean' : 'neutral' });
    return { long: how === 'long' };
  },
};
