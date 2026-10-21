// A tuft of new green grass by the water: fresh blades from one root, bending in the wind (a layer about its root)
e.layer("blades", { pivot: [0, 0], wind: { strength: 0.5, gust: 0.5 } }, (g) => {
  g.lineCap = "round";
  for (let i = 0; i < 18; i++) {
    const a = (i / 17 - 0.5) * 1.3 + (e.rnd() - 0.5) * 0.25, l = 0.3 + e.rnd() * 0.32, bend = (e.rnd() - 0.4) * 0.16;
    g.strokeStyle = i % 3 === 0 ? "#6f8a4c" : i % 3 === 1 ? "#9db46e" : "#84a05a";
    g.lineWidth = 0.016 + e.rnd() * 0.01;
    g.beginPath();
    g.moveTo((e.rnd() - 0.5) * 0.08, 0);
    g.quadraticCurveTo(Math.sin(a) * l * 0.5, -Math.cos(a) * l * 0.55, Math.sin(a) * l + bend, -Math.cos(a) * l);
    g.stroke();
  }
});
