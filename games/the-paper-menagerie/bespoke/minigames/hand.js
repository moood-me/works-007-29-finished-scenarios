// М5 «The Hand» (2.4, the ward on Friday night, after the piece `friday`: Mom no longer speaking, Dad asleep on the
// chair): hold, then let go — a groove on her hand (`mom#hand_r`), Jack's hand on it (`jack_reach`), held TAKE s (the
// scenario's ten); then her fingers weaken, the sign «Let go» and the arc of WAIT s (eight): lifted — he lets her go
// (clean). Not lifted in time, or let go too soon — Dad's palm comes down over both (`dad_reach`), and they let go
// together (a miss; neutral). The only «let go» before the finale «The Smoke».
//   What he does: Jack holds his mother's hand, and lets it go.
//   What he wants: to keep it — and not to hold her back.
//   How it is for him: the lamp, the silence, Dad's breathing.
//   What the player feels: opening the hand.
//   → { missed }
import { letGo, settle, count } from './hands.js';

const TAKE = 10, WAIT = 8;
const HERS = { r: 'mom#hand_r' };

export default {
  title: tr('The Hand'),
  about: 18,
  skipped: { missed: false },
  missed: { missed: true },
  points: ['mom#hand_r'],
  keys: ['jack_reach', 'dad_reach'],
  async run(g, b, opts, signal) {
    const mg = g.minigame({ phrase: tr('Her hand in his. Dad asleep on the chair.') });
    const over = settle(signal, () => { g.set('jack_reach', null); g.set('dad_reach', null); });
    g.set('jack_reach', HERS);
    let early = false;
    const how = await letGo(g, b, mg, { at: 'mom#hand_r', take: TAKE, wait: WAIT,
      early: () => { early = true; },
      sign: () => mg.plate.set({ phrase: tr('Her fingers grow weak. Let go.') }) });
    if (!how) return this.skipped;
    const missed = how === 'long' || early;
    if (missed) g.set('dad_reach', HERS);
    if (!(await count(mg, 1.2))) return this.skipped;
    g.set('jack_reach', null);
    g.set('dad_reach', null);
    over();
    await mg.end({ as: missed ? 'neutral' : 'clean' });
    return { missed };
  },
};
