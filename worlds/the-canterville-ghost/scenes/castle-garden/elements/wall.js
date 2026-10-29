// The park wall at the far end of the garden and the churchyard (56 m off, 2 m high, 320 m long): old grey stone in
// courses, its coping uneven, ivy hanging over it in dark clumps; open where the avenue goes out at the gates (x 3.6
// to 7.6).
const fall = (e.state.autumn ?? 0) > 0.5;
const run = (a, b) => {
  g.fillStyle = '#8a857a';
  g.beginPath();
  g.moveTo(a, 0.1);
  g.lineTo(a, -2.0);
  let x = a;
  while (x < b) {
    const step = Math.min(b - x, 1 + e.rnd() * 2.5);
    g.lineTo(x + step, -2.0 + e.rnd() * 0.12);
    x += step;
  }
  g.lineTo(b, 0.1);
  g.closePath();
  g.fill();
  g.fillStyle = '#6e6a60';
  for (let i = 0; i < (b - a) * 5; i++) g.fillRect(a + e.rnd() * (b - a), -2 + e.rnd() * 2, 0.15 + e.rnd() * 0.3, 0.08 + e.rnd() * 0.1);
  for (let xx = a; xx < b; xx += 1.2 + e.rnd() * 3) {
    if (e.rnd() < 0.4) continue;
    const w = 0.8 + e.rnd() * 1.8;
    const hang = 0.4 + e.rnd() * 1.1;
    g.fillStyle = fall ? (e.rnd() < 0.5 ? '#3a3a22' : '#5a3a22') : e.rnd() < 0.5 ? '#2e4426' : '#3a5230';
    for (let k = 0; k < 24; k++) {
      const u = e.rnd();
      g.beginPath();
      g.arc(Math.min(b, xx + u * w), -2.05 + e.rnd() * hang * (1 - Math.abs(u - 0.5) * 1.4), 0.08 + e.rnd() * 0.12, 0, Math.PI * 2);
      g.fill();
    }
  }
};
run(-160, 3.6);
run(7.6, 160);
