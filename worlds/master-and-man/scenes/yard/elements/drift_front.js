// A drift in the near left corner, close to the viewer: a soft long mound of snow, its crest sharpened by the wind,
// a few dry stalks of wormwood standing out of it — they shiver in the wind (a layer bent from its foot).
// (x −2.6…2.4 m, its foot at 0)
const C = e.lib.C;
g.fillStyle = C.snowShade;
g.beginPath();
g.moveTo(-2.6, 0.05);
g.bezierCurveTo(-1.8, -0.2, -0.6, -0.5, 0.4, -0.42);
g.bezierCurveTo(1.2, -0.36, 1.9, -0.12, 2.4, 0.05);
g.closePath();
g.fill();
g.fillStyle = C.snow;
g.beginPath();
g.moveTo(-2.6, 0.05);
g.bezierCurveTo(-1.8, -0.18, -0.7, -0.47, 0.38, -0.4);
g.bezierCurveTo(0.9, -0.33, 1.2, -0.2, 1.5, -0.12);
g.bezierCurveTo(1.0, -0.06, 0.2, 0.0, -0.2, 0.05);
g.closePath();
g.fill();

e.layer("stalks", { pivot: [0, 0], wind: { strength: 0.6, gust: 0.8, scale: 0.4 } }, c => {
  c.strokeStyle = "#5c5146";
  c.lineCap = "round";
  for (let i = 0; i < 7; i++) {
    const x = -1.4 + i * 0.32 + e.rnd() * 0.15;
    const base = -0.3 - 0.1 * Math.sin(i);
    const h = 0.35 + e.rnd() * 0.45;
    c.lineWidth = 0.012;
    c.beginPath();
    c.moveTo(x, base);
    c.quadraticCurveTo(x + 0.05, base - h * 0.6, x + 0.1 * (e.rnd() - 0.3), base - h);
    c.stroke();
    // (its dry heads: small dark clusters along the top)
    c.fillStyle = "#4e443b";
    for (let k = 0; k < 4; k++) {
      c.beginPath();
      c.arc(x + 0.02 * k, base - h * (0.7 + k * 0.08), 0.018, 0, Math.PI * 2);
      c.fill();
    }
  }
});
