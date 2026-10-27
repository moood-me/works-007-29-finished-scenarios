// The barracks (metres from its foot; 9 m of its front, turned toward the square from the right): two storeys of
// limewash gone grey over a dark band, the heavy arched door shut, barred windows below; above, the open door onto the
// balcony (the balcony and its railing are elements of their own) and shuttered windows; brackets under the balcony,
// the tiled roof's edge.
const doorway = new Path2D();
doorway.rect(-2.2, -5.45, 1.2, 2.35);
g.save();
g.beginPath();
g.rect(-4.5, -6.42, 9.0, 6.44);
g.clip();
e.lib.wash(g, e, -4.5, 4.5, 6.4, '#e2ded2', '#5c665e');
g.restore();
// the floor's line between the storeys
g.fillStyle = 'rgba(90,86,76,0.5)';
g.fillRect(-4.5, -3.16, 9.0, 0.08);
e.lib.tiles(g, e, -4.6, 4.6, -6.36, -7.2, 0.4);
// the arched door, shut: dark planks, iron bands
g.fillStyle = '#3a2e26';
g.beginPath();
g.moveTo(0.8, 0);
g.lineTo(0.8, -2.3);
g.arc(1.6, -2.3, 0.8, Math.PI, 0);
g.lineTo(2.4, 0);
g.closePath();
g.fill();
g.fillStyle = '#4a3a2e';
for (let x = 0.88; x < 2.35; x += 0.16) g.fillRect(x, -2.9, 0.12, 2.9);
g.fillStyle = '#26201c';
for (const y of [-2.2, -1.2, -0.4]) g.fillRect(0.82, y, 1.56, 0.06);
g.strokeStyle = '#c8c2b2';
g.lineWidth = 0.08;
g.beginPath();
g.arc(1.6, -2.3, 0.86, Math.PI, 0);
g.stroke();
// barred windows below
for (const x0 of [-3.7, -1.2, 3.2]) {
  g.fillStyle = '#2c2824';
  g.fillRect(x0, -2.3, 0.8, 1.2);
  g.fillStyle = '#5a6a64';
  g.fillRect(x0 + 0.05, -2.25, 0.7, 1.1);
  g.fillStyle = '#1e1c1a';
  for (let x = x0 + 0.08; x < x0 + 0.8; x += 0.12) g.fillRect(x, -2.32, 0.025, 1.24);
}
// the open door onto the balcony: the dark room beyond, a chair's back, a towel over its leaf
g.fillStyle = '#2a2622';
g.fill(doorway);
g.fillStyle = '#3e3630';
g.fillRect(-1.8, -4.2, 0.5, 0.9);
g.fillStyle = '#5c4a3a';
g.fillRect(-2.35, -5.6, 1.5, 0.15);
g.fillStyle = '#5f7a72';
g.fillRect(-2.6, -5.45, 0.4, 2.35);
g.fillStyle = '#e6e2d6';
g.fillRect(-2.55, -4.6, 0.3, 0.55);
// shuttered windows above
for (const x0 of [1.1, 3.3]) {
  g.fillStyle = '#2c2824';
  g.fillRect(x0, -5.2, 0.9, 1.3);
  g.fillStyle = '#5f7a72';
  g.fillRect(x0 + 0.05, -5.15, 0.39, 1.2);
  g.fillRect(x0 + 0.46, -5.15, 0.39, 1.2);
  g.strokeStyle = '#4c645c';
  g.lineWidth = 0.012;
  for (let y = -5.1; y < -3.95; y += 0.06) {
    g.beginPath();
    g.moveTo(x0 + 0.07, y);
    g.lineTo(x0 + 0.83, y);
    g.stroke();
  }
}
// the brackets under the balcony
g.fillStyle = '#4a3a2e';
for (const x of [-2.75, -0.45]) {
  g.beginPath();
  g.moveTo(x - 0.06, -3.1);
  g.lineTo(x + 0.06, -3.1);
  g.lineTo(x + 0.06, -2.45);
  g.closePath();
  g.fill();
}
