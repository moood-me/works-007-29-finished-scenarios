// A shelf on the back wall, 1.7 m up on two carved brackets: painted plates standing on edge, a jug, and in the
// middle the music box — a small red-lacquered casket with gold scrollwork and a brass winding key at its side (the
// point `musicbox`: its tune is the tale's theme).
const S = -1.7;
g.fillStyle = '#9a6c40';
g.fillRect(-0.72, S, 1.44, 0.05);
g.fillStyle = '#7a5232';
for (const x of [-0.55, 0.55]) {
  g.beginPath();
  g.moveTo(x - 0.03, S + 0.05);
  g.lineTo(x + 0.03, S + 0.05);
  g.quadraticCurveTo(x + 0.03, S + 0.2, x - 0.01, S + 0.26);
  g.quadraticCurveTo(x - 0.03, S + 0.15, x - 0.03, S + 0.05);
  g.fill();
}
// plates
for (const [x, c, rim] of [[-0.55, '#efe7d2', '#3f62a8'], [-0.3, '#efe7d2', '#b5342e'], [0.42, '#efe7d2', '#3f62a8']]) {
  g.fillStyle = rim;
  g.beginPath();
  g.arc(x, S - 0.14, 0.14, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = c;
  g.beginPath();
  g.arc(x, S - 0.14, 0.11, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = rim;
  g.beginPath();
  g.arc(x, S - 0.14, 0.035, 0, Math.PI * 2);
  g.fill();
}
// the jug
g.fillStyle = '#c4874c';
g.beginPath();
g.moveTo(0.58, S);
g.quadraticCurveTo(0.53, S - 0.14, 0.6, S - 0.22);
g.lineTo(0.66, S - 0.22);
g.quadraticCurveTo(0.72, S - 0.14, 0.68, S);
g.closePath();
g.fill();
// the music box
const BW = 0.3, BH = 0.17;
g.fillStyle = '#9b2a26';
g.fillRect(-BW / 2 + 0.05, S - BH, BW, BH);
g.fillStyle = '#b8382f';
g.beginPath();
g.moveTo(-BW / 2 + 0.04, S - BH);
g.quadraticCurveTo(0.05, S - BH - 0.08, BW / 2 + 0.06, S - BH);
g.closePath();
g.fill();
g.strokeStyle = '#e2b84c';
g.lineWidth = 0.008;
g.strokeRect(-BW / 2 + 0.07, S - BH + 0.025, BW - 0.04, BH - 0.05);
g.beginPath();
for (const s of [-1, 1]) {
  g.moveTo(0.05, S - BH / 2);
  g.bezierCurveTo(0.05 + s * 0.04, S - BH / 2 - 0.05, 0.05 + s * 0.09, S - BH / 2 + 0.04, 0.05 + s * 0.06, S - BH / 2);
}
g.stroke();
g.fillStyle = '#e2b84c';
g.fillRect(BW / 2 + 0.05, S - 0.1, 0.03, 0.012);
g.beginPath();
g.ellipse(BW / 2 + 0.09, S - 0.094, 0.012, 0.025, 0, 0, Math.PI * 2);
g.fill();
e.at(0.05, S - BH / 2, 'musicbox');
