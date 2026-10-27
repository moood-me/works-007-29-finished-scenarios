// The kitchen's left wall, from its foot (x along it away from the viewer: x = distance − 2.9, the back wall at
// x 2.1): cream paint, the skirting; the spice shelf (x 0.2…1.25) and, above it, the high shelf — the cookbooks, and
// the gap where the sleeping bag was.
g.fillStyle = '#e6dcc8';
g.fillRect(-2.12, -2.57, 4.24, 2.59);
g.fillStyle = '#d6cab2';
g.fillRect(-2.12, -0.1, 4.24, 0.12);
// the spice shelf: a board on brackets, the jars, the cinnamon in its tin
g.fillStyle = '#a8865c';
g.fillRect(0.2, -1.76, 1.05, 0.04);
g.fillRect(0.27, -1.72, 0.03, 0.1);
g.fillRect(1.13, -1.72, 0.03, 0.1);
const jars = ['#b26a32', '#c9a54a', '#6f7a3c', '#8c3b2e', '#d8cfb4', '#5a3a2a'];
for (let i = 0; i < jars.length; i++) {
  const x = 0.25 + i * 0.15;
  g.fillStyle = 'rgba(230,236,236,0.85)';
  g.fillRect(x, -1.9, 0.09, 0.14);
  g.fillStyle = jars[i];
  g.fillRect(x + 0.01, -1.86, 0.07, 0.1);
  g.fillStyle = '#3f3a34';
  g.fillRect(x, -1.92, 0.09, 0.025);
}
g.fillStyle = '#9a5a30';
g.fillRect(1.15, -1.93, 0.08, 0.17);
// the high shelf: the cookbooks
g.fillStyle = '#a8865c';
g.fillRect(0.2, -2.18, 1.05, 0.04);
for (const [x, w, c] of [[0.97, 0.05, '#9a3a32'], [1.03, 0.04, '#d6c08a'], [1.08, 0.06, '#3a5a7a']]) {
  g.fillStyle = c;
  g.fillRect(x, -2.42, w, 0.24);
}
