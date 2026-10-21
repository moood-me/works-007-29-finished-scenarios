// The front of Brekhunov's house, toward the yard: a log house on a boarded base, its floor 0.85 m up (the porch's
// level), the door open onto the porch — the passage behind it warm with a lamp's light, a far doorway lit —, the
// shop's window to the right of it in a carved white frame (its lit panes are the element `window`), a second, unlit
// window far to the left with frost on its panes, the log ends of the corner at the right, the carved consoles that
// hold the porch's canopy, a carved board under the eaves. Painted solid to its edges.
// (x −4.95…4.95 m: across −9.05…0.85; the door x 1.8…2.7 (across −2.3…−1.4), the shop window x 3.48…4.72 (its
// panes x 3.72…4.48: across −0.38…0.38); its foot at 0)
const L = e.lib;
const C = L.C;
const rnd = () => e.rnd();
const X0 = -4.95;
const X1 = 4.95;
const FLOOR = 0.85;
const EAVES = 4.2;
const DOOR0 = 1.8;
const DOOR1 = 2.7;
const DOOR_TOP = 2.85;
const WIN = 4.1;
const WIN2 = 0.4;

// the base: upright boards, grey
g.fillStyle = "#857a6c";
g.fillRect(X0, -FLOOR, X1 - X0, FLOOR);
g.strokeStyle = "#6a6055";
g.lineWidth = 0.02;
for (let x = X0; x < X1; x += 0.22) {
  g.beginPath();
  g.moveTo(x, -FLOOR);
  g.lineTo(x, 0);
  g.stroke();
}
// the logs, from the floor up to the eaves (the door's opening is painted over them)
L.logs(g, X0, X1, -EAVES, -FLOOR, 0.26, rnd);
// the corner's log ends
L.logEnds(g, X1 + 0.03, -EAVES, -FLOOR, 0.26, 0.13);
// the carved board under the eaves: white, with a row of round-cut teeth
g.fillStyle = C.trim;
g.fillRect(X0, -EAVES - 0.12, X1 - X0 + 0.15, 0.2);
for (let x = X0 + 0.1; x < X1 + 0.1; x += 0.2) {
  g.beginPath();
  g.arc(x, -EAVES + 0.08, 0.07, 0, Math.PI);
  g.fill();
}

// the door: its opening onto the passage — warm, lit by the lamp within —, the leaf open into it at the left, a high
// threshold
const passage = g.createLinearGradient(0, -DOOR_TOP, 0, -FLOOR);
passage.addColorStop(0, "#6b4f39");
passage.addColorStop(0.55, "#86664a");
passage.addColorStop(1, "#94765a");
g.fillStyle = passage;
g.fillRect(DOOR0, -DOOR_TOP, DOOR1 - DOOR0, DOOR_TOP - FLOOR);
// (the far doorway inside, the room's warm light through it)
g.fillStyle = "#d4a46a";
g.fillRect(DOOR0 + 0.4, -DOOR_TOP + 0.45, 0.34, 1.45);
g.fillStyle = "#b98a58";
g.fillRect(DOOR0 + 0.4, -DOOR_TOP + 0.45, 0.06, 1.45);
// (the leaf, open inward at the left)
g.fillStyle = "#6e5a46";
g.beginPath();
g.moveTo(DOOR0, -DOOR_TOP);
g.lineTo(DOOR0 + 0.22, -DOOR_TOP + 0.12);
g.lineTo(DOOR0 + 0.22, -FLOOR - 0.05);
g.lineTo(DOOR0, -FLOOR);
g.closePath();
g.fill();
// (its frame: planed boards, a lintel, the threshold)
g.fillStyle = C.woodLight;
g.fillRect(DOOR0 - 0.1, -DOOR_TOP - 0.12, 0.1, DOOR_TOP - FLOOR + 0.12);
g.fillRect(DOOR1, -DOOR_TOP - 0.12, 0.1, DOOR_TOP - FLOOR + 0.12);
g.fillRect(DOOR0 - 0.16, -DOOR_TOP - 0.2, DOOR1 - DOOR0 + 0.32, 0.12);
g.fillStyle = C.woodDark;
g.fillRect(DOOR0 - 0.05, -FLOOR - 0.12, DOOR1 - DOOR0 + 0.1, 0.12);

