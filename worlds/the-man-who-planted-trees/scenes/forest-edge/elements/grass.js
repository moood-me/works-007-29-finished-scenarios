// A tuft of tall summer grass in the meadow: green and straw blades from one root, a few seed heads and a flower or
// two, bending in the wind (a layer about its root)
e.layer("blades", { pivot: [0, 0], wind: { strength: 0.5, gust: 0.5 } }, (g) => {
  g.lineCap = "round";
  for (let i = 0; i < 18; i++) {
    const a = (i / 17 - 0.5) * 1.2 + (e.rnd() - 0.5) * 0.25, l = 0.4 + e.rnd() * 0.4, bend = (e.rnd() - 0.4) * 0.16;
    const tx = Math.sin(a) * l + bend, ty = -Math.cos(a) * l;
    g.strokeStyle = ["#7e8c52", "#a3a96a", "#c2b47a"][i % 3];
    g.lineWidth = 0.014 + e.rnd() * 0.01;
    g.beginPath();
    g.moveTo((e.rnd() - 0.5) * 0.08, 0);
    g.quadraticCurveTo(Math.sin(a) * l * 0.5, -Math.cos(a) * l * 0.55, tx, ty);
    g.stroke();
    if (i % 5 === 0) {
      g.fillStyle = "#c9b780";
      g.beginPath();
      g.ellipse(tx, ty - 0.025, 0.012, 0.035, a, 0, Math.PI * 2);
      g.fill();
    }
    if (i % 7 === 3) {
      g.fillStyle = e.rnd() < 0.5 ? "#f1ece0" : "#e3cf72";
      g.beginPath();
      g.arc(tx, ty, 0.018, 0, Math.PI * 2);
      g.fill();
    }
  }
});
