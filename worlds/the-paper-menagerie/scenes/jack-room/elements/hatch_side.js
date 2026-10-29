// The open hatch's right-hand side, its rough joist (only while the hatch is open).
if (e.state.hatch > 0.5) {
  g.fillStyle = '#7a6250';
  g.fillRect(-0.36, -0.56, 0.72, 0.57);
  g.fillStyle = 'rgba(30,22,16,0.45)';
  g.fillRect(-0.36, -0.56, 0.72, 0.28);
}
