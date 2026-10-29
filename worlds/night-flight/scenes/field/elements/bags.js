// The mail bags piled by the plane, waiting to be loaded (`bags` 1): fat canvas sacks, their necks tied, brass seals
// on the cords, one stood up against the pile.
if (e.state.bags) {
  const sack = (x, y, w, h, col) => {
    g.fillStyle = col;
    g.beginPath();
    g.ellipse(x, y - h / 2, w / 2, h / 2, 0, 0, Math.PI * 2);
    g.fill();
    g.fillStyle = '#8a7a58';
    g.fillRect(x - 0.05, y - h - 0.06, 0.1, 0.08);
    g.fillStyle = '#c8a050';
    g.beginPath();
    g.arc(x + 0.04, y - h - 0.02, 0.025, 0, Math.PI * 2);
    g.fill();
  };
  sack(-0.5, 0, 0.6, 0.42, '#9c8f6a');
  sack(0.1, 0, 0.62, 0.4, '#a69872');
  sack(0.6, 0, 0.55, 0.44, '#948762');
  sack(-0.2, -0.32, 0.58, 0.38, '#ab9d78');
  sack(0.35, -0.3, 0.5, 0.36, '#9a8d68');
  e.at(0, -0.5, 'bags');
}
