// The porch before the door: two pale columns on their bases, an entablature and a low pediment over them (metres: x
// across from its middle, y up from the forecourt); open between the columns — the door is the front's.
g.fillStyle = '#e4dbc3';
// the pediment, the entablature
g.beginPath();
g.moveTo(-2.55, -5.15);
g.lineTo(0, -6.25);
g.lineTo(2.55, -5.15);
g.closePath();
g.fill();
g.fillStyle = '#d5cab0';
g.beginPath();
g.moveTo(-2.1, -5.25);
g.lineTo(0, -6.0);
g.lineTo(2.1, -5.25);
g.closePath();
g.fill();
g.fillStyle = '#e4dbc3';
g.fillRect(-2.5, -5.2, 5, 0.62);
g.fillStyle = 'rgba(90,76,54,0.35)';
g.fillRect(-2.5, -4.62, 5, 0.06);
// the columns: base, shaft (a little darker at the edges, rounded), capital
for (const x of [-1.95, 1.95]) {
  g.fillStyle = '#ddd3ba';
  g.fillRect(x - 0.32, -0.36, 0.64, 0.36);
  const shaft = g.createLinearGradient(x - 0.22, 0, x + 0.22, 0);
  shaft.addColorStop(0, '#c9bea3');
  shaft.addColorStop(0.5, '#e8dfc8');
  shaft.addColorStop(1, '#c9bea3');
  g.fillStyle = shaft;
  g.fillRect(x - 0.22, -4.3, 0.44, 3.94);
  g.fillStyle = '#ddd3ba';
  g.fillRect(x - 0.32, -4.58, 0.64, 0.28);
}
