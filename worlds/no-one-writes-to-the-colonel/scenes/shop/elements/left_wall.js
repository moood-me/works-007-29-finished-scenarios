// The left wall, from its foot (facing the room: x runs away from the viewer, distance 1.3 at x −2.45, 6.2 at 2.45):
// the blue wash; shelves of cloth on the bolt — black, white drill, grey, fawn, one bolt of red — a long mirror for the
// fittings, its glass gone grey and spotted, a straw hat on a nail.
e.lib.wash(g, e, -2.45, 2.45, 3.3);
// the shelves: three planks on brackets
g.fillStyle = '#4e3c2c';
for (const y of [-1.25, -1.75, -2.25]) {
  g.fillRect(-0.2, y, 2.3, 0.04);
  for (const x of [-0.1, 1.95]) g.fillRect(x, y + 0.04, 0.03, 0.1);
}
// the bolts, end on: rolled cloth in close tones, a spot of red
const cloth = ['#2c2b30', '#e4e0d4', '#7a776e', '#c4b08a', '#3e4452', '#d6d0c0', '#8e3a30', '#2c2b30', '#a69878', '#e4e0d4'];
for (const [row, y] of [[0, -1.25], [1, -1.75], [2, -2.25]]) {
  let x = -0.12;
  let i = row * 3;
  while (x < 2.0) {
    const w = 0.16 + e.rnd() * 0.1;
    const hgt = 0.3 + e.rnd() * 0.12;
    g.fillStyle = cloth[i % cloth.length];
    g.fillRect(x, y - hgt, w, hgt);
    g.fillStyle = 'rgba(0,0,0,0.14)';
    g.fillRect(x + w - 0.03, y - hgt, 0.03, hgt);
    g.fillStyle = 'rgba(255,255,255,0.12)';
    g.fillRect(x + 0.02, y - hgt, 0.02, hgt);
    // the folds of the cloth wound on the board, seen at its edge
    g.fillStyle = 'rgba(0,0,0,0.16)';
    for (let f = y - hgt + 0.025; f < y - 0.01; f += 0.025) g.fillRect(x, f, w, 0.005);
    x += w + 0.02;
    i++;
  }
}
// the long mirror for the fittings in its black frame
g.fillStyle = '#2a2420';
g.fillRect(-1.75, -2.25, 0.62, 1.95);
const glass = g.createLinearGradient(-1.7, -2.2, -1.17, -0.35);
glass.addColorStop(0, '#9aa6a8');
glass.addColorStop(0.5, '#bfc7c6');
glass.addColorStop(1, '#8a9496');
g.fillStyle = glass;
g.fillRect(-1.7, -2.2, 0.52, 1.85);
g.fillStyle = 'rgba(70,64,56,0.35)';
for (let i = 0; i < 20; i++) {
  g.beginPath();
  g.arc(-1.68 + e.rnd() * 0.48, -2.18 + e.rnd() * 1.8, 0.005 + e.rnd() * 0.02, 0, Math.PI * 2);
  g.fill();
}
g.fillStyle = 'rgba(255,255,255,0.18)';
g.beginPath();
g.moveTo(-1.6, -2.2);
g.lineTo(-1.45, -2.2);
g.lineTo(-1.7, -1.5);
g.lineTo(-1.7, -1.8);
g.closePath();
g.fill();
// a straw hat on a nail
g.fillStyle = '#c8b07a';
g.beginPath();
g.ellipse(-0.75, -1.72, 0.2, 0.05, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#b89c64';
g.beginPath();
g.ellipse(-0.75, -1.8, 0.1, 0.09, 0, Math.PI, 0);
g.fill();
g.fillStyle = '#3a2e26';
g.fillRect(-0.85, -1.79, 0.2, 0.025);
