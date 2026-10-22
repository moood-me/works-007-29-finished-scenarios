// The window in the back wall (metres from the sill; the opening x −0.5…0.5, 1.1 high): no glass, a frame of rough
// boards, four turned wooden bars, and its two shutters folded back against the wall either side — sea-green, the
// paint flaking.
g.fillStyle = '#5c4636';
g.fillRect(-0.56, -1.12, 0.06, 1.12);
g.fillRect(0.5, -1.12, 0.06, 1.12);
g.fillRect(-0.56, -1.12, 1.12, 0.06);
g.fillRect(-0.58, -0.03, 1.16, 0.06);
// the bars
for (const x of [-0.3, -0.1, 0.1, 0.3]) {
  g.fillStyle = '#6a5240';
  g.fillRect(x - 0.016, -1.06, 0.032, 1.04);
  g.fillStyle = '#7d6250';
  for (let y = -0.95; y < -0.05; y += 0.18) {
    g.beginPath();
    g.ellipse(x, y, 0.026, 0.03, 0, 0, Math.PI * 2);
    g.fill();
  }
}
// the shutters
for (const s of [-1, 1]) {
  g.save();
  g.scale(s, 1);
  g.fillStyle = '#6f9a8e';
  g.fillRect(0.58, -1.1, 0.36, 1.08);
  g.strokeStyle = '#557c71';
  g.lineWidth = 0.012;
  for (let y = -1.04; y < -0.06; y += 0.06) {
    g.beginPath();
    g.moveTo(0.62, y);
    g.lineTo(0.9, y + 0.025);
    g.stroke();
  }
  g.fillStyle = '#5d8478';
  g.fillRect(0.58, -1.1, 0.04, 1.08);
  g.fillRect(0.9, -1.1, 0.04, 1.08);
  g.fillStyle = 'rgba(196,184,160,0.55)';
  for (let i = 0; i < 9; i++) g.fillRect(0.6 + e.rnd() * 0.3, -1.05 + e.rnd() * 1.0, 0.02 + e.rnd() * 0.06, 0.015 + e.rnd() * 0.03);
  g.restore();
}
e.at(0, -0.55, 'window');
