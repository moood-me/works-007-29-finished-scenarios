// A willow by the water, as the years have it: grown (from the third chapter) — a short leaning trunk, a few limbs and
// long hanging strands of silver-green leaves from them, stirring in the wind (a layer about the trunk's top); in the
// second chapter a first willow a few years old — thin pale stems from one root, strands hanging from them (a layer
// about the root); none while the stream is dry (the first chapter)
const y = e.state.year;
const strands = (g, tips, n, from, k0, s0, ds, len, width, colours, sway, ground) => {
  for (const [x, ty] of tips) {
    for (let k = 0; k < n; k++) {
      const sx = x * (k0 + k * 0.05) + (e.rnd() - 0.5) * width, sy = from + (ty - from) * (s0 + k * ds), l = len[0] + e.rnd() * len[1];
      g.strokeStyle = colours[k % colours.length];
      g.lineWidth = 0.045 + e.rnd() * 0.03;
      g.beginPath();
      g.moveTo(sx, sy);
      g.quadraticCurveTo(sx + Math.sign(x || 1) * sway, sy - 0.08, sx + Math.sign(x || 1) * sway * 0.85, Math.min(ground, sy + l));
      g.stroke();
    }
  }
};
if (y >= 20) {
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
      const a = (i / 5 - 0.5) * 1.3 + (e.rnd() - 0.5) * 0.2, l = 2.4 + e.rnd() * 1.2, x = Math.sin(a) * l, ty = -2.2 - Math.cos(a) * l;
      g.strokeStyle = "#5e5446";
      g.lineWidth = 0.09;
      g.beginPath();
      g.moveTo(0, -2.2);
      g.quadraticCurveTo(x * 0.3, -2.2 + (ty + 2.2) * 0.7, x, ty);
      g.stroke();
      tips.push([x, ty]);
    }
    strands(g, tips, 22, -2.2, 0.4, 0.55, 0.035, [1.4, 1.8], 0.6, ["#7d8a66", "#9aa784", "#6b7757"], 0.35, -0.2);
  });
} else if (y >= 6) {
  e.layer("young", { pivot: [0, 0], wind: { strength: 0.45, gust: 0.5 } }, (g) => {
    g.lineCap = "round";
    const tips = [];
    for (let i = 0; i < 5; i++) {
      const a = (i / 4 - 0.5) * 0.9 + (e.rnd() - 0.5) * 0.2, l = 1.7 + e.rnd() * 0.6, x = Math.sin(a) * l, ty = -Math.cos(a) * l;
      g.strokeStyle = "#7a6c52";
      g.lineWidth = 0.035;
      g.beginPath();
      g.moveTo(0, 0);
      g.quadraticCurveTo(x * 0.3, ty * 0.6, x, ty);
      g.stroke();
      tips.push([x, ty]);
    }
    strands(g, tips, 9, 0, 0.6, 0.66, 0.04, [0.5, 0.8], 0.3, ["#7f8b6e", "#9ba78a"], 0.25, -0.1);
  });
}
