// The porch's three stone steps up from the forecourt (metres: x across, y up), worn in the middle.
const tones = ['#d3c8ad', '#cbbfa3', '#c2b698'];
for (let k = 0; k < 3; k++) {
  const w = 2.6 - k * 0.12;
  g.fillStyle = tones[k];
  g.fillRect(-w, -(k + 1) * 0.18, 2 * w, 0.18);
  g.fillStyle = 'rgba(90,76,54,0.3)';
  g.fillRect(-w, -(k + 1) * 0.18, 2 * w, 0.025);
}
