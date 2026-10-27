// The wicket of the post office (metres from its sill; the opening x −0.45…0.45, 1.0 high, left clear): its frame of
// boards, the sill a ledge worn pale where the town leans to ask, its two shutters folded back against the wall,
// sea-green, the paint flaking.
g.fillStyle = '#5a4434';
g.fillRect(-0.52, -1.06, 0.07, 1.06);
g.fillRect(0.45, -1.06, 0.07, 1.06);
g.fillRect(-0.52, -1.07, 1.04, 0.07);
g.fillStyle = '#8a7660';
g.fillRect(-0.62, -0.02, 1.24, 0.08);
g.fillStyle = '#a8977c';
g.fillRect(-0.3, -0.02, 0.6, 0.025);
for (const s of [-1, 1]) {
  g.save();
  g.scale(s, 1);
  g.fillStyle = '#6f9a8e';
  g.fillRect(0.55, -1.04, 0.42, 1.02);
  g.strokeStyle = '#557c71';
  g.lineWidth = 0.012;
  for (let y = -0.98; y < -0.06; y += 0.06) {
    g.beginPath();
    g.moveTo(0.59, y);
    g.lineTo(0.93, y + 0.025);
    g.stroke();
  }
  g.fillStyle = '#5d8478';
  g.fillRect(0.55, -1.04, 0.04, 1.02);
  g.fillRect(0.93, -1.04, 0.04, 1.02);
  g.fillStyle = 'rgba(196,184,160,0.55)';
  for (let i = 0; i < 9; i++) g.fillRect(0.57 + e.rnd() * 0.36, -1.0 + e.rnd() * 0.95, 0.02 + e.rnd() * 0.06, 0.015 + e.rnd() * 0.03);
  g.restore();
}
e.at(0, -0.5, 'wicket');
