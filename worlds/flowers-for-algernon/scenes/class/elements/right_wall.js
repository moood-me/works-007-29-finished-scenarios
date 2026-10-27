// The right wall (facing into the room; its x runs toward the viewer: x 0 at distance 3.85): the wainscot and the
// paint; nearest the viewer the door to the corridor — oak, its upper half frosted glass lit warm from the corridor
// (its glow `glass`); a row of hooks with the students' coats and a hat; a cork board with notices pinned to it.
e.lib.wallPaint(g, -2.85, 2.85);
// the door (x 1.4…2.35)
g.fillStyle = '#5e4029';
g.fillRect(1.32, -2.3, 1.11, 2.3);
g.fillStyle = '#80583a';
g.fillRect(1.4, -2.22, 0.95, 2.2);
g.fillStyle = '#6e4b31';
g.fillRect(1.48, -0.95, 0.79, 0.8);
g.fillStyle = '#efe0bc';
g.fillRect(1.5, -2.1, 0.75, 0.95);
g.fillStyle = 'rgba(255,248,226,0.6)';
g.fillRect(1.56, -2.04, 0.63, 0.83);
e.light(1.875, -1.62, 0.35, '#ffe2b0', 0.7, 'glass');
g.fillStyle = '#c9a457';
g.beginPath();
g.arc(1.5, -1.0, 0.03, 0, Math.PI * 2);
g.fill();
// the hooks and the coats (x −0.5…0.9)
g.fillStyle = '#5e4029';
g.fillRect(-0.55, -1.86, 1.5, 0.07);
const coats = [[-0.35, '#4f4a44', 1.0], [0.15, '#6b5444', 0.85], [0.65, '#3d4652', 0.95]];
for (const [x, col, len] of coats) {
  g.fillStyle = col;
  g.beginPath();
  g.moveTo(x - 0.08, -1.8);
  g.quadraticCurveTo(x - 0.2, -1.4, x - 0.19, -1.8 + len);
  g.lineTo(x + 0.19, -1.8 + len);
  g.quadraticCurveTo(x + 0.2, -1.4, x + 0.08, -1.8);
  g.closePath();
  g.fill();
  g.fillStyle = 'rgba(0,0,0,0.15)';
  g.fillRect(x - 0.01, -1.75, 0.02, len - 0.08);
}
g.fillStyle = '#2f2c28';
g.beginPath();
g.ellipse(0.4, -1.9, 0.14, 0.04, 0, 0, Math.PI * 2);
g.fill();
g.fillRect(0.31, -2.0, 0.18, 0.1);
// the cork board (x −2.2…−1.0) and its notices: papers, a card, a clipping, their print too small to read
g.fillStyle = '#6a4a30';
g.fillRect(-2.24, -2.24, 1.28, 0.84);
g.fillStyle = '#b48a5c';
g.fillRect(-2.2, -2.2, 1.2, 0.76);
const notes = [[-2.1, -2.12, 0.26, 0.34, '#f4efe2'], [-1.78, -2.08, 0.3, 0.22, '#e8e4d0'], [-1.42, -2.14, 0.32, 0.4, '#f1ead6'],
  [-1.76, -1.8, 0.22, 0.28, '#e6d8a8'], [-2.08, -1.72, 0.24, 0.22, '#f4efe2']];
for (const [x, y, w, h, col] of notes) {
  g.fillStyle = col;
  g.fillRect(x, y, w, h);
  g.fillStyle = 'rgba(70,60,50,0.35)';
  for (let ly = y + 0.05; ly < y + h - 0.03; ly += 0.03) g.fillRect(x + 0.03, ly, w - 0.06 - ((ly * 37) % 0.08), 0.006);
  g.fillStyle = '#b23a2e';
  g.beginPath();
  g.arc(x + w / 2, y + 0.02, 0.01, 0, Math.PI * 2);
  g.fill();
}
