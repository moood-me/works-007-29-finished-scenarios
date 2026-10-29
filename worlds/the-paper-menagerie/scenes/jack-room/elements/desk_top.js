// The desk's top from above (its middle at across −0.4, distance 4.02; y toward the viewer): exercise books, a tin of
// crayons, a ruler; a little wooden pencil box. Emptied (`packed`): bare maple, a faint ring.
g.fillStyle = '#d0a26a';
g.fillRect(-0.5, -0.16, 1.0, 0.32);
g.fillStyle = 'rgba(120,80,40,0.15)';
for (let x = -0.5; x < 0.5; x += 0.1) g.fillRect(x, -0.16, 0.004, 0.32);
if (!e.state.packed) {
  g.fillStyle = '#e8e2c8';
  g.save();
  g.translate(-0.26, 0.02);
  g.rotate(-0.12);
  g.fillRect(-0.12, -0.08, 0.24, 0.16);
  g.fillStyle = '#5d8a6a';
  g.fillRect(-0.12, -0.08, 0.24, 0.03);
  g.restore();
  g.fillStyle = '#d1504a';
  g.fillRect(0.02, -0.1, 0.12, 0.07);
  g.fillStyle = '#efc94e';
  g.fillRect(0.03, -0.09, 0.1, 0.015);
  g.fillStyle = '#e9d8a8';
  g.fillRect(-0.1, 0.09, 0.32, 0.025);
  g.fillStyle = '#8a6040';
  g.fillRect(0.28, -0.06, 0.16, 0.06);
}
