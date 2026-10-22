// The house's front (on `house`; x −2.5…2.5, the eave 2.3 m up): a low house of weathered vertical boards, grey-brown
// and silvered, half sunk in the sand — the sand heaped high against its left end and lying in a ridge along the roof's
// edge over it; the deep eave's underside with its rafter ends; a small barred window; the doorway at x 0.55…1.45
// standing open, the plank door slid aside to its left, the dark room within. Points: `door` (the doorway's middle),
// `eave` (the roof's edge over the window, where the sand runs off).
const r = e.lib.stream(21);
// the boards
const tones = ["#8f7b64", "#85715b", "#97836b", "#8a755f"];
let x = -2.5;
let i = 0;
while (x < 2.5) {
  const w = 0.16 + r() * 0.06;
  g.fillStyle = tones[i % tones.length];
  g.fillRect(x, -2.3, Math.min(w, 2.5 - x), 2.3);
  x += w;
  i++;
}
// their seams and the silvered weathering streaked down from the eave
g.fillStyle = "rgba(62, 50, 40, 0.55)";
x = -2.5;
const seams = e.lib.stream(22);
while (x < 2.5) {
  g.fillRect(x, -2.3, 0.018, 2.3);
  x += 0.16 + seams() * 0.06;
}
for (let k = 0; k < 14; k++) {
  const sx = -2.4 + r() * 4.8;
  const top = -2.3;
  const h = 0.6 + r() * 1.2;
  const streak = g.createLinearGradient(0, top, 0, top + h);
  streak.addColorStop(0, "rgba(206, 200, 186, 0.28)");
  streak.addColorStop(1, "rgba(206, 200, 186, 0)");
  g.fillStyle = streak;
  g.fillRect(sx, top, 0.05 + r() * 0.12, h);
}
// sand blown against the foot of the boards all along, paler where it lies
const footSand = g.createLinearGradient(0, 0, 0, -0.45);
footSand.addColorStop(0, "rgba(214, 182, 128, 0.9)");
footSand.addColorStop(1, "rgba(214, 182, 128, 0)");
g.fillStyle = footSand;
g.fillRect(-2.5, -0.45, 5, 0.45);

// the window: a dark opening with three wooden bars and a sill
g.fillStyle = "#2f261f";
g.fillRect(-2.05, -1.72, 0.95, 0.62);
g.fillStyle = "#6d5a47";
for (let k = 1; k <= 3; k++) g.fillRect(-2.05 + k * 0.2375 - 0.025, -1.72, 0.05, 0.62);
g.fillRect(-2.12, -1.12, 1.09, 0.07);
g.fillRect(-2.12, -1.78, 1.09, 0.06);

// the doorway: the dark room within — a little lighter low down where the floor's matting catches the day
const room = g.createLinearGradient(0, -1.86, 0, 0);
room.addColorStop(0, "#241c16");
room.addColorStop(0.7, "#33281f");
room.addColorStop(1, "#4a3c2e");
g.fillStyle = room;
g.fillRect(0.55, -1.86, 0.9, 1.86);
g.fillStyle = "rgba(170, 140, 96, 0.35)";
g.fillRect(0.55, -0.12, 0.9, 0.12);
// its frame
g.fillStyle = "#5e4c3b";
g.fillRect(0.5, -1.92, 0.06, 1.92);
g.fillRect(1.44, -1.92, 0.06, 1.92);
g.fillRect(0.5, -1.96, 1.0, 0.08);
// the plank door slid aside to the left of it, over the boards
g.fillStyle = "#7b6650";
g.fillRect(-0.36, -1.88, 0.88, 1.88);
g.fillStyle = "rgba(58, 46, 36, 0.6)";
for (let k = 1; k < 5; k++) g.fillRect(-0.36 + k * 0.176, -1.88, 0.014, 1.88);
g.fillStyle = "#5a4837";
g.fillRect(-0.36, -1.5, 0.88, 0.05);
g.fillRect(-0.36, -0.42, 0.88, 0.05);

// the eave: the roof's deep overhang seen from below — its underside in shade, the rafter ends, the fascia board
g.fillStyle = "#5c4b3b";
g.fillRect(-2.65, -2.72, 5.3, 0.42);
g.fillStyle = "#47392d";
for (let k = 0; k < 14; k++) g.fillRect(-2.55 + k * 0.38, -2.42, 0.1, 0.12);
g.fillStyle = "#6f5c48";
g.fillRect(-2.7, -2.82, 5.4, 0.12);

// the sand heaped against the house's left end, up past the window's sill — its slope with a few ripples
g.fillStyle = "#d8b680";
g.beginPath();
g.moveTo(-2.7, 0.05);
g.lineTo(-2.7, -1.05);
g.bezierCurveTo(-2.3, -1.0, -1.7, -0.62, -1.3, -0.3);
g.bezierCurveTo(-1.05, -0.12, -0.8, 0, -0.55, 0.05);
g.closePath();
g.fill();
g.strokeStyle = "#c39b64";
g.lineWidth = 0.025;
for (let k = 0; k < 5; k++) {
  const t = 0.15 + k * 0.17;
  g.beginPath();
  g.moveTo(-2.7, -1.05 + t * 1.0);
  g.quadraticCurveTo(-2.0, -0.9 + t * 0.95, -1.35 + t * 0.6, -0.25 + t * 0.3);
  g.stroke();
}

// the sand lying in a ridge along the roof's edge over the left half, spilling a little over the fascia
g.fillStyle = "#dcbb86";
g.beginPath();
g.moveTo(-2.72, -2.8);
g.bezierCurveTo(-2.4, -3.02, -1.6, -3.0, -1.1, -2.9);
g.bezierCurveTo(-0.7, -2.84, -0.4, -2.82, -0.1, -2.8);
g.closePath();
g.fill();
g.beginPath();
g.moveTo(-2.0, -2.71);
g.quadraticCurveTo(-1.62, -2.6, -1.25, -2.71);
g.closePath();
g.fill();

e.at(1.0, -0.95, "door");
e.at(-1.62, -2.66, "eave");
