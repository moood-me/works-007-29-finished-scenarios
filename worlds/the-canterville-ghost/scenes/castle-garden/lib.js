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

return { railing, coach };
