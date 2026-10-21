// What the back window shows, behind its frame: the pale day over the street — a whitish sky and, across the way, the
// warm ochre face of a house with its windows (it glows: the day, not lit by the room)
const sky = g.createLinearGradient(0, -1.97, 0, -0.83);
sky.addColorStop(0, '#e2e6ec');
sky.addColorStop(1, '#efe9e0');
g.fillStyle = sky;
g.fillRect(-0.45, -1.97, 0.9, 1.14);
g.fillStyle = '#e4cd98';
g.fillRect(-0.45, -1.62, 0.9, 0.79);
g.fillStyle = '#b9b9c2';
for (const x of [-0.36, -0.12, 0.12, 0.36]) {
  g.fillRect(x - 0.05, -1.5, 0.1, 0.2);
  g.fillRect(x - 0.05, -1.12, 0.1, 0.2);
}
g.fillStyle = '#f0e6cf';
g.fillRect(-0.45, -1.65, 0.9, 0.04);
