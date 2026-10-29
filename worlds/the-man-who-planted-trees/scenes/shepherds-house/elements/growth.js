// The slope behind the hut grown up in his last ten years (`hut`): a stretch of young oaks and beeches waist-high in
// their rows, five to a card, swaying a little (a layer)
if (!e.state.hut) return;
e.layer("growth", { pivot: [0, 0], wind: { strength: 0.25, gust: 0.4 } }, (g) => {
  g.lineCap = "round";
  for (let i = 0; i < 5; i++) {
    const x = -1.6 + i * 0.8 + (e.rnd() - 0.5) * 0.25, h = 0.8 + e.rnd() * 0.45;
    g.strokeStyle = "#5e5142";
    g.lineWidth = 0.025;
    g.beginPath();
    g.moveTo(x, 0);
    g.lineTo(x + (e.rnd() - 0.5) * 0.08, -h * 0.7);
    g.stroke();
    for (let k = 0; k < 6; k++) {
      const a = (k / 6) * Math.PI * 2, r = h * (0.13 + e.rnd() * 0.07);
      g.fillStyle = ["#5d6e48", "#73845a", "#4f6240"][k % 3];
      g.beginPath();
      g.ellipse(x + Math.cos(a) * h * 0.14, -h * 0.72 + Math.sin(a) * h * 0.12, r, r * 0.8, 0, 0, Math.PI * 2);
      g.fill();
    }
  }
});
