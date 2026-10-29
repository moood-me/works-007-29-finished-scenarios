// Down the open hatch: its right-hand side, the same rough wood (only while the hatch is open).
if (e.state.hatch > 0.5) {
  const v = g.createLinearGradient(0, 0, 0, 1.3);
  v.addColorStop(0, '#644c3a');
  v.addColorStop(1, '#b0926e');
  g.fillStyle = v;
  g.fillRect(-0.41, 0, 0.82, 1.3);
  g.fillStyle = 'rgba(40,28,20,0.4)';
  g.fillRect(-0.41, 0, 0.82, 0.18);
}
