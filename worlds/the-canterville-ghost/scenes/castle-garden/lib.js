// What the garden's elements share: the churchyard's iron railing (two runs of it) and a travelling coach seen from
// behind (two coaches).

// The churchyard railing from x0 to x1 (metres along it, its foot at y 0): a low plinth of grey stone, black iron bars
// with spear tips between two rails, a stout post every few metres; a wicket gate between gate[0] and gate[1], if
// given — taller posts with stone balls on them, the gate's own bars under an arch.
function railing(g, x0, x1, gate) {
  const STONE = '#8c877c';
  const STONE_DARK = '#6e6a62';
  const IRON = '#26262b';
  g.fillStyle = STONE;
  g.fillRect(x0, -0.3, x1 - x0, 0.32);
  g.fillStyle = STONE_DARK;
  g.fillRect(x0, -0.3, x1 - x0, 0.04);
  for (let x = x0; x < x1; x += 0.9) g.fillRect(x, -0.26, 0.015, 0.26);
  const inGate = x => gate && x > gate[0] - 0.12 && x < gate[1] + 0.12;
  // the rails
  g.fillStyle = IRON;
  for (const y of [-0.38, -1.0]) {
    if (gate) {
      g.fillRect(x0, y, gate[0] - 0.12 - x0, 0.03);
      g.fillRect(gate[1] + 0.12, y, x1 - gate[1] - 0.12, 0.03);
    } else g.fillRect(x0, y, x1 - x0, 0.03);
  }
  // the bars and their spear tips
  for (let x = x0 + 0.07; x < x1; x += 0.14) {
    if (inGate(x)) continue;
    g.fillRect(x - 0.01, -1.08, 0.02, 0.78);
    g.beginPath();
    g.moveTo(x - 0.03, -1.08);
    g.lineTo(x, -1.17);
    g.lineTo(x + 0.03, -1.08);
    g.closePath();
    g.fill();
  }
  // the posts, and one at each end
  const posts = [];
  for (let x = x0 + 0.05; x < x1 - 0.6; x += 2.4) posts.push(x);
  posts.push(x1 - 0.05);
  for (const x of posts) {
    if (inGate(x)) continue;
    g.fillRect(x - 0.03, -1.15, 0.06, 0.85);
    g.beginPath();
    g.arc(x, -1.19, 0.045, 0, Math.PI * 2);
    g.fill();
  }
  if (!gate) return;
  // the wicket gate: two stone posts with balls on top, the gate between under its iron arch
  const [a, b] = gate;
  for (const x of [a - 0.12, b + 0.12]) {
    g.fillStyle = STONE;
    g.fillRect(x - 0.12, -1.45, 0.24, 1.47);
    g.fillStyle = STONE_DARK;
    g.fillRect(x - 0.14, -1.5, 0.28, 0.07);
    g.fillStyle = STONE;
    g.beginPath();
    g.arc(x, -1.62, 0.11, 0, Math.PI * 2);
    g.fill();
  }
  g.fillStyle = IRON;
  const mid = (a + b) / 2;
  g.fillRect(a, -0.4, b - a, 0.03);
  g.fillRect(a, -0.95, b - a, 0.03);
  g.lineWidth = 0.03;
  g.strokeStyle = IRON;
  g.beginPath();
  g.moveTo(a, -1.05);
  g.quadraticCurveTo(mid, -1.45, b, -1.05);
  g.stroke();
  for (let x = a + 0.06; x < b; x += 0.12) {
    const top = -1.05 - 0.35 * (1 - ((x - mid) / ((b - a) / 2)) ** 2);
    g.fillRect(x - 0.01, top, 0.02, -0.38 - top + 0.02);
  }
  g.fillRect(a, -1.08, 0.04, 0.72);
  g.fillRect(b - 0.04, -1.08, 0.04, 0.72);
}

