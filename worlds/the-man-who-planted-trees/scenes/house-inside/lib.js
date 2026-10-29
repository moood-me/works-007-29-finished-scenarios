// Inside Elzéard's stone house: what its walls share, and its pieces (the game's `beat`; modules/beats; notes.md
// «Pieces»). Places in metres: across, away. The room is 6 m wide (−3…3), from 0.6 m to its back wall at 5.4 m, 2.5 m
// high; the window in the back wall (across 0.8…1.7, 1.05…2.0 m up), the door in the left wall (2.2…3.0 m away), the
// hearth in the right wall (about 4.3 m away). The table in the middle (across −0.85…0.85, 2.9…3.7 m away, its top
// 0.76 m up), the lamp on it; Elzéard's stool behind it, the Traveller's at its left end; the pail on the floor between.

// whitewashed stone: courses of rough blocks under old limewash, a warmer grey where the smoke has got at it; metres,
// y down, from the foot of a wall, from x0 to x1, `top` high; `seed` keeps each wall its own
const LIME = ['#d9cfbd', '#d2c7b3', '#ddd4c3', '#cdc2ad', '#d6ccb9'];
function lime(g, x0, x1, top, seed) {
  let s = seed * 7919 + 13;
  const r = () => ((s = (s * 9301 + 49297) % 233280) / 233280);
  g.save();
  g.beginPath();
  g.rect(x0, -top - 0.02, x1 - x0, top + 0.04);
  g.clip();
  g.fillStyle = '#b9ad98';
  g.fillRect(x0, -top - 0.02, x1 - x0, top + 0.04);
  for (let y = 0; y > -top - 0.3;) {
    const h = 0.22 + r() * 0.12;
    for (let x = x0 - r() * 0.4; x < x1;) {
      const w = 0.3 + r() * 0.42;
      g.fillStyle = LIME[Math.floor(r() * LIME.length)];
      g.beginPath();
      g.roundRect(x + 0.02, y - h + 0.02, w - 0.04, h - 0.04, 0.05);
      g.fill();
      x += w;
    }
    y -= h;
  }
  // the smoke's warm grey high up, under the ceiling
  const soot = g.createLinearGradient(0, -top, 0, -top + 0.9);
  soot.addColorStop(0, 'rgba(120, 100, 80, 0.4)');
  soot.addColorStop(1, 'rgba(120, 100, 80, 0)');
  g.fillStyle = soot;
  g.fillRect(x0, -top, x1 - x0, 0.9);
  // a darker skirting of bare stone along the floor
  g.fillStyle = 'rgba(110, 96, 78, 0.45)';
  g.fillRect(x0, -0.16, x1 - x0, 0.16);
  g.restore();
}

