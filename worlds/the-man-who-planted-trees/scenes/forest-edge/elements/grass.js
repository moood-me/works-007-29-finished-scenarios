// A tuft of grass in the meadow, bending in the wind (a layer about its root), as the years have it: tall summer grass
// from the third chapter — green and straw blades, a few seed heads and a flower or two (in the epilogue taller, unmown);
// in the first chapter a dry tuft of pale straw on the bare slope; in the second, the straw greening at its root
const y = e.state.year;
const COLOURS = y >= 20 ? ["#7e8c52", "#a3a96a", "#c2b47a"] : y >= 6 ? ["#8f9058", "#c9b27e", "#b39c68"] : ["#8f7c52", "#c9b27e", "#b39c68"];
const tall = y >= 30 ? 1.25 : y >= 20 ? 1 : 0.8, flowers = y >= 20;
e.layer("blades", { pivot: [0, 0], wind: { strength: 0.5, gust: 0.5 } }, (g) => {
  g.lineCap = "round";
  for (let i = 0; i < 18; i++) {
    const a = (i / 17 - 0.5) * 1.2 + (e.rnd() - 0.5) * 0.25, l = (0.4 + e.rnd() * 0.4) * tall, bend = (e.rnd() - 0.4) * 0.16;
    const tx = Math.sin(a) * l + bend, ty = -Math.cos(a) * l;
    g.strokeStyle = COLOURS[i % 3];
    g.lineWidth = 0.014 + e.rnd() * 0.01;
    g.beginPath();
    g.moveTo((e.rnd() - 0.5) * 0.08, 0);
    g.quadraticCurveTo(Math.sin(a) * l * 0.5, -Math.cos(a) * l * 0.55, tx, ty);
    g.stroke();
    if (flowers && i % 5 === 0) {
      g.fillStyle = "#c9b780";
      g.beginPath();
      g.ellipse(tx, ty - 0.025, 0.012, 0.035, a, 0, Math.PI * 2);
      g.fill();
    }
    if (flowers && i % 7 === 3) {
      g.fillStyle = e.rnd() < 0.5 ? "#f1ece0" : "#e3cf72";
      g.beginPath();
      g.arc(tx, ty, 0.018, 0, Math.PI * 2);
      g.fill();
    }
  }
});
