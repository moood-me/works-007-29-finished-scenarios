// The station far off on the left, by the line: the water tower — a brick base, a timber tank, a cone of a roof — the
// low station house beside it, a few poplars. No signs: any station after the war.
const L = e.lib;
// the poplars
for (const [x, h, w] of [[-19, 14, 2.2], [-15.5, 16, 2.6], [-12, 12, 2]]) {
  g.fillStyle = "#7f8a69";
  g.beginPath();
  g.ellipse(x, -h / 2 - 1, w, h / 2, 0, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = "#5f5547";
  g.fillRect(x - 0.2, -1.5, 0.4, 1.5);
}
// the water tower
g.fillStyle = "#a86d56";
g.fillRect(-2.6, -10, 5.2, 10);
g.fillStyle = "#6b4a3d";
for (const y of [-3, -6.5]) g.fillRect(-0.4, y - 1.2, 0.8, 1.2);
g.fillStyle = "#8b7c66";
g.fillRect(-3.6, -15, 7.2, 5);
g.fillStyle = "#76695a";
for (let x = -3.4; x < 3.6; x += 0.6) g.fillRect(x, -15, 0.12, 5);
g.fillStyle = "#6d6a62";
g.beginPath();
g.moveTo(-4.1, -15);
g.lineTo(0, -18.5);
g.lineTo(4.1, -15);
g.closePath();
g.fill();
// the station house
g.fillStyle = "#c8b38a";
g.fillRect(6, -4.6, 15, 4.6);
g.fillStyle = "#7a7468";
g.beginPath();
g.moveTo(5.4, -4.6);
g.lineTo(8, -7);
g.lineTo(19, -7);
g.lineTo(21.6, -4.6);
g.closePath();
g.fill();
g.fillStyle = "#5c5f62";
for (let x = 8; x < 20; x += 2.6) g.fillRect(x, -3.4, 1.1, 1.6);
// the platform's edge
g.fillStyle = "#a59c8a";
g.fillRect(-24, -0.8, 48, 0.8);
L.strokes(g, 51, -24, -18, 48, 18, ["#d8cdb2", "#9e9580"], 120, 1.2, 0.15, 0, 0.18);
