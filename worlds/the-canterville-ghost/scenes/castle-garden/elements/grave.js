// The grave under the yew, from above (2 m by 1 m), as the key `grave` says: none — the grass; open — the pit dug,
// dark, fresh earth round its lip; mound — filled in, a long heap of fresh brown earth, the cross of almond blossom
// laid on it if `cross`.
const grave = e.state.grave ?? 'none';
if (grave === 'open') {
  g.fillStyle = '#5c4434';
  g.beginPath();
  g.ellipse(0, 0, 1.15, 0.65, 0, 0, Math.PI * 2);
  g.fill();
  for (let i = 0; i < 90; i++) {
    const a = e.rnd() * Math.PI * 2;
    g.fillStyle = ['#6a4e3a', '#4a3628', '#56402e'][Math.floor(e.rnd() * 3)];
    g.beginPath();
    g.arc(Math.cos(a) * (0.95 + e.rnd() * 0.2), Math.sin(a) * (0.5 + e.rnd() * 0.12), 0.03 + e.rnd() * 0.05, 0, Math.PI * 2);
    g.fill();
  }
  g.fillStyle = '#15100c';
  g.fillRect(-0.95, -0.42, 1.9, 0.84);
  g.fillStyle = '#3a2a20';
  g.fillRect(-0.95, 0.3, 1.9, 0.12);
  e.at(0, 0, 'pit');
} else if (grave === 'mound') {
  g.fillStyle = '#6a4e3a';
  g.beginPath();
  g.ellipse(0, 0, 1.05, 0.5, 0, 0, Math.PI * 2);
  g.fill();
  for (let i = 0; i < 120; i++) {
    const a = e.rnd() * Math.PI * 2;
    const d = Math.sqrt(e.rnd());
    g.fillStyle = ['#7a5a42', '#56402e', '#62483a'][Math.floor(e.rnd() * 3)];
    g.beginPath();
    g.arc(Math.cos(a) * d * 0.95, Math.sin(a) * d * 0.45, 0.02 + e.rnd() * 0.04, 0, Math.PI * 2);
    g.fill();
  }
  if (e.state.cross) {
    for (const [x0, y0, x1, y1] of [[-0.6, 0, 0.45, 0], [-0.25, -0.28, -0.25, 0.28]]) {
      for (let u = 0; u <= 1; u += 0.07) {
        g.fillStyle = e.rnd() < 0.3 ? '#f2ccd4' : '#f8f4ee';
        g.beginPath();
        g.arc(x0 + (x1 - x0) * u + (e.rnd() - 0.5) * 0.04, y0 + (y1 - y0) * u + (e.rnd() - 0.5) * 0.04, 0.045, 0, Math.PI * 2);
        g.fill();
      }
    }
  }
  e.at(0, 0, 'pit');
}
