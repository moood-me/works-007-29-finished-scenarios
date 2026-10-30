// Canterville by night, from the lawn (the play's map: its background, painted once): a deep blue night going pale toward
// the land, the stars, the moon high on the left in its ring of haze, a few long clouds; low across the frame the manor
// — gables, towers, chimneys, the battlements — black against the sky, its windows dark but one: high on the right the
// Tapestry Chamber's, a cold pale light in it; the old dry almond on the left before it, the lawn dark under all.
// In stage heights: x 0..A the stage (painted on past both sides), y 0 its top .. 1 its foot.
const A = e.aspect, X0 = -0.4, X1 = A + 0.4, Y0 = -0.4, Y1 = 1.3;
const R = () => e.rnd();
// the night
const sky = g.createLinearGradient(0, Y0, 0, 0.78);
sky.addColorStop(0, '#070b18');
sky.addColorStop(0.45, '#101a33');
sky.addColorStop(0.85, '#22314f');
sky.addColorStop(1, '#3a4864');
g.fillStyle = sky;
g.fillRect(X0, Y0, X1 - X0, Y1 - Y0);
// the stars: small, thin toward the land
for (let i = 0; i < 260; i++) {
  const x = X0 + R() * (X1 - X0), y = Y0 + Math.pow(R(), 1.6) * 0.95;
  const r = 0.0012 + R() * 0.0022;
  g.fillStyle = `rgba(230,236,255,${(0.35 + R() * 0.6) * (1 - Math.max(0, y - 0.3) * 1.4)})`;
  g.beginPath();
  g.arc(x, y, r, 0, Math.PI * 2);
  g.fill();
}
// the moon in its ring of haze
const M = { x: 0.32, y: 0.16, r: 0.045 };
const halo = g.createRadialGradient(M.x, M.y, M.r * 0.8, M.x, M.y, M.r * 7);
halo.addColorStop(0, 'rgba(210,222,245,0.35)');
halo.addColorStop(0.3, 'rgba(160,180,220,0.12)');
halo.addColorStop(1, 'rgba(120,140,190,0)');
g.fillStyle = halo;
g.fillRect(M.x - M.r * 7, M.y - M.r * 7, M.r * 14, M.r * 14);
g.fillStyle = '#f1f0e4';
g.beginPath();
g.arc(M.x, M.y, M.r, 0, Math.PI * 2);
g.fill();
g.fillStyle = 'rgba(160,165,170,0.25)';
for (const [dx, dy, r] of [[-0.012, -0.008, 0.012], [0.014, 0.01, 0.009], [0.004, 0.02, 0.006]]) {
  g.beginPath();
  g.arc(M.x + dx, M.y + dy, r, 0, Math.PI * 2);
  g.fill();
}
e.light(M.x, M.y, M.r * 4, '#dfe6ff', 0.5, 'moon');
// the clouds: long thin bands, lit at their edges by the moon
e.layer('clouds', {}, l => {
  for (let i = 0; i < 9; i++) {
    const cx = X0 + R() * (X1 - X0), cy = 0.08 + R() * 0.38, w = 0.25 + R() * 0.45, h = 0.012 + R() * 0.02;
    const c = l.createLinearGradient(0, cy - h, 0, cy + h);
    c.addColorStop(0, 'rgba(120,135,170,0.35)');
    c.addColorStop(1, 'rgba(40,50,75,0.45)');
    l.fillStyle = c;
    l.beginPath();
    l.ellipse(cx, cy, w, h, 0, 0, Math.PI * 2);
    l.fill();
  }
});
// the lawn
const lawn = g.createLinearGradient(0, 0.84, 0, Y1);
lawn.addColorStop(0, '#16201c');
lawn.addColorStop(1, '#070a09');
g.fillStyle = lawn;
g.fillRect(X0, 0.84, X1 - X0, Y1 - 0.84);
// the manor: a long black front across the frame, its roofline broken by gables, two towers with battlements,
// chimney stacks
const BASE = 0.86, BLACK = '#05070c';
g.fillStyle = BLACK;
g.beginPath();
g.moveTo(X0, BASE);
let x = X0;
const roof = 0.66;
g.lineTo(x, roof);
const parts = [];
while (x < X1) {
  const kind = R();
  if (kind < 0.18) { // a tower with battlements
    const w = 0.09 + R() * 0.04, top = 0.5 + R() * 0.05;
    g.lineTo(x, top);
    for (let k = 0; k < 5; k++) {
      const s = w / 5;
      g.lineTo(x + k * s, top - (k % 2 ? 0 : 0.018));
      g.lineTo(x + (k + 1) * s, top - (k % 2 ? 0 : 0.018));
    }
    g.lineTo(x + w, roof);
    parts.push(['tower', x, w, top]);
    x += w;
  } else if (kind < 0.55) { // a gable
    const w = 0.07 + R() * 0.05, top = 0.58 + R() * 0.03;
    g.lineTo(x + w / 2, top);
    g.lineTo(x + w, roof);
    parts.push(['gable', x, w, top]);
    x += w;
  } else { // a run of roof, a chimney stack on it
    const w = 0.08 + R() * 0.1;
    const c = x + w * (0.3 + R() * 0.4), ch = 0.05 + R() * 0.03;
    g.lineTo(c, roof);
    g.lineTo(c, roof - ch);
    g.lineTo(c + 0.012, roof - ch - 0.006);
    g.lineTo(c + 0.026, roof - ch);
    g.lineTo(c + 0.026, roof);
    g.lineTo(x + w, roof);
    parts.push(['roof', x, w, roof]);
    x += w;
  }
}
g.lineTo(X1, BASE);
g.closePath();
g.fill();
// its windows: tall, mullioned, all dark — the moon faint on their glass
const TAPESTRY = { x: A * 0.72, y: 0.69 };
for (let wx = X0 + 0.04; wx < X1; wx += 0.055 + R() * 0.02) {
  for (const wy of [0.7, 0.785]) {
    if (Math.abs(wx - TAPESTRY.x) < 0.04 && wy === 0.7) continue;
    g.fillStyle = `rgba(70,85,115,${0.25 + R() * 0.2})`;
    g.fillRect(wx, wy, 0.018, 0.045);
    g.fillStyle = BLACK;
    g.fillRect(wx + 0.008, wy, 0.002, 0.045);
  }
}
// the one window lit: the Tapestry Chamber's, a cold pale light
const glow = g.createRadialGradient(TAPESTRY.x + 0.012, TAPESTRY.y + 0.022, 0, TAPESTRY.x + 0.012, TAPESTRY.y + 0.022, 0.07);
glow.addColorStop(0, 'rgba(170,225,205,0.35)');
glow.addColorStop(1, 'rgba(170,225,205,0)');
g.fillStyle = glow;
g.fillRect(TAPESTRY.x - 0.07, TAPESTRY.y - 0.05, 0.16, 0.14);
g.fillStyle = '#a9dcc8';
g.fillRect(TAPESTRY.x, TAPESTRY.y, 0.024, 0.048);
g.fillStyle = BLACK;
g.fillRect(TAPESTRY.x + 0.011, TAPESTRY.y, 0.002, 0.048);
g.fillRect(TAPESTRY.x, TAPESTRY.y + 0.022, 0.024, 0.002);
e.light(TAPESTRY.x + 0.012, TAPESTRY.y + 0.024, 0.03, '#b8f0dc', 0.6, 'window');
// the old dry almond on the left, before the house: bare limbs against the windows
g.strokeStyle = '#020305';
g.lineCap = 'round';
const limb = (lx, ly, a, len, w, depth) => {
  const x2 = lx + Math.sin(a) * len, y2 = ly - Math.cos(a) * len;
  g.lineWidth = w;
  g.beginPath();
  g.moveTo(lx, ly);
  g.quadraticCurveTo((lx + x2) / 2 + (R() - 0.5) * len * 0.3, (ly + y2) / 2, x2, y2);
  g.stroke();
  if (depth > 0) {
    limb(x2, y2, a - 0.3 - R() * 0.35, len * (0.62 + R() * 0.15), w * 0.66, depth - 1);
    limb(x2, y2, a + 0.25 + R() * 0.35, len * (0.6 + R() * 0.15), w * 0.66, depth - 1);
  }
};
limb(0.12, 1.02, 0.08, 0.16, 0.022, 5);
// the yew far on the right, by the churchyard: a dark round mass
g.fillStyle = '#04070a';
for (let k = 0; k < 7; k++) {
  g.beginPath();
  g.ellipse(A - 0.05 + (R() - 0.5) * 0.16, 0.76 + (R() - 0.5) * 0.08, 0.06 + R() * 0.04, 0.05 + R() * 0.03, 0, 0, Math.PI * 2);
  g.fill();
}
