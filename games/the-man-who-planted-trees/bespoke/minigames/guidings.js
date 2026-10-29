// The guidings (scenario §7: «ведения» — a light gesture with no miss, not mini-games): the Traveller led, a count
// finished, a door shut, the rod pushed in beside the old man's. Each leaves nothing in the story but the time it took.
//   trunks (2.5, the young oaks, `slope6`): pull slowly at `traveller#hand_r` — he goes from trunk to trunk toward his
//     own oak (`traveller_a`, `traveller_d` from where the moment `grove` has him), touching the bark: a pause meant,
//     near silence
//   count (2.7, 3.4, the house at night and in the evening): ten taps at `elzeard#hands` — the last ten acorns counted
//     with him
//   row (3.3, the forest edge, `delegation`): pull slowly at `traveller#chest` — he and Jan go along the row toward the
//     wood (`traveller_a/_d`, `jan_a/_d`)
//   door (3.5 on the Name, the empty house): pull slowly at `traveller#hand_r` — the open door pulled to; the chapter
//     props it (`door` propped)
//   stumps (3.5 on Silence, the felled lower edge): press and hold at `traveller#rod`, three times — the rod in beside
//     the old man's, the same dull blow
import { along, taps, until, teach, settle } from './hands.js';

// where a person stands now, and a way from there (metres): their _a/_d moved along it with the guiding
const walk = (g, id, da, dd) => {
  const a0 = g.get(`${id}_a`) ?? 0, d0 = g.get(`${id}_d`) ?? 0;
  return u => { g.set(`${id}_a`, a0 + da * u, 0.3); g.set(`${id}_d`, d0 + dd * u, 0.3); };
};

export const trunks = {
  title: tr('From Trunk to Trunk'),
  about: 40,
  skipped: {},
  missed: {},
  points: ['traveller#hand_r'],
  keys: ['traveller_a', 'traveller_d'],
  async run(g, b, opts, signal) {
    const mg = g.minigame({ phrase: tr('Oaks taller than a man; leaves; birds.') });
    settle(signal, () => {});
    const go = walk(g, 'traveller', -0.6, 3.6);
    if (!(await along(g, b, mg, { at: 'traveller#hand_r', pulls: 4, frame: go }))) return this.skipped;
    await mg.end({ as: 'neutral' });
    return {};
  },
};

export const count = {
  title: tr('The Last Ten'),
  about: 8,
  skipped: {},
  missed: {},
  points: ['elzeard#hands'],
  keys: [],
  async run(g, b, opts, signal) {
    const mg = g.minigame({ phrase: tr('Acorns in tens on the table; the last ten.') });
    settle(signal, () => {});
    if (!(await taps(g, b, mg, { at: 'elzeard#hands', n: 10 }))) return this.skipped;
    await mg.end({ as: 'clean' });
    return {};
  },
};

export const row = {
  title: tr('Along the Row'),
  about: 10,
  skipped: {},
  missed: {},
  points: ['traveller#chest'],
  keys: ['traveller_a', 'traveller_d', 'jan_a', 'jan_d'],
  async run(g, b, opts, signal) {
    const mg = g.minigame({ phrase: tr('Trunks in a row, as straight as a regiment.') });
    settle(signal, () => {});
    const t = walk(g, 'traveller', -0.3, 4.2), j = walk(g, 'jan', -0.7, 4.4);
    if (!(await along(g, b, mg, { at: 'traveller#chest', pulls: 3, frame: u => { t(u); j(u); } }))) return this.skipped;
    await mg.end({ as: 'neutral' });
    return {};
  },
};

export const door = {
  title: tr('The Door'),
  about: 5,
  skipped: {},
  missed: {},
  points: ['traveller#hand_r'],
  keys: [],
  async run(g, b, opts, signal) {
    const mg = g.minigame({ phrase: tr('The house is empty and clean; the door is open.') });
    settle(signal, () => {});
    if (!(await along(g, b, mg, { at: 'traveller#hand_r', pulls: 2 }))) return this.skipped;
    await mg.end({ as: 'neutral' });
    return {};
  },
};

export const stumps = {
  title: tr('Among the Stumps'),
  about: 8,
  skipped: {},
  missed: {},
  points: ['traveller#rod'],
  keys: [],
  async run(g, b, opts, signal) {
    const mg = g.minigame({ phrase: tr('Stumps; the old man’s rod goes into the earth.') });
    settle(signal, () => {});
    mg.plate.set({ notches: [1 / 3, 2 / 3] });
    for (let k = 0; k < 3; k++) {
      const mark = mg.mark({ at: 'traveller#rod', kind: 'groove' });
      const hold = mg.hold({ on: mark, seconds: 1.2, drain: 0.6 });
      const taught = teach(b, mg, [hold]);
      const t00 = mg.t;
      const ok = await until(mg, ({ t }) => {
        mg.plate.set({ fill: (k + hold.state.fill) / 3, glow: hold.state.held ? 'good' : 'idle' });
        return hold.state.fill >= 1 || (hold.state.fill === 0 && t - t00 >= 12);
      });
      taught.remove();
      if (!ok) return this.skipped;
      mg.snap({ at: mark });
      mark.remove();
    }
    await mg.end({ as: 'clean' });
    return {};
  },
};
