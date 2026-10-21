// The boat's stern: its square transom, the same blue-grey strakes as its sides, tarred below.
g.fillStyle = "#3d3a38";
g.fillRect(-0.6, -0.5, 1.2, 0.8);
const tones = ["#6c7b86", "#62717c", "#74838d", "#5c6a75"];
for (let i = 0; i < 4; i++) {
  g.fillStyle = tones[i];
  g.fillRect(-0.6, -0.5 + 0.11 * i, 1.2, 0.1);
}
g.fillStyle = "#8a7b66";
g.fillRect(-0.62, -0.53, 1.24, 0.04);
