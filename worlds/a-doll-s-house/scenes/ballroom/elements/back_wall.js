// The ballroom's back wall (7 m): two tall windows to the street (x ±1.65…±2.75, from 0.55 m to 2.85 m), cut
// through, their silk curtains drawn back under gilt pelmets; between them the great pier glass in its gilt frame (its
// glass is the plane `mirror`, before the wall); fluted pilasters between.
const { GILT } = e.lib;
e.lib.wall(g, -3.55, 3.55, []);
for (const x of [-3.38, -1.2, 1.2, 3.38]) e.lib.pilaster(g, x);
// the pier glass's frame: a gilt moulding, a cresting of scrolls and a shell at its top
g.fillStyle = GILT;
g.fillRect(-0.82, -2.97, 1.64, 2.74);
g.fillStyle = '#d8bd78';
g.fillRect(-0.76, -2.91, 1.52, 2.62);
g.fillStyle = '#9c7c3c';
g.fillRect(-0.72, -2.87, 1.44, 2.54);
g.fillStyle = GILT;
g.beginPath();
g.moveTo(-0.6, -2.97);
g.quadraticCurveTo(-0.3, -3.22, 0, -3.25);
g.quadraticCurveTo(0.3, -3.22, 0.6, -2.97);
g.closePath();
g.fill();
g.fillStyle = '#e0c780';
g.beginPath();
g.ellipse(0, -3.08, 0.12, 0.09, 0, 0, Math.PI * 2);
g.fill();
// the console under it, a gilt shelf on a scrolled leg
g.fillStyle = GILT;
g.fillRect(-0.55, -0.36, 1.1, 0.06);
g.beginPath();
g.moveTo(-0.1, -0.3);
g.quadraticCurveTo(-0.25, -0.15, -0.05, 0);
g.lineTo(0.05, 0);
g.quadraticCurveTo(0.25, -0.15, 0.1, -0.3);
g.closePath();
g.fill();
// the windows: their architraves, sills, the openings cut through
for (const s of [-1, 1]) {
  const x0 = s > 0 ? 1.65 : -2.75;
  g.fillStyle = '#f2ecdc';
  g.fillRect(x0 - 0.1, -2.95, 1.3, 2.45);
  g.fillStyle = '#ddd3bd';
  g.fillRect(x0 - 0.14, -0.6, 1.38, 0.07);
}
g.globalCompositeOperation = 'destination-out';
g.fillRect(-2.75, -2.85, 1.1, 2.3);
g.fillRect(1.65, -2.85, 1.1, 2.3);
g.globalCompositeOperation = 'source-over';
// the curtains, the pelmets with their gilt fringe
for (const s of [-1, 1]) {
  e.lib.drape(g, s * 3.2, s * 2.64, -3.0, -1.45);
  e.lib.drape(g, s * 1.3, s * 1.76, -3.0, -1.45);
  const x0 = s > 0 ? 1.22 : -3.22;
  g.fillStyle = '#a3823f';
  g.fillRect(x0, -3.12, 2.0, 0.26);
  g.fillStyle = '#e0c780';
  for (let x = x0 + 0.04; x < x0 + 2.0; x += 0.1) g.fillRect(x, -2.86, 0.05, 0.06);
}
