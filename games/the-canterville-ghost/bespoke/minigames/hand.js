// М6 «The Hand» (4.1 and 4С.5, the dark behind the wall — the Tapestry Chamber with its wall open, after the piece
// `dark`: the two hand in hand in his light, shapes and wings going by): hold, by its count — a groove on their joined
// hands (`virginia#hand_r`): SECONDS of holding from the first touch, while the voices whisper «Go back!». Let go — her
// hand loses his (`virginia_reach` none) and gropes, the shapes close in (`shapes` up), a mistake; held again — his hand
// finds hers by itself (`virginia_reach` back on his). The count out — the end (clean; flawed if let go).
//   What she does: Virginia walks through the dark holding a dead man's cold hand.
//   What she wants: not to lose him — and not to turn back.
//   How it is for her: shapes, wings, wicked whispers; only his pale light.
//   What the player feels: holding on in the dark.
//   → { slips }
import { keys, keep, settle } from './hands.js';

const SECONDS = 12;
const HIS = { r: 'simon#hand_l' };

export default {
  title: tr('The Hand'),
  about: 12,
  skipped: { slips: 0 },
  missed: { slips: 1 },
  points: ['virginia#hand_r'],
  keys: ['shapes', 'virginia_reach'],
  async run(g, b, opts, signal) {
    const mg = g.minigame({ phrase: tr('Darkness. Shapes, wings, whispers — and his pale hand.') });
    const send = keys(g);
    const over = settle(signal, () => { g.set('virginia_reach', HIS); g.set('shapes', 1); });
    g.set('virginia_reach', HIS);
    g.set('shapes', 1);
    let lost = false;
    const r = await keep(g, b, mg, { at: 'virginia#hand_r', seconds: SECONDS, take: 0.8,
      frame: ({ held, taken }) => {
        if (lost && held) { lost = false; g.set('virginia_reach', HIS); }
        send('shapes', taken && !held ? 1.6 : 1);
      },
      slip: () => { lost = true; g.set('virginia_reach', null); } });
    if (!r) return this.skipped;
    g.set('virginia_reach', HIS);
    over();
    await mg.end({ as: r.slips ? 'flawed' : 'clean' });
    return r;
  },
};
