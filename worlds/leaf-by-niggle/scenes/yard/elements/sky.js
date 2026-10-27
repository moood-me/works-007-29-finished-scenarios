// The sky the day after the storm (stage heights; the horizon at 0.42): washed pale blue and gold, warmer to the
// right, where the low sun is (behind the viewer's right shoulder); over the hills to the right the next storm's
// slate-grey bank coming on. `storm` 0…1 (its animate) brings the bank over: it slides left across the sky.
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
// the storm's bank over the hills to the right, behind the cottage: heaped slate rounds over a flat dark underside,
// their tops caught by the sun, rain hanging under it in streaks; its left edge thins into the clear sky
e.layer('bank', { box: [e.aspect * 0.42, -0.35, e.aspect + 1.6, 0.47] }, l => {
  const left = e.aspect * 0.55;
  const end = e.aspect + 1.6;
  const fade = l.createLinearGradient(left, 0, left + 0.5, 0);
  fade.addColorStop(0, 'rgba(86,94,108,0)');
  fade.addColorStop(1, 'rgba(86,94,108,0.92)');
  l.fillStyle = fade;
  l.fillRect(left, -0.35, 0.5, 0.63);
  l.fillStyle = 'rgba(86,94,108,0.92)';
  l.fillRect(left + 0.5, -0.35, end - left - 0.5, 0.63);
  // its strata: long low rolls one over another, soft-edged, their tops caught by the sun
  l.filter = 'blur(0.012px)';
  for (let i = 0; i < 34; i++) {
    const x = left - 0.1 + e.rnd() * (end - left + 0.1);
    const y = 0.24 - e.rnd() * e.rnd() * 0.55;
    const w = 0.25 + e.rnd() * 0.5;
    const t = 0.03 + e.rnd() * 0.05;
    const a = Math.max(0, Math.min(1, (x - left) / 0.6));
    const k = e.rnd();
    l.fillStyle = `rgba(${84 + Math.floor(k * 24)},${92 + Math.floor(k * 22)},${108 + Math.floor(k * 18)},${0.85 * a})`;
    l.beginPath();
    l.ellipse(x, y, w, t, 0, 0, Math.PI * 2);
    l.fill();
    l.fillStyle = `rgba(232,212,176,${0.3 * a})`;
    l.beginPath();
    l.ellipse(x - w * 0.1, y - t * 0.75, w * 0.7, t * 0.22, 0, 0, Math.PI * 2);
    l.fill();
  }
  l.filter = 'none';
  // the flat underside and the rain under it, toward the hills
  l.fillStyle = 'rgba(70,76,88,0.9)';
  l.fillRect(left + 0.6, 0.26, end - left - 0.6, 0.05);
  l.strokeStyle = 'rgba(92,100,112,0.35)';
  l.lineWidth = 0.004;
  for (let i = 0; i < 120; i++) {
    const x = left + 0.7 + e.rnd() * (end - left - 0.7);
    l.beginPath();
    l.moveTo(x, 0.3);
    l.lineTo(x - 0.02, 0.3 + 0.06 + e.rnd() * 0.08);
    l.stroke();
  }
});
