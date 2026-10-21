// A geranium in a clay pot on the sill: round leaves and a few scarlet heads of flowers — the room's one bright red
const INK = e.lib.INK;
g.fillStyle = '#b4654a';
g.beginPath();
g.moveTo(-0.075, -0.14);
g.lineTo(0.075, -0.14);
g.lineTo(0.058, 0);
g.lineTo(-0.058, 0);
g.closePath();
g.fill();
g.strokeStyle = INK;
g.lineWidth = 0.006;
g.stroke();
g.fillRect(-0.085, -0.16, 0.17, 0.03);
g.strokeRect(-0.085, -0.16, 0.17, 0.03);
g.beginPath();
for (let i = 0; i < 11; i++) {
  const x = (e.anim.hash(i, 1) - 0.5) * 0.26, y = -0.18 - 0.16 * e.anim.hash(i, 2), r = 0.03 + 0.015 * e.anim.hash(i, 3);
  g.moveTo(x + r, y);
  g.arc(x, y, r, 0, Math.PI * 2);
}
g.fillStyle = '#6f8a58';
g.fill();
g.strokeStyle = 'rgba(60,70,50,0.6)';
g.stroke();
g.beginPath();
for (const [x, y] of [[-0.06, -0.37], [0.05, -0.4], [0.1, -0.31]]) {
  for (let k = 0; k < 5; k++) {
    const a = k * 1.3, px = x + 0.022 * Math.cos(a), py = y + 0.02 * Math.sin(a);
    g.moveTo(px + 0.016, py);
    g.arc(px, py, 0.016, 0, Math.PI * 2);
  }
}
g.fillStyle = '#c8393a';
g.fill();
