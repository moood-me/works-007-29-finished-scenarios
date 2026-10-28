// The Christmas tree in the corner, trimmed: a fir of drooping tiers on a cross foot under a white cloth, gilt
// walnuts, red apples, paper cornets and little paper flags, a gold garland in swags, white candles in their clips
// (where e.lib.candles says; their flames are tree_candles), a gilt star on top; parcels under it.
const GREEN = '#24432f';
const LIGHT = '#335c40';
// the cloth over the foot, and the parcels
g.fillStyle = '#ece6da';
g.beginPath();
g.ellipse(0, -0.05, 0.55, 0.08, 0, 0, Math.PI * 2);
g.fill();
for (const [x, w, h, paper, tie] of [[-0.42, 0.26, 0.18, '#a33a33', '#e8d9a8'], [0.36, 0.3, 0.14, '#c9b48a', '#a33a33'], [-0.12, 0.2, 0.12, '#355a7a', '#e8d9a8']]) {
  g.fillStyle = paper;
  g.fillRect(x - w / 2, -h - 0.02, w, h);
  g.fillStyle = tie;
  g.fillRect(x - 0.01, -h - 0.02, 0.02, h);
  g.fillRect(x - w / 2, -h / 2 - 0.03, w, 0.02);
}
g.fillStyle = '#4a3020';
g.fillRect(-0.04, -0.3, 0.08, 0.28);
// the tiers, from the bottom up: each a drooping skirt of needles
const tiers = [[-0.3, 0.82], [-0.62, 0.7], [-0.92, 0.6], [-1.2, 0.5], [-1.46, 0.4], [-1.7, 0.3], [-1.92, 0.21], [-2.1, 0.13]];
for (const [y, r] of tiers) {
  g.fillStyle = GREEN;
  g.beginPath();
  g.moveTo(0, y - 0.48);
  g.quadraticCurveTo(r * 0.5, y - 0.2, r, y + 0.02);
  for (let k = 1; k <= 8; k++) {
    const x = r - (2 * r * k) / 8;
    g.lineTo(x + r / 8, y + 0.06 - (k % 2) * 0.05);
  }
  g.lineTo(-r, y + 0.02);
  g.quadraticCurveTo(-r * 0.5, y - 0.2, 0, y - 0.48);
  g.closePath();
  g.fill();
  g.strokeStyle = LIGHT;
  g.lineWidth = 0.012;
  for (let k = 0; k < 7; k++) {
    const x = -r * 0.85 + (1.7 * r * k) / 6;
    g.beginPath();
    g.moveTo(x * 0.3, y - 0.3);
    g.lineTo(x, y + 0.02);
    g.stroke();
  }
}
// the garland: gold swags across the tiers
g.strokeStyle = '#d6b45e';
g.lineWidth = 0.014;
for (const [y, r] of [[-0.55, 0.62], [-1.05, 0.5], [-1.55, 0.36], [-1.95, 0.2]]) {
  g.beginPath();
  g.moveTo(-r, y);
  g.quadraticCurveTo(0, y + 0.16, r, y - 0.04);
  g.stroke();
}
// the ornaments: walnuts, apples, cornets, flags
for (let i = 0; i < 34; i++) {
  const t = e.rnd();
  const y = -0.35 - t * 1.75;
  const half = 0.75 * (1 - t) + 0.08;
  const x = (e.rnd() * 2 - 1) * half * 0.85;
  const kind = i % 4;
  if (kind === 0) {
    g.fillStyle = '#d4ad55';
    g.beginPath();
    g.ellipse(x, y, 0.025, 0.03, 0, 0, Math.PI * 2);
    g.fill();
  } else if (kind === 1) {
    g.fillStyle = '#b2302a';
    g.beginPath();
    g.arc(x, y, 0.035, 0, Math.PI * 2);
    g.fill();
  } else if (kind === 2) {
    g.fillStyle = i % 8 === 2 ? '#f1e6dc' : '#e7b7b0';
    g.beginPath();
    g.moveTo(x - 0.035, y - 0.05);
    g.lineTo(x + 0.035, y - 0.05);
    g.lineTo(x, y + 0.06);
    g.closePath();
    g.fill();
  } else {
    g.fillStyle = '#b8302c';
    g.fillRect(x, y - 0.03, 0.07, 0.045);
    g.fillStyle = '#f2ece2';
    g.fillRect(x + 0.018, y - 0.03, 0.012, 0.045);
    g.fillRect(x, y - 0.013, 0.07, 0.012);
    g.fillStyle = '#28427a';
    g.fillRect(x + 0.021, y - 0.03, 0.006, 0.045);
    g.fillRect(x, y - 0.0095, 0.07, 0.005);
  }
}
// the candles in their clips
for (const [x, y] of e.lib.candles) {
  g.fillStyle = '#b8924a';
  g.fillRect(x - 0.02, y + 0.02, 0.04, 0.015);
  g.fillStyle = '#f4efe3';
  g.fillRect(x - 0.009, y - 0.07, 0.018, 0.09);
}
// the star
g.fillStyle = '#d9b75c';
g.beginPath();
for (let k = 0; k < 10; k++) {
  const a = -Math.PI / 2 + (k * Math.PI) / 5;
  const r = k % 2 ? 0.035 : 0.09;
  g.lineTo(Math.cos(a) * r, -2.48 + Math.sin(a) * r);
}
g.closePath();
g.fill();
e.at(0, -1.3);
