// The town hall across the square (metres from its foot at the middle, y up negative): a plain two-storey civic
// building in warm cream stucco over a rusticated ground floor, white pilasters and cornice, a slate roof; in the
// middle a shallow bay with a pediment, the arched double door up three steps, and over it the clock tower — a white
// clock face (twenty past three), a copper-green cap. Geraniums in the boxes under the upper windows. Drawn at S of
// the sizes written (its tower 16 m high). Points: `clock`, `door`.
const S = 0.72;
g.save();
g.scale(S, S);
const STUCCO = '#ead5aa',
  RUSTIC = '#dcc59c',
  TRIM = '#f6f1e6',
  GLASS = '#5d6676',
  ROOF = '#737a87',
  COPPER = '#77a291';
// the roof over the main block
g.fillStyle = ROOF;
g.beginPath();
g.moveTo(-11.6, -11);
g.lineTo(-10.2, -13.2);
g.lineTo(10.2, -13.2);
g.lineTo(11.6, -11);
g.closePath();
g.fill();
// the main block
g.fillStyle = STUCCO;
g.fillRect(-11, -11, 22, 11);
g.fillStyle = RUSTIC;
g.fillRect(-11, -4.4, 22, 4.4);
g.fillStyle = 'rgba(150,120,80,0.35)';
for (let y = -4.0; y < 0; y += 0.55) g.fillRect(-11, y, 22, 0.05);
// the cornice and the band between the floors
g.fillStyle = TRIM;
g.fillRect(-11.4, -11.4, 22.8, 0.5);
g.fillRect(-11, -4.6, 22, 0.3);
// pilasters
for (const x of [-10.8, -7.2, -3.8, 3.4, 6.8, 10.4]) g.fillRect(x, -10.9, 0.4, 6.3);
// a window: its white surround, the glass, a glint, the glazing bars; arched below, straight above
const win = (cx, y0, w, h, arch) => {
  g.fillStyle = TRIM;
  g.fillRect(cx - w / 2 - 0.15, y0 - h - (arch ? w / 2 : 0) - 0.15, w + 0.3, h + (arch ? w / 2 : 0) + 0.3);
  g.fillStyle = GLASS;
  g.beginPath();
  g.moveTo(cx - w / 2, y0);
  g.lineTo(cx - w / 2, y0 - h);
  if (arch) g.arc(cx, y0 - h, w / 2, Math.PI, 0);
  else g.lineTo(cx + w / 2, y0 - h);
  g.lineTo(cx + w / 2, y0);
  g.closePath();
  g.fill();
  g.fillStyle = 'rgba(220,232,245,0.35)';
  g.fillRect(cx - w / 2 + 0.1, y0 - h + 0.2, w * 0.25, h * 0.5);
  g.fillStyle = TRIM;
  g.fillRect(cx - 0.04, y0 - h - (arch ? w / 2 : 0), 0.08, h + (arch ? w / 2 : 0));
  g.fillRect(cx - w / 2, y0 - h * 0.55, w, 0.08);
};
for (const x of [-9, -5.5, 5.1, 8.6]) {
  win(x, -0.9, 1.4, 2.0, true);
  win(x, -6.0, 1.4, 3.0, false);
  // the flower box with geraniums
  g.fillStyle = '#8a6a4a';
  g.fillRect(x - 0.85, -6.0, 1.7, 0.35);
  for (let k = 0; k < 9; k++) {
    g.fillStyle = k % 3 ? '#d0473f' : '#5f8a4e';
    g.beginPath();
    g.arc(x - 0.75 + k * 0.19, -6.05 - e.rnd() * 0.15, 0.12, 0, Math.PI * 2);
    g.fill();
  }
}
// the middle bay, a little proud, with its pediment
g.fillStyle = '#efdcb4';
g.fillRect(-3.0, -11.2, 6.0, 11.2);
g.fillStyle = TRIM;
g.fillRect(-3.2, -11.6, 6.4, 0.45);
g.fillRect(-3.0, -11.2, 0.35, 11.2);
g.fillRect(2.65, -11.2, 0.35, 11.2);
g.beginPath();
g.moveTo(-3.4, -11.6);
g.lineTo(0, -13.4);
g.lineTo(3.4, -11.6);
g.closePath();
g.fill();
g.fillStyle = '#e4cfa4';
g.beginPath();
g.moveTo(-2.6, -11.75);
g.lineTo(0, -13.05);
g.lineTo(2.6, -11.75);
g.closePath();
g.fill();
win(0, -6.0, 1.6, 3.2, true);
// the balcony rail under it
g.fillStyle = TRIM;
g.fillRect(-1.5, -6.0, 3.0, 0.18);
for (let x = -1.4; x <= 1.4; x += 0.2) g.fillRect(x, -5.85, 0.07, 0.75);
g.fillRect(-1.5, -5.15, 3.0, 0.12);
// the door: arched, dark oak, two leaves, the fanlight; three steps before it
g.fillStyle = TRIM;
g.fillRect(-1.45, -4.1, 2.9, 3.5);
g.fillStyle = '#6a4934';
g.beginPath();
g.moveTo(-1.15, -0.6);
g.lineTo(-1.15, -3.0);
g.arc(0, -3.0, 1.15, Math.PI, 0);
g.lineTo(1.15, -0.6);
g.closePath();
g.fill();
g.fillStyle = GLASS;
g.beginPath();
g.arc(0, -3.0, 1.0, Math.PI, 0);
g.closePath();
g.fill();
g.fillStyle = 'rgba(40,28,20,0.5)';
g.fillRect(-0.04, -3.0, 0.08, 2.4);
g.fillStyle = '#c9a24a';
g.fillRect(-0.3, -1.8, 0.1, 0.1);
g.fillRect(0.2, -1.8, 0.1, 0.1);
for (let i = 0; i < 3; i++) {
  g.fillStyle = i % 2 ? '#d7cebe' : '#e2dacb';
  g.fillRect(-2.2 - i * 0.35, -0.6 + i * 0.2, 4.4 + i * 0.7, 0.2);
}
// the clock tower over the bay
g.fillStyle = STUCCO;
g.fillRect(-1.9, -19.2, 3.8, 6.2);
g.fillStyle = TRIM;
g.fillRect(-2.1, -19.5, 4.2, 0.4);
g.fillRect(-1.9, -13.4, 0.3, 0.1);
g.fillRect(-1.9, -19.2, 0.3, 6.0);
g.fillRect(1.6, -19.2, 0.3, 6.0);
// the clock: a white face, black numerals' marks and hands at twenty past three
g.fillStyle = '#3c3a38';
g.beginPath();
g.arc(0, -16.4, 1.28, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#f8f5ec';
g.beginPath();
g.arc(0, -16.4, 1.18, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#3c3a38';
for (let k = 0; k < 12; k++) {
  const a = (k / 12) * Math.PI * 2;
  g.fillRect(Math.sin(a) * 1.0 - 0.05, -16.4 - Math.cos(a) * 1.0 - 0.05, 0.1, 0.1);
}
g.strokeStyle = '#2c2a28';
g.lineCap = 'round';
g.lineWidth = 0.12;
g.beginPath();
g.moveTo(0, -16.4);
g.lineTo(Math.sin(Math.PI * 2 * (3.33 / 12)) * 0.6, -16.4 - Math.cos(Math.PI * 2 * (3.33 / 12)) * 0.6);
g.stroke();
g.lineWidth = 0.08;
g.beginPath();
g.moveTo(0, -16.4);
g.lineTo(Math.sin(Math.PI * 2 * (20 / 60)) * 0.95, -16.4 - Math.cos(Math.PI * 2 * (20 / 60)) * 0.95);
g.stroke();
// the louvred belfry over the clock and the copper-green cap
g.fillStyle = '#5f5a58';
g.fillRect(-0.9, -19.0, 1.8, 1.1);
g.fillStyle = TRIM;
for (let y = -18.9; y < -17.9; y += 0.22) g.fillRect(-0.9, y, 1.8, 0.06);
g.fillStyle = COPPER;
g.beginPath();
g.moveTo(-2.2, -19.5);
g.quadraticCurveTo(-1.6, -21.2, 0, -21.6);
g.quadraticCurveTo(1.6, -21.2, 2.2, -19.5);
g.closePath();
g.fill();
g.fillStyle = '#c9a24a';
g.fillRect(-0.05, -22.0, 0.1, 0.5);
g.beginPath();
g.arc(0, -22.0, 0.14, 0, Math.PI * 2);
g.fill();
g.restore();
e.at(0, -16.4 * S, 'clock');
e.at(0, -1.8 * S, 'door');
