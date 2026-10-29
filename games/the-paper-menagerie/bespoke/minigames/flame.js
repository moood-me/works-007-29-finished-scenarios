// The finale «The Smoke» (§9, her bucket under the apple tree, the fire, after the piece `smoke`'s beginning): hold,
// then let go — a groove on the sheet (`jack#letter`) held over the fire (`jack_reach` the fire): held till full, the
// flame takes an edge (`fire` up); then the sign «Let go» and its arc of WAIT s: lifted — he lets it go into the fire
// (clean). Not lifted in time — the flame takes the sheet itself (a miss; neutral). The answer to М5.
//   What he does: Jack gives Laohu to his mother, the way she sent paper to her own.
//   What he wants: that she has someone to fold her a tiger, there.
//   How it is for him: Qingming, the rusty bucket, the last light.
//   What the player feels: letting go of the last thing.
//   → { missed }
import { letGo, settle, count } from './hands.js';

const WAIT = 6;
const FIRE = { r: 'apple#fire' };

export default {
  title: tr('Over the Fire'),
  about: 8,
  skipped: { missed: false },
  missed: { missed: true },
  points: ['jack#letter'],
  keys: ['fire', 'jack_reach'],
  async run(g, b, opts, signal) {
    const mg = g.minigame({ phrase: tr('Her bucket under the apple tree; the fire.') });
    const over = settle(signal, () => { g.set('jack_reach', null); g.set('fire', 1); });
    g.set('jack_reach', FIRE);
    const how = await letGo(g, b, mg, { at: 'jack#letter', take: 1.5, wait: WAIT,
      held: u => g.set('fire', 0.6 + 0.4 * u),
      sign: () => mg.plate.set({ phrase: tr('The flame takes an edge. Let it go.') }) });
    if (!how) return this.skipped;
    g.set('jack_reach', null);
    g.set('fire', 1);
    if (!(await count(mg, 1))) return this.skipped;
    over();
    await mg.end({ as: how === 'let' ? 'clean' : 'neutral' });
    return { missed: how === 'long' };
  },
};
