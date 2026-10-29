// The right wall, seen from the room (its +x runs toward the viewer): distemper over the dark dado; a tall glazed
// cabinet of the line's logs — rows of bound ledgers, their spines dark red and green, a white label on each; nearer,
// a framed map of the three lines' stations, and an old wall telephone's box left from before.
g.fillStyle = '#b3ab93';
g.fillRect(-2.05, -3.15, 4.1, 3.2);
g.fillStyle = '#56402f';
g.fillRect(-2.05, -0.85, 4.1, 0.85);
g.fillStyle = '#3f2d20';
g.fillRect(-2.05, -0.9, 4.1, 0.06);
g.fillStyle = '#2b2018';
g.fillRect(-2.05, -0.13, 4.1, 0.13);
// the cabinet (x −1.75…−0.55)
g.fillStyle = '#3d2c20';
g.fillRect(-1.75, -2.45, 1.2, 2.45);
g.fillStyle = '#4b372a';
g.fillRect(-1.68, -2.38, 1.06, 1.45);
const spines = ['#6a2a24', '#2f4a3a', '#5a3a26', '#7a3428', '#34463e', '#5e2c26'];
for (let r = 0; r < 4; r++) {
  const y = -2.36 + r * 0.36;
  g.fillStyle = '#2e2118';
  g.fillRect(-1.68, y + 0.31, 1.06, 0.03);
  for (let k = 0; k < 13; k++) {
    const x = -1.66 + k * 0.08;
    const h = 0.26 + 0.03 * ((k * 7 + r * 3) % 3);
    g.fillStyle = spines[(k + r * 2) % spines.length];
    g.fillRect(x, y + 0.31 - h, 0.07, h);
    g.fillStyle = '#e6dfcc';
    g.fillRect(x + 0.015, y + 0.31 - h + 0.06, 0.04, 0.05);
  }
}
// its glazed doors: the middle frame and a sheen on the glass
g.fillStyle = '#2e2118';
g.fillRect(-1.16, -2.38, 0.03, 1.45);
g.fillStyle = 'rgba(220,230,240,0.08)';
g.fillRect(-1.66, -2.36, 0.48, 1.4);
g.fillRect(-1.12, -2.36, 0.48, 1.4);
// the cupboard below
g.fillStyle = '#4b372a';
g.fillRect(-1.68, -0.85, 0.5, 0.75);
g.fillRect(-1.12, -0.85, 0.5, 0.75);
g.fillStyle = '#b89a5a';
g.fillRect(-1.2, -0.5, 0.025, 0.08);
g.fillRect(-1.12, -0.5, 0.025, 0.08);
// the map of the stations, framed (x 0.0…0.9)
g.fillStyle = '#2e241c';
g.fillRect(0.0, -2.4, 0.9, 0.7);
g.fillStyle = '#d9cfae';
g.fillRect(0.06, -2.34, 0.78, 0.58);
g.strokeStyle = '#a5322a';
g.lineWidth = 0.008;
g.beginPath();
g.moveTo(0.5, -2.2);
g.lineTo(0.4, -2.0);
g.lineTo(0.3, -1.85);
g.moveTo(0.5, -2.2);
g.lineTo(0.2, -2.22);
g.moveTo(0.5, -2.2);
g.lineTo(0.56, -2.3);
g.stroke();
// the old wall telephone's box, nearer (x 1.3…1.55)
g.fillStyle = '#4a3424';
g.fillRect(1.3, -1.75, 0.25, 0.42);
g.fillStyle = '#b89a5a';
g.beginPath();
g.arc(1.36, -1.66, 0.025, 0, Math.PI * 2);
g.fill();
g.beginPath();
g.arc(1.49, -1.66, 0.025, 0, Math.PI * 2);
g.fill();
