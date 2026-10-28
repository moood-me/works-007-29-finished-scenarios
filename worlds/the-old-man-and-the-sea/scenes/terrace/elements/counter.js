// Martin's counter seen from the room: a front of upright boards painted long ago a blue now mostly grey, a dark
// plinth, the top's edge overhanging — and on the top a few beer tins, a bottle of rum and a glass. Metres along the
// counter: it faces the room (90), x 0 is 6 m ahead, + toward the water; the top at 1.05 (point `top`).
g.fillStyle = '#7f8b8c';
g.fillRect(-1.9, -1.0, 3.8, 1.0);
g.strokeStyle = 'rgba(60,60,58,0.45)';
g.lineWidth = 0.015;
for (let x = -1.9 + 0.14; x < 1.9; x += 0.14) {
  g.beginPath();
  g.moveTo(x, -1.0);
  g.lineTo(x, 0);
  g.stroke();
}
// the paint worn through to the wood
g.fillStyle = 'rgba(150,124,92,0.6)';
for (let i = 0; i < 26; i++) g.fillRect(-1.9 + e.rnd() * 3.7, -0.95 + e.rnd() * 0.85, 0.05 + 0.15 * e.rnd(), 0.02 + 0.06 * e.rnd());
g.fillStyle = '#4a3f34';
g.fillRect(-1.9, -0.12, 3.8, 0.13);
g.fillStyle = '#6c5843';
g.fillRect(-1.95, -1.07, 3.9, 0.07);
// on the top
const tin = (x, c) => {
  g.fillStyle = '#b8b2a4';
  g.fillRect(x - 0.035, -1.2, 0.07, 0.13);
  g.fillStyle = c;
  g.fillRect(x - 0.035, -1.17, 0.07, 0.05);
};
tin(-0.2, '#a24a3a');
tin(-0.1, '#a24a3a');
tin(0.85, '#c9b46a');
g.fillStyle = '#8a5424';
g.fillRect(0.3, -1.29, 0.08, 0.22);
g.fillRect(0.325, -1.38, 0.03, 0.1);
g.fillStyle = 'rgba(220,226,222,0.7)';
g.fillRect(0.45, -1.17, 0.06, 0.1);
e.at(0, -1.05, 'top');
