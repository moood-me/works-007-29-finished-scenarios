// The eye-level grill over the hob (x -0.32...0.32, 0.25 m high): its cream housing, the dark mouth with the grill pan
// pulled out a little, two slices of toast on it going black at the edges, the element glowing red over them — the
// glow a layer of added light (on the key "grill"); its light is the point "grill#bars".
const on = e.state.grill ?? 1;
g.fillStyle = '#ece4cf';
g.fillRect(-0.32, -0.25, 0.64, 0.25);
g.fillStyle = '#2a2624';
g.fillRect(-0.27, -0.2, 0.54, 0.16);
// the pan's handle and front lip, the toast on it
g.fillStyle = '#c9cccc';
g.fillRect(-0.27, -0.05, 0.54, 0.025);
g.fillRect(-0.06, -0.03, 0.12, 0.02);
for (const x of [-0.15, 0.05]) {
  g.fillStyle = '#c99a5a';
  g.fillRect(x, -0.09, 0.12, 0.04);
  g.fillStyle = '#3b2a20';
  g.fillRect(x, -0.09, 0.12, 0.012);
  g.fillRect(x + 0.09, -0.09, 0.03, 0.04);
}
if (on > 0) {
  e.layer('element', { flicker: 0.12, blend: 'add', box: [-0.27, -0.2, 0.27, -0.08] }, g => {
    const glow = g.createLinearGradient(0, -0.2, 0, -0.08);
    glow.addColorStop(0, `rgba(255, 110, 50, ${0.9 * on})`);
    glow.addColorStop(1, 'rgba(200, 50, 20, 0)');
    g.fillStyle = glow;
    g.fillRect(-0.27, -0.2, 0.54, 0.12);
    g.strokeStyle = `rgba(255, 150, 80, ${on})`;
    g.lineWidth = 0.008;
    for (let x = -0.24; x <= 0.24; x += 0.06) {
      g.beginPath();
      g.moveTo(x, -0.18);
      g.lineTo(x + 0.03, -0.17);
      g.stroke();
    }
  });
}
e.light(0, -0.14, 0.12, '#ff7a3c', 0.6 * on, 'bars');
