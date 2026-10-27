// The tenement's back wall over the alley, from its foot 9 m down (metres across from the viewer's line; y up
// negative, the flat's floor and the landing at y −9): soot-dark red brick, a stone cornice and parapet at the top
// (the flat is on the top floor), the building's corner on the left (x −1.9) with a drainpipe down it. Cut through
// it, the Wingfields' window (x 0…1.1, sill 0.75 over the floor, head 2.25), open onto the lit room behind; the
// door onto the landing (x 2.3…3.15), green paint gone dull; the neighbours' window to the right and the windows of
// the floor below, dark.
const F = y => -9 - y; // a height over the flat's floor → the painting's y
const X0 = -1.9;
const X1 = 6.2;
const TOP = F(3.2);
const hole = c => c.rect(0, F(2.25), 1.1, 1.5);
g.save();
g.beginPath();
g.rect(X0, TOP, X1 - X0, -TOP + 0.02);
hole(g);
g.clip('evenodd');
// the brick: a ground of the mortar's colour, the courses, each brick a touch apart in tone
g.fillStyle = '#6d4438';
g.fillRect(X0, TOP, X1 - X0, -TOP + 0.02);
g.strokeStyle = 'rgba(48,30,28,0.55)';
g.lineWidth = 0.012;
const C = 0.077;
let row = 0;
for (let y = F(2.75); y < 0; y += C, row++) {
  g.beginPath();
  g.moveTo(X0, y);
  g.lineTo(X1, y);
  g.stroke();
  g.setLineDash([0.012, 0.218]);
  g.lineDashOffset = (row % 2) * 0.115;
  g.beginPath();
  g.moveTo(X0, y + C / 2);
  g.lineTo(X1, y + C / 2);
  g.lineWidth = C;
  g.stroke();
  g.lineWidth = 0.012;
  g.setLineDash([]);
}
for (let i = 0; i < 420; i++) {
  const r = e.rnd();
  g.fillStyle = r < 0.4 ? 'rgba(140,82,64,0.35)' : r < 0.75 ? 'rgba(52,34,32,0.3)' : 'rgba(160,120,96,0.22)';
  const y = F(2.75) + Math.floor(e.rnd() * 150) * C;
  g.fillRect(X0 + e.rnd() * (X1 - X0), y + 0.006, 0.21, C - 0.012);
}
// soot run down from the sills and the cornice, and the damp where the drainpipe leaks
const streak = (x, y0, w, h) => {
  const s = g.createLinearGradient(0, y0, 0, y0 + h);
  s.addColorStop(0, 'rgba(30,22,24,0.45)');
  s.addColorStop(1, 'rgba(30,22,24,0)');
  g.fillStyle = s;
  g.fillRect(x, y0, w, h);
};
streak(X0, F(2.75), X1 - X0, 0.5);
for (const [x, y] of [[0, 0.7], [0, -2.3], [3.9, 0.7], [3.9, -2.3]]) streak(x - 0.05, F(y), 1.2, 1.4);
streak(-1.8, F(2.6), 0.35, 12);
// the cornice and the parapet: stone, a dark line under the drip
g.fillStyle = '#857565';
g.fillRect(X0, F(3.2), X1 - X0, 0.45);
g.fillStyle = '#9b8a77';
g.fillRect(X0, F(2.95), X1 - X0, 0.12);
g.fillStyle = '#2d2224';
g.fillRect(X0, F(2.75), X1 - X0, 0.04);
// the corner's quoins: lighter stones up the edge, alternately long and short
for (let i = 0; i < 40; i++) {
  const y = F(2.75) + i * 0.3;
  g.fillStyle = i % 2 ? '#8a6f5e' : '#7d6252';
  g.fillRect(X0, y, i % 2 ? 0.22 : 0.34, 0.28);
}
// windows: stone sills and lintels; the dark ones — the floor below, the neighbours' — glass with a blind half down
const casing = (x, y, w, h) => {
  g.fillStyle = '#8f8070';
  g.fillRect(x - 0.08, F(y + h) - 0.16, w + 0.16, 0.16);
  g.fillRect(x - 0.1, F(y), w + 0.2, 0.07);
  g.fillStyle = '#2a2024';
  g.fillRect(x - 0.1, F(y) + 0.07, w + 0.2, 0.02);
};
const dark = (x, y, w, h, blind) => {
  casing(x, y, w, h);
  g.fillStyle = '#d6cbb5';
  g.fillRect(x, F(y + h), w, h);
  g.fillStyle = '#1d1f2e';
  g.fillRect(x + 0.05, F(y + h) + 0.05, w - 0.1, h - 0.1);
  g.fillStyle = '#8b7d63';
  g.fillRect(x + 0.05, F(y + h) + 0.05, w - 0.1, blind);
  g.fillStyle = '#d6cbb5';
  g.fillRect(x, F(y + h / 2) - 0.03, w, 0.06);
  g.fillRect(x + w / 2 - 0.02, F(y + h), 0.04, h);
};
dark(0, -2.25, 1.1, 1.5, 0.35);
dark(3.9, -2.25, 1.1, 1.5, 0.6);
dark(3.9, 0.75, 1.1, 1.5, 0.75);
casing(0, 0.75, 1.1, 1.5);
// the door onto the landing: its casing, the planks of a back door, a small glazed panel (dark), the knob, the sill
g.fillStyle = '#8f8070';
g.fillRect(2.22, F(2.3), 1.01, 0.16);
g.fillStyle = '#3c3a33';
g.fillRect(2.25, F(2.15), 0.95, 2.15);
g.fillStyle = '#3f5a4a';
g.fillRect(2.3, F(2.1), 0.85, 2.1);
g.fillStyle = 'rgba(28,36,32,0.5)';
for (let x = 2.3 + 0.17; x < 3.14; x += 0.17) g.fillRect(x, F(2.1), 0.01, 2.1);
g.fillStyle = '#4a6656';
g.fillRect(2.36, F(0.95), 0.73, 0.1);
g.fillRect(2.36, F(0.25), 0.73, 0.1);
g.fillStyle = '#2b3230';
g.fillRect(2.45, F(1.95), 0.55, 0.62);
g.fillStyle = '#3d4658';
g.fillRect(2.49, F(1.91), 0.47, 0.54);
g.fillStyle = 'rgba(160,170,200,0.25)';
g.fillRect(2.52, F(1.88), 0.12, 0.48);
g.fillStyle = '#c3a25c';
g.beginPath();
g.arc(3.03, F(1.0), 0.032, 0, Math.PI * 2);
g.fill();
g.restore();
// the drainpipe down the corner: grey iron, its brackets
g.fillStyle = '#4c4b52';
g.fillRect(-1.68, F(2.95), 0.09, -F(2.95));
g.fillStyle = '#3a393f';
g.fillRect(-1.68, F(2.95), 0.03, -F(2.95));
for (let y = F(2.6); y < 0; y += 1.4) g.fillRect(-1.71, y, 0.15, 0.04);
g.fillStyle = '#4c4b52';
g.fillRect(-1.76, F(2.98), 0.25, 0.1);
e.at(0.55, F(1.5), 'window');
e.at(2.72, F(1.0), 'door');
