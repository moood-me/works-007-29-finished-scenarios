// The paper shark in the sink: of its folded grey-blue body only the fin and a sliver of the back show above the
// water, with a fold down the fin; the layer `fin` is moved along the basin by animate.
e.layer('fin', { box: [-0.24, -0.1, 0.24, 0.02] }, l => {
  l.fillStyle = '#8fa3b8';
  l.beginPath();
  l.moveTo(-0.07, 0);
  l.quadraticCurveTo(-0.02, -0.02, 0.07, 0);
  l.closePath();
  l.fill();
  l.fillStyle = '#7488a0';
  l.beginPath();
  l.moveTo(-0.025, -0.005);
  l.lineTo(0.0, -0.075);
  l.lineTo(0.03, -0.004);
  l.closePath();
  l.fill();
  l.fillStyle = '#a8bacb';
  l.beginPath();
  l.moveTo(0.0, -0.075);
  l.lineTo(0.03, -0.004);
  l.lineTo(0.012, -0.004);
  l.closePath();
  l.fill();
});
e.at(0, -0.04, 'shark');
