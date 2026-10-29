// The landing from above (x −1.2…1.2 across — the railing at −1.2, the wall with the door at 1.2 —, y −3 at the stair
// window's wall … 3 at the viewer): big slabs of worn yellowish-grey limestone, each its own shade, their joints in ink,
// a darker path worn by feet from the head of the stair to the door
const { hash } = e.anim;
const rows = [-3.5, -2.8, -2.05, -1.3, -0.5, 0.25, 1, 1.75, 2.5, 3.5];
for (let r = 0; r < rows.length - 1; r++) {
  const y0 = rows[r], h = rows[r + 1] - y0, off = r % 2 ? 0.45 : 0;
  for (let x = -1.2 - off; x < 1.2; x += 0.9) {
    const k = hash(r * 17 + Math.round(x * 10), 3);
    g.fillStyle = `rgb(${Math.round(196 + 16 * k)},${Math.round(188 + 14 * k)},${Math.round(166 + 10 * k)})`;
    g.fillRect(x, y0, 0.9, h);
  }
}
e.lib.wash(g, -1.2, -3.5, 2.4, 7, [200, 191, 168], 2, 0.25, 0.6, 0);
// (the feet's path: from the stair's head at the back toward the door on the right)
const path = g.createLinearGradient(-1.2, 0, 1.2, 0);
path.addColorStop(0, 'rgba(120,104,84,0)');
path.addColorStop(0.55, 'rgba(120,104,84,0.16)');
path.addColorStop(1, 'rgba(120,104,84,0.22)');
g.fillStyle = path;
g.fillRect(-1.2, -3.1, 2.4, 2.4);
g.beginPath();
for (let r = 0; r < rows.length; r++) {
  g.moveTo(-1.2, rows[r]);
  g.lineTo(1.2, rows[r]);
  if (r === rows.length - 1) break;
  const off = r % 2 ? 0.45 : 0;
  for (let x = -1.2 - off + 0.9; x < 1.2; x += 0.9) {
    if (x <= -1.2) continue;
    g.moveTo(x, rows[r]);
    g.lineTo(x, rows[r + 1]);
  }
}
g.strokeStyle = 'rgba(74,63,58,0.45)';
g.lineWidth = 0.01;
g.stroke();
// (the slab's edge along the well, a little worn round)
g.fillStyle = 'rgba(74,63,58,0.25)';
g.fillRect(-1.2, -3.5, 0.05, 7);
