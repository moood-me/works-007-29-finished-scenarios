// МИ5 «The Linden» (Э.1, the village square in the epilogue, the pit where the stump was, `stump` dug): press and hold —
// a groove on the ground where the lime goes (`stump#spot`): held till full, the spade goes in and the earth is pressed
// round the young lime — the same dull blow as the rod's on the slope in chapter I. Let go after it had begun to fill
// — the spade slips (a mistake; hold again). Done — clean; slipped SLIPS times, or never touched for ALONE s — Lina
// presses the earth down with her foot herself (§7).
//   What he does: the Traveller plants the linden where Lina's mother's tree was cut down.
//   What he wants: to give the square back its tree.
//   How it is for him: fifty; the fountain running, children, Lina beside him.
//   What the player feels: the weight of the blow, the same as thirty years ago.
//   → { lina: Lina pressed the earth herself }
import { until, teach, settle, count } from './hands.js';

const ALONE = 12, SLIPS = 2;

export default {
  title: tr('The Linden'),
  about: 8,
  skipped: { lina: false },
  missed: { lina: true },
  points: ['stump#spot'],
  keys: [],
  async run(g, b, opts, signal) {
    const mg = g.minigame({ phrase: tr('A young linden in the pit on the square; a spade.') });
    settle(signal, () => {});
    const mark = mg.mark({ at: 'stump#spot', kind: 'groove' });
    const hold = mg.hold({ on: mark, seconds: 2, drain: 0.8 });
    const taught = teach(b, mg, [hold]);
    let slips = 0, begun = false;
    const off = hold.on('up', () => {
      if (hold.state.fill > 0.3 && hold.state.fill < 1) { slips++; g.failed(); mg.error('early', { at: mark, chip: true }); mg.show({ gestures: [hold] }); }
    });
    const touch = mg.on('down', () => { begun = true; });
    const t00 = mg.t;
    const done = await until(mg, ({ t }) => {
      mg.plate.set({ fill: hold.state.fill, glow: hold.state.held ? 'good' : 'idle' });
      return hold.state.fill >= 1 || slips >= SLIPS || (!begun && t - t00 >= ALONE);
    });
    off();
    touch();
    taught.remove();
    if (!done) return this.skipped;
    const lina = hold.state.fill < 1;
    if (!lina) mg.snap({ at: mark });
    mark.remove();
    if (!(await count(mg, 0.5))) return this.skipped;
    await mg.end({ as: lina ? 'flawed' : 'clean' });
    return { lina };
  },
};
