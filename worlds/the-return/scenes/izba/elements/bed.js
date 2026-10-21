// The bed behind the curtain (its foot-end toward the eye, 5.5 m ahead): an iron bedstead painted dark with two
// knobs, a patchwork quilt over it, a white pillow with a lace edge at the head — seen where the curtain is drawn aside.
const L = e.lib;
g.fillStyle = "#3f4447";
g.fillRect(-0.68, -0.95, 0.04, 0.95);
g.fillRect(0.64, -0.95, 0.04, 0.95);
g.fillRect(-0.68, -0.9, 1.36, 0.03);
g.fillRect(-0.68, -0.6, 1.36, 0.025);
for (let x = -0.55; x < 0.6; x += 0.14) g.fillRect(x, -0.88, 0.015, 0.28);
g.fillStyle = "#b7a36a";
g.beginPath();
g.arc(-0.66, -0.97, 0.03, 0, Math.PI * 2);
g.arc(0.66, -0.97, 0.03, 0, Math.PI * 2);
g.fill();
// the pillow at the head, beyond the quilt
g.fillStyle = "#f0ebe0";
g.beginPath();
g.ellipse(0.3, -0.72, 0.26, 0.12, 0, 0, Math.PI * 2);
g.fill();
// the quilt: patches of faded cloth over the bed, hanging down its side
const PATCH = ["#b56a52", "#7f8e9e", "#c9b07a", "#8e9a72", "#a8838a", "#d4c2a0"];
for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 3; j++) {
    g.fillStyle = PATCH[Math.floor(L.rnd(i * 3 + j, 9) * PATCH.length) % PATCH.length];
    g.fillRect(-0.62 + i * 0.21, -0.6 + j * 0.16, 0.21, 0.16);
  }
}
L.paper(g, -0.7, -1.0, 1.4, 1.0, 1.1);
