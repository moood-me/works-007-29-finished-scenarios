// A willow by the water, grown in fourteen years: a short leaning trunk, a few limbs and long hanging strands of
// silver-green leaves from them, stirring in the wind (a layer about the trunk's top)
g.fillStyle = "#5e5446";
g.beginPath();
g.moveTo(-0.28, 0);
g.lineTo(-0.1, -2.2);
g.lineTo(0.24, -2.3);
g.lineTo(0.3, 0);
g.closePath();
g.fill();
e.layer("crown", { pivot: [0, -2.2], wind: { strength: 0.3, gust: 0.5 } }, (g) => {
  g.lineCap = "round";
  const tips = [];
  for (let i = 0; i < 6; i++) {
    const a = (i / 5 - 0.5) * 1.3 + (e.rnd() - 0.5) * 0.2, l = 2.4 + e.rnd() * 1.2, x = Math.sin(a) * l, y = -2.2 - Math.cos(a) * l;
    g.strokeStyle = "#5e5446";
    g.lineWidth = 0.09;
    g.beginPath();
    g.moveTo(0, -2.2);
    g.quadraticCurveTo(x * 0.3, -2.2 + (y + 2.2) * 0.7, x, y);
    g.stroke();
    tips.push([x, y]);
  }
  for (const [x, y] of tips) {
    for (let k = 0; k < 14; k++) {
      const sx = x * (0.4 + k * 0.05) + (e.rnd() - 0.5) * 0.6, sy = -2.2 + (y + 2.2) * (0.55 + k * 0.035), l = 1.4 + e.rnd() * 1.8;
      g.strokeStyle = ["#7d8a66", "#9aa784", "#6b7757"][k % 3];
      g.lineWidth = 0.09 + e.rnd() * 0.05;
      g.beginPath();
      g.moveTo(sx, sy);
      g.quadraticCurveTo(sx + Math.sign(x || 1) * 0.35, sy - 0.1, sx + Math.sign(x || 1) * 0.3, Math.min(-0.2, sy + l));
      g.stroke();
    }
  }
});
