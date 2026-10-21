// Morning mist lying low over the valley floor and the foot of the slope: soft pale bands drifting slowly along, as
// thick as the state's `mist` (its animate)
const W = 90;
e.layer("mist", { drift: [0.22, 0], box: [-45, -3.6, 45, 0.5] }, (g) => {
  for (let i = 0; i < 26; i++) {
    const x = -45 + e.rnd() * W, y = -0.4 - e.rnd() * 2.2, rx = 5 + e.rnd() * 9, ry = 0.35 + e.rnd() * 0.5;
    for (const dx of [0, -W, W]) {
      const m = g.createRadialGradient(x + dx, y, 0, x + dx, y, rx);
      m.addColorStop(0, "rgba(238, 236, 240, 0.22)");
      m.addColorStop(1, "rgba(238, 236, 240, 0)");
      g.fillStyle = m;
      g.save();
      g.translate(x + dx, y);
      g.scale(1, ry / rx);
      g.translate(-(x + dx), -y);
      g.beginPath();
      g.arc(x + dx, y, rx, 0, Math.PI * 2);
      g.fill();
      g.restore();
    }
  }
});
