// М4 «The Spanner» (Ш1 «Take him off the engines», the field, after the piece `palm`: Rivière's palm held out under the
// spanner in Roblet's hand): hold, then let go — a groove on the palm (`riviere#hand_r`): held, the palm is not taken
// back while Roblet's fingers open slowly (TAKE s to full; Roblet's hand over the palm — `roblet_reach`); full — the
// spanner passes from hand to hand (`roblet_with` none, `riviere_with` the spanner) and the call to take the hand back
// (the arc of time, WAIT s — run out, the hand comes back by itself). The palm taken back before the spanner is in it —
// Roblet lays the spanner on the workbench himself (a mistake: the end, flawed). Never touched for ALONE s — the spanner
// passes as if held.
//   What he does: Rivière takes the old man's place at the engines out of his hand.
//   What he wants: to keep both the rule and the man — work for him, but no engine.
//   How it is for him: before the young ones; «better you had fired me».
//   What the player feels: a palm that must not be taken back while someone else's fingers slowly give in.
//   → { bench: Roblet laid it on the bench himself }
import { until, teach, settle, count, clamp } from './hands.js';

const TAKE = 2.5, WAIT = 4, ALONE = 12;
const HELD = ['spanner'];

export default {
  title: tr('The Spanner'),
  about: 6,
  skipped: { bench: false },
  missed: { bench: true },
  points: ['riviere#hand_r'],
  keys: ['roblet_reach', 'roblet_with', 'riviere_with'],
  async run(g, b, opts, signal) {
    const mg = g.minigame({ phrase: tr('Rivière’s palm under the spanner; Roblet’s fingers are slow to open.') });
    const passed = () => { g.set('roblet_reach', null); g.set('roblet_with', null); g.set('riviere_with', HELD); };
    const over = settle(signal, passed);
    g.set('roblet_with', HELD);
    g.set('roblet_reach', { r: 'riviere#hand_r' });
    const mark = mg.mark({ at: 'riviere#hand_r', kind: 'groove' });
    const hold = mg.hold({ on: mark, seconds: TAKE, drain: 0.4 });
    const taught = teach(b, mg, [hold]);
    // (the palm taken back once the fingers had begun to open: too soon)
    let early = false, begun = false;
    const offs = [hold.on('down', () => { begun = true; }), hold.on('up', () => { if (hold.state.fill > 0.1 && hold.state.fill < 1) early = true; })];
    const t0 = mg.t;
    const took = await until(mg, ({ t }) => {
      const s = hold.state;
      mg.plate.set({ fill: 0.7 * s.fill, glow: s.held ? 'good' : 'idle' });
      return s.fill >= 1 || early || (!begun && t - t0 >= ALONE);
    });
    offs.forEach(f => f());
    taught.remove();
    if (!took) return this.skipped;
    if (early) {
      g.failed();
      mg.error('early', { at: mark, chip: true });
      mark.remove();
      g.set('roblet_reach', null);
      g.set('roblet_with', null);
      mg.plate.set({ phrase: tr('The palm came back too soon. Roblet lays the spanner on the workbench himself.') });
      if (!(await count(mg, 1.2))) return this.skipped;
      over();
      await mg.end({ as: 'flawed' });
      return { bench: true };
    }
    passed();
    if (hold.state.held) {
      // (the spanner in the palm: now take the hand back)
      mg.plate.set({ phrase: tr('The spanner is in Rivière’s palm.') });
      mark.set({ time: 1 });
      const t1 = mg.t;
      if (!(await until(mg, ({ t }) => {
        const left = clamp(1 - (t - t1) / WAIT);
        mark.set({ time: left });
        mg.plate.set({ fill: 0.7 + 0.3 * (1 - left), glow: 'good' });
        return !hold.state.held || left <= 0;
      }))) return this.skipped;
    }
    mg.snap({ at: mark });
    mark.remove();
    if (!(await count(mg, 0.6))) return this.skipped;
    over();
    await mg.end({ as: begun ? 'clean' : 'neutral' });
    return { bench: false };
  },
};