// A travelling coach seen from behind, its foot on the ground at y 0: the black lacquered body with a crimson line
// and a little back window, trunks strapped on the roof, the coachman's hat and shoulders above the front, the big
// rear wheels seen edge on at its sides, the horses' legs and tails between the wheels beyond, a lamp at each corner.
function coach(g) {
  const BODY = '#1e1e24';
  const TRIM = '#7a2228';
  const WHEEL = '#2a231e';
  const HORSE = '#3a2a20';
  // the horses beyond, under the body: four legs and two tails
  g.fillStyle = HORSE;
  for (const x of [-0.5, -0.32, 0.32, 0.5]) g.fillRect(x - 0.035, -0.95, 0.07, 0.95);
  g.fillStyle = '#241812';
  for (const x of [-0.42, 0.42]) {
    g.beginPath();
    g.ellipse(x, -0.95, 0.06, 0.25, 0, 0, Math.PI * 2);
    g.fill();
  }
  // the axle and springs
  g.fillStyle = WHEEL;
  g.fillRect(-0.85, -0.66, 1.7, 0.06);
  // the body: rounded at its top corners, a crimson line round it, a small back window
  g.fillStyle = BODY;
  g.beginPath();
  g.moveTo(-0.72, -0.62);
  g.lineTo(-0.76, -2.0);
  g.quadraticCurveTo(-0.76, -2.2, -0.56, -2.2);
  g.lineTo(0.56, -2.2);
  g.quadraticCurveTo(0.76, -2.2, 0.76, -2.0);
  g.lineTo(0.72, -0.62);
  g.closePath();
  g.fill();
  g.strokeStyle = TRIM;
  g.lineWidth = 0.03;
  g.strokeRect(-0.62, -2.05, 1.24, 1.32);
  g.fillStyle = '#4a5260';
  g.fillRect(-0.24, -1.9, 0.48, 0.3);
  // the trunks on the roof, strapped
  g.fillStyle = '#6a4a30';
  g.fillRect(-0.68, -2.55, 0.8, 0.35);
  g.fillStyle = '#7e5a3a';
  g.fillRect(0.08, -2.48, 0.58, 0.28);
  g.fillStyle = '#3a2a1e';
  for (const x of [-0.45, -0.1, 0.25, 0.5]) g.fillRect(x, -2.55, 0.03, 0.35);
  // the coachman above the front, beyond the trunks: shoulders in a dark cape, a top hat
  g.fillStyle = '#2a2a30';
  g.beginPath();
  g.ellipse(0.05, -2.6, 0.26, 0.14, 0, Math.PI, Math.PI * 2);
  g.fill();
  g.fillStyle = '#e6c0a0';
  g.beginPath();
  g.arc(0.05, -2.74, 0.09, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = '#16161a';
  g.fillRect(-0.06, -3.0, 0.22, 0.2);
  g.fillRect(-0.11, -2.82, 0.32, 0.03);
  // the rear wheels, edge on: tall narrow rims with their hubs
  for (const x of [-0.88, 0.88]) {
    g.fillStyle = WHEEL;
    g.beginPath();
    g.ellipse(x, -0.6, 0.06, 0.6, 0, 0, Math.PI * 2);
    g.fill();
    g.fillStyle = '#8a6a2a';
    g.beginPath();
    g.ellipse(x, -0.6, 0.09, 0.07, 0, 0, Math.PI * 2);
    g.fill();
  }
  // the lamps at the back corners
  g.fillStyle = '#c8a24a';
  for (const x of [-0.8, 0.8]) g.fillRect(x - 0.05, -1.75, 0.1, 0.16);
}

// The garden's pieces (the game's `beat`; modules/beats; notes.md «Pieces»). Places in metres: across (right of the
// viewer's line), away. Her easel at 3.3 / 5.35, she paints at 2.9 / 5.9; the path across the lawn at 4.25 m; the
// almond at 0.6 / 5.2; the churchyard beyond the railing (5.6 m), its wicket at 1.4…2.1; the coffin at −1.6 / 7.0, the
// grave under the yew at −4.3 / 8.8.
const CAM = { camera_target: null, camera_shot: 'full', camera_frame: null, camera_glide: 1.5, camera_x: 0, camera_h: 0, camera_z: 0,
  camera_look: 0, camera_pitch: 0, camera_yaw: 0, camera_roll: 0 };
const shot = (target, size, frame = null) => ({ ...CAM, camera_target: target, camera_shot: size, camera_frame: frame });
// the morning of 1.5: the garden in summer, her easel, she painting the almond
const MORNING = { night: 0, clouds: 0, autumn: 0, almond: 'dry', easel: true, funeral: false, cross: false, grave: 'none', torches: 0, torch_held: 0,
  candle: 0, coaches: false, board_open: 0 };
const PAINTING = { virginia_on: null, virginia_a: 2.9, virginia_d: 5.9, virginia_turn: 165, virginia_do: 'offer', virginia_with: ['brush'],
  virginia_look: 'easel#board', virginia_reach: null, virginia_wear: null };
// the funeral at night: the family round the coffin as the look has them (their places, a step back when she walks
// alone), Washington's torch
const FAMILY = {
  otis_a: -1.25, otis_d: 8.15, otis_turn: 175, otis_do: 'upright', otis_look: 'coffin#lid', otis_with: [],
  mrs_otis_a: -1.95, mrs_otis_d: 8.2, mrs_otis_turn: 185, mrs_otis_do: 'clasped', mrs_otis_look: 'coffin#lid',
  washington_a: -3.0, washington_d: 7.5, washington_turn: 140, washington_do: 'offer', washington_look: 'coffin#lid', washington_with: ['torch'],
  twin_star_a: -0.35, twin_star_d: 8.0, twin_star_turn: 200, twin_star_do: 'stand', twin_star_look: 'coffin#lid',
  twin_stripes_a: -2.55, twin_stripes_d: 8.1, twin_stripes_turn: 165, twin_stripes_do: 'stand', twin_stripes_look: 'coffin#lid',
};

function film(scene) {
  const W = id => scene.kit.cast.characters[id];
  return {
    // 1.5 (after М3 in the same pose): she paints the almond; Mrs Umney comes along the path, stops by the almond and
    // looks at it; then her box of colours
    paint: {
      tells: ['paint:umney', 'paint:box'],
      seconds: 10,
      from: () => ({ ...MORNING, ...PAINTING, mrs_umney_a: -6.5, mrs_umney_d: 4.25, mrs_umney_turn: 90, mrs_umney_do: 'stand', mrs_umney_look: null,
        ...shot('virginia', 'medium', 0.6) }),
      run: async s => {
        const u = s.person('mrs_umney');
        await s.wait(1);
        s.camera({ target: null });
        await u.walk([[-0.4, 4.4]]);
        await u.turn(160);
        u.look('almond#crown');
        s.tell('paint:umney');
        await s.wait(2.5);
        u.look('virginia');
        s.person('virginia').look('easel');
        s.tell('paint:box');
        await s.wait(1.5);
      },
    },
    // 1.5: she turns to look back at the house — toward the viewer
    look_house: {
      after: ['paint'],
      tells: ['look_house:end'],
      seconds: 4,
      from: () => ({ ...MORNING, ...PAINTING, mrs_umney_a: -0.4, mrs_umney_d: 4.4, mrs_umney_turn: 160, mrs_umney_look: 'virginia', ...shot('virginia', 'close') }),
      run: async s => {
        const v = s.person('virginia');
        s.camera({ target: 'virginia', shot: 'close' });
        v.do('stand');
        await v.turn(185);
        v.look([3.2, -6, 5]);
        await s.wait(1.5);
        s.tell('look_house:end');
      },
    },
    // 2.6: she sits at the easel and does not paint; Cecil on the grass by her asks if they will ride
    easel_idle: {
      tells: ['easel_idle:ask'],
      seconds: 8,
      from: () => ({ ...MORNING, autumn: 1, virginia_on: [3.35, 6.35, 0.45], virginia_a: 3.35, virginia_d: 6.35, virginia_turn: 200, virginia_do: 'brood',
        virginia_with: [], virginia_look: 'easel#board', virginia_wear: null, cecil_a: 2.2, cecil_d: 5.2, cecil_turn: 160, cecil_do: 'sit_ground',
        cecil_look: 'easel#board', cecil_wear: null, ...shot('virginia', 'full', 0.6) }),
      run: async s => {
        await s.wait(2);
        s.person('cecil').look('virginia');
        await s.wait(1);
        s.tell('easel_idle:ask');
        await s.wait(1.5);
        s.person('virginia').look('cecil');
        await s.wait(2);
      },
    },
    // the funeral («Миндаль», «Свеча»): night, autumn, the coffin and the torches; she walks to the coffin and lays the
    // cross of almond blossom on it; the moon comes out of the clouds. `with_family`: the family beside her, else a
    // step behind; `father_apart`: Mr Otis apart with his candle (the game sets it); `nightingale`: the bird
    funeral: {
      tells: ['funeral:cross', 'funeral:moon'],
      seconds: 16,
      from: () => ({ ...MORNING, night: 1, autumn: 1, almond: 'blossom', easel: false, funeral: true, grave: 'open', torches: 1, torch_held: 1,
        clouds: 1, cross: false, ...FAMILY, virginia_on: null, virginia_a: 1.7, virginia_d: 8.4, virginia_turn: 250, virginia_do: 'clasped',
        virginia_with: ['almond_cross'], virginia_look: 'coffin#lid', virginia_reach: null, virginia_wear: null, ...CAM }),
      run: async s => {
        const v = s.person('virginia');
        if (!scene.get('with_family')) {
          for (const id of ['otis', 'mrs_otis', 'washington', 'twin_star', 'twin_stripes']) s.set(`${id}_d`, (scene.get(`${id}_d`) ?? 8) + 0.9);
        }
        if (scene.get('father_apart')) {
          s.set('otis_a', -6.2);
          s.set('otis_d', 8.9);
          s.set('otis_turn', 120);
        }
        await s.wait(1);
        await v.walk([[0.9, 7.6], [0.1, 7.15]]);
        await v.turn(255);
        s.camera({ target: 'virginia', shot: 'medium', frame: 0.6 });
        await v.do('lay_down', { loop: false });
        v.with([]);
        s.set('cross', true);
        v.do('clasped');
        s.tell('funeral:cross');
        await s.wait(1);
        await s.move('clouds', 0, { over: 4 });
        s.tell('funeral:moon');
        await s.wait(1);
      },
    },
    // years later: Virginia, the Duchess, and Cecil walk slowly to the yew and stop by the mound
    years: {
      tells: ['years:stop'],
      seconds: 10,
      from: () => ({ ...MORNING, autumn: 1, almond: 'blossom', easel: false, grave: 'mound', cross: true, virginia_on: null, virginia_a: 2.1,
        virginia_d: 4.6, virginia_turn: 0, virginia_do: 'stand', virginia_with: [], virginia_look: null, virginia_reach: null,
        virginia_wear: W('virginia_duchess'), cecil_a: 2.6, cecil_d: 4.4, cecil_turn: 0, cecil_do: 'stand', cecil_look: null, cecil_wear: W('cecil_duke'),
        ...shot('virginia', 'full', 0.45) }),
      run: async s => {
        const v = s.person('virginia');
        const c = s.person('cecil');
        await s.all(v.walk([[1.75, 6.0], [-2.6, 8.4]]), c.walk([[2.05, 6.0], [-2.1, 8.0]]));
        await s.all(v.turn(220), c.turn(200));
        v.look('grave');
        c.look('virginia');
        s.tell('years:stop');
        await s.wait(1.5);
      },
    },
    // the last of «Миндаль»: night, the almond in blossom over the mound; the camera goes slowly onto the almond
    almond_last: {
      tells: ['almond_last:end'],
      seconds: 10,
      from: () => ({ ...MORNING, night: 1, autumn: 1, almond: 'blossom', easel: false, grave: 'mound', cross: true, ...CAM }),
      run: async s => {
        s.move('camera_z', 2.2, { over: 9 });
        await s.move('camera_pitch', 9, { over: 9 });
        s.tell('almond_last:end');
      },
    },
    // the last of «Пятно»: the two coaches go out down the avenue to the gates, past the dry almond
    coaches: {
      tells: ['coaches:end'],
      seconds: 14,
      from: () => ({ ...MORNING, autumn: 1, easel: false, coaches: true, coach_d: 9, ...CAM }),
      run: async s => {
        await s.move('coach_d', 56, { over: 13, ease: 'inOut' });
        s.tell('coaches:end');
      },
    },
  };
}

return { railing, coach, film };
