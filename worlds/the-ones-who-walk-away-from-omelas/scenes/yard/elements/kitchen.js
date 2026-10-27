// The kitchen's far wall seen through the open door (x −1.6 … 1.6 about the door's middle): warm old plaster gone
// brown with smoke; the hearth on the right (x 0.25 … 1.05) under its hood, the morning's fire low in it — flames
// that tremble and waver (layer `flames`) and its glow (light "kitchen#fire") — the porridge pot hanging over it; on
// the left a shelf of bowls and a jug, a ladle and a bunch of herbs hung below it
const A = e.anim;
e.lib.plaster(g, [[-1.6, -2.7, 1.6, 0]], 31, '#cdb998');
g.fillStyle = 'rgba(70, 50, 35, 0.35)';
g.fillRect(-1.6, -2.7, 3.2, 0.5);
// the hearth: a stone surround, the sooty opening, the hood going up to the ceiling
g.fillStyle = '#b4a588';
g.fillRect(0.12, -1.25, 1.06, 1.25);
g.fillStyle = '#9d8e72';
g.beginPath();
g.moveTo(0.02, -1.25);
g.lineTo(1.28, -1.25);
g.lineTo(1.0, -2.7);
g.lineTo(0.3, -2.7);
g.closePath();
g.fill();
g.fillStyle = '#86775e';
g.fillRect(0.02, -1.33, 1.26, 0.1);
g.fillStyle = '#2c241e';
g.beginPath();
g.moveTo(0.25, 0);
g.lineTo(0.25, -0.85);
g.quadraticCurveTo(0.65, -1.1, 1.05, -0.85);
g.lineTo(1.05, 0);
g.closePath();
g.fill();
// logs and embers
g.fillStyle = '#4a3324';
g.fillRect(0.38, -0.12, 0.55, 0.07);
g.fillRect(0.45, -0.18, 0.4, 0.06);
g.fillStyle = '#c4572c';
for (let i = 0; i < 10; i++) {
  g.beginPath();
  g.arc(0.38 + 0.55 * A.hash(i, 1), -0.06 + 0.04 * A.hash(i, 2), 0.02 + 0.015 * A.hash(i, 3), 0, Math.PI * 2);
  g.fill();
}
// the pot on its chain
g.strokeStyle = '#2a2420';
g.lineWidth = 0.015;
g.beginPath();
g.moveTo(0.65, -0.95);
g.lineTo(0.65, -0.55);
g.stroke();
g.fillStyle = '#2f2a26';
g.beginPath();
g.ellipse(0.65, -0.42, 0.17, 0.13, 0, 0, Math.PI * 2);
g.fill();
g.fillRect(0.47, -0.55, 0.36, 0.05);
e.layer('flames', { blend: 'add', flicker: 0.5, shimmer: 0.35, box: [0.3, -0.6, 1.0, 0] }, g => {
  for (let i = 0; i < 7; i++) {
    const x = 0.42 + 0.46 * A.hash(i, 4), h = 0.16 + 0.22 * A.hash(i, 5), w = 0.05 + 0.04 * A.hash(i, 6);
    const f = g.createLinearGradient(0, -0.08, 0, -0.08 - h);
    f.addColorStop(0, 'rgba(255, 170, 70, 0.9)');
    f.addColorStop(0.6, 'rgba(255, 120, 40, 0.5)');
    f.addColorStop(1, 'rgba(255, 90, 30, 0)');
    g.fillStyle = f;
    g.beginPath();
    g.moveTo(x - w, -0.08);
    g.quadraticCurveTo(x - w * 0.6, -0.08 - h * 0.6, x, -0.08 - h);
    g.quadraticCurveTo(x + w * 0.6, -0.08 - h * 0.6, x + w, -0.08);
    g.closePath();
    g.fill();
  }
});
e.light(0.65, -0.2, 0.3, '#ff9a50', 1, 'fire');
// the shelf, its bowls and jug; the ladle and herbs below
g.fillStyle = '#6d5039';
g.fillRect(-1.5, -1.62, 1.4, 0.06);
for (const [x, w, h, c] of [[-1.38, 0.2, 0.1, '#b07a4c'], [-1.14, 0.2, 0.1, '#9e6c42'], [-0.88, 0.14, 0.3, '#c4a27a'], [-0.62, 0.22, 0.09, '#d8cdb8'], [-0.36, 0.18, 0.12, '#a87348']]) {
  g.fillStyle = c;
  g.beginPath();
  g.moveTo(x - w / 2, -1.62 - h);
  g.lineTo(x + w / 2, -1.62 - h);
  g.lineTo(x + w * 0.35, -1.62);
  g.lineTo(x - w * 0.35, -1.62);
  g.closePath();
  g.fill();
}
g.strokeStyle = '#5a4230';
g.lineWidth = 0.02;
g.beginPath();
g.moveTo(-1.0, -1.56);
g.lineTo(-1.0, -1.2);
g.stroke();
g.fillStyle = '#5a4230';
g.beginPath();
g.ellipse(-1.0, -1.16, 0.05, 0.04, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#7d8a5a';
for (let k = 0; k < 7; k++) {
  g.beginPath();
  g.ellipse(-0.55 + 0.03 * (k - 3), -1.38 + 0.02 * Math.abs(k - 3), 0.025, 0.12, 0.15 * (k - 3), 0, Math.PI * 2);
  g.fill();
}
// the end of the table, a cloth over it
g.fillStyle = '#8a6a4c';
g.fillRect(-1.6, -0.78, 0.9, 0.06);
g.fillRect(-0.8, -0.72, 0.06, 0.72);
g.fillStyle = '#e8e0cc';
g.fillRect(-1.6, -0.8, 0.84, 0.18);
e.at(0.65, -0.3, 'hearth');
