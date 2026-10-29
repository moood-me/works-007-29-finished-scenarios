// A tuft of grass at the square's edges, bending in the wind (a layer about its root): dry straw in the prologue and the
// second chapter, green once people are back, with a flower or two in the epilogue
const t = e.lib.T(e);
const COL = t < 2 ? ["#8f7c52", "#c9b27e", "#b39c68"] : ["#6f8a4a", "#9aae68", "#b8b07a"];
e.layer("blades", { pivot: [0, 0], wind: { strength: 0.55, gust: 0.5 } }, (g) => {
  g.lineCap = "round";
  for (let i = 0; i < 16; i++) {
    const a = (i / 15 - 0.5) * 1.4 + (e.rnd() - 0.5) * 0.25, l = 0.3 + e.rnd() * 0.35, bend = (e.rnd() - 0.35) * 0.18;
    const tx = Math.sin(a) * l + bend, ty = -Math.cos(a) * l;
    g.strokeStyle = COL[i % 3];
    g.lineWidth = 0.014 + e.rnd() * 0.01;
    g.beginPath();
    g.moveTo((e.rnd() - 0.5) * 0.08, 0);
    g.quadraticCurveTo(Math.sin(a) * l * 0.5, -Math.cos(a) * l * 0.55, tx, ty);
    g.stroke();
    if (t === 3 && i % 6 === 2) {
      g.fillStyle = i % 12 === 2 ? "#f1ece0" : "#e3cf72";
      g.beginPath();
      g.arc(tx, ty, 0.02, 0, Math.PI * 2);
      g.fill();
    }
  }
});
