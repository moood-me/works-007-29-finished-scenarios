// The tall window onto the pond (0.9 m by 2.75 m, its sill 0.75 m up): the stone mullion and transom and the leading
// of its diamond panes — only the bars; between them the night or the day outside. Its box is the opening the moon and
// the sun come in by (light "through").
g.fillStyle = '#9a9184';
g.fillRect(-0.035, -3.5, 0.07, 2.75);
g.fillRect(-0.45, -2.62, 0.9, 0.07);
g.strokeStyle = '#2a2622';
g.lineWidth = 0.008;
g.save();
g.beginPath();
g.rect(-0.45, -3.5, 0.9, 2.75);
g.clip();
for (let k = -4; k < 6; k += 0.16) {
  g.beginPath();
  g.moveTo(-0.45, -0.75 - k);
  g.lineTo(0.45, -0.75 - k - 0.9 * 1.4);
  g.moveTo(0.45, -0.75 - k);
  g.lineTo(-0.45, -0.75 - k - 0.9 * 1.4);
  g.stroke();
}
g.restore();
