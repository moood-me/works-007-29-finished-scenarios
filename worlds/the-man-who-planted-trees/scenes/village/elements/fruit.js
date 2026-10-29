// A fruit tree by a garden or a house, planted when people came back: none before the third chapter; young, round and
// green in it; in the epilogue grown and in blossom, white and pale pink; its crown stirring
const t = e.lib.T(e);
if (t >= 2) {
  const h = t === 2 ? 3 : 3.9;
  g.fillStyle = "#5a4a3a";
  g.beginPath();
  g.moveTo(-0.09, 0);
  g.lineTo(-0.05, -h * 0.45);
  g.lineTo(0.05, -h * 0.45);
  g.lineTo(0.09, 0);
  g.closePath();
  g.fill();
  e.layer("crown", { pivot: [0, -h * 0.45], wind: { strength: 0.12, gust: 0.4 } }, (g) => {
    const lobe = (x, y, r, colour) => {
      g.fillStyle = colour;
      g.beginPath();
      for (let k = 0; k < 8; k++) {
        const a = (k / 8) * Math.PI * 2 + e.rnd() * 0.4, q = r * (0.85 + e.rnd() * 0.25);
        g.lineTo(x + Math.cos(a) * q, y + Math.sin(a) * q * 0.85);
      }
      g.closePath();
      g.fill();
    };
    const cy = -h * 0.7, r = h * 0.3;
    const BASE = t === 2 ? ["#5f7445", "#7b8d55", "#8f9f62"] : ["#d9cfc6", "#efe8e2", "#e6c8cc"];
    lobe(0, cy, r, BASE[0]);
    for (let i = 0; i < 7; i++) lobe((e.rnd() - 0.5) * r * 1.1, cy + (e.rnd() - 0.6) * r * 0.9, r * (0.35 + e.rnd() * 0.2), BASE[1 + (i % 2)]);
  });
}
