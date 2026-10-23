// The hangar's front: corrugated iron in a pale grey-green under a low arched roof, the great gates open — their two
// sliding leaves pushed aside on their rail, the opening (x ±6.2, 6.4 m high) left empty to see in. Over the gate an
// enamel lamp on its bracket (`gate`); on the left, by the field's switch box (`switch`, the lever that lights the
// field), a small work lamp (`work`). The bulbs' glass is the layer `lit` (by `hangar`).
const R = 10.2;
const top = x => -7.4 - 2.3 * (1 - (x / R) ** 2);
// the wall, its gate cut out
g.fillStyle = '#b3b8aa';
g.beginPath();
g.moveTo(-R, 0);
g.lineTo(-R, top(-R));
for (let x = -R; x <= R + 0.01; x += 0.5) g.lineTo(x, top(x));
g.lineTo(R, 0);
g.lineTo(6.2, 0);
g.lineTo(6.2, -6.4);
g.lineTo(-6.2, -6.4);
g.lineTo(-6.2, 0);
g.closePath();
g.fill();
// corrugation: fine vertical ribs, light and shade
g.fillStyle = 'rgba(150,156,146,0.5)';
for (let x = -R + 0.12; x < R; x += 0.24) {
  const base = Math.abs(x) < 6.2 ? -6.4 : 0;
  g.fillRect(x, top(x), 0.07, base - top(x));
}
// the roof's edge: a dark flashing along the arch
g.strokeStyle = '#5c6062';
g.lineWidth = 0.18;
g.beginPath();
g.moveTo(-R, top(-R));
for (let x = -R + 0.5; x <= R + 0.01; x += 0.5) g.lineTo(x, top(x));
g.stroke();
// rust and weathering low on the wall
const foot = g.createLinearGradient(0, -1.6, 0, 0);
foot.addColorStop(0, 'rgba(120,100,80,0)');
foot.addColorStop(1, 'rgba(110,92,74,0.55)');
g.fillStyle = foot;
g.fillRect(-R, -1.6, R - 6.2, 1.6);
g.fillRect(6.2, -1.6, R - 6.2, 1.6);
// the gates' rail and the header over the opening
g.fillStyle = '#4f5355';
g.fillRect(-R, -6.75, 2 * R, 0.22);
g.fillStyle = '#8f9488';
g.fillRect(-6.4, -6.53, 12.8, 0.18);
// the two sliding leaves, pushed aside over the wall: framed, braced
for (const s of [-1, 1]) {
  const x0 = s < 0 ? -10.05 : 6.3;
  g.fillStyle = '#a0a697';
  g.fillRect(x0, -6.5, 3.75, 6.45);
  g.strokeStyle = '#6f7469';
  g.lineWidth = 0.1;
  g.strokeRect(x0 + 0.05, -6.45, 3.65, 6.35);
  g.beginPath();
  g.moveTo(x0 + 0.1, -0.15);
  g.lineTo(x0 + 3.65, -6.4);
  g.moveTo(x0 + 0.1, -3.25);
  g.lineTo(x0 + 3.65, -3.25);
  g.stroke();
  // its rollers on the rail
  g.fillStyle = '#3e4143';
  for (const dx of [0.5, 3.2]) {
    g.beginPath();
    g.arc(x0 + dx, -6.6, 0.12, 0, Math.PI * 2);
    g.fill();
  }
}
// the lamp over the gate: its bracket and a wide enamel shade
g.strokeStyle = '#3b3e40';
g.lineWidth = 0.07;
g.beginPath();
g.moveTo(0, -7.4);
g.lineTo(0, -7.05);
g.stroke();
g.fillStyle = '#3f5a4c';
g.beginPath();
g.moveTo(-0.45, -6.85);
g.quadraticCurveTo(0, -7.25, 0.45, -6.85);
g.closePath();
g.fill();
// the switch box and its lever, on the left of the gate, with its cable up the wall
g.strokeStyle = '#3b3e40';
g.lineWidth = 0.04;
g.beginPath();
g.moveTo(-8.9, -2.05);
g.lineTo(-8.9, -6.75);
g.stroke();
g.fillStyle = '#5b5f5c';
g.fillRect(-9.15, -2.05, 0.5, 0.6);
g.fillStyle = '#2e3032';
g.fillRect(-8.94, -1.95, 0.08, 0.4);
g.fillStyle = '#8c2f2a';
g.beginPath();
g.arc(-8.9, -1.95, 0.06, 0, Math.PI * 2);
g.fill();
e.at(-8.9, -1.75, 'switch');
// the work lamp above it: a small shade on a short arm
g.fillStyle = '#3f5a4c';
g.fillRect(-8.6, -4.06, 0.5, 0.04);
g.beginPath();
g.moveTo(-8.42, -3.86);
g.quadraticCurveTo(-8.2, -4.1, -7.98, -3.86);
g.closePath();
g.fill();
e.layer('lit', {}, c => {
  c.fillStyle = '#fff1d0';
  c.beginPath();
  c.ellipse(0, -6.86, 0.2, 0.07, 0, 0, Math.PI * 2);
  c.fill();
  c.beginPath();
  c.ellipse(-8.2, -3.87, 0.11, 0.045, 0, 0, Math.PI * 2);
  c.fill();
});
e.light(0, -6.75, 0.5, '#ffd6a0', 1, 'gate');
e.light(-8.2, -3.8, 0.3, '#ffcf8f', 1, 'work');
