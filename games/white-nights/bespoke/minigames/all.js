// The game's mini-games (scenario §7; their points and keys — game.md «Stage 5 — pieces», the table: the single truth
// for the scenes' authors), each a module {title, about (its seconds), skipped (what it leaves in the story when
// skipped: as played cleanly), missed (the trace a miss leaves), points (where its marks stand), keys (what of the scene
// it moves), run(g, b, opts, signal)} on the language of mini-games; what they share is hands.js. One vocabulary of
// gestures for the whole game (§7): hold — not to let go; let go of the finger — to let her go; pull slowly — to dare,
// to reach; touch nothing — to wait it out, not to stir; keep the balance — to carry, to keep (the language leads it
// with the finger: a point kept in its band — the scenario's way where there is no tilt). 5–15 seconds, a low bar; a
// miss is let by, the story goes on with the same sense and its trace (`missed`), which the chapters read. Two are a
// choice made by a gesture (М5 «Рука», М8 «Оклик»): they come back with {choice}, and the chapter keeps it as the
// chapter's choice (g.gesture).
import { balance, slowly, keep, still, letGo, settle, count, until, wobble, clamp } from './hands.js';

// М1 «The Stick» (1.2, the gentleman after her): keep the balance — the stick raised, walking fast, not breaking into a
// run; the arrow is his pace, the gentleman's nearness pushes it. Off the band twice — the stick clatters on the cobbles.
//   What he does: he goes at a man for a stranger's sake, for the first time in his life.
//   What the player feels: keeping a nerve that wants to run.
export const stick = {
  title: tr('The Stick'), about: 10,
  skipped: { clatter: false }, missed: { clatter: true },
  points: ['dreamer#hand_r'], keys: [],
  async run(g, b, opts, signal) {
    const mg = g.minigame({ phrase: tr('A gentleman in a tailcoat, tipsy, quickens his step after her.') });
    settle(signal, () => {});
    const r = await balance(g, b, mg, { at: 'dreamer#hand_r', seconds: 10, width: 0.5, push: t => wobble(t, 0.55, 1) });
    if (!r) return this.skipped;
    await mg.end({ as: r.as });
    return { clatter: r.slips >= 2 };
  },
};

// М1 «The Arm» (1.2): pull slowly — her hand to his elbow; a jerk — she shies away. Jerked, or never brought — she takes
// his arm herself.
//   What he does: he offers his arm to a crying stranger.
//   What the player feels: daring, slowly, not to frighten her.
export const arm = {
  title: tr('The Arm'), about: 8,
  skipped: { herself: false }, missed: { herself: true },
  points: ['nastya#hand_r'], keys: ['nastya_reach'],
  async run(g, b, opts, signal) {
    const mg = g.minigame({ phrase: tr('She is almost running; the gentleman behind.') });
    const over = settle(signal, () => g.set('nastya_reach', { r: 'dreamer#hand_l' }));
    const r = await slowly(g, b, mg, { at: 'nastya#hand_r', pulls: 2 });
    if (!r) return this.skipped;
    g.set('nastya_reach', { r: 'dreamer#hand_l' });
    over();
    await mg.end({ as: r.jerks ? 'flawed' : 'clean' });
    return { herself: r.jerks > 0 || r.self };
  },
};

// М2 «The Pin» (2.3, her hem pinned to his sleeve): touch nothing, 10 s, while she tells how she sits at Grandmother's.
// A touch — he jerked his arm: the hem is torn, at once (no second try).
//   What the player feels: wanting to touch the bright thing, and not.
export const pin = {
  title: tr('The Pin'), about: 10,
  skipped: { torn: false }, missed: { torn: true },
  points: [], keys: [],
  async run(g, b, opts, signal) {
    const mg = g.minigame({ phrase: tr('Her hem pinned to his sleeve.') });
    settle(signal, () => {});
    let torn = false;
    const r = await Promise.race([
      still(g, b, mg, { seconds: 10, touch: () => { torn = true; g.failed(); mg.error('early', { chip: true }); } }),
      until(mg, () => torn).then(() => ({ touches: 1 })),
    ]);
    if (!r) return this.skipped;
    await mg.end({ as: torn ? 'flawed' : 'clean' });
    return { torn };
  },
};

