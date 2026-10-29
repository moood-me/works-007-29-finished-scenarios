// МИ4 «The Beech» (3.1, the forest edge: his own slope across the stream — the Slope —, or the fourteenth beech of his
// row by the path — the Road): press and hold, then pull down — the rod pushed into the earth (a groove on
// `traveller#rod`, held till full) — the sapling stands (`new_beech` straight, where the piece `beech` put it) —, then
// the earth pressed round it: a slow pull at its top (`new_beech#top`), two lengths. Too fast — the beech stands crooked
// (`new_beech` crooked; a mistake). Done — clean, or flawed if crooked; on the Slope he leaves it so, on the Road he
// straightens it again (the chapter: `new_beech` none, `beech_row` 14 — the year's tree in the row) (§7).
//   What he does: the Traveller plants a beech of his own with his own rod.
//   What he wants: a tree of his on this land; on the Road, one more in the row of his years.
//   How it is for him: forty, beside the tall forest the old man planted.
//   What the player feels: the rod's weight going in, then the care of pressing the earth.
//   → { crooked }
import { until, teach, slowly, settle, count } from './hands.js';

const ALONE = 12;

export default {
  title: tr('The Beech'),
  about: 10,
  skipped: { crooked: false },
  missed: { crooked: true },
  points: ['traveller#rod', 'new_beech#top'],
  keys: ['new_beech'],
  async run(g, b, opts, signal) {
    const mg = g.minigame({ phrase: tr('His own rod; a beech sapling, and the earth.') });
    const over = settle(signal, () => g.set('new_beech', 'straight'));
    g.set('new_beech', 'none');
    // the rod in: held till full
    const mark = mg.mark({ at: 'traveller#rod', kind: 'groove' });
    const hold = mg.hold({ on: mark, seconds: 1.5, drain: 0.6 });
    const taught = teach(b, mg, [hold]);
    const t00 = mg.t;
    const inside = await until(mg, ({ t }) => {
      mg.plate.set({ fill: 0.5 * hold.state.fill, glow: hold.state.held ? 'good' : 'idle' });
      return hold.state.fill >= 1 || (!hold.state.held && hold.state.fill === 0 && t - t00 >= ALONE);
    });
    taught.remove();
    if (!inside) return this.skipped;
    mg.snap({ at: mark });
    mark.remove();
    g.set('new_beech', 'straight');
    // the earth pressed down round the sapling
    const r = await slowly(g, b, mg, { at: 'new_beech#top', pulls: 2, frame: u => mg.plate.set({ fill: 0.5 + 0.5 * u }), jerk: () => g.set('new_beech', 'crooked') });
    if (!r) return this.skipped;
    if (!(await count(mg, 0.5))) return this.skipped;
    over();
    await mg.end({ as: r.jerks ? 'flawed' : 'clean' });
    return { crooked: r.jerks > 0 };
  },
};
