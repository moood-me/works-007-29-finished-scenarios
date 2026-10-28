// The house's front: a long two-storeyed front of pale weathered stone, nine bays of tall sash windows, a string
// course between the floors, a cornice and a balustrade along the top (metres: x along it from its middle, y up from
// the ground); the door in the middle bay, under the porch; ivy climbing its left end, where the old tower stands.
const W = 18;
const H = 10.2;
g.fillStyle = '#cfc1a1';
g.fillRect(-W, -H, 2 * W, H);
// the courses of the ashlar, faint
g.strokeStyle = 'rgba(130,114,86,0.16)';
g.lineWidth = 0.02;
g.beginPath();
for (let y = -0.7; y > -H; y -= 0.38) {
  g.moveTo(-W, y);
  g.lineTo(W, y);
}
g.stroke();
// weathering streaks under the cornice and the sills
for (let i = 0; i < 40; i++) {
  const x = -W + e.rnd() * 2 * W;
  const y = e.rnd() < 0.5 ? -9.2 : -4.5;
  const h = 0.8 + e.rnd() * 2.4;
  const r = g.createLinearGradient(0, y, 0, y + h);
  r.addColorStop(0, 'rgba(120,104,78,0.22)');
  r.addColorStop(1, 'rgba(120,104,78,0)');
  g.fillStyle = r;
  g.fillRect(x, y, 0.1 + e.rnd() * 0.5, h);
}
// the plinth
g.fillStyle = '#b5a685';
g.fillRect(-W, -0.75, 2 * W, 0.75);
g.fillStyle = 'rgba(90,76,54,0.35)';
g.fillRect(-W, -0.75, 2 * W, 0.05);
// the string course, the cornice, the balustrade
function band(y, h, shade) {
  g.fillStyle = '#ded3b8';
  g.fillRect(-W, y - h, 2 * W, h);
  g.fillStyle = `rgba(90,76,54,${shade})`;
  g.fillRect(-W, y, 2 * W, 0.07);
}
band(-4.6, 0.26, 0.35);
band(-9.0, 0.5, 0.45);
g.fillStyle = '#ded3b8';
g.fillRect(-W, -H, 2 * W, 0.22);
g.fillRect(-W, -9.5, 2 * W, 0.12);
g.fillStyle = '#c4b797';
for (let x = -W + 0.2; x < W; x += 0.32) g.fillRect(x, -9.98, 0.14, 0.48);
for (let x = -W; x <= W; x += 4) {
  g.fillStyle = '#ded3b8';
  g.fillRect(x - 0.28, -H, 0.56, 0.7);
}
// a sash window: its stone surround and keystone, the dark glass with the sky faint in its upper panes, the white
// glazing bars — six over six
function win(x, top, w, h, blind) {
  g.fillStyle = '#e3d9bf';
  g.fillRect(x - w / 2 - 0.2, top - 0.2, w + 0.4, h + 0.32);
  g.fillRect(x - 0.18, top - 0.38, 0.36, 0.3);
  g.fillStyle = 'rgba(90,76,54,0.4)';
  g.fillRect(x - w / 2 - 0.25, top + h + 0.12, w + 0.5, 0.06);
  const glass = g.createLinearGradient(0, top, 0, top + h);
  glass.addColorStop(0, '#7f8aa0');
  glass.addColorStop(0.45, '#4b5462');
  glass.addColorStop(1, '#353b45');
  g.fillStyle = glass;
  g.fillRect(x - w / 2, top, w, h);
  if (blind) {
    g.fillStyle = '#e6dcc7';
    g.fillRect(x - w / 2, top, w, h * blind);
  }
  g.strokeStyle = '#efe9da';
  g.lineWidth = 0.05;
  g.beginPath();
  for (const k of [1, 2]) {
    g.moveTo(x - w / 2 + (w * k) / 3, top);
    g.lineTo(x - w / 2 + (w * k) / 3, top + h);
  }
  for (const k of [1, 3]) {
    g.moveTo(x - w / 2, top + (h * k) / 4);
    g.lineTo(x + w / 2, top + (h * k) / 4);
  }
  g.stroke();
  g.lineWidth = 0.09;
  g.strokeRect(x - w / 2, top, w, h);
  g.beginPath();
  g.moveTo(x - w / 2, top + h / 2);
  g.lineTo(x + w / 2, top + h / 2);
  g.stroke();
}
const blinds = { '-12-up': 0.35, '4-up': 0.5, '-8-down': 0.2, '16-up': 0.3 };
for (let i = -4; i <= 4; i++) {
  const x = i * 4;
  win(x, -8.1, 1.4, 2.5, blinds[`${x}-up`]);
  if (i !== 0) win(x, -3.85, 1.45, 2.8, blinds[`${x}-down`]);
}
// the door in the middle bay: dark panelled oak under a fanlight
g.fillStyle = '#e3d9bf';
g.fillRect(-1.05, -4.25, 2.1, 4.25);
g.fillStyle = '#4b5462';
g.beginPath();
g.arc(0, -3.25, 0.82, Math.PI, 0);
g.fill();
g.strokeStyle = '#efe9da';
g.lineWidth = 0.04;
g.beginPath();
for (let k = 1; k < 6; k++) {
  const a = Math.PI + (Math.PI * k) / 6;
  g.moveTo(0, -3.25);
  g.lineTo(Math.cos(a) * 0.82, -3.25 + Math.sin(a) * 0.82);
}
g.stroke();
g.fillStyle = '#3e3028';
g.fillRect(-0.82, -3.2, 1.64, 3.2);
g.strokeStyle = 'rgba(20,14,10,0.5)';
g.lineWidth = 0.03;
g.strokeRect(-0.72, -3.0, 0.62, 1.3);
g.strokeRect(0.1, -3.0, 0.62, 1.3);
g.strokeRect(-0.72, -1.5, 0.62, 1.3);
g.strokeRect(0.1, -1.5, 0.62, 1.3);
// the ivy over the left end, thickest at the foot, climbing to the cornice
for (let i = 0; i < 260; i++) {
  const t = Math.pow(e.rnd(), 0.7);
  const x = -W + e.rnd() * (1 - t) * 6.5;
  const y = -t * 9;
  g.fillStyle = ['#3d5532', '#4b6639', '#33492b', '#587542'][Math.floor(e.rnd() * 4)];
  g.beginPath();
  g.ellipse(x, y, 0.25 + e.rnd() * 0.35, 0.18 + e.rnd() * 0.25, e.rnd() * 3, 0, Math.PI * 2);
  g.fill();
}
