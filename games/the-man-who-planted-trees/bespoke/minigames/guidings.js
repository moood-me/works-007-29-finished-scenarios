// The guidings (scenario §7: «ведения» — a light gesture with no miss, not mini-games): the Traveller led, a count
// finished, a door shut, the rod pushed in beside the old man's. Each leaves nothing in the story but the time it took;
// what moves the people is the scenes' pieces around them (the guiding only the gesture and what it touches).
//   trunks (2.5, the young oaks, `slope6`, before the piece `oaks`): pull slowly at `traveller#hand_r`, four lengths —
//     from trunk to trunk, touching the bark: a pause meant, near silence
//   count (2.7, 3.4, inside the house, after `hundred_night` / `count_slow`): the table close (`close` 1, the insert
//     `table_close`), ten taps at `table_close#next` — the last ten acorns counted with him (`counted` 0 → 10)
//   row (3.3, the forest edge, before the piece `the_row`): pull slowly at `traveller#chest`, three lengths
//   door (3.5 on the Name, the empty house, after `empty_house`): pull slowly at `door_glow#handle` — the open door
//     pulled to (`door` shut); the chapter props it (`door` propped)
//   stumps (3.5 on Silence, in the piece `stumps`): press and hold at `traveller#rod`, three times — the rod in beside
//     the old man's, the same dull blow
import { along, taps, until, teach, settle } from './hands.js';

export const trunks = {
  title: tr('From Trunk to Trunk'),
  about: 40,
  skipped: {},
  missed: {},
  points: ['traveller#hand_r'],
  keys: [],
  async run(g, b, opts, signal) {
    const mg = g.minigame({ phrase: tr('Oaks taller than a man; leaves; birds.') });
    settle(signal, () => {});
    if (!(await along(g, b, mg, { at: 'traveller#hand_r', pulls: 4 }))) return this.skipped;
    await mg.end({ as: 'neutral' });
    return {};
  },
};

export const count = {
  title: tr('The Last Ten'),
  about: 8,
  skipped: {},
  missed: {},
  points: ['table_close#next'],
  keys: ['close', 'counted', 'acorns'],
  async run(g, b, opts, signal) {
    const mg = g.minigame({ phrase: tr('Acorns in tens on the table; the last ten.') });
    const over = settle(signal, () => { g.set('counted', 10); g.set('close', 0); });
    g.set('acorns', 'counting');
    g.set('counted', 0);
    g.set('close', 1, 0.6);
    if (!(await taps(g, b, mg, { at: 'table_close#next', n: 10, tap: k => g.set('counted', k) }))) return this.skipped;
    g.set('counted', 10);
    g.set('close', 0, 0.6);
    over();
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
  keys: [],
  async run(g, b, opts, signal) {
    const mg = g.minigame({ phrase: tr('Trunks in a row, as straight as a regiment.') });
    settle(signal, () => {});
    if (!(await along(g, b, mg, { at: 'traveller#chest', pulls: 3 }))) return this.skipped;
    await mg.end({ as: 'neutral' });
    return {};
  },
};

export const door = {
  title: tr('The Door'),
  about: 5,
  skipped: {},
  missed: {},
  points: ['door_glow#handle'],
  keys: ['door'],
  async run(g, b, opts, signal) {
    const mg = g.minigame({ phrase: tr('The house is empty and clean; the door is open.') });
    const over = settle(signal, () => g.set('door', 'shut'));
    if (!(await along(g, b, mg, { at: 'door_glow#handle', pulls: 2 }))) return this.skipped;
    g.set('door', 'shut');
    over();
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
