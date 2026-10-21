// The morning fog lying low over the fields beyond the line (a card 45 m ahead, across the whole view): long soft
// banks of white, thicker at the foot, drifting slowly to the right (a layer, its ends meeting 320 m apart).
const L = e.lib, W = 320;
e.layer("bank", { drift: [0.18, 0], box: [-160, -5, 160, 0.2] }, (g) => {
  for (let i = 0; i < 26; i++) {
    const x = -160 + W * L.rnd(i, 61), y = -0.6 - 2.6 * L.rnd(i, 62) ** 1.5, len = 30 + 50 * L.rnd(i, 63), thick = 0.5 + 1.1 * L.rnd(i, 64);
    for (const dx of [0, -W, W]) {
      const grad = g.createRadialGradient(x + dx, y, 0, x + dx, y, len / 2);
      grad.addColorStop(0, "rgba(246,244,238,0.5)");
      grad.addColorStop(1, "rgba(246,244,238,0)");
      g.fillStyle = grad;
      g.save();
      g.translate(x + dx, y);
      g.scale(1, thick / (len / 2));
      g.translate(-(x + dx), -y);
      g.beginPath();
      g.arc(x + dx, y, len / 2, 0, Math.PI * 2);
      g.fill();
      g.restore();
    }
  }
});
