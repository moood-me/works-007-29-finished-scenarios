// A tuft of the dunes' grass (copies about the rise the eye stands on): stiff thin blades of a dry sandy green, a few
// pale seed heads; one layer, `blades`, bending in the wind from its foot.
e.layer("blades", { pivot: [0, 0], wind: { strength: 0.6, gust: 0.4, scale: 3 } }, (c) => {
  const r = () => e.rnd();
  const tones = ["#a3a06a", "#8f8b58", "#b2ac78", "#7f7c4e"];
  c.lineCap = "round";
  for (let k = 0; k < 22; k++) {
    const x0 = (r() - 0.5) * 0.24;
    const h = 0.3 + r() * 0.35;
    const lean = (r() - 0.5) * 0.5 + x0 * 0.8;
    c.strokeStyle = tones[k % tones.length];
    c.lineWidth = 0.012 + r() * 0.01;
    c.beginPath();
    c.moveTo(x0, 0);
    c.quadraticCurveTo(x0 + lean * 0.3, -h * 0.6, x0 + lean, -h);
    c.stroke();
  }
  c.fillStyle = "#d8cfa6";
  for (let k = 0; k < 3; k++) {
    const x = (r() - 0.5) * 0.3;
    c.beginPath();
    c.ellipse(x, -0.62 - r() * 0.12, 0.014, 0.05, x, 0, Math.PI * 2);
    c.fill();
  }
});
// sand heaped round its foot
g.fillStyle = "#d8b680";
g.beginPath();
g.ellipse(0, 0.02, 0.22, 0.06, 0, Math.PI, 0);
g.fill();
