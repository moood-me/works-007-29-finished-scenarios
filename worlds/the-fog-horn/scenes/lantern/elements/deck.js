// The gallery's floor seen from above (metres, its middle the tower's): a ring of stone slabs, wet and worn, cut by
// joints running out from the middle and one ring joint; inside the lantern room the iron floor plate.
g.fillStyle = '#a9a69f';
g.beginPath();
g.arc(0, 0, 3.05, 0, Math.PI * 2);
g.fill();
g.strokeStyle = '#8c8982';
g.lineWidth = 0.025;
for (let k = 0; k < 24; k++) {
  const a = (k / 24) * Math.PI * 2 + 0.07;
  g.beginPath();
  g.moveTo(1.6 * Math.cos(a), 1.6 * Math.sin(a));
  g.lineTo(3.05 * Math.cos(a), 3.05 * Math.sin(a));
  g.stroke();
}
g.beginPath();
g.arc(0, 0, 2.35, 0, Math.PI * 2);
g.stroke();
// a few darker wet patches and paler worn ones
for (let i = 0; i < 30; i++) {
  const a = e.rnd() * Math.PI * 2;
  const r = 1.7 + e.rnd() * 1.25;
  g.fillStyle = e.rnd() < 0.5 ? 'rgba(120,124,126,0.35)' : 'rgba(196,192,184,0.35)';
  g.beginPath();
  g.ellipse(r * Math.cos(a), r * Math.sin(a), 0.1 + e.rnd() * 0.25, 0.06 + e.rnd() * 0.12, a, 0, Math.PI * 2);
  g.fill();
}
// the iron floor of the lantern room, its rivets
g.fillStyle = '#5b5e60';
g.beginPath();
g.arc(0, 0, 1.6, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#6c6f71';
for (let k = 0; k < 20; k++) {
  const a = (k / 20) * Math.PI * 2;
  g.beginPath();
  g.arc(1.45 * Math.cos(a), 1.45 * Math.sin(a), 0.025, 0, Math.PI * 2);
  g.fill();
}
