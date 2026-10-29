// М9 «The Word» (4С.2, the corridor in the evening, after the piece `word`: Papa at her door holding out his hand,
// «Promise me: never alone»): hold, by its count — a groove on his hand (`otis#hand_r`), her hand in it (`virginia_reach`
// on his) for SECONDS from the first touch. Let go — she takes her hand back first (`virginia_reach` none), a mistake;
// he holds his out a moment longer; held again — her hand back in his. The count out — the end (clean; flawed if let
// go).
//   What she does: Virginia gives her father her word with her hand.
//   What she wants: to keep it — and to know she will.
//   How it is for her: the family leaving in the morning; the wall shut upstairs.
//   What the player feels: holding a hand, and the weight of a promise.
//   → { slips }
import { keep, settle } from './hands.js';

const SECONDS = 5;
const HIS = { r: 'otis#hand_r' };

export default {
  title: tr('The Word'),
  about: 6,
  skipped: { slips: 0 },
  missed: { slips: 1 },
  points: ['otis#hand_r'],
  keys: ['virginia_reach'],
  async run(g, b, opts, signal) {
    const mg = g.minigame({ phrase: tr('Papa holds out his hand: “Promise.”') });
    const over = settle(signal, () => g.set('virginia_reach', null));
    let away = true;
    const r = await keep(g, b, mg, { at: 'otis#hand_r', seconds: SECONDS, take: 0.6,
      frame: ({ held }) => { if (held && away) { away = false; g.set('virginia_reach', HIS); } },
      slip: () => { away = true; g.set('virginia_reach', null); } });
    if (!r) return this.skipped;
    g.set('virginia_reach', null);
    over();
    await mg.end({ as: r.slips ? 'flawed' : 'clean' });
    return r;
  },
};
