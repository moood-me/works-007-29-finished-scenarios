// The back wall of the kitchen at home (x -2.7...2.7, 2.4 m high): a nineteen-sixties paper of small brown-and-orange
// flowers on a pale olive ground; the doorway to the hall cut through it on the left (x -2.45...-1.55, to 2.0 m), the
// window over the sink (x -0.5...1.0, 1.0-2.0 m); white tiles behind the sink and the cooker, a wall cupboard between
// the doorway and the window, the clock over the cooker, a shelf with the radio and the tea caddy on the right.
const hole = new Path2D();
hole.rect(-2.75, -2.42, 5.5, 2.44);
hole.rect(-2.45, -2.0, 0.9, 2.02);
hole.rect(-0.5, -2.0, 1.5, 1.0);
g.fillStyle = '#cfcfaa';
g.fill(hole, 'evenodd');
g.save();
g.clip(hole, 'evenodd');
// the paper's flowers: a dropped repeat of small four-petalled flowers and dots
for (let r = 0, y = -2.35; y < 0; r++, y += 0.16) {
  for (let x = -2.75 + (r % 2) * 0.09; x < 2.75; x += 0.18) {
    g.fillStyle = r % 2 ? 'rgba(176, 108, 58, 0.55)' : 'rgba(130, 96, 62, 0.45)';
    for (let k = 0; k < 4; k++) {
      const a = (k / 4) * Math.PI * 2 + 0.4;
      g.beginPath();
      g.ellipse(x + Math.cos(a) * 0.022, y + Math.sin(a) * 0.022, 0.018, 0.011, a, 0, Math.PI * 2);
      g.fill();
    }
    g.fillStyle = 'rgba(222, 196, 120, 0.8)';
    g.beginPath();
    g.arc(x, y, 0.009, 0, Math.PI * 2);
    g.fill();
    g.fillStyle = 'rgba(120, 128, 92, 0.4)';
    g.beginPath();
    g.arc(x + 0.09, y + 0.08, 0.008, 0, Math.PI * 2);
    g.fill();
  }
}
// the tiles behind the sink and the cooker (x -0.84...1.98, 0.9-1.3 m; to 1.6 behind the cooker), a line of blue
g.fillStyle = '#ecebe2';
g.fillRect(-0.84, -1.3, 2.82, 0.4);
g.fillRect(1.34, -1.6, 0.64, 0.7);
g.strokeStyle = 'rgba(150, 150, 140, 0.6)';
g.lineWidth = 0.006;
for (let y = -1.6; y <= -0.9; y += 0.1) {
  g.beginPath();
  g.moveTo(y < -1.3 ? 1.34 : -0.84, y);
  g.lineTo(1.98, y);
  g.stroke();
}
for (let x = -0.84; x <= 1.98; x += 0.1) {
  g.beginPath();
  g.moveTo(x, x < 1.34 ? -1.3 : -1.6);
  g.lineTo(x, -0.9);
  g.stroke();
}
g.fillStyle = '#5b78a6';
g.fillRect(-0.84, -1.2, 2.82, 0.02);
g.restore();
// the skirting board
g.fillStyle = '#e4ddc8';
g.fillRect(-2.75, -0.1, 5.5, 0.1);
// the doorway's frame: a white architrave round it
g.strokeStyle = '#ebe6d6';
g.lineWidth = 0.07;
g.beginPath();
g.moveTo(-2.48, 0);
g.lineTo(-2.48, -2.03);
g.lineTo(-1.52, -2.03);
g.lineTo(-1.52, 0);
g.stroke();
// the wall cupboard between the doorway and the window: a pale blue door, a chrome knob
g.fillStyle = '#a9bccb';
g.fillRect(-1.3, -2.2, 0.62, 0.62);
g.strokeStyle = '#8aa0b2';
g.lineWidth = 0.012;
g.strokeRect(-1.26, -2.16, 0.54, 0.54);
g.fillStyle = '#d8d8d4';
g.beginPath();
g.arc(-0.77, -1.68, 0.015, 0, Math.PI * 2);
g.fill();
// the clock over the cooker: a cream starburst one, its hands at ten past seven
const cx = 1.66, cy = -2.02;
g.strokeStyle = '#b8913e';
g.lineWidth = 0.012;
for (let k = 0; k < 12; k++) {
  const a = (k / 12) * Math.PI * 2;
  g.beginPath();
  g.moveTo(cx + Math.sin(a) * 0.1, cy - Math.cos(a) * 0.1);
  g.lineTo(cx + Math.sin(a) * 0.17, cy - Math.cos(a) * 0.17);
  g.stroke();
}
g.fillStyle = '#f1ead6';
g.beginPath();
g.arc(cx, cy, 0.1, 0, Math.PI * 2);
g.fill();
g.strokeStyle = '#2b2520';
g.lineCap = 'round';
for (const [a, l, w] of [[(Math.PI * 2 * (7 + 10 / 60)) / 12, 0.05, 0.012], [Math.PI * 2 * (10 / 60), 0.08, 0.007]]) {
  g.lineWidth = w;
  g.beginPath();
  g.moveTo(cx, cy);
  g.lineTo(cx + Math.sin(a) * l, cy - Math.cos(a) * l);
  g.stroke();
}
// the shelf on the right: the radio, the tea caddy, a blue-and-white jar
g.fillStyle = '#7a5a3e';
g.fillRect(2.12, -1.62, 0.56, 0.03);
g.fillStyle = '#6b4a34';
g.beginPath();
g.roundRect(2.16, -1.84, 0.28, 0.22, 0.03);
g.fill();
g.fillStyle = '#d9c7a0';
g.fillRect(2.19, -1.81, 0.13, 0.15);
g.fillStyle = '#c7a24f';
g.beginPath();
g.arc(2.39, -1.73, 0.03, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#9c3b31';
g.fillRect(2.5, -1.76, 0.08, 0.14);
g.fillStyle = '#e8e4da';
g.fillRect(2.6, -1.72, 0.07, 0.1);
g.fillStyle = '#4a6da0';
g.fillRect(2.6, -1.69, 0.07, 0.02);
