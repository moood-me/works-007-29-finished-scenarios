// A drift in the near right of the yard, close to the eye, below Nikita and the horse: a long soft mound of snow, its
// crest sharpened by the wind into a curling lip with a blue shadow under it, rime glittering on its top, dry stalks
// of wormwood standing out of it — they shiver in the wind (a layer bent from its foot).
// (x −1.4…1.7 m, its foot at 0, up to 0.55)
const C = e.lib.C;
// (the mound's body, bluer toward its foot)
const body = g.createLinearGradient(0, -0.55, 0, 0.05);
body.addColorStop(0, C.snow);
body.addColorStop(1, C.snowShade);
g.fillStyle = body;
g.beginPath();
g.moveTo(-1.4, 0.06);
g.bezierCurveTo(-0.9, -0.2, -0.3, -0.5, 0.35, -0.52);
g.bezierCurveTo(0.9, -0.5, 1.4, -0.22, 1.7, 0.06);
g.closePath();
g.fill();
// (the crest's lip, curling over toward the eye, and the blue shadow under it)
g.fillStyle = C.snowDeep;
g.beginPath();
g.moveTo(-0.5, -0.38);
g.quadraticCurveTo(0.3, -0.5, 1.0, -0.36);
g.quadraticCurveTo(0.4, -0.36, -0.5, -0.32);
g.closePath();
g.fill();
g.fillStyle = "#f4f7fb";
g.beginPath();
g.moveTo(-0.7, -0.4);
g.quadraticCurveTo(0.2, -0.6, 1.1, -0.4);
g.quadraticCurveTo(0.4, -0.47, -0.7, -0.4);
g.closePath();
g.fill();
// (rime: tiny bright grains along the top)
g.fillStyle = "rgba(255,255,255,0.95)";
for (let i = 0; i < 30; i++) {
  const x = -1.0 + e.rnd() * 2.4;
  const top = -0.52 * Math.exp(-(((x - 0.35) / 1.0) ** 2));
  g.fillRect(x, top + 0.01 + e.rnd() * 0.04, 0.012, 0.012);
}

e.layer("stalks", { pivot: [0, 0], wind: { strength: 0.6, gust: 0.8, scale: 0.4 } }, c => {
  c.strokeStyle = "#5c5146";
  c.lineCap = "round";
  for (let i = 0; i < 9; i++) {
    const x = -1.1 + i * 0.3 + e.rnd() * 0.12;
    const base = -0.4 * Math.exp(-(((x - 0.35) / 1.1) ** 2));
    const h = 0.3 + e.rnd() * 0.4;
    c.lineWidth = 0.012;
    c.beginPath();
    c.moveTo(x, base);
    c.quadraticCurveTo(x + 0.05, base - h * 0.6, x + 0.1 * (e.rnd() - 0.3), base - h);
    c.stroke();
    // (its dry heads: small dark clusters along the top, rimed white)
    for (let k = 0; k < 4; k++) {
      c.fillStyle = k % 2 ? "#4e443b" : "#e9eef5";
      c.beginPath();
      c.arc(x + 0.02 * k, base - h * (0.7 + k * 0.08), 0.017, 0, Math.PI * 2);
      c.fill();
    }
  }
});
