// The great window's painted glass, lit from behind by the moon (it glows its own colours): diamond quarries of pale
// glass in lead; in the upper middle light the Canterville arms; across the foot of the lower lights the old prophecy
// in black letters on amber glass. Painted where the lights are (x −1.45…1.05, y −3.05…−0.95; the stone between them is
// the wall's).
g.save();
g.beginPath();
g.rect(-1.45, -3.05, 2.5, 2.1);
g.clip();
g.fillStyle = '#5d6f91';
g.fillRect(-1.45, -3.05, 2.5, 2.1);
// the quarries: diamonds of slightly different pale greys and blues, leaded
const Q = 0.16;
const tones = ['#6c7fa2', '#62749a', '#7487a8', '#5a6c90', '#6f8199'];
for (let y = -3.05; y < -0.9; y += Q * 1.4) {
  for (let x = -1.45; x < 1.1; x += Q) {
    const off = Math.round((y + 3.05) / (Q * 1.4)) % 2 ? Q / 2 : 0;
    const cx = x + off;
    g.fillStyle = tones[Math.floor(e.rnd() * tones.length)];
    g.beginPath();
    g.moveTo(cx, y - Q * 0.7);
    g.lineTo(cx + Q / 2, y);
    g.lineTo(cx, y + Q * 0.7);
    g.lineTo(cx - Q / 2, y);
    g.closePath();
    g.fill();
  }
}
g.strokeStyle = '#1e2230';
g.lineWidth = 0.012;
for (let y = -3.05; y < -0.9; y += Q * 1.4) {
  for (let x = -1.45; x < 1.1; x += Q) {
    const off = Math.round((y + 3.05) / (Q * 1.4)) % 2 ? Q / 2 : 0;
    const cx = x + off;
    g.beginPath();
    g.moveTo(cx, y - Q * 0.7);
    g.lineTo(cx + Q / 2, y);
    g.lineTo(cx, y + Q * 0.7);
    g.lineTo(cx - Q / 2, y);
    g.closePath();
    g.stroke();
  }
}
// the arms: a shield, gules, a silver chevron between three gold lions' heads, in a wreath of green
g.fillStyle = '#3f6a48';
g.beginPath();
g.arc(-0.2, -2.69, 0.3, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#8e2328';
g.beginPath();
g.moveTo(-0.42, -2.92);
g.lineTo(0.02, -2.92);
g.lineTo(0.02, -2.68);
g.quadraticCurveTo(0.02, -2.5, -0.2, -2.42);
g.quadraticCurveTo(-0.42, -2.5, -0.42, -2.68);
g.closePath();
g.fill();
g.strokeStyle = '#d9d4c4';
g.lineWidth = 0.035;
g.beginPath();
g.moveTo(-0.38, -2.56);
g.lineTo(-0.2, -2.76);
g.lineTo(-0.02, -2.56);
g.stroke();
g.fillStyle = '#d8b24a';
for (const [x, y] of [[-0.32, -2.84], [-0.08, -2.84], [-0.2, -2.52]]) {
  g.beginPath();
  g.arc(x, y, 0.035, 0, Math.PI * 2);
  g.fill();
}
// the prophecy: a band of amber glass across the foot of each lower light, two lines of black letters on each
const BAND = [[-1.45, -0.65], [-0.55, 0.15], [0.25, 1.05]];
const LINES = [
  [tr('When a golden girl can win'), tr('Prayer from out the lips of sin,')],
  [tr('When the barren almond bears,'), tr('And a little child gives away its tears,')],
  [tr('Then shall all the house be still'), tr('And peace come to Canterville.')],
];
g.textAlign = 'center';
g.textBaseline = 'middle';
for (let i = 0; i < 3; i++) {
  const [x0, x1] = BAND[i];
  g.fillStyle = '#b89a5a';
  g.fillRect(x0, -1.3, x1 - x0, 0.35);
  g.strokeStyle = '#1e2230';
  g.lineWidth = 0.014;
  g.strokeRect(x0, -1.3, x1 - x0, 0.35);
  g.fillStyle = '#1a1410';
  for (let l = 0; l < 2; l++) {
    const text = LINES[i][l];
    g.font = 'bold 0.06px serif';
    const w = g.measureText(text).width;
    const k = Math.min(1, (x1 - x0 - 0.06) / w);
    g.save();
    g.translate((x0 + x1) / 2, -1.2 + l * 0.14);
    g.scale(k, 1);
    g.fillText(text, 0, 0);
    g.restore();
  }
}
g.restore();
// the morning (`day`): daylight through the glass, its colours paler and warm — a layer the animate shows by the key
e.layer('day', {}, f => {
  f.fillStyle = 'rgba(250,236,200,0.6)';
  f.fillRect(-1.45, -3.05, 2.5, 2.1);
});
