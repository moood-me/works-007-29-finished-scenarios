// The field outside, seen from above: dark grass, the landing strip running away from the building, its worn tracks.
// Its own metres: x across, y toward the viewer (the plane's centre 600 m ahead).
g.fillStyle = '#26303f';
g.fillRect(-2000, -600, 4000, 1200);
g.fillStyle = '#2c3646';
g.fillRect(-40, -600, 80, 560);
g.strokeStyle = '#323d4d';
g.lineWidth = 3;
for (const x of [-18, 18]) {
  g.beginPath();
  g.moveTo(x, -600);
  g.lineTo(x, -40);
  g.stroke();
}
