// A tall window's casement (1.1 m by 2.3 m; two of them, `copies`): white, two leaves of four panes, a transom light
// above, the glass clear — the snowy night beyond — snow lodged in the panes' lower corners.
const F = '#efe9de';
g.fillStyle = 'rgba(240,242,246,0.85)';
for (const x0 of [-0.5, 0.03]) {
  for (const yb of [-0.06, -0.52, -0.98, -1.44]) {
    g.beginPath();
    g.moveTo(x0, yb);
    g.lineTo(x0 + 0.12, yb);
    g.quadraticCurveTo(x0 + 0.02, yb - 0.01, x0, yb - 0.06);
    g.closePath();
    g.fill();
  }
}
g.fillStyle = F;
g.fillRect(-0.55, -2.3, 1.1, 0.06);
g.fillRect(-0.55, -0.06, 1.1, 0.06);
g.fillRect(-0.55, -2.3, 0.06, 2.3);
g.fillRect(0.49, -2.3, 0.06, 2.3);
g.fillRect(-0.03, -1.9, 0.06, 1.9);
g.fillRect(-0.55, -1.94, 1.1, 0.06);
for (const y of [-0.52, -0.98, -1.44]) g.fillRect(-0.55, y - 0.018, 1.1, 0.036);
g.fillRect(-0.55, -2.12, 1.1, 0.03);
g.fillStyle = '#c2a057';
g.fillRect(-0.06, -1.0, 0.025, 0.08);
