// Over the well: two posts, a little gabled roof of boards, the windlass with its rope wound round and a crank on
// the right; the bucket hangs from the windlass on its rope over the dark water and sways a little in the wind (a
// layer, about the rope's top). A second bucket stands on the rim.
const PX = 0.56, TOP = 2.05, AX = -1.55;
for (const s of [-1, 1]) {
  g.fillStyle = '#8c663f';
  g.fillRect(s * PX - 0.05, -TOP, 0.1, TOP);
  g.fillStyle = '#ad8656';
  g.fillRect(s * PX - 0.05, -TOP, 0.035, TOP);
}
// the roof: two boards meeting over the posts, seen from the front
g.fillStyle = '#7d6a55';
g.beginPath();
g.moveTo(-PX - 0.32, -TOP + 0.1);
g.lineTo(0, -TOP - 0.42);
g.lineTo(PX + 0.32, -TOP + 0.1);
g.lineTo(PX + 0.32, -TOP + 0.2);
g.lineTo(0, -TOP - 0.3);
g.lineTo(-PX - 0.32, -TOP + 0.2);
g.closePath();
g.fill();
g.fillStyle = '#9b8670';
g.beginPath();
g.moveTo(-PX - 0.2, -TOP + 0.08);
g.lineTo(0, -TOP - 0.3);
g.lineTo(PX + 0.2, -TOP + 0.08);
g.closePath();
g.fill();
// the windlass: the drum with the rope wound on it, the crank
g.fillStyle = '#9a7349';
g.fillRect(-PX, AX - 0.07, 2 * PX, 0.14);
g.strokeStyle = '#cdbb94';
g.lineWidth = 0.02;
for (let i = 0; i < 10; i++) {
  const x = -0.3 + i * 0.06;
  g.beginPath();
  g.moveTo(x, AX - 0.07);
  g.lineTo(x + 0.03, AX + 0.07);
  g.stroke();
}
g.fillStyle = '#5d5f66';
g.fillRect(PX + 0.04, AX - 0.02, 0.18, 0.04);
g.fillRect(PX + 0.2, AX - 0.02, 0.04, 0.24);
// the bucket on the rim, to the left
g.fillStyle = '#7a5a3a';
g.fillRect(-0.5, -1.13, 0.26, 0.28);
g.fillStyle = '#4f5257';
g.fillRect(-0.51, -1.1, 0.28, 0.025);
g.fillRect(-0.51, -0.92, 0.28, 0.025);
// the hanging bucket on its rope
e.layer('bucket', { pivot: [0.12, AX + 0.07], wind: { strength: 0.12, gust: 0.5, scale: 3 }, box: [-0.05, AX + 0.05, 0.3, -0.85] }, (g) => {
  g.strokeStyle = '#cdbb94';
  g.lineWidth = 0.02;
  g.beginPath();
  g.moveTo(0.12, AX + 0.07);
  g.lineTo(0.12, -1.18);
  g.stroke();
  g.strokeStyle = '#4f5257';
  g.beginPath();
  g.arc(0.12, -1.05, 0.12, Math.PI, 0);
  g.stroke();
  g.fillStyle = '#7a5a3a';
  g.beginPath();
  g.moveTo(0.0, -1.05);
  g.lineTo(0.24, -1.05);
  g.lineTo(0.22, -0.88);
  g.lineTo(0.02, -0.88);
  g.closePath();
  g.fill();
  g.fillStyle = '#4f5257';
  g.fillRect(0.0, -1.03, 0.24, 0.025);
});
