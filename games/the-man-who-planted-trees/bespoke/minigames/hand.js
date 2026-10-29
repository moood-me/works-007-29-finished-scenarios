// МИ6 «The Hand» (Э.2, the last meeting — the old house on Silence, the hut beyond the ridge on the Name): hold, then
// let go — a groove on the rod in the old man's hand (`elzeard#rod`): held till full, their two hands on the rod; then
// the plate says the old hand loosens, and the arc of time runs WAIT s: lifted — the Traveller lets go of the moment
// and the rod is his (clean). Let go before it was full — the rod wavers, the old man steadies it: «Держи» (a mistake);
// not lifted in WAIT s — the old man takes his hand away himself (§7).
//   What he does: the Traveller takes the rod from the old man.
//   What he wants: to take what is given without making a ceremony of it.
//   How it is for him: Elzéard is eighty-five; the last time.
//   What the player feels: two hands on one rod, then one.
//   → { early, long }
import { letGo, settle, count } from './hands.js';

const WAIT = 15;

export default {
  title: tr('The Hand'),
  about: 10,
  skipped: { early: false, long: false },
  missed: { early: true, long: false },
  points: ['elzeard#rod'],
  keys: ['traveller_reach'],
  async run(g, b, opts, signal) {
    const mg = g.minigame({ phrase: tr('The iron rod between an old hand and his.') });
    const over = settle(signal, () => g.set('traveller_reach', null));
    g.set('traveller_reach', { r: 'elzeard#rod' });
    let early = false;
    const how = await letGo(g, b, mg, { at: 'elzeard#rod', take: 1.5, wait: WAIT,
      early: () => { if (!early) { early = true; g.failed(); mg.error('early', { chip: true }); } },
      sign: () => mg.plate.set({ phrase: tr('The old hand loosens on the rod.') }) });
    if (!how) return this.skipped;
    g.set('traveller_reach', null);
    if (!(await count(mg, 0.6))) return this.skipped;
    over();
    await mg.end({ as: early ? 'flawed' : how === 'let' ? 'clean' : 'neutral' });
    return { early, long: how === 'long' };
  },
};
