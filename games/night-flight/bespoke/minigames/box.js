// М3 «The Box» (Ш1 «Keep him on the engines», the field, after the piece `box_lift`: Rivière holding out Roblet's packed
// tool box): hold, then let go — a groove on Rivière's hand on the handle (`riviere#hand_r`): held till full (Roblet's
// hand comes to the handle — `roblet_reach`); then the call to let go and the arc of time (WAIT s): lifted — the box
// is Roblet's from hand to hand (clean); not lifted in time — Roblet takes it himself (held long, neutral).
//   What he does: Rivière gives the old man back his twenty years, from hand to hand.
//   What he wants: that the mechanics see it — and that Roblet checks twice.
//   How it is for him: the rule bending before everyone.
//   What the player feels: holding a weight, then letting it go to someone.
//   → { self: Roblet took it himself }
import { letGo, settle, count } from './hands.js';

const WAIT = 4;
const HELD = ['toolbox_held'];

export default {
  title: tr('The Box'),
  about: 6,
  skipped: { self: false },
  missed: { self: true },
  points: ['riviere#hand_r'],
  keys: ['riviere_with', 'roblet_with', 'roblet_reach'],
  async run(g, b, opts, signal) {
    const mg = g.minigame({ phrase: tr('Twenty years of tools, packed. Rivière holds the box out.') });
    const given = () => { g.set('riviere_with', null); g.set('roblet_reach', null); g.set('roblet_with', HELD); };
    const over = settle(signal, given);
    g.set('riviere_with', HELD);
    const how = await letGo(g, b, mg, { at: 'riviere#hand_r', take: 1.2, wait: WAIT, sign: () => {
      g.set('roblet_reach', { r: 'riviere#hand_r' });
      mg.plate.set({ phrase: tr('Roblet’s hand is on the handle. Let go.') });
    } });
    if (!how) return this.skipped;
    if (how === 'long') mg.plate.set({ phrase: tr('Roblet takes the box himself.') });
    given();
    if (!(await count(mg, 0.8))) return this.skipped;
    over();
    await mg.end({ as: how === 'let' ? 'clean' : 'neutral' });
    return { self: how === 'long' };
  },
};
