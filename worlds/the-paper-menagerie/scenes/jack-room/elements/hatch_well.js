// Up through the open hatch: the far side of its frame, rough boards going up into the attic's dusk (only while the
// hatch is open).
if (e.state.hatch > 0.5) {
  g.fillStyle = '#6e5844';
  g.fillRect(-0.31, -0.56, 0.62, 0.57);
  g.fillStyle = 'rgba(40,28,20,0.35)';
  for (let x = -0.31; x < 0.31; x += 0.14) g.fillRect(x, -0.56, 0.01, 0.57);
  g.fillStyle = 'rgba(30,22,16,0.5)';
  g.fillRect(-0.31, -0.56, 0.62, 0.25);
}
