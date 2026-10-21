// The store by the station, beyond the tracks on the right (Semyon Yevseyevich keeps watch over it at night): a long low
// shed of weathered upright planks, its two wide doors shut, a loading dock of sleepers before it, the red-brown iron
// roof's lip and the gable's end at its right; a short iron chimney on the roof, a thin smoke from it (the store's
// stove — the particles `store_smoke`).
const L = e.lib;
// the dock
g.fillStyle = "#6f655a";
g.fillRect(-9.2, -1.1, 15.6, 1.1);
L.strokes(g, 151, -9.2, -1.1, 15.6, 1.1, ["#857a6c", "#5a5248"], 40, 0.8, 0.08, 0, 0.4);
// the long wall
L.boards(g, 153, -9, -4.4, 18, 3.3, 0.26, ["#9a9282", "#8e8676", "#a39b8a", "#857e70"], true, 5);
// the doors: darker planks, braces, iron bands
for (const x of [-5.4, 2.0]) {
  g.fillStyle = "#7a7263";
  g.fillRect(x, -3.9, 2.6, 2.8);
  g.strokeStyle = "#5f584d";
  g.lineWidth = 0.08;
  g.beginPath();
  g.moveTo(x + 0.1, -1.2);
  g.lineTo(x + 2.5, -3.8);
  g.stroke();
  g.fillStyle = "#4e4a44";
  g.fillRect(x, -3.5, 2.6, 0.08);
  g.fillRect(x, -1.6, 2.6, 0.08);
}
// the roof's lip and the gable end at the right
g.fillStyle = "#86584a";
g.fillRect(-9.4, -4.75, 18.4, 0.4);
g.fillStyle = "#958c7c";
g.beginPath();
g.moveTo(9, -1.1);
g.lineTo(9, -4.4);
g.lineTo(9.9, -5.4);
g.lineTo(9.9, -1.1);
g.closePath();
g.fill();
g.fillStyle = "#7c4f42";
g.beginPath();
g.moveTo(-9.4, -4.75);
g.lineTo(-8.8, -5.5);
g.lineTo(9.9, -5.5);
g.lineTo(9.0, -4.75);
g.closePath();
g.fill();
// the chimney
g.fillStyle = "#4a4743";
g.fillRect(4.6, -6.6, 0.24, 1.2);
g.fillRect(4.52, -6.66, 0.4, 0.08);
e.at(4.72, -6.66, "chimney");
L.paper(g, -9.5, -6.7, 19.5, 6.7, 6);
