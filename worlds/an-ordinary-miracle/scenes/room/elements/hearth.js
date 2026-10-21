// The hearth's front: a big whitewashed clay stove in the left back corner (1.7 m wide, 1.6 m tall), its arched
// mouth open on the fire (cut through: the firebox stands behind it), a darker plinth, a band of painted blue flowers
// and red berries under its top, the iron door of the oven leaning by the mouth, a poker and a broom against its
// right edge. (The chimney stack above it is `stack`, set back half a metre: the pots stand on the top before it.)
const L = e.lib, W = 0.85, H = 1.6;
const white = (x, y, w, h, seed) => {
  g.fillStyle = '#ece3d0';
  g.fillRect(x, y, w, h);
  L.dabs(g, seed, x, y, w, h, ['#f6efe0', '#d8ccb6', '#e4d9c4'], Math.round(w * h * 60), 0.08, 0.6, 0.6);
};
// the body, its top corners rounded
g.save();
g.beginPath();
g.moveTo(-W, 0);
g.lineTo(-W, -H + 0.12);
g.quadraticCurveTo(-W, -H, -W + 0.12, -H);
g.lineTo(W - 0.12, -H);
g.quadraticCurveTo(W, -H, W, -H + 0.12);
g.lineTo(W, 0);
g.closePath();
g.clip();
white(-W, -H, 2 * W, H, 101);
g.restore();
// the plinth
g.fillStyle = '#b9ad98';
g.fillRect(-W, -0.16, 2 * W, 0.16);
L.dabs(g, 102, -W, -0.16, 2 * W, 0.16, ['#a39782', '#cfc3ad'], 30, 0.04, 0.6, 0.6);
// the painted band: blue flowers, green leaves, red berries
const band = (x0, x1, y) => {
  g.fillStyle = '#d9cfb9';
  g.fillRect(x0, y - 0.09, x1 - x0, 0.18);
  for (let x = x0 + 0.1, i = 0; x < x1 - 0.05; x += 0.2, i++) {
    g.strokeStyle = '#5f7f4a';
    g.lineWidth = 0.014;
    g.beginPath();
    g.moveTo(x - 0.1, y + 0.03);
    g.quadraticCurveTo(x - 0.05, y - 0.05, x, y + 0.01);
    g.stroke();
    g.fillStyle = '#3f62a8';
    for (let p = 0; p < 5; p++) {
      const a = (p / 5) * Math.PI * 2;
      g.beginPath();
      g.arc(x + Math.cos(a) * 0.025, y + Math.sin(a) * 0.025, 0.02, 0, Math.PI * 2);
      g.fill();
    }
    g.fillStyle = '#e9c24e';
    g.beginPath();
    g.arc(x, y, 0.014, 0, Math.PI * 2);
    g.fill();
    g.fillStyle = '#b5342e';
    g.beginPath();
    g.arc(x + 0.1, y + 0.04, 0.016, 0, Math.PI * 2);
    g.arc(x + 0.12, y + 0.015, 0.014, 0, Math.PI * 2);
    g.fill();
  }
};
band(-W + 0.06, W - 0.06, -H + 0.2);
// the mouth: an arch cut through; a sooty rim round it
const MX = 0.42, MB = -0.42, MT = -1.02;
const arch = new Path2D();
arch.moveTo(-MX, MB);
arch.lineTo(-MX, MT + MX * 0.6);
arch.quadraticCurveTo(-MX, MT, 0, MT);
arch.quadraticCurveTo(MX, MT, MX, MT + MX * 0.6);
arch.lineTo(MX, MB);
arch.closePath();
g.save();
g.translate(0, -0.05);
g.scale(1.12, 1.08);
g.fillStyle = 'rgba(70, 52, 40, 0.55)';
g.fill(arch);
g.restore();
g.fillStyle = '#cfc4ae';
g.fillRect(-MX - 0.08, MB, 2 * MX + 0.16, 0.06);
g.globalCompositeOperation = 'destination-out';
g.fill(arch);
g.globalCompositeOperation = 'source-over';
e.at(0, MB, 'mouth');
// the oven's iron door leaning against the stove left of the mouth
g.fillStyle = '#3b3632';
g.beginPath();
g.moveTo(-0.78, -0.17);
g.lineTo(-0.74, -0.78);
g.quadraticCurveTo(-0.62, -0.92, -0.5, -0.78);
g.lineTo(-0.48, -0.17);
g.closePath();
g.fill();
g.fillStyle = '#6b625a';
g.fillRect(-0.66, -0.55, 0.08, 0.035);
// the poker and the broom against its right edge
g.strokeStyle = '#2e2a28';
g.lineWidth = 0.025;
g.beginPath();
g.moveTo(0.62, -0.02);
g.lineTo(0.72, -1.15);
g.stroke();
g.strokeStyle = '#8a6a44';
g.lineWidth = 0.03;
g.beginPath();
g.moveTo(0.8, -0.3);
g.lineTo(0.76, -1.3);
g.stroke();
g.fillStyle = '#c7a868';
g.beginPath();
g.moveTo(0.73, -0.36);
g.lineTo(0.88, -0.36);
g.lineTo(0.94, 0);
g.lineTo(0.66, 0);
g.closePath();
g.fill();
g.strokeStyle = '#a5874e';
g.lineWidth = 0.008;
for (let i = 0; i < 8; i++) {
  g.beginPath();
  g.moveTo(0.75 + i * 0.016, -0.35);
  g.lineTo(0.68 + i * 0.034, 0);
  g.stroke();
}