// М3 «The Letter» (Д2, the embankment by day, the wind off the canal): keep the balance — carry the letter and do not
// drop it. Off the band twice — the envelope falls into a puddle: a stain.
//   What the player feels: carrying someone else's hot, fragile thing in the wind.
export const letter = {
  title: tr('The Letter'), about: 10,
  skipped: { stain: false }, missed: { stain: true },
  points: ['dreamer#letter'], keys: [],
  async run(g, b, opts, signal) {
    const mg = g.minigame({ phrase: tr('The wind off the canal; her letter in his hand.') });
    settle(signal, () => {});
    const r = await balance(g, b, mg, { at: 'dreamer#letter', seconds: 10, width: 0.5, push: t => wobble(t, 0.7, 2) });
    if (!r) return this.skipped;
    await mg.end({ as: r.as });
    return { stain: r.slips >= 2 };
  },
};

// М4 «Arm in Arm» (4.3, the rain): hold, 15 s by its count — her arm on his while it pours. No miss: let go — she takes
// his arm again («Куда вы?») and walks a little ahead; held — she presses close.
//   What the player feels: holding her through the whole rain — the hand that will be asked to let go.
export const arm_rain = {
  title: tr('Arm in Arm'), about: 15,
  skipped: { loose: false }, missed: { loose: true },
  points: ['nastya#hand_r'], keys: [],
  async run(g, b, opts, signal) {
    const mg = g.minigame({ phrase: tr('Rain; her arm in his.') });
    settle(signal, () => {});
    const r = await keep(g, b, mg, { at: 'nastya#hand_r', seconds: 15, take: 1 });
    if (!r) return this.skipped;
    await mg.end({ as: 'neutral' });
    return { loose: r.slips > 0 };
  },
};

// М5 «The Hand» (4.4, A: the Lodger under the lamp) — a choice by a gesture: her hand in his palm (a groove on it, held
// till full: he has it); then she draws it away (the plate says so; the arc of time, 5 s): the finger lifted — let go;
// the finger led away after her hand — reach («Настенька!»); held to the end — hold (she tears free). Never taken hold of in 5 s — his palm never closed:
// let go (§5 4.4).
//   What the player feels: her hand leaving his, and what the hand does before the head decides.
//   → {choice: let_go | hold | reach}
export const hand = {
  title: tr('The Hand'), about: 10,
  skipped: { choice: 'let_go' }, missed: { choice: 'let_go' },
  points: ['nastya#hand_r'], keys: [],
  async run(g, b, opts, signal) {
    const mg = g.minigame({ phrase: tr('Her hand in his palm.') });
    settle(signal, () => {});
    const mark = mg.mark({ at: 'nastya#hand_r', kind: 'groove' });
    const hold = mg.hold({ on: mark, seconds: 1, drain: 0.6 });
    b.minigame.tricks.teach(mg, [hold], { still: [2, 4] });
    const t00 = mg.t;
    const took = await until(mg, ({ t }) => {
      mg.plate.set({ fill: 0.4 * hold.state.fill, glow: hold.state.held ? 'good' : 'idle' });
      return (hold.state.fill >= 1 && hold.state.held) || (!hold.state.held && t - t00 >= 5);
    });
    if (!took) return this.skipped;
    if (!hold.state.held) { mark.remove(); await mg.end({ as: 'neutral' }); return { choice: 'let_go' }; }
    mg.plate.set({ phrase: tr('Slowly her hand leaves his palm.') });
    mark.set({ time: 1 });
    const t0 = mg.t, far = 0.12 * b.frame().h;
    let choice = null;
    const ok = await until(mg, ({ t }) => {
      const left = clamp(1 - (t - t0) / 5);
      mark.set({ time: left });
      mg.plate.set({ fill: 0.4 + 0.6 * (1 - left), glow: 'good' });
      if (!hold.state.held) choice = hold.state.moved > far ? 'reach' : 'let_go';
      else if (hold.state.moved > far) choice = 'reach';
      else if (left <= 0) choice = 'hold';
      return choice;
    });
    if (!ok) return this.skipped;
    mg.snap({ at: mark });
    mark.remove();
    await mg.end({ as: 'neutral' });
    return { choice };
  },
};

