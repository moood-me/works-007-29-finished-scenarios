// The front of Brekhunov's house, toward the yard: a log house on a boarded base, its floor 0.85 m up (the porch's
// level), the door open onto the porch — the passage behind it dim and warm —, the shop's window to the right of it
// in a carved white frame (its lit panes are the element `window`), the log ends of the corner at the right, a
// carved board under the eaves.
// (x −4.1…4.1 m: across −9.2…−1.0; the door x 0.25…1.15, the window x 2.62…3.38; its foot at 0)
const L = e.lib;
const C = L.C;
const rnd = () => e.rnd();
const FLOOR = 0.85;
const EAVES = 4.2;
const DOOR0 = 0.25;
const DOOR1 = 1.15;
const DOOR_TOP = 2.85;
const WIN = 3.0;

// the base: upright boards, grey, a little snow banked against them
g.fillStyle = "#857a6c";
g.fillRect(-4.1, -FLOOR, 8.0, FLOOR);
g.strokeStyle = "#6a6055";
g.lineWidth = 0.02;
for (let x = -4.1; x < 3.9; x += 0.22) {
  g.beginPath();
  g.moveTo(x, -FLOOR);
  g.lineTo(x, 0);
  g.stroke();
}
// the logs, from the floor up to the eaves (the door's opening is painted over them)
L.logs(g, -4.1, 3.9, -EAVES, -FLOOR, 0.26, rnd);
// the corner's log ends
L.logEnds(g, 3.98, -EAVES, -FLOOR, 0.26, 0.13);
// the carved board under the eaves: white, with a row of round-cut teeth
g.fillStyle = C.trim;
g.fillRect(-4.1, -EAVES - 0.12, 8.2, 0.2);
for (let x = -4.0; x < 4.1; x += 0.2) {
  g.beginPath();
  g.arc(x, -EAVES + 0.08, 0.07, 0, Math.PI);
  g.fill();
}

// the door: its opening onto the dim warm passage, the leaf open into it at the left, a high threshold
const dim = g.createLinearGradient(0, -DOOR_TOP, 0, -FLOOR);
dim.addColorStop(0, "#3a2b22");
dim.addColorStop(0.6, "#4e3a2c");
dim.addColorStop(1, "#5c4635");
g.fillStyle = dim;
g.fillRect(DOOR0, -DOOR_TOP, DOOR1 - DOOR0, DOOR_TOP - FLOOR);
// (a far doorway inside, with a warm light through it)
g.fillStyle = "#7a5a3c";
g.fillRect(DOOR0 + 0.42, -DOOR_TOP + 0.45, 0.32, 1.45);
g.fillStyle = "#5e4a3a";
g.beginPath();
g.moveTo(DOOR0, -DOOR_TOP);
g.lineTo(DOOR0 + 0.2, -DOOR_TOP + 0.12);
g.lineTo(DOOR0 + 0.2, -FLOOR - 0.05);
g.lineTo(DOOR0, -FLOOR);
g.closePath();
g.fill();
// (its frame: planed boards, a lintel)
g.fillStyle = C.woodLight;
g.fillRect(DOOR0 - 0.1, -DOOR_TOP - 0.12, 0.1, DOOR_TOP - FLOOR + 0.12);
g.fillRect(DOOR1, -DOOR_TOP - 0.12, 0.1, DOOR_TOP - FLOOR + 0.12);
g.fillRect(DOOR0 - 0.16, -DOOR_TOP - 0.2, DOOR1 - DOOR0 + 0.32, 0.12);
g.fillStyle = C.woodDark;
g.fillRect(DOOR0 - 0.05, -FLOOR - 0.12, DOOR1 - DOOR0 + 0.1, 0.12);

// the shop's window: its carved white frame round the panes (x 2.62…3.38, y −2.5…−1.5), a pointed top board, a
// sill with snow on it
g.fillStyle = C.trim;
g.fillRect(WIN - 0.52, -2.62, 0.14, 1.22);
g.fillRect(WIN + 0.38, -2.62, 0.14, 1.22);
g.beginPath();
g.moveTo(WIN - 0.62, -2.6);
g.lineTo(WIN, -2.98);
g.lineTo(WIN + 0.62, -2.6);
g.lineTo(WIN + 0.62, -2.5);
g.lineTo(WIN - 0.62, -2.5);
g.closePath();
g.fill();
g.fillStyle = "#c9c3b6";
for (const dx of [-0.3, 0, 0.3]) {
  g.beginPath();
  g.arc(WIN + dx, -2.62, 0.07, 0, Math.PI * 2);
  g.fill();
}
g.fillStyle = C.trim;
g.fillRect(WIN - 0.6, -1.5, 1.2, 0.08);
g.beginPath();
for (let x = WIN - 0.55; x < WIN + 0.6; x += 0.15) {
  g.moveTo(x, -1.42);
  g.lineTo(x + 0.075, -1.3);
  g.lineTo(x + 0.15, -1.42);
}
g.fill();
L.snowCap(g, WIN - 0.6, WIN + 0.6, -1.5, 0.07, 21);
