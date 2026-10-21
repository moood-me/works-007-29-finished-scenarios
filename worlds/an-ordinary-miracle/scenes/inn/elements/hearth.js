// The hearth: a big fireplace of rounded river stones on the left (2.2 m wide), its chimney breast going up to the
// ceiling; a wide arched mouth on a raised stone hearth (cut through: the fire stands behind it), a heavy oak mantel
// beam at 1.55 m with copper pans, a pewter jug and a horseshoe nailed above; a pair of tongs and a bellows by it.
const L = e.lib, W = 1.1, H = 4.5;
// the stones: a warm grey ground, then rounded stones in rows, mortar between
g.fillStyle = '#9a9086';
g.fillRect(-W, -H, 2 * W, H);
for (let row = 0, y = 0; y > -H; row++) {
  const h = 0.16 + 0.08 * L.rnd(row, 201);
  for (let x = -W - 0.2 * L.rnd(row, 202); x < W; ) {
    const w = 0.22 + 0.2 * L.rnd(row * 31 + Math.round(x * 10), 203);
    const c = ['#a59a8c', '#8e857a', '#b3a898', '#998f84', '#a8a092', '#867d74'][Math.floor(L.rnd(row * 17 + Math.round(x * 13), 204) * 6)];
    g.fillStyle = c;
    g.beginPath();
    g.ellipse(x + w / 2, y - h / 2, w / 2 - 0.012, h / 2 - 0.012, 0, 0, Math.PI * 2);
    g.fill();
    g.fillStyle = 'rgba(255, 248, 235, 0.18)';
    g.beginPath();
    g.ellipse(x + w / 2 - w * 0.08, y - h * 0.62, w * 0.3, h * 0.18, 0, 0, Math.PI * 2);
    g.fill();
    x += w;
  }
  y -= h;
}
// the soot above the mouth
const soot = g.createRadialGradient(0, -1.35, 0, 0, -1.35, 0.8);
soot.addColorStop(0, 'rgba(40, 30, 26, 0.75)');
soot.addColorStop(1, 'rgba(40, 30, 26, 0)');
g.fillStyle = soot;
g.fillRect(-0.9, -2.2, 1.8, 1.1);
// the raised hearth stone
g.fillStyle = '#7e766c';
g.fillRect(-W, -0.3, 2 * W, 0.3);
g.fillStyle = '#a49a8c';
g.fillRect(-W, -0.3, 2 * W, 0.05);
// the mouth: an arch cut through
const arch = new Path2D();
arch.moveTo(-0.62, -0.3);
arch.lineTo(-0.62, -0.95);
arch.quadraticCurveTo(-0.62, -1.3, 0, -1.3);
arch.quadraticCurveTo(0.62, -1.3, 0.62, -0.95);
arch.lineTo(0.62, -0.3);
arch.closePath();
g.save();
g.translate(0, -0.03);
g.scale(1.1, 1.05);
g.fillStyle = 'rgba(52, 40, 34, 0.7)';
g.fill(arch);
g.restore();
g.globalCompositeOperation = 'destination-out';
g.fill(arch);
g.globalCompositeOperation = 'source-over';
e.at(0, -0.3, 'mouth');
// the mantel beam
L.timber(g, 211, -W - 0.05, -1.58, W + 0.05, -1.58, 0.16);
// on it: a pewter jug, two copper pans hanging from it, a row of little clay pots
g.fillStyle = '#8c8f94';
g.beginPath();
g.moveTo(-0.85, -1.66);
g.lineTo(-0.82, -1.92);
g.quadraticCurveTo(-0.74, -1.98, -0.66, -1.92);
g.lineTo(-0.63, -1.66);
g.closePath();
g.fill();
for (const [x, c] of [[-0.35, '#a5532e'], [-0.18, '#c07a3e'], [0.0, '#8a4a2a']]) {
  g.fillStyle = c;
  g.beginPath();
  g.ellipse(x, -1.74, 0.07, 0.08, 0, 0, Math.PI * 2);
  g.fill();
  g.fillRect(x - 0.045, -1.84, 0.09, 0.03);
}
for (const [x, r] of [[0.45, 0.13], [0.8, 0.11]]) {
  g.strokeStyle = '#4a3a30';
  g.lineWidth = 0.012;
  g.beginPath();
  g.moveTo(x, -1.5);
  g.lineTo(x, -1.32 + r * 0.2);
  g.stroke();
  g.fillStyle = '#c0703c';
  g.beginPath();
  g.arc(x, -1.32 + r + 0.05, r, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = '#e09a5c';
  g.beginPath();
  g.arc(x - r * 0.3, -1.32 + r - 0.0, r * 0.35, 0, Math.PI * 2);
  g.fill();
}
// a horseshoe for luck above the mantel
g.strokeStyle = '#5a5552';
g.lineWidth = 0.035;
g.beginPath();
g.arc(0, -2.05, 0.11, 0.15 * Math.PI, 0.85 * Math.PI, true);
g.stroke();
// the bellows leaning at the left, tongs at the right
g.fillStyle = '#7a4a2a';
g.beginPath();
g.moveTo(-0.95, -0.3);
g.lineTo(-0.82, -0.75);
g.lineTo(-0.7, -0.3);
g.closePath();
g.fill();
g.strokeStyle = '#2e2a28';
g.lineWidth = 0.022;
g.beginPath();
g.moveTo(0.78, -0.3);
g.lineTo(0.86, -1.05);
g.moveTo(0.84, -0.3);
g.lineTo(0.88, -1.05);
g.stroke();
