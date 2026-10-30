// The hangar at the field's edge (after the field's): corrugated iron in a pale grey-green under a low arched roof, its
// great gate open and lit inside — the back wall warm under the lamps, a spare propeller and a wheel on it, a plane's
// tail in the gloom on the right —; the enamel lamp over the gate (`gate`), the lamps inside (`in0`, `in1`) pouring
// their light out onto the apron and the European standing there. Metres from the middle of its foot, y up negative.
const R = 12;
const top = x => -8.4 - 2.6 * (1 - (x / R) ** 2);
const GW = 7.2;
const GH = 6.8;
// the inside, seen through the gate: the back wall in the lamps' light, the floor
g.fillStyle = '#e2d2b0';
g.fillRect(-GW, -GH, 2 * GW, GH);
g.fillStyle = '#b8a888';
g.fillRect(-GW, -1.2, 2 * GW, 1.2);
// the tool board, a spare propeller and a wheel on the back wall
g.fillStyle = '#8a7356';
g.fillRect(-5.8, -4.2, 3.4, 1.8);
g.fillStyle = '#6e4a2e';
g.beginPath();
g.ellipse(-0.8, -4.0, 0.2, 2.2, 0.15, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#3a3a3c';
g.beginPath();
g.arc(1.6, -2.0, 0.6, 0, Math.PI * 2);
g.fill();
// a plane's tail in the gloom on the right: the fin and the stabiliser, the fabric pale
g.fillStyle = '#a6a59a';
g.beginPath();
g.moveTo(3.2, -1.6);
g.lineTo(6.8, -2.0);
g.lineTo(7.2, -4.4);
g.lineTo(6.2, -4.6);
g.lineTo(5.4, -2.4);
g.closePath();
g.fill();
g.fillStyle = '#7a2a26';
g.fillRect(6.3, -4.3, 0.8, 0.9);
// the wall, its gate cut out
g.fillStyle = '#b3b8aa';
g.beginPath();
g.moveTo(-R, 0);
for (let x = -R; x <= R + 0.01; x += 0.5) g.lineTo(x, top(x));
g.lineTo(R, 0);
g.lineTo(GW, 0);
g.lineTo(GW, -GH);
g.lineTo(-GW, -GH);
g.lineTo(-GW, 0);
g.closePath();
g.fill();
// corrugation: fine vertical ribs
g.fillStyle = 'rgba(150,156,146,0.5)';
for (let x = -R + 0.15; x < R; x += 0.3) {
  const base = Math.abs(x) < GW ? -GH : 0;
  g.fillRect(x, top(x), 0.09, base - top(x));
}
// the roof's edge along the arch, the gates' rail, the two leaves pushed aside
g.strokeStyle = '#5c6062';
g.lineWidth = 0.2;
g.beginPath();
g.moveTo(-R, top(-R));
for (let x = -R + 0.5; x <= R + 0.01; x += 0.5) g.lineTo(x, top(x));
g.stroke();
g.fillStyle = '#4f5355';
g.fillRect(-R, -GH - 0.35, 2 * R, 0.24);
for (const s of [-1, 1]) {
  const x0 = s < 0 ? -R + 0.2 : GW + 0.2;
  g.fillStyle = '#a0a697';
  g.fillRect(x0, -GH - 0.1, R - GW - 0.4, GH + 0.05);
  g.strokeStyle = '#6f7469';
  g.lineWidth = 0.12;
  g.strokeRect(x0 + 0.05, -GH - 0.05, R - GW - 0.5, GH - 0.05);
}
// rust and weathering low on the wall
const foot = g.createLinearGradient(0, -1.8, 0, 0);
foot.addColorStop(0, 'rgba(120,100,80,0)');
foot.addColorStop(1, 'rgba(110,92,74,0.55)');
g.fillStyle = foot;
g.fillRect(-R, -1.8, R - GW, 1.8);
g.fillRect(GW, -1.8, R - GW, 1.8);
// the lamp over the gate on its bracket; the lamps inside under the roof
g.fillStyle = '#3e4143';
g.fillRect(-0.06, -GH - 1.3, 0.12, 0.9);
g.beginPath();
g.moveTo(-0.6, -GH - 0.4);
g.lineTo(0.6, -GH - 0.4);
g.lineTo(0.3, -GH - 0.75);
g.lineTo(-0.3, -GH - 0.75);
g.closePath();
g.fill();
g.fillStyle = '#fff1cf';
g.beginPath();
g.arc(0, -GH - 0.35, 0.18, 0, Math.PI * 2);
g.fill();
for (const x of [-3.6, 3.6]) {
  g.beginPath();
  g.arc(x, -GH + 0.6, 0.22, 0, Math.PI * 2);
  g.fill();
}
e.light(0, -GH - 0.35, 4, '#ffd6a0', 1, 'gate');
e.light(-3.6, -GH + 0.6, 6, '#ffd49a', 1.6, 'in0');
e.light(3.6, -GH + 0.6, 6, '#ffd49a', 1.6, 'in1');
