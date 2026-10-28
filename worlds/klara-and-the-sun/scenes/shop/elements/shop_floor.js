// The shop's floor from above (metres, its middle at distance 9.3; y toward the viewer): a warm grey-and-cream
// chequer of large tiles, worn paler where people walk from the door to the counter.
g.fillStyle = '#cbc1b0';
g.fillRect(-3.5, -3.3, 7.0, 6.6);
const T = 0.5;
for (let i = 0; i < 14; i++) {
  for (let j = 0; j < 14; j++) {
    g.fillStyle = (i + j) % 2 ? '#d8cfbf' : '#b9ad9a';
    g.fillRect(-3.5 + i * T + 0.006, -3.3 + j * T + 0.006, T - 0.012, T - 0.012);
  }
}
