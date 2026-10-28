// The windows lit across the street (each one of lib.windows that is lit): warm lamplight behind a thin curtain, its
// glazing bar dark against it; a few with a lampshade's shape low in them. Metres, as `houses`.
for (const [x, y, w, h, lit] of e.lib.windows) {
  if (!lit) continue;
  g.fillStyle = '#e7b56c';
  g.fillRect(x, y, w, h);
  g.fillStyle = 'rgba(255,236,190,0.6)';
  g.fillRect(x + 0.06, y + 0.08, w - 0.12, h * 0.6);
  g.fillStyle = '#4b3a32';
  g.fillRect(x + w / 2 - 0.02, y, 0.04, h);
  g.fillRect(x, y + h * 0.45, w, 0.035);
}
