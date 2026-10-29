// The hatch's lid hanging open from its hinge at the far edge (only while the hatch is open): plaster-white on its
// ceiling side, its frame of boards, and its pull cord hanging from the free edge with a wooden toggle.
if (e.state.hatch > 0.5) {
  g.fillStyle = '#e4ded0';
  g.fillRect(-0.29, 0, 0.58, 0.68);
  g.strokeStyle = '#b9a88e';
  g.lineWidth = 0.03;
  g.strokeRect(-0.29, 0, 0.58, 0.68);
  g.strokeStyle = '#d8d2c4';
  g.lineWidth = 0.004;
  g.beginPath();
  g.moveTo(0, 0.68);
  g.lineTo(0, 0.98);
  g.stroke();
  g.fillStyle = '#9a7552';
  g.fillRect(-0.012, 0.97, 0.024, 0.06);
}
