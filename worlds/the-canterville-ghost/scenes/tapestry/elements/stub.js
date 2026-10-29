// Her candle-end on the window seat by the glass (`stub` "sill"): a stub of white wax burnt down, a drop run down it.
// Nothing is painted while it is elsewhere. Point `stub#stub`.
if (e.state.stub === 'sill') {
  g.fillStyle = '#ede6d2';
  g.fillRect(-0.016, -0.07, 0.032, 0.07);
  g.fillStyle = '#d8ceb4';
  g.fillRect(-0.02, -0.012, 0.04, 0.012);
  g.fillStyle = '#2a2420';
  g.fillRect(-0.002, -0.085, 0.004, 0.016);
  g.fillStyle = '#e6dcc4';
  g.beginPath();
  g.ellipse(0.012, -0.04, 0.006, 0.014, 0, 0, Math.PI * 2);
  g.fill();
}
e.at(0, -0.05, 'stub');
