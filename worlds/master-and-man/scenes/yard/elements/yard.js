// The snow on the ground, seen from above: the yard (the near 15 m: y 85…100) and the fields beyond the fence to the
// horizon. In the yard: the sleigh's two runner tracks curving in from the gate to where it stands behind Mukhorty,
// the grooves its runners have sunk, the horse's hoofprints between the tracks, the trodden grey at the steps' foot,
// where Nikita stands and under the horse, paths of footprints, hay dropped by the horse's head; everywhere else the
// soft blue ridges the wind lays in snow. Beyond the gate the road, trodden pale, going off to the right.
// (x −150…150 m across, y −100…100: y 100 the viewer's feet, y = 100 − distance)
const C = e.lib.C;
const D = d => 100 - d;

g.fillStyle = C.snow;
g.fillRect(-150, -100, 300, 200);

// the wind's ridges: long soft blue strokes lying across, finer near
g.lineCap = "round";
for (let i = 0; i < 260; i++) {
  const near = i < 140;
  const y = near ? D(2 + e.rnd() * 14) : -100 + e.rnd() * 186;
  const x = -150 + e.rnd() * 300;
  const len = near ? 0.6 + e.rnd() * 2.2 : 4 + e.rnd() * 14;
  g.strokeStyle = e.rnd() < 0.5 ? "rgba(196,208,224,0.55)" : "rgba(214,223,236,0.6)";
  g.lineWidth = near ? 0.04 + e.rnd() * 0.05 : 0.3 + e.rnd() * 0.5;
  g.beginPath();
  g.moveTo(x, y);
  g.quadraticCurveTo(x + len * 0.5, y - len * 0.06, x + len, y + len * 0.02);
  g.stroke();
}

// the road beyond the gate: out across the fields and away to the right
g.strokeStyle = "rgba(200,208,218,0.9)";
g.lineWidth = 3;
g.beginPath();
g.moveTo(10.7, D(15));
g.quadraticCurveTo(14, D(40), 40, D(120));
g.quadraticCurveTo(60, D(170), 90, D(200));
g.stroke();

// where things stand (metres: across, distance): the horse's anchor and its axis — his head toward the eye at the
// left, his body away to the right —, the side toward the eye; the sleigh along it behind him
const HA = [2.73, 5.3];
const U = [0.819, 0.574];
const NEAR = [0.574, -0.819];
const along = (k, side) => [HA[0] + U[0] * k + NEAR[0] * side, HA[1] + U[1] * k + NEAR[1] * side];

// the trodden yard: grey-blue at the steps' foot, where Nikita stands, under the horse's hooves
g.fillStyle = "rgba(196,206,222,0.85)";
for (const [x, d, rx, ry, a] of [[0.35, 3.95, 0.7, 0.5, 0], [1.15, 4.85, 0.8, 0.45, 0.3], [2.25, 4.95, 0.6, 0.35, 0.6], [3.25, 5.65, 0.6, 0.35, 0.6], [0.8, 4.4, 0.9, 0.35, 0.5]]) {
  g.beginPath();
  g.ellipse(x, D(d), rx, ry, a, 0, Math.PI * 2);
  g.fill();
}
// (footprints: from the steps to Nikita, and from the steps toward the eye — the near yard trodden too)
g.fillStyle = "rgba(160,176,200,0.85)";
const prints = (x0, d0, x1, d1, n) => {
  for (let i = 0; i < n; i++) {
    const u = i / (n - 1);
    const x = x0 + (x1 - x0) * u;
    const d = d0 + (d1 - d0) * u;
    const side = i % 2 ? 0.1 : -0.1;
    const a = Math.atan2(-(d1 - d0), x1 - x0);
    g.beginPath();
    g.ellipse(x - Math.sin(a) * side, D(d) + Math.cos(a) * side, 0.13, 0.055, a, 0, Math.PI * 2);
    g.fill();
  }
};
prints(0.45, 3.85, 1.1, 4.75, 6);
prints(0.5, 3.7, 1.4, 2.1, 9);
prints(1.3, 4.7, 2.6, 3.3, 8);

// the runner tracks: from the gate, round, to the sleigh's back (its runners 0.3 m each side of the horse's line)
g.strokeStyle = "rgba(150,166,192,0.9)";
g.lineWidth = 0.07;
for (const side of [-0.3, 0.3]) {
  const [bx, bd] = along(4.3, side);
  g.beginPath();
  g.moveTo(bx, D(bd));
  g.bezierCurveTo(bx + U[0] * 3, D(bd + U[1] * 3), 10.4 + side, D(11), 10.7 + side, D(15));
  g.stroke();
}
// (the grooves the runners sank, darker, under the sleigh: from its curl to its back)
g.strokeStyle = "rgba(128,146,176,0.9)";
g.lineWidth = 0.1;
for (const side of [-0.3, 0.3]) {
  const [ax, ad] = along(1.95, side);
  const [bx, bd] = along(4.35, side);
  g.beginPath();
  g.moveTo(ax, D(ad));
  g.lineTo(bx, D(bd));
  g.stroke();
}
// (the hoofprints between the tracks, from the gate up to where the horse stands)
g.fillStyle = "rgba(150,166,192,0.8)";
for (let i = 0; i < 26; i++) {
  const u = i / 25;
  const [hx, hd] = along(-0.6 + u * 7, i % 2 ? 0.12 : -0.12);
  const x = u < 0.7 ? hx : hx + (10.7 - hx) * ((u - 0.7) / 0.3) ** 1.5;
  const d = u < 0.7 ? hd : hd + (15 - hd) * ((u - 0.7) / 0.3) ** 1.5;
  g.beginPath();
  g.ellipse(x, D(d), 0.08, 0.07, 0, 0, Math.PI * 2);
  g.fill();
}

// hay dropped by the horse's head: thin pale yellow-grey straws
g.strokeStyle = "rgba(186,168,120,0.9)";
g.lineWidth = 0.012;
for (let i = 0; i < 90; i++) {
  const x = 1.2 + e.rnd() * 1.0;
  const d = 4.2 + e.rnd() * 0.6;
  const a = e.rnd() * Math.PI;
  g.beginPath();
  g.moveTo(x, D(d));
  g.lineTo(x + Math.cos(a) * 0.12, D(d) + Math.sin(a) * 0.12);
  g.stroke();
}
// (blue hollows the wind has scooped in the near snow, and its sharp crests)
for (const [x, d, rx, ry] of [[-0.6, 2.4, 1.6, 0.35], [2.4, 2.6, 1.2, 0.3], [-1.8, 3.0, 0.9, 0.25]]) {
  g.fillStyle = "rgba(186,200,222,0.6)";
  g.beginPath();
  g.ellipse(x, D(d), rx, ry, 0.08, 0, Math.PI * 2);
  g.fill();
  g.strokeStyle = "rgba(250,252,255,0.9)";
  g.lineWidth = 0.03;
  g.beginPath();
  g.ellipse(x, D(d) - ry * 0.2, rx * 0.95, ry * 0.8, 0.08, Math.PI * 1.1, Math.PI * 1.9);
  g.stroke();
}
