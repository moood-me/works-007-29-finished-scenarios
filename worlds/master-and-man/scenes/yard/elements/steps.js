// The porch's steps, going down to the right from the landing to the yard, seen from their side: the stringer's
// board, three treads with snow trodden on them, the snow banked at their foot.
// (x −0.55…0.6 m: the landing's edge at x −0.5, the yard at x 0.5; its foot at 0)
const L = e.lib;
const C = L.C;
const RISE = 0.85 / 3;
const RUN = 0.33;
// the treads and the stringer under them: a zigzag profile
g.fillStyle = "#7c6d5b";
g.beginPath();
g.moveTo(-0.5, 0);
g.lineTo(-0.5, -0.85);
for (let i = 0; i < 3; i++) {
  g.lineTo(-0.5 + RUN * (i + 1), -0.85 + RISE * i);
  g.lineTo(-0.5 + RUN * (i + 1), -0.85 + RISE * (i + 1));
}
g.closePath();
g.fill();
// (each tread's nosing, lighter, with trodden snow on it)
for (let i = 0; i < 3; i++) {
  const x0 = -0.5 + RUN * i;
  const y = -0.85 + RISE * i;
  g.fillStyle = C.woodLight;
  g.fillRect(x0, y, RUN + 0.03, 0.05);
  L.snowCap(g, x0 + 0.04, x0 + RUN * 0.55, y, 0.035, 41 + i);
}
// the snow heaped against the foot of the steps
g.fillStyle = C.snow;
g.beginPath();
g.ellipse(0.45, 0.02, 0.22, 0.14, 0, Math.PI, 0);
g.fill();
