// The low rail fence along the edge of the field, with the gate into it standing a little open (metres from its foot:
// x −7…9, the gate at x 1…2.4).
g.fillStyle = '#8c7b66';
for (let x = -7; x <= 9; x += 2) {
  if (x > 0.5 && x < 3) continue;
  g.fillRect(x - 0.06, -1.25, 0.12, 1.3);
}
g.fillRect(0.9, -1.3, 0.14, 1.35);
g.fillRect(2.4, -1.3, 0.14, 1.35);
g.fillStyle = '#9d8c76';
for (const y of [-1.05, -0.55]) {
  g.fillRect(-7, y, 7.96, 0.08);
  g.fillRect(2.5, y, 6.5, 0.08);
}
// the gate: a frame with a diagonal brace, swung a little open toward the field (drawn narrower)
g.save();
g.translate(1.04, 0);
g.scale(0.78, 1);
g.fillStyle = '#b2a28a';
g.fillRect(0, -1.15, 1.36, 0.07);
g.fillRect(0, -0.45, 1.36, 0.07);
g.fillRect(0, -1.15, 0.07, 0.77);
g.fillRect(1.29, -1.15, 0.07, 0.77);
g.strokeStyle = '#b2a28a';
g.lineWidth = 0.06;
g.beginPath();
g.moveTo(0.05, -0.42);
g.lineTo(1.31, -1.12);
g.stroke();
g.restore();
e.at(1.6, -0.8, 'gate');
