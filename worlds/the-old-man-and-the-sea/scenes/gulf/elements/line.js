// The old man's line, from his hands over the near gunwale down into the deep: a layer one metre long that its
// animate lays from his hands to where the line goes into the water (or to the fish's mouth when it is up alongside)
// each frame; and the little ring the taut line cuts in the water there.
e.layer('line', { pivot: [0, 0], box: [-0.01, -0.012, 1.01, 0.012] }, g => {
  g.strokeStyle = '#3e3528';
  g.lineWidth = 0.011;
  g.beginPath();
  g.moveTo(0, 0);
  g.lineTo(1, 0);
  g.stroke();
});
e.layer('ring', { pivot: [0, 0], box: [-0.2, -0.06, 0.2, 0.06] }, g => {
  g.strokeStyle = 'rgba(226,234,246,0.7)';
  g.lineWidth = 0.012;
  g.beginPath();
  g.ellipse(0, 0, 0.13, 0.025, 0, 0, Math.PI * 2);
  g.stroke();
});
