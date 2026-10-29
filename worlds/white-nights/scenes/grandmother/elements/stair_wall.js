// The stair's far wall beyond the door (x −2 at the viewer's end … 4 at the back, d = 4.5 + x; y −4.4 under the
// stair's ceiling … 0 at the foot of the flight, the landing's floor at y −1.6): bare boards gone silver-brown, a rail
// along the flight, a little window over the steps (its opening cut at x 1.4…2.0, 1.1…2.1 m over the landing)
const INK = e.lib.INK, { hash } = e.anim;
for (let i = 0; i < 30; i++) {
  const x = -2 + i * 0.2, k = hash(i, 51);
  g.fillStyle = `rgb(${Math.round(176 + 16 * k)},${Math.round(156 + 12 * k)},${Math.round(130 + 10 * k)})`;
  g.fillRect(x, -4.4, 0.2, 4.4);
}
e.lib.wash(g, -2, -4.4, 6, 4.4, [180, 160, 134], 52, 0.3, 0.6, 0.12);
g.beginPath();
for (let i = 0; i <= 30; i++) { g.moveTo(-2 + i * 0.2, -4.4); g.lineTo(-2 + i * 0.2, 0); }
g.strokeStyle = 'rgba(74,63,58,0.35)';
g.lineWidth = 0.008;
g.stroke();
// the window over the steps
e.lib.box(g, 1.32, -3.78, 0.76, 1.16, '#e2d8c4', 0.012);
e.lib.cut(g, 1.4, -3.7, 0.6, 1.0);
g.fillStyle = '#e2d8c4';
g.fillRect(1.68, -3.7, 0.04, 1.0);
g.fillRect(1.4, -3.22, 0.6, 0.04);
// the handrail: level along the landing, then down with the flight
g.beginPath();
g.moveTo(-2, -2.5);
g.lineTo(1.05, -2.5);
g.lineTo(3.95, -0.9);
g.strokeStyle = '#6e4f38';
g.lineWidth = 0.05;
g.stroke();
g.strokeStyle = INK;
g.lineWidth = 0.008;
g.stroke();
