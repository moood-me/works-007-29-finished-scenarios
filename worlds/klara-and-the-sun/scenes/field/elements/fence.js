// The low rail fence along the edge of the field, weathered grey (metres from its foot: x −16…16), its gateway at x
// 0.15…1.75 between two stouter posts — the gate itself is an element of its own, hung on the left post.
g.fillStyle = '#8c7b66';
for (let x = -15.4; x <= 16; x += 2.2) {
  if (x > -0.6 && x < 2.6) continue;
  g.fillRect(x - 0.06, -1.25, 0.12, 1.3);
}
g.fillRect(0.06, -1.32, 0.16, 1.37);
g.fillRect(1.68, -1.32, 0.16, 1.37);
g.fillStyle = '#9d8c76';
for (const y of [-1.05, -0.55]) {
  g.fillRect(-16, y, 16.1, 0.08);
  g.fillRect(1.75, y, 14.25, 0.08);
}
e.at(0.95, -0.8, 'gate');
