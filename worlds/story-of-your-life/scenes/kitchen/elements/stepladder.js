// The stepladder, pulled out of its corner to reach the high shelf, from the front, from its foot (1.02 m): its two
// rails leaning in toward the top, three steps and the top tread; old white paint worn to the wood where hands and
// feet go, a strip of blue tape round one rail; its back legs behind. On the top tread the rolled sleeping bag she
// has just taken down; the point `top` — where her hand rests on it.
const rail = (x0, x1) => {
  g.beginPath();
  g.moveTo(x0 - 0.025, 0);
  g.lineTo(x0 + 0.025, 0);
  g.lineTo(x1 + 0.025, -0.96);
  g.lineTo(x1 - 0.025, -0.96);
  g.closePath();
  g.fill();
};
g.fillStyle = '#b8b2a4';
rail(-0.2, -0.17);
rail(0.2, 0.17);
g.fillStyle = '#ebe7dc';
rail(-0.26, -0.18);
rail(0.26, 0.18);
const step = (y, w) => {
  g.fillStyle = '#ebe7dc';
  g.fillRect(-w / 2, y - 0.045, w, 0.045);
  g.fillStyle = '#b89466';
  g.fillRect(-w * 0.22, y - 0.045, w * 0.44, 0.012);
  g.fillStyle = 'rgba(90,80,60,0.25)';
  g.fillRect(-w / 2, y, w, 0.012);
};
step(-0.28, 0.48);
step(-0.53, 0.43);
step(-0.77, 0.4);
g.fillStyle = '#ebe7dc';
g.fillRect(-0.22, -1.0, 0.44, 0.05);
g.fillStyle = '#b89466';
g.fillRect(-0.08, -1.0, 0.16, 0.012);
g.fillStyle = '#4a73a8';
g.fillRect(-0.245, -0.44, 0.05, 0.05);
g.fillStyle = '#3e5f4a';
g.beginPath();
g.roundRect(-0.26, -1.27, 0.52, 0.27, 0.13);
g.fill();
g.fillStyle = '#2a3a30';
g.fillRect(-0.12, -1.27, 0.03, 0.27);
g.fillRect(0.12, -1.27, 0.03, 0.27);
e.at(0.05, -1.2, 'top');
