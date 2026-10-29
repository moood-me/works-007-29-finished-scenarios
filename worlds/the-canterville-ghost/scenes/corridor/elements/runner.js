// The long runner down the middle of the corridor, from above (1.5 m by 12.4 m): an old Turkey carpet worn thin, a
// faded madder-red field with a row of dark blue medallions, a dark border with a running cream motif.
g.fillStyle = '#7a2a24';
g.fillRect(-0.75, -6.2, 1.5, 12.4);
g.fillStyle = '#23304a';
g.fillRect(-0.75, -6.2, 1.5, 12.4);
g.fillStyle = '#7a2a24';
g.fillRect(-0.6, -6.05, 1.2, 12.1);
g.fillStyle = '#c8b48a';
for (let y = -6.1; y < 6.1; y += 0.14) {
  for (const x of [-0.675, 0.675]) {
    g.beginPath();
    g.moveTo(x, y - 0.035);
    g.lineTo(x + 0.035, y);
    g.lineTo(x, y + 0.035);
    g.lineTo(x - 0.035, y);
    g.closePath();
    g.fill();
  }
}
for (let y = -5.2; y < 5.6; y += 1.6) {
  g.fillStyle = '#23304a';
  g.beginPath();
  g.moveTo(0, y - 0.5);
  g.lineTo(0.42, y);
  g.lineTo(0, y + 0.5);
  g.lineTo(-0.42, y);
  g.closePath();
  g.fill();
  g.fillStyle = '#b08a4a';
  g.beginPath();
  g.moveTo(0, y - 0.22);
  g.lineTo(0.18, y);
  g.lineTo(0, y + 0.22);
  g.lineTo(-0.18, y);
  g.closePath();
  g.fill();
}
// worn: paler where three centuries of feet went
g.fillStyle = 'rgba(160,120,90,0.14)';
g.fillRect(-0.35, -6.05, 0.7, 12.1);
