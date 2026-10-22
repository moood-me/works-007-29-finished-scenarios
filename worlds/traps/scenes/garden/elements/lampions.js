// The paper lanterns strung over the table from one chestnut to the other: a sagging cord, seven lanterns — round ones
// and tall pleated ones, orange, red, yellow, white — each hanging from its hook and swinging a little in the air,
// lit inside (their lights l0…l6 light the table and the people under them).
const cordY = x => -3.45 + 0.42 * (1 - (x / 4.9) * (x / 4.9));
g.strokeStyle = '#3b3430';
g.lineWidth = 0.018;
g.beginPath();
for (let x = -4.9; x <= 4.9; x += 0.2) {
  if (x === -4.9) g.moveTo(x, cordY(x));
  else g.lineTo(x, cordY(x));
}
g.stroke();
const papers = ['#f0a040', '#e0553c', '#f3cf68', '#f4ecdc', '#ec8a48', '#d94c3e', '#f2c25a'];
for (let i = 0; i < 7; i++) {
  const x = -3.45 + i * 1.15 + (e.rnd() - 0.5) * 0.2;
  const hook = cordY(x);
  const tall = i % 2 === 1;
  const drop = 0.1 + e.rnd() * 0.12;
  e.layer(`lantern${i}`, { pivot: [x, hook], wind: { strength: 0.35, gust: 0.7 } }, c => {
    c.strokeStyle = '#3b3430';
    c.lineWidth = 0.012;
    c.beginPath();
    c.moveTo(x, hook);
    c.lineTo(x, hook + drop);
    c.stroke();
    const top = hook + drop;
    const h = tall ? 0.44 : 0.32;
    const w = tall ? 0.15 : 0.17;
    const cy = top + 0.03 + h / 2;
    c.fillStyle = '#2e2926';
    c.fillRect(x - w * 0.45, top, w * 0.9, 0.035);
    c.fillRect(x - w * 0.45, top + h + 0.02, w * 0.9, 0.035);
    c.fillStyle = papers[i];
    c.beginPath();
    c.ellipse(x, cy, w, h / 2, 0, 0, Math.PI * 2);
    c.fill();
    // the paper's pleats
    c.strokeStyle = 'rgba(120, 50, 20, 0.35)';
    c.lineWidth = 0.008;
    c.beginPath();
    for (let r = 1; r < (tall ? 9 : 6); r++) {
      const y = cy - h / 2 + (h * r) / (tall ? 9 : 6);
      const half = w * Math.sqrt(Math.max(0, 1 - ((y - cy) / (h / 2)) ** 2));
      c.moveTo(x - half, y);
      c.lineTo(x + half, y);
    }
    c.stroke();
    e.light(x, cy, 0.22, papers[i], 0.9, `l${i}`);
  });
}
