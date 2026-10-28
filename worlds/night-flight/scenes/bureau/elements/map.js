// The map of the three lines on the wall: a varnished frame, the yellowed paper, the southern half of the continent
// in ochre against a grey-blue sea, the Andes a brown band down the west; from the field — the city on the estuary,
// never named — the three lines in red ink: south down the coast to Patagonia, west over the mountains to Chile,
// north up the river to Paraguay; at each stop a small black dot. The flags on their pins: at the field the west's
// (yellow), the north's (green) and the European mail's (red); the Patagonian's blue alone far down the south line
// (its own layer, `blue`). Points: `field`, `blue`. All of it hung 0.2 m lower than drawn (under the clock).
g.translate(0, 0.2);
const X = lon => -1.2 + (lon + 80) * 0.0533;
const Y = lat => -2.82 + (-14 - lat) * 0.0402;
// the frame and the paper
g.fillStyle = '#3a2a1e';
g.fillRect(-1.33, -2.93, 2.66, 1.91);
g.fillStyle = '#d8ccab';
g.fillRect(-1.25, -2.86, 2.5, 1.77);
g.save();
g.beginPath();
g.rect(-1.2, -2.82, 2.4, 1.69);
g.clip();
g.fillStyle = '#9fb0b4';
g.fillRect(-1.2, -2.82, 2.4, 1.69);
// the land
const coast = [[-76, -13], [-76, -16], [-70.4, -18], [-70.3, -23], [-71.5, -30], [-71.6, -33], [-73.2, -37], [-73.6, -42],
  [-74.5, -47], [-75.3, -50], [-73.6, -53], [-70, -55], [-66, -55.2], [-68.4, -52.4], [-69, -51.6], [-67.8, -49.8],
  [-65.9, -47.8], [-67.5, -46], [-65.3, -45], [-64.2, -42.8], [-65, -42.4], [-63.2, -41.1], [-62.2, -39], [-57.6, -38.2],
  [-56.7, -36.5], [-57.3, -35.4], [-58.4, -34.5], [-56.6, -34.8], [-53.4, -33.8], [-51.5, -31.5], [-48.6, -28],
  [-48.5, -25.5], [-44.6, -23], [-41, -22], [-39.2, -17.5], [-38.6, -13]];
g.fillStyle = '#d9c38f';
g.beginPath();
coast.forEach(([lo, la], i) => (i ? g.lineTo(X(lo), Y(la)) : g.moveTo(X(lo), Y(la))));
g.closePath();
g.fill();
g.strokeStyle = '#7d6a4a';
g.lineWidth = 0.006;
g.stroke();
// the Andes
g.strokeStyle = 'rgba(130,92,58,0.55)';
g.lineWidth = 0.05;
g.lineCap = 'round';
g.beginPath();
[[-68.5, -14], [-68.8, -20], [-69.6, -26], [-70.2, -32], [-71, -37], [-71.6, -42], [-72.6, -48], [-73, -51]]
  .forEach(([lo, la], i) => (i ? g.lineTo(X(lo), Y(la)) : g.moveTo(X(lo), Y(la))));
g.stroke();
// the rivers up to the north
g.strokeStyle = '#7f9aa4';
g.lineWidth = 0.008;
g.beginPath();
g.moveTo(X(-58.4), Y(-34.2));
g.bezierCurveTo(X(-59.5), Y(-30), X(-58), Y(-28), X(-57.6), Y(-25.3));
g.lineTo(X(-57.5), Y(-20));
g.stroke();
// the lines
const field = [-58.4, -34.6];
const lines = [
  [field, [-62.3, -38.7], [-65.3, -43.25], [-67.5, -45.9], [-67.7, -49.3], [-69.2, -51.6]],
  [field, [-64.2, -33.2], [-68.8, -32.9], [-70.6, -33.4]],
  [field, [-59.2, -29.2], [-57.6, -25.3]],
];
g.strokeStyle = '#a5322a';
g.lineWidth = 0.013;
g.setLineDash([0.04, 0.02]);
for (const L of lines) {
  g.beginPath();
  L.forEach(([lo, la], i) => (i ? g.lineTo(X(lo), Y(la)) : g.moveTo(X(lo), Y(la))));
  g.stroke();
}
g.setLineDash([]);
g.fillStyle = '#1e1a16';
for (const L of lines) for (const [lo, la] of L.slice(1)) {
  g.beginPath();
  g.arc(X(lo), Y(la), 0.012, 0, Math.PI * 2);
  g.fill();
}
g.beginPath();
g.arc(X(field[0]), Y(field[1]), 0.022, 0, Math.PI * 2);
g.fill();
g.restore();
// a flag on its pin: the pin's head at (x, y), the flag to its right
const flag = (c, x, y, color) => {
  c.strokeStyle = '#2a2622';
  c.lineWidth = 0.008;
  c.beginPath();
  c.moveTo(x, y);
  c.lineTo(x, y - 0.12);
  c.stroke();
  c.fillStyle = color;
  c.beginPath();
  c.moveTo(x, y - 0.12);
  c.lineTo(x + 0.09, y - 0.095);
  c.lineTo(x, y - 0.07);
  c.closePath();
  c.fill();
};
const fx = X(field[0]);
const fy = Y(field[1]);
flag(g, fx - 0.03, fy, '#c9a83a');
flag(g, fx + 0.01, fy + 0.01, '#5d7d3a');
flag(g, fx + 0.05, fy - 0.005, '#b02a24');
e.at(fx, fy + 0.2, 'field');
const bx = X(-65.3);
const by = Y(-43.25);
e.layer('blue', {}, c => {
  c.translate(0, 0.2);
  flag(c, bx, by, '#2f56a6');
});
e.at(bx, by + 0.11, 'blue');
e.at(0, -1.75);
