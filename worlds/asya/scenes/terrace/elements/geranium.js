// Asya's geranium on her windowsill — the only red in the world: a clay pot, round leaves, red umbels of flowers,
// stirring a little in the evening air. Its point `flowers` is where a game points at it.
const L = e.lib;
// the pot
g.fillStyle = "#a88a66";
g.beginPath();
g.moveTo(-0.13, -0.2);
g.lineTo(0.13, -0.2);
g.lineTo(0.1, 0);
g.lineTo(-0.1, 0);
g.fill();
g.fillStyle = "#b99a74";
g.fillRect(-0.145, -0.23, 0.29, 0.04);
// the leaves
e.layer("leaves", { pivot: [0, -0.22], wind: { strength: 0.18, gust: 0.5 } }, (v) => {
  for (let i = 0; i < 16; i++) {
    const a = -Math.PI + (Math.PI * i) / 15;
    const r = 0.1 + 0.12 * L.rnd(i, 121);
    v.fillStyle = ["#5d8a45", "#6f9a50", "#527d3d"][i % 3];
    v.beginPath();
    v.ellipse(Math.cos(a) * r * 1.3, -0.26 + Math.sin(a) * r * 0.8, 0.07, 0.06, 0, 0, Math.PI * 2);
    v.fill();
  }
});
// the flowers on their stalks
e.layer("flowers", { pivot: [0, -0.24], wind: { strength: 0.3, gust: 0.6 } }, (v) => {
  const heads = [[-0.15, -0.43], [0.02, -0.5], [0.17, -0.41], [-0.05, -0.37], [0.12, -0.32]];
  v.strokeStyle = "#5f8a44";
  v.lineWidth = 0.012;
  for (const [x, y] of heads) {
    v.beginPath();
    v.moveTo(x * 0.3, -0.25);
    v.quadraticCurveTo(x * 0.8, (y - 0.25) / 2, x, y);
    v.stroke();
  }
  for (let h = 0; h < heads.length; h++) {
    const [x, y] = heads[h];
    for (let i = 0; i < 9; i++) {
      const a = (i / 9) * Math.PI * 2;
      const r = 0.035 * (0.5 + 0.5 * L.rnd(i + h * 9, 123));
      v.fillStyle = ["#d3262c", "#e23a35", "#c41f28"][(i + h) % 3];
      v.beginPath();
      v.arc(x + Math.cos(a) * r, y + Math.sin(a) * r * 0.8, 0.026, 0, Math.PI * 2);
      v.fill();
    }
  }
});
e.at(0, -0.42, "flowers");
