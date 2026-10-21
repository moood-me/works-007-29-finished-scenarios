// A bare winter birch beyond the fence (its copies stand at their own places): a white trunk with black marks,
// leaning a little, and its crown of thin drooping twigs — a layer the wind bends from where the crown begins.
// (x −4.5…4.5 m, its foot at 0, 13 m tall)
const H = 13;

// the trunk: white, tapering, leaning right; black marks across it, darker at its foot
g.fillStyle = "#e8e6e0";
g.beginPath();
g.moveTo(-0.2, 0);
g.quadraticCurveTo(-0.12, -H * 0.5, 0.35, -H * 0.92);
g.lineTo(0.45, -H * 0.92);
g.quadraticCurveTo(0.1, -H * 0.5, 0.2, 0);
g.closePath();
g.fill();
g.fillStyle = "#2f2d2b";
g.fillRect(-0.21, -0.9, 0.42, 0.9);
for (let i = 0; i < 26; i++) {
  const u = e.rnd() * 0.85;
  const y = -H * u;
  const x = -0.16 + 0.42 * u * u;
  const w = (0.4 - 0.25 * u) * (0.3 + e.rnd() * 0.5);
  g.fillRect(x + e.rnd() * 0.1, y, w, 0.05 + e.rnd() * 0.08);
}

// the crown: limbs up and out from the trunk, twigs hanging from them
e.layer("crown", { pivot: [0.1, -H * 0.45], wind: { strength: 0.6, gust: 0.9, scale: 1 } }, c => {
  c.lineCap = "round";
  for (let i = 0; i < 16; i++) {
    const u = 0.42 + e.rnd() * 0.5;
    const sx = -0.12 + 0.42 * u * u;
    const sy = -H * u;
    const side = e.rnd() < 0.5 ? -1 : 1;
    const len = 1.6 + e.rnd() * 2.4 * (1 - u * 0.6);
    const ex = sx + side * len;
    const ey = sy - len * (0.5 + e.rnd() * 0.5);
    c.strokeStyle = "#3b3530";
    c.lineWidth = 0.07;
    c.beginPath();
    c.moveTo(sx, sy);
    c.quadraticCurveTo(sx + side * len * 0.4, sy - len * 0.7, ex, ey);
    c.stroke();
    // (twigs falling from the limb, fine and long)
    c.strokeStyle = "rgba(70,58,52,0.7)";
    c.lineWidth = 0.025;
    for (let k = 0; k < 9; k++) {
      const t = 0.3 + k / 9 * 0.7;
      const tx = sx + (ex - sx) * t;
      const ty = sy + (ey - sy) * t - Math.sin(t * Math.PI) * len * 0.25;
      const drop = 1 + e.rnd() * 2.2;
      c.beginPath();
      c.moveTo(tx, ty);
      c.quadraticCurveTo(tx + side * 0.3, ty + drop * 0.4, tx + side * 0.15, ty + drop);
      c.stroke();
    }
  }
});
