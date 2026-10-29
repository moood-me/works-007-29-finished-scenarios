// The cockpit's pieces (stage 5; modules/beats; the contract: docs/new-games/nochnoj-polyot/game.md «Stage 5 —
// pieces»): `film(scene)` — each piece `{after, tells, seconds, from, run}`. `from` — every value a piece begins at but
// the game's (`<id>_here`, `<id>_mood`); `run` — the director's sequence, its moments told (`<piece>:<moment>`), ending
// in a living pose. The two sit on the plane's anchor (`<id>_on`): Fabien in the front cockpit (world across 0.15,
// distance 3.6, his head about 2.1 m up), the radio operator behind him (across 1.75). The shots are cameras of their
// own (the eye and what it looks at), from the open air on the plane's right side.
function film(scene) {
  const DEG = 180 / Math.PI, EYE = 1.7;
  const CAMK = ['camera_x', 'camera_z', 'camera_h', 'camera_yaw', 'camera_pitch'];
  const CAM0 = { camera_target: null, camera_shot: 'full', camera_frame: null, camera_glide: 1.5, camera_x: 0, camera_h: 0, camera_z: 0,
    camera_look: 0, camera_pitch: 0, camera_yaw: 0, camera_roll: 0 };
  // a camera of its own: the eye [across, distance, height] looking at a point [across, distance, height]
  const CAM = ([ex, ez, eh], [tx, tz, th]) => ({ ...CAM0, camera_x: ex, camera_z: ez, camera_h: eh - EYE,
    camera_yaw: Math.atan2(tx - ex, tz - ez) * DEG, camera_pitch: Math.atan2(th - eh, Math.hypot(tx - ex, tz - ez)) * DEG });
  const glide = (s, c, over) => s.all(...CAMK.map(k => s.move(k, c[k], { over, ease: 'inOut' })));
  const SH = {
    wide: CAM0,
    fab_med: CAM([-0.9, 1.5, 2.25], [0.15, 3.6, 2.0]),
    fab_close: CAM([-0.6, 2.35, 2.05], [0.15, 3.6, 2.08]),
    two: CAM([0.6, 0.7, 2.3], [0.95, 3.6, 1.95]),
    two_up: CAM([0.55, 0.9, 1.95], [0.95, 3.6, 2.55]),
    radio: CAM([1.3, 2.4, 2.2], [1.75, 3.6, 2.05]),
  };
  const LAMP = [-0.1, 3.45, 1.85]; // before Fabien's face: the instrument lamp, where he holds the note up to it
  const KEY = [1.55, 3.45, 1.7]; // the radio's key before the operator, below the rim
  const GAP = [-0.5, 2.5, 12]; // the gap overhead (looked at a little toward the viewer: his face up in its light)
  const DOWN = [-5, 1.5, -6]; // below, ahead: the house, the town
  const STORM_LOOK = [-8, 2.0, 1.9]; // in the storm: ahead into the dark, a little toward the lens (his face lit by the lamp, seen)
  const SEATS = {
    fabien_on: { on: 'plane', at: [-0.55, 0.4, 1.28] }, fabien_turn: 245, fabien_do: 'fly_seated', fabien_look: [-3, 0.8, 1.9],
    fabien_reach: null, fabien_with: [],
    radioman_on: { on: 'plane', at: [1.05, 0.4, 1.28] }, radioman_turn: 270, radioman_do: 'write_seated', radioman_look: 'fabien',
    radioman_reach: null, radioman_with: [],
  };
  const SKY = {
    dusk: { storm: 0, rain: 0, above: 0, panel: 0, night: 0, gap: 0, flash: 0 },
    night: { storm: 0, rain: 0, above: 0, panel: 1, night: 1, gap: 0, flash: 0 },
    storm: { storm: 1, rain: 1, above: 0, panel: 1, night: 0, gap: 0 },
    above: { storm: 1, rain: 0, above: 1, panel: 1, night: 0, gap: 0 },
  };
  const AIR = { roll: 0, water: 0, climb: 0, pitch: 0, house: 1 };
  // a note handed from one to the other: the giver's hand goes to the other's, the note passes, the hand comes back;
  // the taker reads it (his look on the note — `#note`, the point of the cast's part, there while he holds it)
  async function hand(s, from, to, motion) {
    const a = s.person(from), b = s.person(to);
    a.with(['note']);
    const act = a.do(motion);
    await s.wait(1.4);
    b.reach({ r: `${from}#hand_r` });
    await s.wait(0.5);
    a.with([]);
    b.with(['note']);
    b.reach(null);
    await act;
    b.look(`${to}#note`);
  }
  // the note put away: the look off it first (its point goes with it), then the hand empty
  function drop(s, id, look) {
    const p = s.person(id);
    p.look(look);
    p.with([]);
  }
  // one writes a note on his knee (Fabien) or his pad (the operator)
  async function write(s, id, seconds = 2.5) {
    const p = s.person(id);
    p.look(`${id}#hand_r`);
    p.do('write_knee');
    await s.wait(seconds);
  }
  // the operator taps the note out on his key
  async function tap(s, seconds = 2.5) {
    const r = s.person('radioman');
    drop(s, 'radioman', KEY);
    r.do('tap_key');
    await s.wait(seconds);
  }
  const settle = s => {
    s.person('fabien').do('fly_seated');
    s.person('radioman').do('write_seated');
  };
  return {
    // П.1: dusk over the steppe; below, the lone house's window lights; a slow push in to Fabien
    dusk: {
      tells: ['dusk:window'],
      seconds: 8,
      from: () => ({ ...SKY.dusk, ...AIR, house: 0, ...SEATS, ...SH.wide }),
      run: async s => {
        const f = s.person('fabien');
        await s.wait(2);
        s.move('house', 1, { over: 1.5 });
        f.look(DOWN);
        s.tell('dusk:window');
        await glide(s, SH.fab_med, 5);
        f.look([-3, 0.8, 1.9]);
        await s.wait(1);
      },
    },
    // П.1: Fabien writes «San Julián. Sky clear» on his knee and passes it back; the operator reads it and taps it out
    note_back: {
      after: ['dusk'],
      tells: ['note_back:read', 'note_back:tap'],
      seconds: 8,
      from: () => ({ ...SKY.dusk, ...AIR, ...SEATS, ...SH.two }),
      run: async s => {
        const f = s.person('fabien');
        await glide(s, SH.two, 1.5);
        await write(s, 'fabien', 2);
        f.look('radioman');
        await hand(s, 'fabien', 'radioman', 'pass_back');
        f.do('fly_seated');
        f.look([-3, 0.8, 1.9]);
        s.tell('note_back:read');
        await s.wait(1.5);
        await tap(s, 1);
        s.tell('note_back:tap');
        await s.wait(1);
      },
    },
    // 1.5: eleven o'clock over Trelew; the operator passes a note forward, Fabien reads, writes, passes it back; he
    // looks down at the town's lights till they go under the wing
    trelew: {
      tells: ['trelew:note', 'trelew:answer', 'trelew:under'],
      seconds: 14,
      from: () => ({ ...SKY.night, ...AIR, ...SEATS, radioman_look: 'radioman#hand_r', ...SH.two }),
      run: async s => {
        const f = s.person('fabien'), r = s.person('radioman');
        await write(s, 'radioman', 1.5);
        r.look('fabien');
        await hand(s, 'radioman', 'fabien', 'pass_forward');
        r.do('write_seated');
        s.tell('trelew:note');
        await s.wait(1.5);
        await write(s, 'fabien', 2);
        f.look('radioman');
        await hand(s, 'fabien', 'radioman', 'pass_back');
        f.do('fly_seated');
        s.tell('trelew:answer');
        f.look(DOWN);
        await glide(s, SH.fab_close, 3);
        f.look([-1, 0.5, -6]);
        await s.wait(2.5);
        s.tell('trelew:under');
        r.do('write_seated');
        drop(s, 'radioman', 'fabien');
        await s.wait(0.5);
      },
    },
    // 2.2: in the storm, thrown about; the operator passes a note forward; Fabien writes one-handed and passes it back —
    // ends with his hands on the stick (М5)
    storm: {
      tells: ['storm:note', 'storm:answer'],
      seconds: 12,
      from: () => ({ ...SKY.storm, ...AIR, ...SEATS, fabien_look: STORM_LOOK, ...SH.two }),
      run: async s => {
        const f = s.person('fabien'), r = s.person('radioman');
        s.move('roll', 7, { over: 1.2, ease: 'inOut' });
        await write(s, 'radioman', 1.5);
        r.look('fabien');
        s.move('roll', -5, { over: 1.5, ease: 'inOut' });
        await hand(s, 'radioman', 'fabien', 'pass_forward');
        r.do('write_seated');
        s.tell('storm:note');
        s.move('roll', 4, { over: 1.2, ease: 'inOut' });
        await s.wait(1.5);
        await write(s, 'fabien', 2);
        await hand(s, 'fabien', 'radioman', 'pass_back');
        s.move('roll', 0, { over: 1.5, ease: 'inOut' });
        s.tell('storm:answer');
        f.do('fly_seated');
        f.look(STORM_LOOK);
        drop(s, 'radioman', 'fabien');
        await glide(s, SH.fab_med, 1.5);
        await s.wait(0.5);
      },
    },
    // 3.3: the gap opens overhead, stars in it; the operator writes and passes his note forward
    gap: {
      tells: ['gap:note'],
      seconds: 8,
      from: () => ({ ...SKY.storm, ...AIR, ...SEATS, fabien_look: STORM_LOOK, ...SH.two }),
      run: async s => {
        const f = s.person('fabien'), r = s.person('radioman');
        s.move('gap', 1, { over: 3, ease: 'out' });
        f.look(GAP);
        await glide(s, SH.two_up, 3);
        await write(s, 'radioman', 1.5);
        r.look('fabien');
        await hand(s, 'radioman', 'fabien', 'pass_forward');
        r.do('write_seated');
        s.tell('gap:note');
        await glide(s, SH.two, 1.5);
      },
    },
    // 3.3 «the bearing»: the operator holds the key down; Fabien looks at the fuel gauge
    key_held: {
      after: ['gap'],
      tells: ['key_held:end'],
      seconds: 6,
      from: () => ({ ...SKY.storm, ...AIR, gap: 1, ...SEATS, fabien_with: ['note'], fabien_look: 'fabien#note', ...SH.two }),
      run: async s => {
        const f = s.person('fabien'), r = s.person('radioman');
        r.look(KEY);
        r.with([]);
        r.reach({ r: KEY });
        drop(s, 'fabien', [-0.2, 3.4, 1.55]);
        await glide(s, SH.fab_close, 2);
        await s.wait(3.5);
        s.tell('key_held:end');
        await s.wait(0.5);
      },
    },
    // 3.3 «her words»: Fabien holds the note to the instrument lamp a long time, looks up at the light in the gap,
    // writes «To her: I see a light», passes it back; the operator taps it out
    lamp_note: {
      after: ['gap'],
      tells: ['lamp_note:write', 'lamp_note:tap'],
      seconds: 14,
      from: () => ({ ...SKY.storm, ...AIR, gap: 1, ...SEATS, fabien_with: ['note'], fabien_look: 'fabien#note', ...SH.two }),
      run: async s => {
        const f = s.person('fabien');
        await glide(s, SH.fab_close, 1.5);
        f.reach({ r: LAMP });
        f.look('fabien#note');
        await s.wait(3.5);
        f.look(GAP);
        await s.wait(2);
        f.reach(null);
        await write(s, 'fabien', 2);
        s.tell('lamp_note:write');
        f.look('radioman');
        await hand(s, 'fabien', 'radioman', 'pass_back');
        f.do('fly_seated');
        f.look(GAP);
        await tap(s, 2);
        s.tell('lamp_note:tap');
        await s.wait(0.5);
      },
    },
    // 3.3 «his own»: Fabien looks long at the signature, writes «To Rivière: understood. To her —», passes it back; the
    // operator taps; the gap closes in the middle of the word
    laugh_note: {
      after: ['gap'],
      tells: ['laugh_note:write', 'laugh_note:closed'],
      seconds: 12,
      from: () => ({ ...SKY.storm, ...AIR, gap: 1, ...SEATS, fabien_with: ['note'], fabien_look: 'fabien#note', ...SH.two }),
      run: async s => {
        const f = s.person('fabien');
        await glide(s, SH.fab_close, 1.5);
        await s.wait(2.5);
        await write(s, 'fabien', 2);
        s.tell('laugh_note:write');
        f.look('radioman');
        await hand(s, 'fabien', 'radioman', 'pass_back');
        f.do('fly_seated');
        f.look(GAP);
        drop(s, 'radioman', KEY);
        s.person('radioman').do('tap_key');
        await s.move('gap', 0, { over: 1.5, ease: 'in' });
        s.tell('laugh_note:closed');
        await s.wait(1);
      },
    },
    // 3.4: out over the clouds — the moon, the white sea of cloud, the stars; Fabien's face in the moonlight; the
    // operator passes «Beautiful»; Fabien writes his last and passes it back; the operator taps it out
    above: {
      tells: ['above:face', 'above:note', 'above:last'],
      seconds: 18,
      from: () => ({ ...SKY.above, ...AIR, ...SEATS, fabien_look: [-4, 2.5, 3.6], radioman_look: [-1.5, 3.5, 4.2], ...SH.wide }),
      run: async s => {
        const f = s.person('fabien'), r = s.person('radioman');
        await s.wait(2);
        await glide(s, SH.fab_close, 4);
        s.tell('above:face');
        await s.wait(3);
        await glide(s, SH.two, 2);
        await write(s, 'radioman', 1.5);
        r.look('fabien');
        await hand(s, 'radioman', 'fabien', 'pass_forward');
        r.do('write_seated');
        s.tell('above:note');
        await s.wait(1.5);
        await write(s, 'fabien', 2);
        f.look('radioman');
        await hand(s, 'fabien', 'radioman', 'pass_back');
        f.do('fly_seated');
        f.look([-4, 2.5, 3.6]);
        await tap(s, 2);
        s.tell('above:last');
        settle(s);
        r.look([-1.5, 3.5, 4.2]);
        await s.wait(0.5);
      },
    },
  };
}

return { film };
