// The windows lit in the houses (each one of lib.windows that is lit): warm lamplight behind a thin curtain, the
// sash bar dark across it. Metres, as `houses`.
for (const [x, y, w, h, lit] of e.lib.windows) {
  if (!lit) continue;
  g.fillStyle = '#e9b66a';
  g.fillRect(x, y, w, h);
  g.fillStyle = 'rgba(255,236,196,0.55)';
  g.fillRect(x + 0.08, y + 0.08, w - 0.16, h * 0.55);
  g.fillStyle = '#4b3a32';
  g.fillRect(x, y + h * 0.48, w, 0.05);
}
