// The shut hatch's pull cord hanging from its near edge, a wooden toggle at its end (only while the hatch is shut).
if (!(e.state.hatch > 0.5)) {
  g.strokeStyle = '#d8d2c4';
  g.lineWidth = 0.004;
  g.beginPath();
  g.moveTo(0, 0);
  g.lineTo(0, 0.26);
  g.stroke();
  g.fillStyle = '#9a7552';
  g.fillRect(-0.012, 0.25, 0.024, 0.06);
}
