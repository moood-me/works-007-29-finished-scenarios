// The sky the day after the storm (stage heights; the horizon at 0.42): washed pale blue and gold to the right, where
// the low sun is; to the left, over the hills, the next storm's slate-grey bank coming on. `storm` 0…1 (its animate)
// brings the bank over: it slides right and the sky under it darkens.
const sky = g.createLinearGradient(0, -0.35, 0, 1.25);
sky.addColorStop(0, '#8fa3b8');
sky.addColorStop(0.3, '#b7c3cc');
sky.addColorStop(0.42, '#e6dcc2');
sky.addColorStop(1, '#e2d4b4');
g.fillStyle = sky;
g.fillRect(-0.3, -0.35, e.aspect + 0.6, 1.6);
// the sun's side warmer
const side = g.createLinearGradient(e.aspect * 0.4, 0, e.aspect + 0.3, 0);
side.addColorStop(0, 'rgba(250,226,170,0)');
side.addColorStop(1, 'rgba(250,226,170,0.45)');
g.fillStyle = side;
g.fillRect(-0.3, -0.35, e.aspect + 0.6, 1.6);
// light washed clouds high up, drifting
e.layer('clouds', { drift: [0.003, 0], box: [-0.3, -0.3, e.aspect + 0.3, 0.3] }, l => {
  for (let i = 0; i < 10; i++) {
    const x = -0.3 + e.rnd() * (e.aspect + 0.6);
    const y = -0.2 + e.rnd() * 0.42;
    const w = 0.12 + e.rnd() * 0.25;
    l.fillStyle = 'rgba(246,240,228,0.45)';
    l.beginPath();
    l.ellipse(x, y, w, 0.015 + e.rnd() * 0.02, 0, 0, Math.PI * 2);
    l.fill();
  }
});
// the storm's bank: heaped slate rounds over a flat dark underside, its top edge lit, rain hanging under it in streaks
e.layer('bank', { box: [-1.6, -0.35, e.aspect * 0.62, 0.47] }, l => {
  const right = e.aspect * 0.5;
  const fade = l.createLinearGradient(right - 0.5, 0, right, 0);
  fade.addColorStop(0, 'rgba(86,94,108,0.92)');
  fade.addColorStop(1, 'rgba(86,94,108,0)');
  l.fillStyle = 'rgba(86,94,108,0.92)';
  l.fillRect(-1.6, -0.35, right - 0.5 + 1.6, 0.63);
  l.fillStyle = fade;
  l.fillRect(right - 0.5, -0.35, 0.5, 0.63);
  for (let i = 0; i < 46; i++) {
    const x = -1.6 + e.rnd() * (right + 1.45);
    const y = 0.2 - e.rnd() * 0.5;
    const r = 0.06 + e.rnd() * 0.12;
    const a = Math.max(0, Math.min(1, (right - x) / 0.6));
    l.fillStyle = `rgba(${96 + Math.floor(e.rnd() * 22)},${104 + Math.floor(e.rnd() * 20)},${118 + Math.floor(e.rnd() * 18)},${0.9 * a})`;
    l.beginPath();
    l.ellipse(x, y, r * 1.4, r, 0, 0, Math.PI * 2);
    l.fill();
    l.fillStyle = `rgba(214,206,190,${0.35 * a})`;
    l.beginPath();
    l.ellipse(x + r * 0.2, y - r * 0.7, r * 0.9, r * 0.25, 0, 0, Math.PI * 2);
    l.fill();
  }
  // the flat underside and the rain under it, toward the hills
  l.fillStyle = 'rgba(70,76,88,0.9)';
  l.fillRect(-1.6, 0.26, right - 0.6 + 1.6, 0.05);
  l.strokeStyle = 'rgba(92,100,112,0.35)';
  l.lineWidth = 0.004;
  for (let i = 0; i < 120; i++) {
    const x = -1.6 + e.rnd() * (right - 0.7 + 1.6);
    l.beginPath();
    l.moveTo(x, 0.3);
    l.lineTo(x - 0.02, 0.3 + 0.06 + e.rnd() * 0.08);
    l.stroke();
  }
});
