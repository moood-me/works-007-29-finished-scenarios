// The house's right end (on `house`, at the front's right corner, turned to run away from the eye; x 0 the front
// corner … 3.6 the back): the gable of the same weathered boards up to the ridge (3.5 m), the roof's two edges
// overhanging it — the eaves at 2.8 m as the front's —, sand lying thick on the far slope and heaped against the back
// half of the wall.
const r = e.lib.stream(31);
// the gable wall, clipped to its shape
g.save();
g.beginPath();
g.moveTo(0, 0.05);
g.lineTo(0, -2.9);
g.lineTo(1.8, -3.5);
g.lineTo(3.6, -2.9);
g.lineTo(3.6, 0.05);
g.closePath();
g.clip();
const tones = ["#8a765f", "#806c57", "#927e67"];
let x = 0;
let i = 0;
while (x < 3.6) {
  const w = 0.16 + r() * 0.06;
  g.fillStyle = tones[i % tones.length];
  g.fillRect(x, -3.6, w, 3.65);
  x += w;
  i++;
}
g.fillStyle = "rgba(62, 50, 40, 0.5)";
x = 0;
while (x < 3.6) {
  g.fillRect(x, -3.6, 0.016, 3.65);
  x += 0.16 + r() * 0.06;
}
// silvered weathering streaked down from under the roof
for (let k = 0; k < 9; k++) {
  const sx = 0.1 + r() * 3.4;
  const h = 0.6 + r() * 1.1;
  const streak = g.createLinearGradient(0, -3.0, 0, -3.0 + h);
  streak.addColorStop(0, "rgba(206, 200, 186, 0.25)");
  streak.addColorStop(1, "rgba(206, 200, 186, 0)");
  g.fillStyle = streak;
  g.fillRect(sx, -3.0, 0.05 + r() * 0.1, h);
}
const footSand = g.createLinearGradient(0, 0, 0, -0.45);
footSand.addColorStop(0, "rgba(214, 182, 128, 0.9)");
footSand.addColorStop(1, "rgba(214, 182, 128, 0)");
g.fillStyle = footSand;
g.fillRect(0, -0.45, 3.6, 0.45);
g.restore();

// the roof's edges: a dark fascia along both slopes, overhanging the gable
g.strokeStyle = "#5a4939";
g.lineWidth = 0.14;
g.lineJoin = "round";
g.beginPath();
g.moveTo(-0.3, -2.8);
g.lineTo(1.8, -3.6);
g.lineTo(3.9, -2.8);
g.stroke();

// sand lying thick on the far slope and slipping over its edge
g.fillStyle = "#dab984";
g.beginPath();
g.moveTo(1.9, -3.7);
g.bezierCurveTo(2.5, -3.6, 3.2, -3.3, 3.95, -2.86);
g.lineTo(3.9, -2.72);
g.bezierCurveTo(3.3, -3.1, 2.6, -3.42, 1.95, -3.6);
g.closePath();
g.fill();

// the sand heaped against the back half of the wall
g.fillStyle = "#d8b680";
g.beginPath();
g.moveTo(3.62, 0.05);
g.lineTo(3.62, -1.9);
g.bezierCurveTo(3.1, -1.7, 2.5, -0.9, 2.0, -0.35);
g.bezierCurveTo(1.8, -0.12, 1.6, 0, 1.4, 0.05);
g.closePath();
g.fill();
g.strokeStyle = "#c39b64";
g.lineWidth = 0.025;
for (let k = 0; k < 4; k++) {
  const t = 0.2 + k * 0.2;
  g.beginPath();
  g.moveTo(3.62, -1.9 + t * 1.9);
  g.quadraticCurveTo(3.0, -1.3 + t * 1.2, 2.1 + t * 0.4, -0.3 + t * 0.3);
  g.stroke();
}
