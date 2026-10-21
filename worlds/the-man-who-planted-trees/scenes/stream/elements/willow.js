// A first willow by the water, a few years old: thin pale stems from one root and long narrow strands of silver-green
// leaves hanging from them, stirring in the wind (a layer about the root)
e.layer("willow", { pivot: [0, 0], wind: { strength: 0.45, gust: 0.5 } }, (g) => {
  g.lineCap = "round";
  const tips = [];
  for (let i = 0; i < 5; i++) {
    const a = (i / 4 - 0.5) * 0.9 + (e.rnd() - 0.5) * 0.2, l = 1.7 + e.rnd() * 0.6, x = Math.sin(a) * l, y = -Math.cos(a) * l;
    g.strokeStyle = "#7a6c52";
    g.lineWidth = 0.035;
    g.beginPath();
    g.moveTo(0, 0);
    g.quadraticCurveTo(x * 0.3, y * 0.6, x, y);
    g.stroke();
    tips.push([x, y]);
  }
  for (const [x, y] of tips) {
    for (let k = 0; k < 7; k++) {
      const sx = x * (0.45 + k * 0.08) + (e.rnd() - 0.5) * 0.3, sy = y * (0.55 + k * 0.065), l = 0.6 + e.rnd() * 0.7;
      g.strokeStyle = k % 2 ? "#a9b493" : "#8b9877";
      g.lineWidth = 0.05 + e.rnd() * 0.03;
      g.beginPath();
      g.moveTo(sx, sy);
      g.quadraticCurveTo(sx + Math.sign(x || 1) * 0.15, sy + l * 0.4, sx + Math.sign(x || 1) * 0.08, sy + l);
      g.stroke();
    }
  }
});
