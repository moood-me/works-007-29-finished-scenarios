// Flora's boat — the old flat-bottomed boat of the lake, drawn up into the reeds on this side, its bow toward the
// water: seen from a little above and from its side, its blistered green paint over grey boards, the inside's boards
// paler, a thwart across, an oar laid in it (metres: x across, y up; its keel's middle at the anchor).
// the hull's outside: from the stern on the right to the bow on the left, rising there
g.fillStyle = '#56685a';
g.beginPath();
g.moveTo(1.55, -0.5);
g.lineTo(1.6, -0.08);
g.quadraticCurveTo(0, 0.04, -1.3, -0.1);
g.quadraticCurveTo(-1.65, -0.22, -1.75, -0.58);
g.quadraticCurveTo(0, -0.42, 1.55, -0.5);
g.closePath();
g.fill();
// the strakes, their seams; the paint gone grey where it has blistered off
g.strokeStyle = 'rgba(32,40,34,0.55)';
g.lineWidth = 0.018;
for (const t of [0.33, 0.66]) {
  g.beginPath();
  g.moveTo(1.58, -0.5 + 0.42 * t);
  g.quadraticCurveTo(0, -0.42 + 0.44 * t, -1.7 + 0.35 * t, -0.56 + 0.44 * t);
  g.stroke();
}
for (let i = 0; i < 40; i++) {
  g.fillStyle = 'rgba(150,146,130,0.55)';
  g.fillRect(-1.3 + e.rnd() * 2.8, -0.42 + e.rnd() * 0.36, 0.05 + e.rnd() * 0.18, 0.02 + e.rnd() * 0.03);
}
// the inside, seen over the near gunwale: paler boards, a thwart, the oar
g.fillStyle = '#9a9278';
g.beginPath();
g.moveTo(1.5, -0.52);
g.quadraticCurveTo(0, -0.44, -1.7, -0.6);
g.quadraticCurveTo(-1.5, -0.7, -1.1, -0.72);
g.quadraticCurveTo(0, -0.66, 1.45, -0.7);
g.closePath();
g.fill();
g.fillStyle = '#7a705c';
g.fillRect(0.2, -0.68, 0.16, 0.2);
g.strokeStyle = '#8a6e4a';
g.lineWidth = 0.05;
g.beginPath();
g.moveTo(-1.2, -0.64);
g.lineTo(1.3, -0.6);
g.stroke();
// the gunwale, a pale rubbed rim
g.strokeStyle = '#a7a28c';
g.lineWidth = 0.035;
g.beginPath();
g.moveTo(1.55, -0.5);
g.quadraticCurveTo(0, -0.42, -1.75, -0.58);
g.stroke();
e.at(-1.6, -0.55, 'bow');
e.at(0.2, -0.6);
