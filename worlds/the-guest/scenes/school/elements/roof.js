// The school's roof, its front slope seen from above (metres, x along the ridge, y down the slope toward the eaves at
// y 1.45): old red tiles under the snow — the snow thick over it, thinning toward the eaves where the rows of tiles show
// and the snow hangs over the edge.
g.fillStyle = '#e7ebef';
g.fillRect(-6.4, -1.45, 12.8, 2.9);
// the last rows of tiles showing along the eaves, the snow's edge ragged over them
g.fillStyle = '#9d543b';
g.fillRect(-6.4, 1.05, 12.8, 0.3);
g.strokeStyle = '#874630';
g.lineWidth = 0.02;
for (let x = -6.4; x < 6.4; x += 0.2) {
  g.beginPath();
  g.moveTo(x, 1.05);
  g.lineTo(x, 1.35);
  g.stroke();
}
g.fillStyle = '#e7ebef';
g.beginPath();
g.moveTo(-6.4, 1.05);
for (let x = -6.4; x <= 6.4; x += 0.3) g.lineTo(x, 1.05 + 0.06 + 0.1 * e.rnd());
g.lineTo(6.4, 1.0);
g.closePath();
g.fill();
for (let i = 0; i < 6; i++) {
  const x = -6 + e.rnd() * 12;
  g.fillStyle = 'rgba(160,86,62,0.55)';
  g.fillRect(x, -1.2 + e.rnd() * 1.2, 0.2, 0.5 + e.rnd() * 0.8);
}
// the snow's lip along the eaves
g.fillStyle = '#f2f4f6';
g.fillRect(-6.4, 1.32, 12.8, 0.13);