// a carved window frame round panes from x − 0.38 to x + 0.38, y −2.5…−1.5: white boards, a pointed top board with
// round cuts, a sill with teeth, snow on the sill
function frame(x) {
  g.fillStyle = C.trim;
  g.fillRect(x - 0.52, -2.62, 0.14, 1.22);
  g.fillRect(x + 0.38, -2.62, 0.14, 1.22);
  g.beginPath();
  g.moveTo(x - 0.62, -2.6);
  g.lineTo(x, -2.98);
  g.lineTo(x + 0.62, -2.6);
  g.lineTo(x + 0.62, -2.5);
  g.lineTo(x - 0.62, -2.5);
  g.closePath();
  g.fill();
  g.fillStyle = "#c9c3b6";
  for (const dx of [-0.3, 0, 0.3]) {
    g.beginPath();
    g.arc(x + dx, -2.62, 0.07, 0, Math.PI * 2);
    g.fill();
  }
  g.fillStyle = C.trim;
  g.fillRect(x - 0.6, -1.5, 1.2, 0.08);
  g.beginPath();
  for (let t = x - 0.55; t < x + 0.6; t += 0.15) {
    g.moveTo(t, -1.42);
    g.lineTo(t + 0.075, -1.3);
    g.lineTo(t + 0.15, -1.42);
  }
  g.fill();
  L.snowCap(g, x - 0.6, x + 0.6, -1.5, 0.07, 21 + x);
}
frame(WIN);
frame(WIN2);
// the unlit window's panes: grey-blue glass, frost grown over it in white ferns, the sash and the bars
g.fillStyle = "#7d8ba0";
g.fillRect(WIN2 - 0.38, -2.5, 0.76, 1.0);
g.fillStyle = "rgba(236,242,250,0.8)";
for (const [cx, cy, rx, ry] of [[WIN2 - 0.38, -1.5, 0.3, 0.26], [WIN2 + 0.38, -1.5, 0.28, 0.3], [WIN2, -1.5, 0.2, 0.14], [WIN2 - 0.38, -2.5, 0.16, 0.14], [WIN2 + 0.38, -2.5, 0.2, 0.16]]) {
  g.beginPath();
  g.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
  g.fill();
}
g.fillStyle = "#4a3a2c";
g.fillRect(WIN2 - 0.38, -2.5, 0.76, 0.05);
g.fillRect(WIN2 - 0.38, -1.55, 0.76, 0.05);
g.fillRect(WIN2 - 0.38, -2.5, 0.05, 1.0);
g.fillRect(WIN2 + 0.33, -2.5, 0.05, 1.0);
g.fillRect(WIN2 - 0.025, -2.5, 0.05, 1.0);
g.fillRect(WIN2 - 0.38, -2.02, 0.76, 0.04);

// the carved consoles under the canopy's ends (the canopy is the element `canopy`, before them): a bracket of planed
// wood curling down from under the canopy into the wall
for (const x of [1.25, 3.45]) {
  g.fillStyle = C.woodLight;
  g.beginPath();
  g.moveTo(x - 0.08, -3.08);
  g.lineTo(x + 0.08, -3.08);
  g.quadraticCurveTo(x + 0.1, -2.82, x + 0.03, -2.66);
  g.lineTo(x - 0.03, -2.66);
  g.quadraticCurveTo(x - 0.1, -2.82, x - 0.08, -3.08);
  g.closePath();
  g.fill();
  g.fillStyle = C.woodDark;
  g.beginPath();
  g.arc(x, -2.86, 0.03, 0, Math.PI * 2);
  g.fill();
}

// the snow banked against the base right of the porch, and hoarfrost along the lowest log's seam
g.fillStyle = C.snow;
g.beginPath();
g.moveTo(3.7, 0.05);
g.quadraticCurveTo(4.3, -0.45, X1 + 0.15, -0.3);
g.lineTo(X1 + 0.15, 0.05);
g.closePath();
g.fill();
g.fillStyle = "rgba(236,242,250,0.7)";
for (let i = 0; i < 40; i++) {
  const x = X0 + rnd() * (X1 - X0);
  g.fillRect(x, -FLOOR - 0.04 - rnd() * 0.03, 0.06 + rnd() * 0.12, 0.012);
}
