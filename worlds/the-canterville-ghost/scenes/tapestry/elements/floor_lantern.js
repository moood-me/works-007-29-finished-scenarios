// Washington's lantern set down on the floor under the tapestry (`lantern`): an iron frame, its glass glowing, its
// light on the floor and the wall round it. Nothing is painted (and no light) while `lantern` is false.
if (e.state.lantern) {
  g.fillStyle = '#1e1c1a';
  g.fillRect(-0.075, -0.04, 0.15, 0.04);
  g.fillRect(-0.06, -0.3, 0.12, 0.04);
  g.fillStyle = '#ffd890';
  g.fillRect(-0.055, -0.26, 0.11, 0.22);
  g.fillStyle = '#1e1c1a';
  g.fillRect(-0.06, -0.26, 0.012, 0.22);
  g.fillRect(0.048, -0.26, 0.012, 0.22);
  g.strokeStyle = '#1e1c1a';
  g.lineWidth = 0.01;
  g.beginPath();
  g.arc(0, -0.33, 0.04, Math.PI, Math.PI * 2);
  g.stroke();
  e.light(0, -0.15, 1.6, '#ffc874', 1.4, 'flame');
}
e.at(0, -0.15, 'lantern');
