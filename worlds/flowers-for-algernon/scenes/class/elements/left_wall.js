// The left wall (facing into the room; its x runs away from the viewer: x 0 at distance 3.85): the wainscot and the
// paint; the blackboard is its own element; nearest the viewer a bookcase of readers and a globe on it; past the
// blackboard a pencil sharpener screwed to the wainscot.
e.lib.wallPaint(g, -2.85, 2.85);
// the bookcase near the viewer (x −2.7…−1.9)
g.fillStyle = '#6b4a30';
g.fillRect(-2.7, -1.3, 0.8, 1.3);
g.fillStyle = '#3f2b1c';
g.fillRect(-2.66, -1.26, 0.72, 1.2);
g.fillStyle = '#6b4a30';
for (const y of [-0.88, -0.48]) g.fillRect(-2.7, y, 0.8, 0.04);
const spines = ['#7c3b33', '#2f4f6b', '#6b6a3a', '#8a6a3a', '#3a5a48', '#5a3a5a', '#9a8a6a'];
for (const [y0, h] of [[-1.24, 0.34], [-0.84, 0.34], [-0.44, 0.36]]) {
  let x = -2.64;
  let k = Math.floor(e.rnd() * 7);
  while (x < -2.0) {
    const w = 0.035 + e.rnd() * 0.03, hh = h * (0.75 + e.rnd() * 0.25);
    g.fillStyle = spines[k++ % 7];
    g.fillRect(x, y0 + h - hh, w, hh);
    x += w + 0.004;
  }
}
// the globe on the bookcase
g.fillStyle = '#4a3a2a';
g.fillRect(-2.34, -1.34, 0.08, 0.04);
g.fillRect(-2.31, -1.44, 0.02, 0.1);
g.fillStyle = '#9fb7b8';
g.beginPath();
g.arc(-2.3, -1.56, 0.13, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#c9b77e';
g.beginPath();
g.ellipse(-2.34, -1.6, 0.05, 0.07, 0.3, 0, Math.PI * 2);
g.ellipse(-2.24, -1.5, 0.04, 0.05, 0, 0, Math.PI * 2);
g.fill();
g.strokeStyle = '#7a6040';
g.lineWidth = 0.012;
g.beginPath();
g.arc(-2.3, -1.56, 0.15, -2.2, 1.0);
g.stroke();
// the pencil sharpener on the wainscot past the blackboard
g.fillStyle = '#9a9a94';
g.fillRect(2.3, -1.0, 0.08, 0.1);
g.fillStyle = '#6a6a64';
g.fillRect(2.38, -0.97, 0.06, 0.02);
