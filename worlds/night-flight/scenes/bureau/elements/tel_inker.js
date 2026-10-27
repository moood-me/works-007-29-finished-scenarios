// The Morse inker on the telegraph table, seen from the front: a black cast-iron case with its brass clockwork, the
// paper reel standing on it (its layer `reel`, turning while the inker runs), the tape led out between its rollers to
// the left and over the table's edge. Its point `ink` — where the tape comes out.
g.fillStyle = '#1f1e1d';
g.fillRect(-0.25, -0.15, 0.5, 0.15);
g.fillStyle = '#2c2a28';
g.fillRect(-0.27, -0.02, 0.54, 0.02);
g.fillStyle = '#b8954a';
g.fillRect(-0.18, -0.12, 0.16, 0.08);
g.beginPath();
g.arc(0.08, -0.08, 0.045, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#d9b862';
g.beginPath();
g.arc(-0.22, -0.1, 0.02, 0, Math.PI * 2);
g.fill();
// the reel's post
g.fillStyle = '#2c2a28';
g.fillRect(0.12, -0.3, 0.025, 0.16);
// the tape out of the rollers, to the left and down
g.strokeStyle = '#ece6d6';
g.lineWidth = 0.02;
g.beginPath();
g.moveTo(0.11, -0.3);
g.lineTo(-0.2, -0.11);
g.lineTo(-0.38, -0.1);
g.stroke();
const RC = [0.13, -0.32];
e.layer('reel', { pivot: RC }, c => {
  c.fillStyle = '#e9e3d2';
  c.beginPath();
  c.arc(RC[0], RC[1], 0.11, 0, Math.PI * 2);
  c.fill();
  c.strokeStyle = 'rgba(150,140,120,0.6)';
  c.lineWidth = 0.004;
  for (const r of [0.03, 0.05, 0.07, 0.09]) {
    c.beginPath();
    c.arc(RC[0], RC[1], r, 0, Math.PI * 2);
    c.stroke();
  }
  c.fillStyle = '#3a3634';
  c.fillRect(RC[0] - 0.008, RC[1] - 0.1, 0.016, 0.2);
});
e.at(-0.2, -0.11, 'ink');
