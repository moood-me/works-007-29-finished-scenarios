// The sheet on her easel close (an insert, opened by `board_open`; М3 «Этюд»): a sheet of white paper clamped to the
// board, her study of the dry almond — the crown's bare limbs in light pencil and a wash of sky —, and the line she
// draws with the brush up the trunk from its root (`board#root`) to where it forks (`board#fork`). The brush line is
// a layer under a strip of paper (`veil`) that draws back toward the fork as `sketch_line` rises (its animate), the
// faint pencil of the trunk over both; a blot of colour on the trunk (`blot`) is a layer of its own.
const W = e.aspect;
const cx = W / 2;
// the board round the sheet, and the clamps
g.fillStyle = '#7a5a3a';
g.fillRect(cx - 0.62, -0.05, 1.24, 1.1);
g.fillStyle = '#5a3e26';
g.fillRect(cx - 0.62, -0.05, 1.24, 0.06);
g.fillStyle = '#f2ecdc';
g.fillRect(cx - 0.5, 0.06, 1.0, 0.88);
g.fillStyle = '#8a8070';
for (const x of [cx - 0.35, cx + 0.35]) g.fillRect(x - 0.03, 0.03, 0.06, 0.06);
// a pale wash of sky over the top of the sheet, left off round the tree
const sky = g.createLinearGradient(0, 0.08, 0, 0.5);
sky.addColorStop(0, 'rgba(150,180,215,0.35)');
sky.addColorStop(1, 'rgba(150,180,215,0)');
g.fillStyle = sky;
g.fillRect(cx - 0.48, 0.08, 0.96, 0.42);
// the ground: a soft green wash, the railing's bars in pencil
g.fillStyle = 'rgba(120,150,90,0.3)';
g.fillRect(cx - 0.48, 0.8, 0.96, 0.12);
g.strokeStyle = 'rgba(70,70,70,0.35)';
g.lineWidth = 0.0025;
for (let x = cx - 0.46; x < cx + 0.46; x += 0.035) {
  if (Math.abs(x - cx - 0.01) < 0.06) continue;
  g.beginPath();
  g.moveTo(x, 0.84);
  g.lineTo(x, 0.66);
  g.stroke();
}
// the crown's bare limbs in light pencil, branching up from the fork
const FX = cx + 0.03;
const FY = 0.42;
g.strokeStyle = 'rgba(60,58,54,0.55)';
g.lineCap = 'round';
const limb = (x, y, a, len, w, depth) => {
  const x2 = x + Math.sin(a) * len;
  const y2 = y - Math.cos(a) * len;
  g.lineWidth = w;
  g.beginPath();
  g.moveTo(x, y);
  g.quadraticCurveTo((x + x2) / 2 + 0.01, (y + y2) / 2, x2, y2);
  g.stroke();
  if (depth > 0) {
    limb(x2, y2, a - 0.35 - e.rnd() * 0.2, len * 0.72, w * 0.7, depth - 1);
    limb(x2, y2, a + 0.3 + e.rnd() * 0.2, len * 0.7, w * 0.7, depth - 1);
  }
};
limb(FX, FY, -0.45, 0.13, 0.006, 3);
limb(FX, FY, 0.4, 0.14, 0.006, 3);
limb(FX, FY, 0.02, 0.1, 0.005, 2);
// the brush line up the trunk, root to fork, under its veil
const RX = cx + 0.01;
const RY = 0.84;
const trunk = l => {
  l.beginPath();
  l.moveTo(RX - 0.02, RY);
  l.bezierCurveTo(RX + 0.02, RY - 0.12, RX - 0.03, RY - 0.25, FX, FY);
};
e.layer('line', {}, l => {
  l.strokeStyle = '#5a4a3c';
  l.lineCap = 'round';
  l.lineWidth = 0.014;
  trunk(l);
  l.stroke();
});
e.layer('veil', { pivot: [cx, FY - 0.01] }, l => {
  l.fillStyle = '#f2ecdc';
  l.fillRect(cx - 0.07, FY - 0.01, 0.14, RY - FY + 0.03);
});
// the trunk in faint pencil, to follow
e.layer('guide', {}, l => {
  l.strokeStyle = 'rgba(60,58,54,0.4)';
  l.lineWidth = 0.003;
  l.setLineDash([0.01, 0.006]);
  trunk(l);
  l.stroke();
});
// a blot of brown colour run on the trunk
e.layer('blot', {}, l => {
  l.fillStyle = 'rgba(92,66,44,0.85)';
  l.beginPath();
  l.ellipse(RX - 0.005, 0.63, 0.03, 0.022, 0.3, 0, Math.PI * 2);
  l.fill();
  l.beginPath();
  l.ellipse(RX + 0.03, 0.65, 0.008, 0.006, 0, 0, Math.PI * 2);
  l.fill();
  l.fillRect(RX - 0.006, 0.645, 0.006, 0.05);
});
e.at(RX - 0.02, RY, 'root');
e.at(FX, FY, 'fork');
