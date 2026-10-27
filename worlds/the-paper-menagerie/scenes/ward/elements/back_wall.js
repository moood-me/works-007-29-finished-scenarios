// The back wall (facing the room, metres from its foot at the middle): the two-tone paint (lib's wall), cut for the
// tall window (x −2.35…−0.85, from 0.85 m to 2.25 m up); over the bed, the grey service rail with its outlets and the
// call bell's cord.
g.save();
g.beginPath();
g.rect(-2.92, -2.74, 5.84, 2.78);
g.rect(-2.35, -2.25, 1.5, 1.4);
g.clip('evenodd');
e.lib.wall(g, -2.92, 2.92);
g.restore();
g.fillStyle = '#cfd2cb';
g.fillRect(-0.25, -1.55, 2.1, 0.12);
g.fillStyle = '#9aa09a';
g.fillRect(-0.25, -1.44, 2.1, 0.01);
for (const x of [0.05, 0.3, 1.2, 1.5]) {
  g.fillStyle = '#eeeee8';
  g.fillRect(x, -1.53, 0.08, 0.08);
  g.fillStyle = x < 1 ? '#5f8fbf' : '#7a7a76';
  g.beginPath();
  g.arc(x + 0.04, -1.49, 0.018, 0, Math.PI * 2);
  g.fill();
}
g.strokeStyle = '#d8d4c6';
g.lineWidth = 0.008;
g.beginPath();
g.moveTo(0.7, -1.43);
g.bezierCurveTo(0.68, -1.2, 0.74, -1.0, 0.72, -0.78);
g.stroke();
g.fillStyle = '#c64a3e';
g.beginPath();
g.arc(0.72, -0.76, 0.02, 0, Math.PI * 2);
g.fill();
