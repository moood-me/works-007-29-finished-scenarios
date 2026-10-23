// The hangar's floor seen from above: concrete darker than the apron, oil-stained where the planes stand.
g.fillStyle = '#93908a';
g.fillRect(-10.2, -7, 20.4, 14);
for (const [x, y, r] of [[-2, 0, 1.6], [4.5, -2, 1.2], [-6, -3, 0.9], [1, 3.5, 1]]) {
  const s = g.createRadialGradient(x, y, 0, x, y, r);
  s.addColorStop(0, 'rgba(56,54,52,0.55)');
  s.addColorStop(1, 'rgba(56,54,52,0)');
  g.fillStyle = s;
  g.beginPath();
  g.arc(x, y, r, 0, Math.PI * 2);
  g.fill();
}