// an acorn seen from above (the table, the insert): x, y its middle, r its half-length, a its turn; `cracked` — split
// and dark along its length
function acorn(g, x, y, r, a, cracked) {
  g.save();
  g.translate(x, y);
  g.rotate(a);
  g.fillStyle = cracked ? '#6e4a2a' : '#9a6630';
  g.beginPath();
  g.ellipse(0.15 * r, 0, r, 0.66 * r, 0, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = cracked ? '#5a3c22' : '#b77a3a';
  g.beginPath();
  g.ellipse(0.3 * r, -0.2 * r, 0.5 * r, 0.22 * r, 0, 0, Math.PI * 2);
  g.fill();
  // the cup, rough and grey-brown
  g.fillStyle = '#6b5a44';
  g.beginPath();
  g.ellipse(-0.62 * r, 0, 0.36 * r, 0.6 * r, 0, 0, Math.PI * 2);
  g.fill();
  if (cracked) {
    g.strokeStyle = '#2a1a10';
    g.lineWidth = 0.16 * r;
    g.beginPath();
    g.moveTo(-0.2 * r, -0.05 * r);
    g.lineTo(0.3 * r, 0.12 * r);
    g.lineTo(0.55 * r, -0.08 * r);
    g.lineTo(0.95 * r, 0.06 * r);
    g.stroke();
  }
  g.restore();
}

// a steady scatter for a heap: n acorns round (cx, cy) within rx, ry — the same every painting
function heap(n, cx, cy, rx, ry, seed) {
  const out = [];
  let s = seed * 104729 + 7;
  const r = () => ((s = (s * 9301 + 49297) % 233280) / 233280);
  for (let i = 0; i < n; i++) {
    const t = r() * Math.PI * 2, d = Math.sqrt(r());
    out.push([cx + Math.cos(t) * d * rx, cy + Math.sin(t) * d * ry, r() * Math.PI * 2]);
  }
  return out;
}

// the insert's layout (stage heights round its middle M): the heap of МИ1 and where each cracked acorn goes when it
// is put aside; the nine tens and the last ten of the count and where each of those goes into the tenth heap
const INSERT = {
  r: 0.034,
  heap: [0, 0.52, 0.26, 0.17],                  // dx from the middle, y, rx, ry
  cracked: [[-0.17, 0.44], [0.12, 0.58], [-0.05, 0.62], [0.2, 0.47], [-0.22, 0.56], [0.03, 0.42], [0.15, 0.66], [-0.12, 0.5],
    [0.07, 0.53], [-0.02, 0.68]],
  aside: [0.5, 0.7],                             // the cracked ones' little pile, dx, y
  tens: (k) => [-0.62 + k * 0.137, 0.36],        // heap k of the count (0…9), dx, y
  loose: (k) => [-0.45 + k * 0.1, 0.7],          // the last ten in a loose line, dx, y
};

// The pieces. Places, seats, the camera.
const SEAT_E = [0.15, 4.05], SEAT_T = [-1.25, 3.35], SEAT_H = 0.46;
const onSeat = ([a, d]) => [a, d, SEAT_H];
const CAM = { camera_target: null, camera_shot: 'full', camera_frame: null, camera_glide: 1.5, camera_x: 0, camera_h: 0, camera_z: 0,
  camera_look: 0, camera_pitch: 0, camera_yaw: 0, camera_roll: 0 };
// seated at the table: the keys of a person on their stool, doing a seated loop
function seated(id, seat, turn, does, look) {
  return { [`${id}_a`]: seat[0], [`${id}_d`]: seat[1], [`${id}_turn`]: turn, [`${id}_on`]: onSeat(seat), [`${id}_do`]: does,
    [`${id}_look`]: look ?? null, [`${id}_reach`]: null, [`${id}_with`]: null };
}
// standing somewhere: on their feet
function standing(id, at, turn, does, look, w) {
  return { [`${id}_a`]: at[0], [`${id}_d`]: at[1], [`${id}_turn`]: turn, [`${id}_on`]: null, [`${id}_do`]: does ?? 'stand',
    [`${id}_look`]: look ?? null, [`${id}_reach`]: null, [`${id}_with`]: w ?? null };
}
// the table's things as a piece begins
const CLEAR = { acorns: 'none', tens: 0, counted: 0, cracked_out: 0, close: 0, pail_push: 0, sack: false };
// both at the table, framed together (the unseen point between them)
const TWO = { camera_target: 'table_mid', camera_shot: 'full' };

function film(scene) {
  // he sits down on his stool behind the table, facing the room, and takes up a seated loop
  const sitDown = async (s, does) => {
    const e = s.person('elzeard');
    await e.go('sit_down', { to: SEAT_E, turn: 180 });
    e.on(onSeat(SEAT_E));
    e.do(does, { loop: true });
  };
  // the counted acorns swept off the table into the pail by his chair
  const intoPail = async (s, said) => {
    const e = s.person('elzeard');
    e.look('pail');
    const sweep = e.do('sweep_pail');
    await s.wait(1.6);
    s.set('acorns', 'pail');
    await sweep;
    e.do('sit_table', { loop: true });
    if (said) s.tell(said);
  };
  return {
    // П.4: the soup, the lamp; Elzéard stands at the table with the sack and pours the acorns out on it; he sits
    table: {
      tells: ['table:pour'],
      seconds: 10,
      from: () => ({ ...CAM, ...CLEAR, soup: true, ...standing('elzeard', [0.5, 3.95], 180, 'stand', 'table_things#heap', ['sack']),
        ...seated('traveller', SEAT_T, 115, 'eat_soup', 'table_things#bowl') }),
      run: async s => {
        const e = s.person('elzeard'), t = s.person('traveller');
        await s.wait(1);
        t.do('sit_table', { loop: true });
        t.look('elzeard');
        const pour = e.do('pour_sack');
        await s.wait(1.8);
        e.with([]);
        s.set('acorns', 'heap');
        s.set('soup', false);
        s.tell('table:pour');
        await pour;
        await sitDown(s, 'sit_table');
        e.look('table_things#heap');
        t.look('table_things#heap');
        s.set('camera_target', 'table_mid');
        await s.wait(1.5);
      },
    },
    // after МИ1: he counts them out in tens — «Сто» — and sweeps them into the pail of water
    hundred: {
      after: ['table'],
      tells: ['hundred:end'],
      seconds: 12,
      from: () => ({ ...CAM, ...TWO, ...CLEAR, acorns: 'sorted', cracked_out: 1023, soup: false,
        ...seated('elzeard', SEAT_E, 180, 'sit_table', 'table_things#heap'), ...seated('traveller', SEAT_T, 115, 'sit_table', 'table_things#heap') }),
      run: async s => {
        const e = s.person('elzeard');
        s.set('camera_target', 'table_mid');
        s.set('acorns', 'counting');
        e.look('table_things#heap');
        e.do('count_table', { loop: true });
        await s.move('tens', 10, { over: 7, ease: 'linear' });
        e.do('sit_table', { loop: true });
        s.tell('hundred:end');
        await s.wait(1.5);
        await intoPail(s);
        e.look(null);
        s.person('traveller').look('elzeard');
        await s.wait(1);
      },
    },
    // П.5, asked: «Был сын. Была жена» — he gets up and goes out to the dog; the Traveller alone at the lamp
    out_to_dog: {
      after: ['hundred'],
      tells: ['out_to_dog:door'],
      seconds: 10,
      from: () => ({ ...CAM, ...CLEAR, acorns: 'pail', ...seated('elzeard', SEAT_E, 180, 'sit_table', null),
        ...seated('traveller', SEAT_T, 115, 'sit_table', 'elzeard') }),
      run: async s => {
        const e = s.person('elzeard'), t = s.person('traveller');
        s.set('camera_target', null);
        e.on(null);
        await e.do('rise');
        await e.walk([[-0.6, 4.4], [-2.1, 3.3], [-2.75, 2.65]]);
        s.tell('out_to_dog:door');
        await e.walk([[-3.7, 2.6]]);
        e.here(false);
        t.look('lamp#flame');
        await s.wait(2);
      },
    },
    // П.5, silent: he pushes the pail of acorns over to him; they sit — «Мы молчали до ночи»
    silence: {
      after: ['hundred'],
      tells: ['silence:sit'],
      seconds: 8,
      from: () => ({ ...CAM, ...TWO, ...CLEAR, acorns: 'pail', ...seated('elzeard', SEAT_E, 180, 'sit_table', null),
        ...seated('traveller', SEAT_T, 115, 'sit_table', 'elzeard') }),
      run: async s => {
        const e = s.person('elzeard'), t = s.person('traveller');
        e.look('pail');
        const push = e.do('push_pail');
        await s.wait(1.2);
        await s.move('pail_push', 1, { over: 1.5 });
        await push;
        e.do('sit_table', { loop: true });
        e.look('lamp#flame');
        t.look('pail');
        await s.wait(1.5);
        t.look('lamp#flame');
        s.tell('silence:sit');
        await s.wait(3);
      },
    },
    // 1.5: evening; he shaves at the window, then sits by the lamp and sews a button on — «Пуговицы…»
    button: {
      tells: ['button:sew'],
      seconds: 16,
      from: () => ({ ...CAM, ...CLEAR, acorns: 'pail', soup: false, ...standing('elzeard', [0.5, 5.05], 90, 'shave', 'shutter#mirror'),
        ...seated('traveller', SEAT_T, 115, 'sit_table', 'elzeard') }),
      run: async s => {
        const e = s.person('elzeard');
        await s.wait(4.5);
        e.do('stand');
        e.look(null);
        await sitDown(s, 'sew');
        e.with(['cloth']);
        e.look('elzeard#cloth');
        s.set('camera_shot', 'medium');
        s.set('camera_target', 'elzeard');
        s.tell('button:sew');
        await s.wait(4);
      },
    },
    // 2.7: night, the moon over the empty slope in the window; the hundred acorns as then, he counts; the notebook and
    // the city's letter on the table — then the guiding `count` (the last ten)
    hundred_night: {
      tells: ['hundred_night:count'],
      seconds: 10,
      from: () => ({ ...CAM, ...CLEAR, acorns: 'heap', notebook: 'open', letter: true,
        ...seated('elzeard', SEAT_E, 180, 'count_table', 'table_things#heap'), ...seated('traveller', SEAT_T, 115, 'sit_table', 'window#pane') }),
      run: async s => {
        await s.wait(2.5);
        s.set('acorns', 'counting');
        s.set('camera_glide', 3);
        s.set('camera_target', 'table_mid');
        s.person('traveller').look('table_things#heap');
        await s.move('tens', 9, { over: 6, ease: 'linear' });
        s.tell('hundred_night:count');
      },
    },
    // Ш1, stay: the acorns into the pail — «Склон за ручьём пустой»; he laughs at himself — «С ума сошёл» — and shuts
    // the notebook
    stay_laugh: {
      after: ['hundred_night'],
      tells: ['stay_laugh:pail', 'stay_laugh:laugh', 'stay_laugh:shut'],
      seconds: 12,
      from: () => ({ ...CAM, ...TWO, ...CLEAR, acorns: 'counting', tens: 9, counted: 10, notebook: 'open', letter: true,
        ...seated('elzeard', SEAT_E, 180, 'sit_table', 'table_things#heap'), ...seated('traveller', SEAT_T, 115, 'sit_table', 'elzeard') }),
      run: async s => {
        const e = s.person('elzeard'), t = s.person('traveller');
        await intoPail(s, 'stay_laugh:pail');
        e.look('traveller');
        await s.wait(2);
        await t.do('laugh_seated');
        t.do('sit_table', { loop: true });
        s.tell('stay_laugh:laugh');
        await s.wait(1.5);
        t.look('table_things#notebook');
        t.reach({ r: 'table_things#notebook' });
        await s.wait(0.8);
        s.set('notebook', 'shut');
        await s.wait(0.5);
        t.reach(null);
        s.tell('stay_laugh:shut');
        await s.wait(1);
      },
    },
    // Ш1, go: the acorns into the pail — «Через год жёлуди будут те же»; he writes in the notebook by the lamp
    go_write: {
      after: ['hundred_night'],
      tells: ['go_write:pail', 'go_write:write'],
      seconds: 11,
      from: () => ({ ...CAM, ...TWO, ...CLEAR, acorns: 'counting', tens: 9, counted: 10, notebook: 'open', letter: true,
        ...seated('elzeard', SEAT_E, 180, 'sit_table', 'table_things#heap'), ...seated('traveller', SEAT_T, 115, 'sit_table', 'elzeard') }),
      run: async s => {
        const t = s.person('traveller');
        await intoPail(s, 'go_write:pail');
        await s.wait(2);
        t.look('table_things#notebook');
        t.do('write_table', { loop: true });
        s.set('camera_shot', 'medium');
        s.set('camera_target', 'traveller');
        s.tell('go_write:write');
        await s.wait(4);
      },
    },
    // 3.4: fourteen years on, evening; the old man comes in at the door (over the bread and socks on the threshold, if
    // they are there), sits down at the lamp and begins counting, slower than before
    hundred_slow: {
      tells: ['hundred_slow:in', 'hundred_slow:sat'],
      seconds: 18,
      from: () => ({ ...CAM, ...CLEAR, acorns: 'heap', notebook: 'shut', letter: false, ...standing('elzeard', [-3.7, 2.6], 90, 'stand', null),
        ...seated('traveller', SEAT_T, 115, 'sit_table', 'door') }),
      run: async s => {
        const e = s.person('elzeard'), t = s.person('traveller');
        if (s.state.bread_step) {
          e.look('step_gifts#loaf');
          await s.wait(1.5);
        }
        await e.walk([[-2.75, 2.65]]);
        e.look(null);
        t.look('elzeard');
        s.tell('hundred_slow:in');
        await e.walk([[-2.0, 3.35], [-0.6, 4.4]]);
        await sitDown(s, 'sit_table');
        e.look('table_things#heap');
        t.look('elzeard');
        s.set('camera_target', 'table_mid');
        s.tell('hundred_slow:sat');
        await s.wait(2);
      },
    },
    // 3.4 on the Road: «Как год?» — «Был»; the Traveller writes the word in his notebook, as every year
    year_word: {
      after: ['hundred_slow'],
      tells: ['year_word:write'],
      seconds: 6,
      from: () => ({ ...CAM, ...TWO, ...CLEAR, acorns: 'heap', notebook: 'shut', letter: false,
        ...seated('elzeard', SEAT_E, 180, 'sit_table', 'table_things#heap'), ...seated('traveller', SEAT_T, 115, 'sit_table', 'elzeard') }),
      run: async s => {
        const t = s.person('traveller');
        s.set('notebook', 'open');
        t.look('table_things#notebook');
        t.do('write_table', { loop: true });
        s.tell('year_word:write');
        await s.wait(4);
        t.do('sit_table', { loop: true });
        s.set('notebook', 'shut');
        t.look('elzeard');
      },
    },
    // 3.4: he counts, slower than before — then the guiding `count` (the last ten)
    count_slow: {
      after: ['hundred_slow', 'year_word'],
      tells: ['count_slow:count'],
      seconds: 10,
      from: () => ({ ...CAM, ...TWO, ...CLEAR, acorns: 'heap', notebook: 'shut', letter: false,
        ...seated('elzeard', SEAT_E, 180, 'sit_table', 'table_things#heap'), ...seated('traveller', SEAT_T, 115, 'sit_table', 'elzeard') }),
      run: async s => {
        const e = s.person('elzeard');
        s.set('acorns', 'counting');
        e.look('table_things#heap');
        e.do('count_slow', { loop: true });
        await s.move('tens', 9, { over: 9, ease: 'linear' });
        s.tell('count_slow:count');
      },
    },
    // 3.4 on the Name: the count done, a long pause; his face close — «Сто». «Хорошо» — he looks at the window, at the
    // ridge — «За хребтом склон голый»
    slow_name: {
      after: ['count_slow'],
      tells: ['slow_name:good', 'slow_name:window'],
      seconds: 10,
      from: () => ({ ...CAM, ...CLEAR, acorns: 'counting', tens: 9, counted: 10, notebook: 'shut', letter: false,
        ...seated('elzeard', SEAT_E, 180, 'count_slow', 'table_things#heap'), ...seated('traveller', SEAT_T, 115, 'sit_table', 'elzeard') }),
      run: async s => {
        const e = s.person('elzeard');
        e.do('sit_table', { loop: true });
        s.set('camera_shot', 'close');
        s.set('camera_target', 'elzeard');
        await s.wait(3);
        e.look(null);
        s.tell('slow_name:good');
        await s.wait(2.5);
        e.look('window#pane');
        await s.wait(1);
        s.tell('slow_name:window');
        await s.wait(2.5);
      },
    },
    // 3.4 on Silence: «Сам» — close, and he laughs once; the Traveller's line, both of them; he sweeps the acorns into
    // the pail — «Посажу», close
    slow_silence: {
      after: ['count_slow'],
      tells: ['slow_silence:sam', 'slow_silence:laugh', 'slow_silence:told', 'slow_silence:plant'],
      seconds: 16,
      from: () => ({ ...CAM, ...CLEAR, acorns: 'counting', tens: 9, counted: 10, notebook: 'shut', letter: false,
        ...seated('elzeard', SEAT_E, 180, 'count_slow', 'table_things#heap'), ...seated('traveller', SEAT_T, 115, 'sit_table', 'elzeard') }),
      run: async s => {
        const e = s.person('elzeard');
        e.do('sit_table', { loop: true });
        e.look('traveller');
        s.set('camera_shot', 'close');
        s.set('camera_target', 'elzeard');
        await s.wait(2);
        s.tell('slow_silence:sam');
        await s.wait(1.5);
        await e.do('laugh_seated');
        e.do('sit_table', { loop: true });
        s.tell('slow_silence:laugh');
        s.set('camera_shot', 'full');
        s.set('camera_target', 'table_mid');
        await s.wait(2.5);
        s.tell('slow_silence:told');
        await s.wait(2);
        await intoPail(s);
        e.look(null);
        s.set('camera_shot', 'close');
        s.set('camera_target', 'elzeard');
        await s.wait(2);
        s.tell('slow_silence:plant');
        await s.wait(2);
      },
    },
  };
}

return { lime, acorn, heap, INSERT, SEAT_E, SEAT_T, SEAT_H, film };
