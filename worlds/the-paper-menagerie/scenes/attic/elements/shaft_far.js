// Down the open hatch: its far side, the rough joists and the lath going down into the hall, lighter toward the
// bottom where the hall's light is (only while the hatch is open).
if (e.state.hatch > 0.5) {
  const v = g.createLinearGradient(0, 0, 0, 1.3);
  v.addColorStop(0, '#5c4636');
  v.addColorStop(1, '#a88a6a');
  g.fillStyle = v;
  g.fillRect(-0.36, 0, 0.72, 1.3);
  g.fillStyle = 'rgba(40,28,20,0.4)';
  g.fillRect(-0.36, 0, 0.72, 0.18);
}
