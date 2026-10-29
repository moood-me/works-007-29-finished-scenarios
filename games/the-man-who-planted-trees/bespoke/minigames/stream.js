// МИ3 «The Stream» (2.3, the stream at morning, the Traveller and Lina at the water): hold, by its count — a groove on
// his hand (`traveller#hand_r`): SECONDS from the first touch, the hand in the cold water. Let go — he pulls his hand
// out (a mistake; hold again and it is in the water again); Lina will tease him (§7). The count out — done (clean;
// flawed if he pulled it out).
//   What he does: the Traveller puts his palm into the first water of the plateau, beside Lina.
//   What he wants: to feel that it is real.
//   How it is for him: after six years of war, cold running water where there was none.
//   What the player feels: the cold, holding on to it.
//   → { pulled: he pulled his hand out }
import { keep, settle } from './hands.js';

const SECONDS = 6;

export default {
  title: tr('The Stream'),
  about: 7,
  skipped: { pulled: false },
  missed: { pulled: true },
  points: ['traveller#hand_r'],
  keys: [],
  async run(g, b, opts, signal) {
    const mg = g.minigame({ phrase: tr('Cold water in a bed that was dry.') });
    settle(signal, () => {});
    const r = await keep(g, b, mg, { at: 'traveller#hand_r', seconds: SECONDS, take: 0.8 });
    if (!r) return this.skipped;
    await mg.end({ as: r.slips ? 'flawed' : 'clean' });
    return { pulled: r.slips > 0 };
  },
};
