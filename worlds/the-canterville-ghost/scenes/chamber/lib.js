// What the secret chamber's walls share: old rough stone, courses of uneven blocks laid in grey mortar, some darker
// with damp, here and there a stain running down. Metres, y down, from the foot of a wall. Painted in its own colour
// (a cool dark grey): the moon and the candles make the night.
const STONE = ['#5f5a54', '#57534d', '#67615a', '#524e49', '#5d5852'];
const MORTAR = '#393633';

// a stretch of wall from x0 to x1, `top` metres high; `seed` keeps each wall its own
function stone(g, x0, x1, top, seed) {
  let s = seed * 7919 + 13;
  const r = () => ((s = (s * 9301 + 49297) % 233280) / 233280);
  g.save();
  g.beginPath();
  g.rect(x0, -top - 0.02, x1 - x0, top + 0.04);
  g.clip();
  g.fillStyle = MORTAR;
  g.fillRect(x0, -top - 0.02, x1 - x0, top + 0.04);
  let row = 0;
  for (let y = 0; y > -top - 0.3; row++) {
    const h = 0.24 + r() * 0.12;
    let x = x0 - r() * 0.4;
    while (x < x1) {
      const w = 0.32 + r() * 0.42;
      g.fillStyle = STONE[Math.floor(r() * STONE.length)];
      g.fillRect(x + 0.015, y - h + 0.015, w - 0.03, h - 0.03);
      // a darker face where the damp has got in, low down
      if (r() < 0.25 + 0.3 * (row < 2)) {
        g.fillStyle = 'rgba(52,56,50,0.35)';
        g.fillRect(x + 0.015, y - h + 0.015, w - 0.03, h - 0.03);
      }
      x += w;
    }
    y -= h;
  }
  // stains running down from the top
  for (let i = 0; i < (x1 - x0) * 0.8; i++) {
    const x = x0 + r() * (x1 - x0);
    const len = 0.5 + r() * 1.4;
    const grd = g.createLinearGradient(0, -top, 0, -top + len);
    grd.addColorStop(0, 'rgba(46,48,42,0.45)');
    grd.addColorStop(1, 'rgba(46,48,42,0)');
    g.fillStyle = grd;
    g.fillRect(x, -top, 0.06 + r() * 0.12, len);
  }
  g.restore();
}

// a low round-headed arch from x0 to x1, its springing at y1 (negative) and its foot at 0: the path, for a cut or a fill
function arch(g, x0, x1, y1) {
  const m = (x0 + x1) / 2;
  const rx = (x1 - x0) / 2;
  g.beginPath();
  g.moveTo(x0, 0.02);
  g.lineTo(x0, y1);
  g.ellipse(m, y1, rx, rx * 0.8, 0, Math.PI, 0);
  g.lineTo(x1, 0.02);
  g.closePath();
}

// The chamber's pieces (the game's `beat`; modules/beats; notes.md «Pieces»); the moment (`moment`) is the game's and
// the script's (who is here). Places in metres: across, away. The panel to the landing is in the left wall
// (4.3…5.1 m away), the landing beyond it; the passage's mouth in the far wall at 1.35…2.05; the little window high in
// the right wall at 4.5…5.2 m, the almond outside it, 2.2 m below.
const PANEL = [-2.6, 4.7];
const KNEEL = [1.0, 4.45];
const CAM = { camera_target: null, camera_shot: 'full', camera_frame: null, camera_glide: 1.5, camera_x: 0, camera_h: 0, camera_z: 0,
  camera_look: 0, camera_pitch: 0, camera_yaw: 0, camera_roll: 0 };
// the camera at the little window, looking out through its bars at the almond in blossom
const WINDOW = { camera_x: 2.6, camera_z: 3.9, camera_h: -0.2, camera_yaw: 31, camera_pitch: -2 };
async function toWindow(s) {
  await s.all(...Object.entries(WINDOW).map(([k, v]) => s.move(k, v, { over: 4, ease: 'inOut' })));
}
// where each of the family comes to (across, away, turn), as the look has them
const SPOT = {
  virginia: [KNEEL[0], KNEEL[1], 248], otis: [1.6, 4.65, 225], mrs_otis: [-1.75, 3.8, 120], washington: [-2.75, 4.75, 120],
  twin_star: [2.35, 4.25, 120], twin_stripes: [2.7, 5.48, 165],
};
// on the landing behind the panel, about to come in
const LANDING = {
  virginia_a: -3.5, virginia_d: 4.7, otis_a: -3.9, otis_d: 5.3, mrs_otis_a: -4.0, mrs_otis_d: 4.3, washington_a: -4.1, washington_d: 5.9,
  twin_star_a: -3.8, twin_star_d: 3.7, twin_stripes_a: -4.2, twin_stripes_d: 3.4,
};

