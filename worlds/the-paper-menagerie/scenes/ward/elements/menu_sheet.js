// The hospital menu on the bed's sheet, seen from above (metres, its middle where it lies): `menu` flat — a white card
// with the day's dishes in blue print, a tick here and there in pencil; half — folded in half along its middle, the
// fold's edge toward the window; none — not here.
const m = e.state.menu;
if (m !== 'flat' && m !== 'half') return;
const w = m === 'half' ? 0.11 : 0.22,
  x0 = m === 'half' ? -0.11 : -0.11;
g.fillStyle = '#f6f4ec';
g.fillRect(x0, -0.15, w, 0.3);
g.fillStyle = 'rgba(62,90,150,0.6)';
g.fillRect(x0 + 0.02, -0.13, w - 0.04, 0.012);
for (let y = -0.1; y < 0.13; y += 0.022) g.fillRect(x0 + 0.02, y, (w - 0.04) * (0.5 + ((y * 100) % 4) * 0.12), 0.005);
if (m === 'half') {
  g.fillStyle = 'rgba(120,120,110,0.4)';
  g.fillRect(x0 + w - 0.004, -0.15, 0.004, 0.3);
} else {
  g.strokeStyle = 'rgba(80,80,80,0.7)';
  g.lineWidth = 0.003;
  for (const y of [-0.06, 0.04]) {
    g.beginPath();
    g.moveTo(x0 + 0.17, y);
    g.lineTo(x0 + 0.18, y + 0.008);
    g.lineTo(x0 + 0.2, y - 0.01);
    g.stroke();
  }
}
e.at(x0 + w / 2, 0, 'menu');
