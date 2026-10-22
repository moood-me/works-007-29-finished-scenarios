// The earth floor from above (metres; its middle at distance 3.75, y toward the viewer): beaten earth, swept smooth in
// arcs, worn paler where feet go; the rain blown in at the door darkening it there; the rooster's string from the
// bed's foot to his leg, the kernels of corn round him and his tin of water.
g.fillStyle = '#9b7b5c';
g.fillRect(-3.0, -1.9, 6.0, 3.8);
for (let i = 0; i < 70; i++) {
  g.fillStyle = e.rnd() < 0.5 ? 'rgba(122,94,68,0.35)' : 'rgba(178,150,118,0.3)';
  g.beginPath();
  g.ellipse(-3 + e.rnd() * 6, -1.9 + e.rnd() * 3.8, 0.2 + e.rnd() * 0.6, 0.1 + e.rnd() * 0.3, e.rnd() * 3, 0, Math.PI * 2);
  g.fill();
}
// the broom's arcs
g.strokeStyle = 'rgba(80,60,42,0.18)';
g.lineWidth = 0.01;
for (let i = 0; i < 26; i++) {
  const cx = -2.6 + e.rnd() * 5.2;
  const cy = -1.6 + e.rnd() * 3.2;
  for (let k = 0; k < 4; k++) {
    g.beginPath();
    g.arc(cx, cy, 0.28 + k * 0.03, 3.6 + e.rnd() * 0.3, 5.0 + e.rnd() * 0.4);
    g.stroke();
  }
}
// worn paths: from the door to the stove and to the bed
g.fillStyle = 'rgba(190,164,130,0.28)';
g.beginPath();
g.ellipse(-1.6, 0.0, 1.3, 0.45, -0.3, 0, Math.PI * 2);
g.fill();
g.beginPath();
g.ellipse(0.4, -0.3, 1.0, 0.5, 0.1, 0, Math.PI * 2);
g.fill();
// the wet by the door
const wet = g.createRadialGradient(-3.0, 0.55, 0.05, -3.0, 0.55, 0.9);
wet.addColorStop(0, 'rgba(70,52,38,0.75)');
wet.addColorStop(1, 'rgba(70,52,38,0)');
g.fillStyle = wet;
g.fillRect(-3.0, -0.4, 1.0, 1.9);
// the string from the foot of the bed (0.92, −0.7) to the rooster's leg (0.66, 0.02), slack on the earth
g.strokeStyle = '#d9cfb8';
g.lineWidth = 0.012;
g.beginPath();
g.moveTo(0.92, -0.7);
g.bezierCurveTo(1.05, -0.45, 0.5, -0.3, 0.66, 0.02);
g.stroke();
// the corn and the water tin
g.fillStyle = '#e0b84a';
for (let i = 0; i < 40; i++) {
  const a = e.rnd() * 6.28;
  const r = 0.05 + e.rnd() * 0.3;
  g.beginPath();
  g.ellipse(0.55 + Math.cos(a) * r, 0.12 + Math.sin(a) * r * 0.7, 0.009, 0.007, a, 0, Math.PI * 2);
  g.fill();
}
g.fillStyle = '#8f9290';
g.beginPath();
g.arc(0.28, -0.12, 0.1, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#a9b0b2';
g.beginPath();
g.arc(0.28, -0.12, 0.085, 0, Math.PI * 2);
g.fill();