function film(scene) {
  return {
    // 4.6: the family come in through the panel with candles; Virginia, with the casket, kneels by the bones; the
    // camera goes to the little window: the almond in blossom
    chamber_family: {
      tells: ['chamber_family:kneel', 'chamber_family:almond'],
      seconds: 16,
      from: () => ({ ...CAM, ...LANDING, virginia_turn: 90, virginia_do: 'stand', virginia_with: ['casket'], virginia_look: null, otis_turn: 90,
        otis_do: 'offer', otis_with: ['candle'], otis_look: 'virginia', mrs_otis_turn: 90, mrs_otis_do: 'stand', mrs_otis_look: 'virginia',
        washington_turn: 90, washington_do: 'offer', washington_with: ['candle'], washington_look: 'virginia', twin_star_turn: 90,
        twin_star_do: 'stand', twin_star_look: null, twin_stripes_turn: 90, twin_stripes_do: 'stand', twin_stripes_look: null, casket_open: 0 }),
      run: async s => {
        const go = async (id, delay, through, done) => {
          await s.wait(delay);
          const p = s.person(id);
          const [a, d, turn] = SPOT[id];
          await p.walk([...through, [a, d]]);
          await p.turn(turn);
          done(p);
        };
        await s.all(
          go('virginia', 0, [PANEL, [0.2, 4.4]], p => {
            p.do('pray');
            p.look('skeleton#skull');
            s.tell('chamber_family:kneel');
          }),
          go('otis', 0.8, [PANEL], p => p.look('virginia')),
          go('twin_star', 1.4, [PANEL, [1.2, 4.0]], p => p.look('window#window')),
          go('twin_stripes', 1.9, [PANEL, [1.6, 5.0]], p => p.look('window#window')),
          go('mrs_otis', 2.4, [PANEL], p => p.do('clasped')),
          go('washington', 3.0, [], () => {}),
        );
        await s.wait(1);
        await toWindow(s);
        s.tell('chamber_family:almond');
        await s.wait(1.5);
      },
    },
    // 4С.5: she has led him down the passage in the wall; she kneels by the bones, he stays in the passage's mouth; the
    // camera to the window: the almond
    chamber_father: {
      tells: ['chamber_father:almond'],
      seconds: 14,
      from: () => ({ ...CAM, virginia_a: 1.55, virginia_d: 5.85, virginia_turn: 200, virginia_do: 'stand', virginia_with: ['casket'], virginia_look: null,
        otis_a: 1.85, otis_d: 6.1, otis_turn: 200, otis_do: 'offer', otis_with: ['candle'], otis_look: 'virginia', casket_open: 0 }),
      run: async s => {
        const v = s.person('virginia');
        const o = s.person('otis');
        await s.all(v.walk([KNEEL]), (async () => {
          await s.wait(1);
          await o.walk([[1.7, 5.75]]);
        })());
        await v.turn(248);
        v.do('pray');
        v.look('skeleton#skull');
        await s.wait(2);
        await toWindow(s);
        s.tell('chamber_father:almond');
        await s.wait(1.5);
      },
    },
    // the casket opened in her hands, close (`stub`: her candle-end on the jewels)
    casket: {
      after: ['chamber_family', 'chamber_father'],
      tells: ['casket:open'],
      seconds: 5,
      from: () => ({ ...CAM, virginia_a: KNEEL[0], virginia_d: KNEEL[1], virginia_turn: 248, virginia_do: 'pray', virginia_with: ['casket'],
        virginia_look: 'virginia#casket', casket_open: 0 }),
      run: async s => {
        s.person('virginia').look('virginia#casket');
        await s.move('casket_open', 1, { over: 1 });
        s.tell('casket:open');
        await s.wait(3.5);
      },
    },
  };
}

return { stone, arch, MORTAR, film };
