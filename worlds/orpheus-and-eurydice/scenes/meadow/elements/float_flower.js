// A pale asphodel flower she has let go on the water, floating by her feet as her lanterns floated on the lake: a small
// six-pointed star of white petals, lilac at its heart (from above: x across, y toward the viewer). It glows, as the
// flowers on the meadow do; its animate turns it slowly and rocks it on the stream.
e.layer('flower', { pivot: [0, 0], box: [-0.09, -0.09, 0.09, 0.09] }, g => {
  g.fillStyle = '#efecf8';
  g.beginPath();
  for (let p = 0; p < 6; p++) {
    const a = p / 6 * Math.PI * 2, b = a + Math.PI / 6;
    g.lineTo(Math.cos(a) * 0.075, Math.sin(a) * 0.075);
    g.lineTo(Math.cos(b) * 0.03, Math.sin(b) * 0.03);
  }
  g.closePath();
  g.fill();
  g.fillStyle = '#c9c2e6';
  g.beginPath();
  g.arc(0, 0, 0.02, 0, Math.PI * 2);
  g.fill();
});
