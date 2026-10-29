// The sky round Fabien's plane, in the scene's three skies (screen heights; the horizon at 0.5; the plane flies to the
// left, so what lies below drifts to the right):
// — dusk (storm 0, above 0): the afterglow of a sun just set low on the left, rose and amber under a violet sky, a few
//   streaks of cloud lit from below; under the wing the Patagonian steppe in the dusk — pale dry riverbeds, the
//   haze at the horizon, the lights of a little town far ahead and one lone house's window lit; far behind on the right, silent
//   lightning low on the horizon (its own flicker, not the scene's `flash`);
// — the storm (storm 1): black-violet cloud all round and below, its masses lit from within by lightning (`flash`,
//   set by the scene's script);
// — over the clouds (above 1): the night clear and full of stars, the sea of cloud below white in the moon, which is
//   behind the viewer; with storm 1 too, the lightning still flickers deep in it;
// — the night over the steppe (night 1, no storm): eleven o'clock, a deep blue sky full of stars, the steppe black
//   below with its pale dry riverbeds, the lights of Trelew ahead and below on the left coming nearer, far behind on
//   the right the silent lightning of the storm in the south;
// — in the storm, a gap in the clouds overhead (`gap` 0…1, the layer `gap` shown by animate): ragged edges lit grey,
//   the stars in it.
const A = e.aspect;
const H = 0.5;
const X0 = -0.3;
const W = A + 0.6;
const Y0 = -0.35;
const Y1 = 1.25;
const storm = e.state.storm > 0.5;
const above = e.state.above > 0.5;
const night = !storm && !above && e.state.night > 0.5;
// a soft round glow, stretched (sx, sy: its half-widths), falling off smoothly — no edge to its disc
function glow(c, x, y, sx, sy, color, alpha) {
  c.save();
  c.translate(x, y);
  c.scale(sx, sy);
  const [cr, cg, cb] = [1, 3, 5].map(i => parseInt(color.slice(i, i + 2), 16));
  const r = c.createRadialGradient(0, 0, 0, 0, 0, 1);
  for (const u of [0, 0.2, 0.4, 0.6, 0.8, 1]) r.addColorStop(u, `rgba(${cr},${cg},${cb},${(1 - u * u) ** 2})`);
  c.globalAlpha = alpha;
  c.fillStyle = r;
  c.beginPath();
  c.arc(0, 0, 1, 0, Math.PI * 2);
  c.fill();
  c.restore();
}
// a thing painted at x and again a band's width either side, so a band drifting round its box meets itself
function wrap(x, fn) {
  for (const d of [-W, 0, W]) if (x + d > X0 - 0.3 && x + d < X0 + W + 0.3) fn(x + d);
}
function stars(c, n, low) {
  for (let i = 0; i < n; i++) {
    const y = Y0 + (H - low - Y0) * e.rnd() ** 1.3;
    const x = X0 + W * e.rnd();
    const b = e.rnd();
    c.globalAlpha = (0.35 + 0.6 * b) * (1 - 0.65 * ((y - Y0) / (H - Y0)));
    c.fillStyle = b > 0.85 ? '#fff3dc' : '#e8eeff';
    c.beginPath();
    c.arc(x, y, 0.0007 + 0.0017 * b * b, 0, Math.PI * 2);
    c.fill();
  }
  c.globalAlpha = 1;
}
if (above) {
  // over the clouds: the night sky clear, the stars down to the cloud sea's edge
  e.layer('night', {}, c => {
    const sky = c.createLinearGradient(0, Y0, 0, H);
    sky.addColorStop(0, '#070b1d');
    sky.addColorStop(0.55, '#121c3e');
    sky.addColorStop(0.9, '#25366a');
    sky.addColorStop(1, '#3d5188');
    c.fillStyle = sky;
    c.fillRect(X0, Y0, W, H - Y0 + 0.01);
    stars(c, 520, 0.015);
    // the Milky Way, a faint band across from the upper left
    c.save();
    c.translate(A * 0.45, 0.12);
    c.rotate(-0.35);
    glow(c, 0, 0, 1.3, 0.09, '#8f9ccc', 0.22);
    c.restore();
    // the cloud sea's floor: pale under the moon, darker as it comes nearer and is seen from above
    const sea = c.createLinearGradient(0, H, 0, Y1);
    sea.addColorStop(0, '#b9c4e0');
    sea.addColorStop(0.15, '#a2aed0');
    sea.addColorStop(1, '#6f7ca6');
    c.fillStyle = sea;
    c.fillRect(X0, H, W, Y1 - H);
  });
  // the cloud sea in two bands of lumps, the nearer bigger and quicker: their moonlit tops, their blue shadowed sides
  const band = (name, y0, y1, size, n) =>
    e.layer(name, { box: [X0, y0 - size * 1.5, X0 + W, y1 + size], drift: [name === 'far_sea' ? 0.004 : 0.016, 0] }, c => {
      for (let i = 0; i < n; i++) {
        const u = e.rnd();
        const y = y0 + (y1 - y0) * u;
        const s = size * (0.5 + u) * (0.7 + 0.6 * e.rnd());
        wrap(X0 + W * e.rnd(), x => {
          glow(c, x, y + s * 0.35, s * 2.6, s * 0.7, '#6a77a2', 0.35);
          glow(c, x, y, s * 2.2, s * 0.6, '#d3dbef', 0.55);
          glow(c, x - s * 0.3, y - s * 0.2, s * 1.4, s * 0.35, '#eef2fc', 0.35);
        });
      }
    });
  band('far_sea', H + 0.005, H + 0.12, 0.03, 80);
  band('near_sea', H + 0.12, Y1, 0.11, 70);
  // the lightning deep in the cloud sea, when the storm is under it (the script flashes it only then)
  e.layer('flash', { blend: 'add', box: [X0, H, X0 + W, Y1] }, c => {
    glow(c, A * 0.25, H + 0.2, 0.35, 0.1, '#b9b4f0', 0.5);
    glow(c, A * 0.8, H + 0.32, 0.3, 0.12, '#c8c0f8', 0.4);
  });
} else if (storm) {
  // in the storm: no sky and no land, only cloud — darkest overhead, a sick violet light low down
  e.layer('night', {}, c => {
    const sky = c.createLinearGradient(0, Y0, 0, Y1);
    sky.addColorStop(0, '#0b0a14');
    sky.addColorStop(0.45, '#1b1829');
    sky.addColorStop(0.55, '#2a2540');
    sky.addColorStop(1, '#100e1a');
    c.fillStyle = sky;
    c.fillRect(X0, Y0, W, Y1 - Y0);
  });
  // cloud masses streaming past, the nearer quicker
  const mass = (name, n, size, speed, color) =>
    e.layer(name, { box: [X0, Y0, X0 + W, Y1], drift: [speed, 0] }, c => {
      for (let i = 0; i < n; i++) {
        const y = Y0 + (Y1 - Y0) * e.rnd();
        const s = size * (0.6 + 0.8 * e.rnd());
        wrap(X0 + W * e.rnd(), x => glow(c, x, y, s * 1.8, s, color, 0.75));
      }
    });
  // the gap overhead: a ragged opening in the cloud, its edges lit, the stars in it (shown by animate as `gap` opens)
  e.layer('gap', { box: [A * 0.3, -0.1, A * 0.9, 0.42] }, c => {
    const gx = A * 0.6, gy = 0.16;
    glow(c, gx, gy, 0.26, 0.17, '#6a6c90', 0.9);
    glow(c, gx, gy, 0.21, 0.13, '#141a38', 1);
    glow(c, gx + 0.02, gy + 0.01, 0.16, 0.1, '#0c1230', 1);
    for (let i = 0; i < 40; i++) {
      const a = e.rnd() * Math.PI * 2, r = e.rnd() ** 0.5;
      const b = e.rnd();
      c.globalAlpha = 0.5 + 0.5 * b;
      c.fillStyle = '#f0f2ff';
      c.beginPath();
      c.arc(gx + Math.cos(a) * r * 0.15, gy + Math.sin(a) * r * 0.09, 0.0012 + 0.0016 * b, 0, Math.PI * 2);
      c.fill();
    }
    c.globalAlpha = 1;
  });
  mass('far_cloud', 40, 0.12, 0.02, '#3a3456');
  mass('near_cloud', 24, 0.2, 0.07, '#1c1826');
  // the light of the lightning inside the cloud — three places, flashed together
  e.layer('flash', { blend: 'add', box: [X0, Y0, X0 + W, Y1] }, c => {
    glow(c, A * 0.12, 0.3, 0.45, 0.3, '#c9c4f0', 0.6);
    glow(c, A * 0.12, 0.32, 0.12, 0.1, '#f0eaff', 0.5);
    glow(c, A * 0.85, 0.62, 0.5, 0.3, '#b8b0e8', 0.45);
    glow(c, A * 0.5, 0.05, 0.6, 0.2, '#a49cd8', 0.35);
  });
} else if (night) {
  // eleven o'clock over the steppe: the sky deep blue and full of stars, the land black below
  e.layer('night', {}, c => {
    const sky = c.createLinearGradient(0, Y0, 0, H);
    sky.addColorStop(0, '#0a0f26');
    sky.addColorStop(0.55, '#16224a');
    sky.addColorStop(0.9, '#2a3a6c');
    sky.addColorStop(1, '#3a4a78');
    c.fillStyle = sky;
    c.fillRect(X0, Y0, W, H - Y0 + 0.01);
    stars(c, 420, 0.02);
    const land = c.createLinearGradient(0, H, 0, Y1);
    land.addColorStop(0, '#2c3044');
    land.addColorStop(0.1, '#1c1e28');
    land.addColorStop(1, '#0f1014');
    c.fillStyle = land;
    c.fillRect(X0, H, W, Y1 - H);
  });
  const ground = (name, y0, y1, speed, n, scale, river) =>
    e.layer(name, { box: [X0, y0, X0 + W, y1], drift: [speed, 0] }, c => {
      for (let i = 0; i < n; i++) {
        const u = e.rnd();
        const y = y0 + (y1 - y0) * u;
        const s = scale * (0.3 + u);
        wrap(X0 + W * e.rnd(), x => glow(c, x, y, s * 3, s * 0.35, e.rnd() > 0.5 ? '#2a2c34' : '#16171c', 0.4));
      }
      if (river) {
        c.strokeStyle = 'rgba(150,160,200,0.18)';
        c.lineWidth = 0.0018;
        for (const d of [0, W]) {
          c.beginPath();
          for (let k = 0; k <= 90; k++) {
            const t = k / 90;
            const x = X0 + W * t - d;
            const y = y0 + (y1 - y0) * (0.55 + 0.25 * Math.sin(t * Math.PI * 14 + 1.3) * Math.sin(t * Math.PI * 4) + 0.15 * Math.sin(t * Math.PI * 2));
            if (k) c.lineTo(x, y);
            else c.moveTo(x, y);
          }
          c.stroke();
        }
      }
    });
  ground('far_steppe', H + 0.004, H + 0.08, 0.002, 90, 0.012, true);
  ground('near_steppe', H + 0.08, Y1, 0.012, 70, 0.05, false);
  // Trelew: a little town's lights below and ahead on the left — a grid of warm points, a glow over it — drifting back
  e.layer('town', { blend: 'add', box: [X0, H, X0 + W, H + 0.16], drift: [0.004, 0] }, c => {
    const tx = A * 0.22, ty = H + 0.06;
    glow(c, tx, ty, 0.12, 0.025, '#d8a060', 0.35);
    for (let i = 0; i < 70; i++) {
      const u = e.rnd(), v = e.rnd();
      glow(c, tx + (u - 0.5) * 0.2, ty + (v - 0.5) * 0.04, 0.0028, 0.0018, e.rnd() > 0.8 ? '#fff0c8' : '#ffc878', 0.95);
    }
  });
  // far behind on the right, low — the south — silent lightning in the storm's bank
  e.layer('flash', { blend: 'add', box: [A * 0.7, H - 0.08, A + 0.3, H + 0.02] }, c => {
    glow(c, A * 0.98, H - 0.012, 0.16, 0.035, '#c9b8e0', 0.5);
    glow(c, A * 0.98, H - 0.015, 0.05, 0.018, '#f0e6ff', 0.4);
  });
} else {
  // dusk: the sky over the steppe a few minutes after the sun has gone down on the left
  e.layer('dusk', {}, c => {
    const sky = c.createLinearGradient(0, Y0, 0, H);
    sky.addColorStop(0, '#1b1f45');
    sky.addColorStop(0.45, '#373c72');
    sky.addColorStop(0.75, '#6d5b86');
    sky.addColorStop(0.92, '#a8738a');
    sky.addColorStop(1, '#c98f7e');
    c.fillStyle = sky;
    c.fillRect(X0, Y0, W, H - Y0 + 0.01);
    // the afterglow where the sun went down, amber at the horizon, rose above it; and the far side cooler
    glow(c, A * 0.08, H, 0.75, 0.2, '#f2a560', 0.85);
    glow(c, A * 0.08, H, 0.3, 0.07, '#ffd08a', 0.8);
    glow(c, A * 0.25, H - 0.05, 0.9, 0.3, '#d07a86', 0.35);
    glow(c, A * 0.95, H - 0.02, 0.7, 0.18, '#5d6a9a', 0.5);
    // the first stars, high on the right, away from the glow
    for (let i = 0; i < 28; i++) {
      const x = A * (0.45 + 0.6 * e.rnd());
      const y = Y0 + 0.5 * e.rnd() ** 1.5;
      const b = e.rnd();
      c.globalAlpha = 0.3 + 0.5 * b;
      c.fillStyle = '#f3ecdf';
      c.beginPath();
      c.arc(x, y, 0.0008 + 0.0014 * b, 0, Math.PI * 2);
      c.fill();
    }
    // the evening star, low over the glow
    c.globalAlpha = 1;
    glow(c, A * 0.3, 0.26, 0.006, 0.006, '#fff8e8', 1);
    // the steppe below: hazed violet at the horizon, dry brown-olive coming nearer, going dark
    const land = c.createLinearGradient(0, H, 0, Y1);
    land.addColorStop(0, '#9a7d86');
    land.addColorStop(0.06, '#76626e');
    land.addColorStop(0.3, '#55493f');
    land.addColorStop(1, '#2c2723');
    c.fillStyle = land;
    c.fillRect(X0, H, W, Y1 - H);
    // the afterglow mirrored in the haze over the land on the left
    glow(c, A * 0.08, H + 0.01, 0.7, 0.05, '#e4a07a', 0.5);
  });
  // thin streaks of cloud lit from below by the set sun, drifting slowly back
  e.layer('streaks', { box: [X0, 0.22, X0 + W, H - 0.03], drift: [0.003, 0] }, c => {
    for (let i = 0; i < 14; i++) {
      const y = 0.25 + 0.2 * e.rnd();
      const s = 0.06 + 0.12 * e.rnd();
      wrap(X0 + W * e.rnd(), x => {
        const warm = Math.max(0, 1 - Math.abs(x - A * 0.15) / A);
        glow(c, x, y, s * 2.4, 0.006 + 0.006 * e.rnd(), warm > 0.5 ? '#f0a888' : '#9a7fa8', 0.55 + 0.3 * warm);
      });
    }
  });
  // the steppe's patches and dry riverbeds, two bands at two speeds: the far one slow by the horizon, the near quicker
  const ground = (name, y0, y1, speed, n, scale, river) =>
    e.layer(name, { box: [X0, y0, X0 + W, y1], drift: [speed, 0] }, c => {
      for (let i = 0; i < n; i++) {
        const u = e.rnd();
        const y = y0 + (y1 - y0) * u;
        const s = scale * (0.3 + u);
        const tone = e.rnd();
        wrap(X0 + W * e.rnd(), x => glow(c, x, y, s * 3, s * 0.35, tone > 0.5 ? '#6e5d4a' : '#3d3830', 0.35));
      }
      // a dry riverbed winding along the far band, pale, catching the sky: thin, flattened by the distance
      if (river) {
        c.strokeStyle = 'rgba(190,160,165,0.22)';
        c.lineWidth = 0.0018;
        c.lineCap = 'round';
        for (const d of [0, W]) {
          c.beginPath();
          for (let k = 0; k <= 90; k++) {
            const t = k / 90;
            const x = X0 + W * t - d;
            const y = y0 + (y1 - y0) * (0.55 + 0.25 * Math.sin(t * Math.PI * 14 + 1.3) * Math.sin(t * Math.PI * 4) + 0.15 * Math.sin(t * Math.PI * 2));
            if (k) c.lineTo(x, y);
            else c.moveTo(x, y);
          }
          c.stroke();
        }
      }
    });
  ground('far_steppe', H + 0.004, H + 0.08, 0.002, 90, 0.012, true);
  ground('near_steppe', H + 0.08, Y1, 0.012, 70, 0.05, false);
  // the lights below: a little town far ahead on the horizon, and one lone house nearer, its window just lit — on the
  // far band, drifting with it
  e.layer('town', { blend: 'add', box: [X0, H, X0 + W, H + 0.03], drift: [0.002, 0] }, c => {
    for (let i = 0; i < 16; i++) glow(c, A * 0.2 + 0.05 * (e.rnd() - 0.5), H + 0.008 + 0.004 * e.rnd(), 0.0025, 0.0015, '#ffd28a', 0.9);
    glow(c, A * 0.2, H + 0.01, 0.04, 0.006, '#d89060', 0.4);
  });
  // the lone house below the plane, under the wheel, coming slowly back past the tail
  e.layer('house', { blend: 'add', box: [X0, 0.85, X0 + W, 0.95], drift: [0.006, 0] }, c => {
    glow(c, A * 0.7, 0.9, 0.004, 0.003, '#ffdca0', 1);
    glow(c, A * 0.7, 0.9, 0.02, 0.008, '#e8a060', 0.45);
  });
  // far behind, low on the right — the south — silent lightning in a bank of cloud on the horizon
  e.layer('flash', { blend: 'add', box: [A * 0.7, H - 0.08, A + 0.3, H + 0.02] }, c => {
    glow(c, A * 0.98, H - 0.012, 0.16, 0.035, '#c9b8e0', 0.5);
    glow(c, A * 0.98, H - 0.015, 0.05, 0.018, '#f0e6ff', 0.4);
  });
}
