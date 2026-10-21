// The porch's steps going down to the right from the landing (its edge at x −0.3, 0.85 m up) to the yard, seen from
// their near side: the stringer's board in two steps, each tread's nosing lighter with trodden snow on it, the snow
// heaped at their foot. The treads' tops are the plane `treads`.
// (x −0.3…0.45 m: across −0.2…0.55; its foot at 0)
const L = e.lib;
const C = L.C;
const RISE = 0.85 / 3;
const RUN = 0.22;
const X0 = -0.3;
// the stringer: a zigzag profile, two treads and the ground
g.fillStyle = "#7c6d5b";
g.beginPath();
g.moveTo(X0, 0);
for (let i = 1; i <= 2; i++) {
  g.lineTo(X0 + RUN * (i - 1), -0.85 + RISE * i);
  g.lineTo(X0 + RUN * i, -0.85 + RISE * i);
}
g.lineTo(X0 + RUN * 2, 0);
g.closePath();
g.fill();
g.strokeStyle = "#5f5141";
g.lineWidth = 0.02;
g.beginPath();
g.moveTo(X0 + 0.02, -0.05);
g.lineTo(X0 + RUN * 2 - 0.02, -0.05);
g.stroke();
// (each tread's nosing, lighter, with trodden snow on it)
for (let i = 1; i <= 2; i++) {
  const x0 = X0 + RUN * (i - 1);
  const y = -0.85 + RISE * i;
  g.fillStyle = C.woodLight;
  g.fillRect(x0, y, RUN + 0.02, 0.05);
  L.snowCap(g, x0 + 0.03, x0 + RUN * 0.6, y, 0.03, 41 + i);
}
// the snow heaped against the foot of the steps
g.fillStyle = C.snowShade;
g.beginPath();
g.ellipse(0.28, 0.05, 0.2, 0.16, 0, Math.PI, 0);
g.fill();
g.fillStyle = C.snow;
g.beginPath();
g.ellipse(0.26, 0.05, 0.18, 0.13, 0, Math.PI, 0);
g.fill();
