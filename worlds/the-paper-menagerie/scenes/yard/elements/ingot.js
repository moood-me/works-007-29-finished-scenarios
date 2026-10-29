// Jack's own ingot in the fire (1.4: `ingot_named`, while the bucket burns): a little boat of gold paper on the burning
// heap at the bucket's rim, his name pencilled on its side, its edge blackening.
if (!e.state.ingot_named || !(e.state.fire > 0)) return;
g.fillStyle = '#e1b23c';
g.beginPath();
g.moveTo(-0.06, -0.04);
g.lineTo(0.06, -0.04);
g.lineTo(0.04, 0);
g.lineTo(-0.04, 0);
g.closePath();
g.fill();
g.fillStyle = '#f2cf5e';
g.fillRect(-0.025, -0.058, 0.05, 0.02);
g.strokeStyle = '#4a4a50';
g.lineWidth = 0.003;
g.beginPath();
for (let i = 0; i < 4; i++) {
  const x = -0.035 + i * 0.019;
  g.moveTo(x, -0.01);
  g.lineTo(x + 0.005, -0.03);
  g.lineTo(x + 0.011, -0.012);
}
g.stroke();
g.fillStyle = 'rgba(40,24,16,0.7)';
g.fillRect(0.035, -0.04, 0.025, 0.04);
e.at(0, -0.03, 'ingot');
