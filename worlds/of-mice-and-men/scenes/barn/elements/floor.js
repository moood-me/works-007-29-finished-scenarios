// The barn floor from above (metres, its middle 4.25 m ahead, y toward the viewer): earth packed hard by hooves and
// boots, dun and grey, worn paler down the aisle; old hay trodden into it everywhere, thick by the stalls and toward
// the pile at the back right, a few dark wet patches before the stalls.
g.fillStyle = '#8b7357';
g.fillRect(-4.95, -4.8, 9.9, 9.6);
g.fillStyle = 'rgba(176,150,112,0.35)';
g.beginPath();
g.ellipse(0.4, 0, 1.6, 4.9, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = 'rgba(70,52,36,0.3)';
for (const [x, y, rx, ry] of [[-2.9, 0.4, 0.5, 0.25], [-3.0, -1.6, 0.45, 0.3], [-2.8, 2.6, 0.4, 0.2]]) {
  g.beginPath();
  g.ellipse(x, y, rx, ry, 0.3, 0, Math.PI * 2);
  g.fill();
}
// the hay: pale gold before the pile, duller straw before the stalls
g.fillStyle = 'rgba(196,164,96,0.55)';
g.beginPath();
g.ellipse(2.4, -3.4, 2.6, 1.6, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = 'rgba(160,132,84,0.4)';
g.fillRect(-4.95, -4.8, 2.4, 9.6);
e.lib.straw(g, 0, -4.8, 4.6, -1.4, 900, ['#d2b26c', '#c09a58', '#e0c486', '#a8874e'], e.rnd);
e.lib.straw(g, -4.95, -4.8, -1.8, 4.8, 700, ['#b39463', '#9c7f52', '#c4a774'], e.rnd);
e.lib.straw(g, -1.8, -4.8, 4.6, 4.8, 500, ['#b49766', '#a1865a', '#c9ae7a'], e.rnd);
