// Querig, the old she-dragon, lying on the floor of the pit, seen side-on, her head to the left resting on the ground:
// thin, her ribs showing under faded grey-green scales, a ragged wing folded along her back, her tail laid out to the
// right. Layers: `body` (breathes — animate), `head`, `eye` (the old amber eye) and `lid` over it (opened by the
// state's `querig_eye` — animate). Points: `nostrils` (where her breath comes out — the particles `breath`), `eye`,
// `head` (and her unnamed point, for the camera)
const K = 1.2; // she is drawn in metres at 1/K of her size, and scaled up by K
const BODY = '#93a08e', SHADE = '#7b8578', BELLY = '#c2bfa6', RIB = 'rgba(96,104,92,0.75)', PLATE = '#667064';
const WING = '#6c675f', BONE = '#5a5650', HORN = '#d6cdb6', CLAW = '#cfc5ae';
// her back, from the shoulder to the tail's tip (a smooth line through these)
const BACK = [[-1.6, -2.25], [-1.0, -2.42], [-0.2, -2.48], [0.6, -2.44], [1.4, -2.27], [2.1, -1.96], [2.7, -1.46], [3.2, -1.04], [3.9, -0.78], [4.5, -0.44], [5.0, -0.14]];
const through = (g, pts) => {
  g.lineTo(pts[0][0], pts[0][1]);
  for (let i = 1; i < pts.length - 1; i++) g.quadraticCurveTo(pts[i][0], pts[i][1], (pts[i][0] + pts[i + 1][0]) / 2, (pts[i][1] + pts[i + 1][1]) / 2);
  g.lineTo(pts[pts.length - 1][0], pts[pts.length - 1][1]);
};
const at = (t) => {
  const k = Math.min(BACK.length - 1.001, t * (BACK.length - 1)), i = Math.floor(k), u = k - i;
  return [BACK[i][0] + (BACK[i + 1][0] - BACK[i][0]) * u, BACK[i][1] + (BACK[i + 1][1] - BACK[i][1]) * u];
};
e.layer('body', { pivot: [0, 0] }, g => {
  g.scale(K, K);
  const r = e.lib.rnd(61);
  // the far legs, a shade darker, behind the body
  g.fillStyle = SHADE;
  g.beginPath();
  g.ellipse(-1.1, -0.35, 0.35, 0.35, 0, 0, Math.PI * 2);
  g.ellipse(1.4, -0.3, 0.4, 0.3, 0, 0, Math.PI * 2);
  g.fill();
  // the neck: from the shoulders down to the head lying on the ground
  g.fillStyle = BODY;
  g.beginPath();
  g.moveTo(-1.5, -2.2);
  g.bezierCurveTo(-2.7, -2.3, -3.4, -1.15, -4.1, -0.92);
  g.lineTo(-4.1, -0.08);
  g.bezierCurveTo(-3.4, -0.08, -2.8, -0.35, -2.3, -0.9);
  g.closePath();
  g.fill();
  g.fillStyle = BELLY;
  g.beginPath();
  g.moveTo(-4.1, -0.08);
  g.bezierCurveTo(-3.4, -0.08, -2.8, -0.35, -2.3, -0.9);
  g.lineTo(-2.4, -0.55);
  g.bezierCurveTo(-2.9, -0.3, -3.4, -0.3, -4.1, -0.3);
  g.closePath();
  g.fill();
  // body and tail
  g.save();
  g.beginPath();
  g.moveTo(-2.4, 0);
  g.lineTo(4.3, 0);
  g.lineTo(5.05, -0.1);
  g.lineTo(5.0, -0.14);
  through(g, [...BACK].reverse());
  g.bezierCurveTo(-2.5, -1.95, -2.8, -0.9, -2.4, 0);
  g.closePath();
  g.fillStyle = BODY;
  g.fill();
  g.clip();
  // the belly, pale, and the ribs showing on the flank
  g.fillStyle = BELLY;
  g.fillRect(-3, -0.42, 9, 0.5);
  g.strokeStyle = RIB;
  g.lineWidth = 0.07;
  for (let i = 0; i < 8; i++) {
    const x = -1.3 + i * 0.42;
    g.beginPath();
    g.moveTo(x, -2.1);
    g.quadraticCurveTo(x + 0.3, -1.2, x - 0.05, -0.45);
    g.stroke();
  }
  // scales: faint darker flecks
  g.fillStyle = 'rgba(110,118,106,0.5)';
  for (let i = 0; i < 70; i++) {
    const x = -2.2 + r() * 6.6, y = -0.5 - r() * 1.8;
    g.beginPath();
    g.ellipse(x, y, 0.07, 0.04, 0, 0, Math.PI * 2);
    g.fill();
  }
  g.restore();
  // the plates along her spine and down the neck, worn and dull
  g.fillStyle = PLATE;
  for (let i = 0; i < 26; i++) {
    const t = i / 25, [x, y] = at(t), s = 0.2 * (1 - 0.75 * t);
    g.beginPath();
    g.moveTo(x - s * 0.6, y + 0.03);
    g.lineTo(x + s * 0.15, y - s);
    g.lineTo(x + s * 0.6, y + 0.03);
    g.closePath();
    g.fill();
  }
  for (let i = 0; i < 7; i++) {
    const t = i / 7, x = -1.7 - t * 2.2, y = -2.22 + t * 1.25 + Math.sin(t * Math.PI) * 0.05, s = 0.16 - t * 0.08;
    g.beginPath();
    g.moveTo(x - s * 0.6, y + 0.03);
    g.lineTo(x - s * 0.1, y - s);
    g.lineTo(x + s * 0.6, y + 0.03);
    g.closePath();
    g.fill();
  }
  // the folded wing along her back: a long ragged membrane from the shoulder to past the haunch, its bones
  const wrist = [0.2, -3.0];
  g.fillStyle = WING;
  g.beginPath();
  g.moveTo(-1.1, -2.3);
  g.lineTo(wrist[0], wrist[1]);
  g.quadraticCurveTo(1.6, -2.7, 2.9, -1.55);
  const edge = [[2.6, -1.35], [2.3, -1.52], [2.0, -1.3], [1.6, -1.48], [1.2, -1.22], [0.8, -1.42], [0.35, -1.18], [-0.1, -1.4], [-0.5, -1.25], [-0.9, -1.75]];
  for (const [x, y] of edge) g.lineTo(x, y);
  g.closePath();
  g.fill();
  g.strokeStyle = BONE;
  g.lineWidth = 0.08;
  g.beginPath();
  g.moveTo(-1.1, -2.3);
  g.lineTo(wrist[0], wrist[1]);
  g.quadraticCurveTo(1.6, -2.7, 2.9, -1.55);
  for (const [x, y] of [[2.0, -1.3], [1.2, -1.22], [0.35, -1.18]]) {
    g.moveTo(wrist[0], wrist[1]);
    g.quadraticCurveTo((wrist[0] + x) / 2 + 0.2, (wrist[1] + y) / 2, x, y);
  }
  g.stroke();
  g.fillStyle = HORN;
  g.beginPath();
  g.moveTo(wrist[0] - 0.08, wrist[1] + 0.05);
  g.lineTo(wrist[0] - 0.02, wrist[1] - 0.22);
  g.lineTo(wrist[0] + 0.1, wrist[1] + 0.04);
  g.closePath();
  g.fill();
  // the near haunch and hind foot, the near foreleg folded under the chest; claws pale
  g.fillStyle = SHADE;
  g.beginPath();
  g.ellipse(2.1, -0.85, 0.85, 0.8, -0.3, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = BODY;
  g.beginPath();
  g.moveTo(2.5, -0.55);
  g.quadraticCurveTo(2.8, -0.1, 2.4, 0);
  g.lineTo(1.5, 0);
  g.quadraticCurveTo(1.7, -0.25, 1.9, -0.4);
  g.closePath();
  g.fill();
  g.beginPath();
  g.moveTo(-1.2, -1.5);
  g.quadraticCurveTo(-1.5, -0.6, -1.7, -0.12);
  g.lineTo(-2.55, -0.02);
  g.lineTo(-2.5, 0.02);
  g.lineTo(-1.35, 0.02);
  g.quadraticCurveTo(-1.0, -0.6, -0.75, -1.4);
  g.closePath();
  g.fill();
  g.fillStyle = CLAW;
  for (const [x, y, dir] of [[1.5, 0, -1], [1.62, 0, -1], [1.74, 0, -1], [-2.5, 0, -1], [-2.36, 0, -1], [-2.22, 0, -1]]) {
    g.beginPath();
    g.moveTo(x, y);
    g.lineTo(x + dir * 0.16, y - 0.02);
    g.lineTo(x, y - 0.07);
    g.closePath();
    g.fill();
  }
});
e.layer('head', {}, g => {
  g.scale(K, K);
  // the head lying on the ground, long-snouted: brow, horns swept back, the jaw's line, the nostril
  g.fillStyle = HORN;
  for (const [x, y, len, up] of [[-4.15, -0.9, 1.05, 0.5], [-4.3, -0.82, 0.8, 0.32]]) {
    g.beginPath();
    g.moveTo(x - 0.1, y + 0.05);
    g.quadraticCurveTo(x + len * 0.45, y - up * 0.9, x + len, y - up);
    g.quadraticCurveTo(x + len * 0.4, y - up * 0.45, x + 0.15, y + 0.08);
    g.closePath();
    g.fill();
  }
  g.fillStyle = BODY;
  g.beginPath();
  g.moveTo(-3.95, -0.95);
  g.quadraticCurveTo(-4.4, -1.08, -4.75, -0.92);
  g.quadraticCurveTo(-5.2, -0.78, -5.6, -0.6);
  g.quadraticCurveTo(-5.85, -0.5, -5.8, -0.3);
  g.quadraticCurveTo(-5.75, -0.06, -5.45, -0.02);
  g.lineTo(-4.0, 0);
  g.closePath();
  g.fill();
  g.fillStyle = BELLY;
  g.beginPath();
  g.moveTo(-5.55, -0.24);
  g.quadraticCurveTo(-5.0, -0.2, -4.2, -0.26);
  g.lineTo(-4.0, 0);
  g.lineTo(-5.45, -0.02);
  g.quadraticCurveTo(-5.62, -0.1, -5.55, -0.24);
  g.closePath();
  g.fill();
  g.strokeStyle = '#4e524b';
  g.lineWidth = 0.035;
  g.beginPath();
  g.moveTo(-5.68, -0.28);
  g.quadraticCurveTo(-5.0, -0.32, -4.35, -0.38);
  g.stroke();
  // the brow ridge over the eye, a row of small spikes behind the jaw
  g.fillStyle = SHADE;
  g.beginPath();
  g.moveTo(-5.0, -0.86);
  g.quadraticCurveTo(-4.7, -0.98, -4.35, -0.88);
  g.lineTo(-4.42, -0.8);
  g.quadraticCurveTo(-4.7, -0.86, -5.0, -0.8);
  g.closePath();
  g.fill();
  g.fillStyle = PLATE;
  for (let i = 0; i < 4; i++) {
    const x = -4.2 + i * 0.1, y = -0.5 + i * 0.1;
    g.beginPath();
    g.moveTo(x, y);
    g.lineTo(x + 0.22, y - 0.05);
    g.lineTo(x + 0.02, y + 0.08);
    g.closePath();
    g.fill();
  }
  g.fillStyle = '#3d3f3a';
  g.beginPath();
  g.ellipse(-5.6, -0.47, 0.07, 0.04, -0.3, 0, Math.PI * 2);
  g.fill();
  e.at(-5.66 * K, -0.46 * K, 'nostrils');
  e.at(-4.8 * K, -0.95 * K, 'head');
  e.at(-4.8 * K, -0.95 * K);
});
e.layer('eye', {}, g => {
  g.scale(K, K);
  // the old amber eye, a dark slit in it
  g.fillStyle = '#d6bf78';
  g.beginPath();
  g.ellipse(-4.68, -0.7, 0.16, 0.075, -0.1, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = '#2c2a24';
  g.beginPath();
  g.ellipse(-4.68, -0.7, 0.025, 0.065, 0, 0, Math.PI * 2);
  g.fill();
  e.at(-4.68 * K, -0.7 * K, 'eye');
});
e.layer('lid', { pivot: [-4.68 * K, -0.79 * K] }, g => {
  g.scale(K, K);
  // the heavy lid closed over it, its edge a dark line
  g.fillStyle = '#859083';
  g.beginPath();
  g.ellipse(-4.68, -0.7, 0.18, 0.09, -0.1, 0, Math.PI * 2);
  g.fill();
  g.strokeStyle = '#4e524b';
  g.lineWidth = 0.03;
  g.beginPath();
  g.moveTo(-4.85, -0.69);
  g.quadraticCurveTo(-4.68, -0.63, -4.51, -0.7);
  g.stroke();
});
