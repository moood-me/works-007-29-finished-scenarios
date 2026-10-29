// The corridor's ceiling (lying flat from the corridor's end toward the eye: y −(18 − distance)): white, a long
// fluorescent panel every five metres down its middle (their light is the scene's lights `corridor_1`…`corridor_4`).
g.fillStyle = '#eef0ea';
g.fillRect(-1.47, -21.3, 2.94, 21.4);
for (const d of [1, 6, 11, 16]) {
  const y = -(18 - d);
  g.fillStyle = '#d6d9d2';
  g.fillRect(-0.32, y - 0.66, 0.64, 1.32);
  g.fillStyle = '#fbfcf6';
  g.fillRect(-0.28, y - 0.62, 0.56, 1.24);
}
