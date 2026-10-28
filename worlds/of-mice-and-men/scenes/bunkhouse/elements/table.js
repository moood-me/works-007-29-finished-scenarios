// The table from above (metres, its middle; y toward the viewer): a big square table of rough planks, littered with
// playing cards; at its left end, George's game of solitaire laid out in rows, the deck by it; a tin can for the ash,
// a tin cup.
e.lib.boards(g, -1.1, -0.55, 1.1, 0.55, 0.22, '#9a7f5e', 3);
g.fillStyle = 'rgba(70,52,36,0.5)';
g.fillRect(-1.1, -0.55, 2.2, 0.025);
g.fillRect(-1.1, 0.525, 2.2, 0.025);
const card = (x, y, a, up, red) => {
  g.save();
  g.translate(x, y);
  g.rotate(a);
  g.fillStyle = up ? '#f2ede0' : '#7a3a34';
  g.fillRect(-0.032, -0.045, 0.064, 0.09);
  if (up) {
    g.fillStyle = red ? '#b8322a' : '#232020';
    g.fillRect(-0.02, -0.035, 0.012, 0.014);
    g.beginPath();
    g.arc(0.004, 0.006, 0.011, 0, Math.PI * 2);
    g.fill();
  } else {
    g.strokeStyle = '#e6d6c0';
    g.lineWidth = 0.004;
    g.strokeRect(-0.026, -0.039, 0.052, 0.078);
  }
  g.restore();
};
// solitaire: seven columns, the face-down cards under, the last face up, toward the player (George at the left end,
// looking along the table)
for (let c = 0; c < 7; c++) {
  for (let k = 0; k <= c; k++) card(-0.95 + k * 0.03, -0.36 + c * 0.11, Math.PI / 2, k === c, (c + k) % 2 === 0);
}
for (let i = 0; i < 4; i++) card(-0.62 - i * 0.002, 0.42 - i * 0.002, Math.PI / 2, false, false);
card(-0.52, 0.42, Math.PI / 2 + 0.05, true, true);
// the cards of the evening's games, scattered
for (let i = 0; i < 16; i++) card(-0.2 + e.rnd() * 1.2, -0.45 + e.rnd() * 0.9, e.rnd() * Math.PI, e.rnd() < 0.7, e.rnd() < 0.5);
// the ash can and the cup
g.fillStyle = '#8b8e90';
g.beginPath();
g.arc(0.55, -0.25, 0.05, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#3d3a36';
g.beginPath();
g.arc(0.55, -0.25, 0.04, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#a4a7a8';
g.beginPath();
g.arc(0.85, 0.2, 0.045, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#5b4632';
g.beginPath();
g.arc(0.85, 0.2, 0.035, 0, Math.PI * 2);
g.fill();
