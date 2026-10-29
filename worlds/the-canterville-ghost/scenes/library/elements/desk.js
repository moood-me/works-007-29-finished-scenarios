// Mr Otis's writing desk, from before (1.56 m wide, 0.78 m high): a mahogany pedestal desk, drawers either side of
// the kneehole, a leather top with papers, a letter and an inkstand on it.
g.fillStyle = '#4a2418';
g.fillRect(-0.78, -0.78, 1.56, 0.78);
g.fillStyle = '#5c2e1e';
g.fillRect(-0.8, -0.8, 1.6, 0.05);
// the kneehole
g.fillStyle = '#1e100a';
g.fillRect(-0.3, -0.66, 0.6, 0.66);
// the drawers and their brass handles
g.strokeStyle = '#2e170e';
g.lineWidth = 0.015;
for (const x0 of [-0.74, 0.34]) {
  for (let y = -0.72; y < -0.05; y += 0.22) {
    g.strokeRect(x0, y, 0.4, 0.2);
    g.fillStyle = '#b8923e';
    g.fillRect(x0 + 0.17, y + 0.09, 0.06, 0.02);
  }
}
// papers and the inkstand standing up over the top's edge
g.fillStyle = '#e6dcc4';
g.fillRect(-0.62, -0.83, 0.42, 0.03);
g.fillRect(-0.15, -0.82, 0.3, 0.02);
g.fillStyle = '#2a2622';
g.fillRect(-0.48, -0.9, 0.16, 0.08);
g.fillStyle = '#e8e2d2';
g.save();
g.translate(-0.43, -0.9);
g.rotate(-0.5);
g.fillRect(0, -0.16, 0.01, 0.16);
g.restore();
// her drawing of him, standing propped against the inkstand (`drawing` "inkstand"); its point `drawing`, where his
// hand takes it from
if (e.state.drawing === 'inkstand') {
  g.fillStyle = '#f4efe2';
  g.fillRect(-0.3, -1.06, 0.2, 0.26);
  g.strokeStyle = '#3a3430';
  g.lineWidth = 0.005;
  g.beginPath();
  g.ellipse(-0.2, -0.95, 0.05, 0.065, 0, 0, Math.PI * 2);
  g.stroke();
}
e.at(-0.2, -0.88, 'drawing');
