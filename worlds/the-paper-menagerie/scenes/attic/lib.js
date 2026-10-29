// What the attic shares: its unpainted pine boards (over x0…x1, y0…y1 of a sheet, the boards running along y), grey
// with dust and age, knots and nail heads; and a shade laid over whatever was just painted, source-atop.
function boards(g, x0, x1, y0, y1, w, seed) {
  g.fillStyle = '#a58466';
  g.fillRect(x0, y0, x1 - x0, y1 - y0);
  let i = 0;
  for (let x = x0; x < x1; x += w, i++) {
    const h = anim.hash(i, seed);
    const ww = Math.min(w, x1 - x);
    g.fillStyle = `rgba(${h < 0.5 ? '90,64,44' : '214,186,150'},${0.08 + 0.12 * anim.hash(i, seed + 1)})`;
    g.fillRect(x, y0, ww, y1 - y0);
    g.fillStyle = 'rgba(60,42,30,0.45)';
    g.fillRect(x, y0, 0.008, y1 - y0);
    g.fillStyle = 'rgba(70,50,36,0.5)';
    const k = y0 + anim.hash(i, seed + 2) * (y1 - y0);
    g.beginPath();
    g.ellipse(x + ww * 0.5, k, Math.min(0.018, ww / 2), 0.03, 0, 0, Math.PI * 2);
    g.fill();
  }
}
function dust(g, x, y, w, h, a) {
  g.save();
  g.globalCompositeOperation = 'source-atop';
  g.fillStyle = `rgba(176,166,150,${a})`;
  g.fillRect(x, y, w, h);
  g.restore();
}

// The attic's piece (stage 5; modules/beats; the contract: game.md «Stage 5 — pieces», notes.md «Pieces»): 3.2,
// «Зверинец» 0 — the shoe box starts in the dusty light; Jack, grown, in the open hatch, reaches it and takes it down.
function film(scene) {
  const DEG = 180 / Math.PI, EYE = 1.7;
  const CAM0 = { camera_target: null, camera_shot: 'full', camera_frame: null, camera_glide: 1.5, camera_x: 0, camera_h: 0, camera_z: 0,
    camera_look: 0, camera_pitch: 0, camera_yaw: 0, camera_roll: 0 };
  const CAM = ([ex, ez, eh], [tx, tz, th]) => ({ ...CAM0, camera_x: ex, camera_z: ez, camera_h: eh - EYE,
    camera_yaw: Math.atan2(tx - ex, tz - ez) * DEG, camera_pitch: Math.atan2(th - eh, Math.hypot(tx - ex, tz - ez)) * DEG });
  const CAMK = ['camera_x', 'camera_z', 'camera_h', 'camera_yaw', 'camera_pitch'];
  const glide = (s, c, over) => s.all(...CAMK.map(k => s.move(k, c[k], { over, ease: 'inOut' })));
  const SH = { box: CAM([0.35, 2.1, 0.9], [0.5, 3.6, 0.45]), hatch: CAM([0.1, 2.0, 1.15], [0.85, 3.5, 0.75]) };
  const cast = scene.kit?.cast?.characters ?? {};
  return {
    wake_attic: {
      tells: ['wake_attic:box'], seconds: 8,
      from: () => ({ ...SH.box, box: 'shut', stir: true, hatch: 1, hatch_light: 1, jack_a: 1.0, jack_d: 3.45, jack_turn: 240, jack_do: 'stand',
        jack_look: 'shoebox#box', jack_reach: null, jack_with: [], jack_wear: cast.jack_grown ? { ...cast.jack_grown, parts: [] } : null }),
      run: async s => {
        const jack = s.person('jack');
        await s.wait(2.5);
        s.tell('wake_attic:box');
        glide(s, SH.hatch, 1.5);
        jack.reach({ r: 'shoebox#box', l: 'shoebox#box' });
        await s.wait(1.5);
        s.set('stir', false);
        s.set('box', 'gone');
        jack.reach(null);
        jack.with(['shoebox']);
        jack.look('jack#shoebox');
        await s.wait(2.5);
      },
    },
  };
}

return { boards, dust, film };