// М6 «The Hand at Grandmother's» (Sunday, C): pull slowly — he crosses the room, his hand to hers on her knee. A jerk, or
// the hand coming by itself (not done in time) — he takes it abruptly, she starts.
//   What the player feels: reaching for her in front of everyone.
export const hand_grandmother = {
  title: tr('The Hand at Grandmother’s'), about: 8,
  skipped: { abrupt: false }, missed: { abrupt: true },
  points: ['nastya#hand_r'], keys: ['dreamer_reach'],
  async run(g, b, opts, signal) {
    const mg = g.minigame({ phrase: tr('Her hand on her knee; the pin between the two dresses.') });
    const over = settle(signal, () => g.set('dreamer_reach', { r: 'nastya#hand_r' }));
    const r = await slowly(g, b, mg, { at: 'nastya#hand_r', pulls: 3 });
    if (!r) return this.skipped;
    g.set('dreamer_reach', { r: 'nastya#hand_r' });
    over();
    await mg.end({ as: r.jerks || r.self ? 'flawed' : 'clean' });
    return { abrupt: r.jerks > 0 || r.self };
  },
};

// М7 «The Window» (the finale «Окно»): pull slowly — he opens the window shut all the game. Not opened in time — Matryona
// opens it herself, grumbling.
//   What the player feels: one act, late.
export const open_window = {
  title: tr('The Window'), about: 6,
  skipped: { matryona: false }, missed: { matryona: true },
  points: ['window'], keys: [],
  async run(g, b, opts, signal) {
    const mg = g.minigame({ phrase: tr('The window shut all the game.') });
    settle(signal, () => {});
    const r = await slowly(g, b, mg, { at: 'window', pulls: 2 });
    if (!r) return this.skipped;
    await mg.end({ as: r.self ? 'flawed' : 'clean' });
    return { matryona: r.self };
  },
};

// М8 «The Call» (the finale «Мезонин», ten o'clock) — a choice by a gesture: while the bell strikes ten she stands at the
// little window; reach for her (pull from the mark on her) — reach; touch nothing to the last stroke — still.
//   → {choice: reach | still}
export const call = {
  title: tr('The Call'), about: 10,
  skipped: { choice: 'still' }, missed: { choice: 'still' },
  points: ['nastya#head'], keys: [],
  async run(g, b, opts, signal) {
    const mg = g.minigame({ phrase: tr('Ten o’clock; she at the little window.') });
    settle(signal, () => {});
    const mark = mg.mark({ at: 'nastya#head', kind: 'dash' });
    const pull = mg.pull({ on: mark, tear: 0.1 });
    let torn = false;
    pull.on('tear', () => { torn = true; });
    const t0 = mg.t;
    const ok = await until(mg, ({ t }) => {
      mg.plate.set({ fill: clamp((t - t0) / 10), glow: 'idle' });
      return torn || t - t0 >= 10;
    });
    if (!ok) return this.skipped;
    if (torn) mg.snap({ at: mark });
    mark.remove();
    await mg.end({ as: 'neutral' });
    return { choice: torn ? 'reach' : 'still' };
  },
};

// М9 «Pinned» (the finale «Булавка»): touch nothing, 10 s, pinned to Grandmother's dress while he reads to her. A touch —
// «Сиди», she pins him again (once), and holds his sleeve with her hand.
//   What the player feels: the funny game of the second night become his life.
export const pinned = {
  title: tr('Pinned'), about: 10,
  skipped: { again: false }, missed: { again: true },
  points: [], keys: [],
  async run(g, b, opts, signal) {
    const mg = g.minigame({ phrase: tr('Grandmother’s pin between her dress and his coat.') });
    settle(signal, () => {});
    let again = false;
    const r = await still(g, b, mg, { seconds: 10, touch: () => { if (!again) { again = true; g.failed(); mg.error('early', { chip: true }); } } });
    if (!r) return this.skipped;
    if (!(await count(mg, 0.3))) return this.skipped;
    await mg.end({ as: again ? 'flawed' : 'clean' });
    return { again };
  },
};
