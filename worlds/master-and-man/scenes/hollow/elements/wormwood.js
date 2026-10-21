// A clump of wormwood standing out of the snow of the hollow — dry stalks with their sprays of seed heads, the wind
// thrashing them (a layer bent by the wind about their foot). The same clump stands in many places (copies), each
// turned, flipped and sized its own way.
// (x −0.6…0.6 m, its foot at 0, up to about 0.95)
const L = e.lib;
const C = L.C;
e.layer("stalks", { pivot: [0, 0], wind: { strength: 0.7, gust: 1.0, scale: 0.5 } }, c => {
  const n = 6;
  for (let i = 0; i < n; i++) {
    const x = -0.3 + (i / (n - 1)) * 0.6 + (e.rnd() - 0.5) * 0.08;
    const h = 0.45 + e.rnd() * 0.45;
    const lean = -0.18 - e.rnd() * 0.2;
    L.wormwood(c, x, h, lean, () => e.rnd());
  }
});
// the snow drifted round their foot
g.fillStyle = C.snow;
g.beginPath();
g.moveTo(-0.55, 0.05);
g.quadraticCurveTo(0.0, -0.14, 0.55, 0.05);
g.closePath();
g.fill();
