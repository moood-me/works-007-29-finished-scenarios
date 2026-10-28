// What the window looks out on, 12 m off (near enough that the sill's sightline falls on its sand; its foot a metre under the ground, so y −2.7 is the eye's level): the late
// August dusk over the line — a high pale sky going lilac, a warm band low over the far forest, the stubble, the
// embankment with its two rails, a telegraph pole and its wires, the paling of the yard nearer. Painted in daylight
// colours: the evening is the scene's light.
const L = e.lib;
const sky = g.createLinearGradient(0, -6, 0, -2.75);
sky.addColorStop(0, "#a9b6d4");
sky.addColorStop(0.55, "#c9c3d6");
sky.addColorStop(0.85, "#e9cdb8");
sky.addColorStop(1, "#f0d6b4");
g.fillStyle = sky;
g.fillRect(-3.4, -6, 6.8, 3.3);
L.strokes(g, 21, -3.4, -5.6, 6.8, 2.2, ["#bfc6dc", "#d8cfdc", "#b3bcd6"], 70, 0.5, 0.05, 0.05, 0.4);
// a long thin cloud lit from below
g.fillStyle = "#e7c9bd";
g.beginPath();
g.ellipse(-0.6, -3.75, 1.6, 0.05, -0.02, 0, Math.PI * 2);
g.fill();
// the far forest, a low blue-grey band; the stubble before it
g.fillStyle = "#7f8597";
g.beginPath();
g.moveTo(-3.4, -2.72);
for (let x = -3.4; x <= 3.4; x += 0.08) g.lineTo(x, -2.74 - 0.05 * L.rnd(Math.round(x * 50) + 200, 3) - 0.03 * Math.sin(x * 3));
g.lineTo(3.4, -2.66);
g.lineTo(-3.4, -2.66);
g.closePath();
g.fill();
g.fillStyle = "#a59a7c";
g.fillRect(-3.4, -2.67, 6.8, 0.5);
L.strokes(g, 23, -3.4, -2.66, 6.8, 0.48, ["#b8ab88", "#8e8468"], 60, 0.35, 0.02, 0, 0.4);
// the embankment: its top a little over the stubble, the two rails on it, its near slope down to the yard
g.fillStyle = "#9b8e74";
g.fillRect(-3.4, -2.2, 6.8, 0.06);
g.fillStyle = "#c8c0b2";
g.fillRect(-3.4, -2.235, 6.8, 0.012);
g.fillRect(-3.4, -2.205, 6.8, 0.012);
g.fillStyle = "#b5a483";
g.fillRect(-3.4, -2.14, 6.8, 0.44);
L.strokes(g, 25, -3.4, -2.14, 6.8, 0.44, ["#c7b795", "#9b8a6c"], 60, 0.4, 0.03, 0, 0.45);
// the yard nearer: pale sand, the low paling
g.fillStyle = "#c9b996";
g.fillRect(-3.4, -1.7, 6.8, 1.72);
L.strokes(g, 27, -3.4, -1.7, 6.8, 1.7, ["#d6c8a6", "#b5a582"], 80, 0.5, 0.05, 0, 0.4);
g.fillStyle = "#8d8371";
for (let i = 0, x = -3.3; x < 3.4; i++, x += 0.14) g.fillRect(x, -2.1 + 0.03 * L.rnd(i, 5), 0.07, 0.42);
g.fillRect(-3.4, -1.95, 6.8, 0.04);
// a telegraph pole on the line and its wires sagging away to either side
g.fillStyle = "#6e6253";
g.fillRect(0.95, -5.0, 0.07, 2.82);
g.fillRect(0.82, -4.85, 0.33, 0.04);
g.strokeStyle = "#5d5a58";
g.lineWidth = 0.008;
for (const y of [-4.86, -4.7]) {
  g.beginPath();
  g.moveTo(-3.4, y + 0.1);
  g.quadraticCurveTo(-1.2, y + 0.32, 0.98, y);
  g.quadraticCurveTo(2.2, y + 0.22, 3.4, y + 0.08);
  g.stroke();
}
L.paper(g, -3.4, -6, 6.8, 6.02, 2.4, 0.35);
