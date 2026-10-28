// The bus stop by the shore road: a weathered post, a round tin plate on it gone pale with the sun and the sand, a
// small board with the times under it, a heap of sand blown round its foot.
g.fillStyle = "#6f5d4a";
g.beginPath();
g.moveTo(-0.06, 0);
g.lineTo(-0.045, -2.3);
g.lineTo(0.045, -2.3);
g.lineTo(0.06, 0);
g.closePath();
g.fill();
// the round plate: a pale rim, a faded blue field with a white bar across it
g.fillStyle = "#d9d4c6";
g.beginPath();
g.arc(0, -2.38, 0.24, 0, 6.3);
g.fill();
g.fillStyle = "#6f86a6";
g.beginPath();
g.arc(0, -2.38, 0.2, 0, 6.3);
g.fill();
g.fillStyle = "#e8e4d8";
g.fillRect(-0.17, -2.42, 0.34, 0.08);
// the board with the times
g.fillStyle = "#cfc5ad";
g.fillRect(-0.16, -1.75, 0.32, 0.4);
g.fillStyle = "rgba(80, 70, 60, 0.6)";
for (let k = 0; k < 5; k++) g.fillRect(-0.12, -1.69 + k * 0.07, 0.18 + (k % 2) * 0.05, 0.02);
// sand round its foot
g.fillStyle = "#d8b680";
g.beginPath();
g.ellipse(0, 0.02, 0.4, 0.12, 0, Math.PI, 0);
g.fill();
