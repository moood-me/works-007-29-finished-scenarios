// The two windows' sashes: white-painted wood, each window two sashes of six panes (the lower one raised a hand's
// breadth for the evening air), a brass lock where they meet, the sill a deep board. Metres from the sill (x across,
// as the back wall's).
g.fillStyle = '#f0ece0';
for (const x0 of [-2.0, 0.6]) {
  g.fillRect(x0, -1.8, 1.4, 0.06);
  g.fillRect(x0, -0.06, 1.4, 0.06);
  g.fillRect(x0, -1.8, 0.06, 1.8);
  g.fillRect(x0 + 1.34, -1.8, 0.06, 1.8);
  // the meeting rails (the lower sash raised: the two rails a little apart)
  g.fillRect(x0, -0.98, 1.4, 0.05);
  g.fillRect(x0, -0.86, 1.4, 0.05);
  // the bars: two upright, one across in each sash
  for (const k of [1, 2]) g.fillRect(x0 + (k * 1.4) / 3 - 0.015, -1.8, 0.03, 1.8);
  g.fillRect(x0, -1.39, 1.4, 0.03);
  g.fillRect(x0, -0.45, 1.4, 0.03);
  g.fillStyle = '#b8964a';
  g.fillRect(x0 + 0.66, -0.94, 0.08, 0.025);
  g.fillStyle = '#e8e2d2';
  g.fillRect(x0 - 0.1, 0.0, 1.6, 0.05);
  g.fillStyle = '#c9c2ae';
  g.fillRect(x0 - 0.1, 0.05, 1.6, 0.02);
  g.fillStyle = '#f0ece0';
}
