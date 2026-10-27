// Asphodels, the pale flowers of the meadow of the dead (copies all over it): a few straight thin stems from a tuft of
// narrow leaves, each topped with a loose spike of small six-pointed flowers, white going lilac. They glow (the element
// "glows": their own pale colour in the dark) and each spike gives a little light of its own (e.light), so the meadow
// is starred with them and they light the hems and the feet of those who stand among them. Each stem a wind layer about
// its foot: they stir a little in the still air.
const leaf = '#3f5a4c', stem = '#557062', petal = '#ebe8f6', heart = '#c9c2e6';
// the tuft of leaves at the foot
g.fillStyle = leaf;
for (let i = 0; i < 7; i++) {
  const x = (e.anim.hash(i, 1) - 0.5) * 0.18, lean = (e.anim.hash(i, 2) - 0.5) * 0.5, h = 0.18 + 0.14 * e.anim.hash(i, 3);
  g.beginPath();
  g.moveTo(x - 0.012, 0);
  g.quadraticCurveTo(x + lean * h * 0.5, -h * 0.7, x + lean * h, -h);
  g.quadraticCurveTo(x + lean * h * 0.5 + 0.01, -h * 0.6, x + 0.012, 0);
  g.closePath();
  g.fill();
}
// three stems, each with its spike of flowers
for (let s = 0; s < 3; s++) {
  const x = (s - 1) * 0.06 + (e.anim.hash(s, 4) - 0.5) * 0.04, h = 0.55 + 0.3 * e.anim.hash(s, 5), lean = (e.anim.hash(s, 6) - 0.5) * 0.12;
  e.layer(`stem${s}`, { pivot: [x, 0], wind: { strength: 0.25, gust: 0.3 }, box: [-0.35, -1.0, 0.35, 0.05] }, g => {
    g.strokeStyle = stem;
    g.lineWidth = 0.008;
    g.lineCap = 'round';
    g.beginPath();
    g.moveTo(x, 0);
    g.quadraticCurveTo(x + lean * 0.4, -h * 0.5, x + lean, -h);
    g.stroke();
    for (let k = 0; k < 9; k++) {
      const u = 0.62 + 0.38 * (k / 8), fx = x + lean * u + (e.anim.hash(k + s * 9, 7) - 0.5) * 0.06, fy = -h * u - 0.02;
      const r = 0.018 + 0.008 * e.anim.hash(k + s * 9, 8);
      g.fillStyle = petal;
      g.beginPath();
      for (let p = 0; p < 6; p++) {
        const a = p / 6 * Math.PI * 2, b = a + Math.PI / 6;
        g.lineTo(fx + Math.cos(a) * r, fy + Math.sin(a) * r);
        g.lineTo(fx + Math.cos(b) * r * 0.4, fy + Math.sin(b) * r * 0.4);
      }
      g.closePath();
      g.fill();
      g.fillStyle = heart;
      g.beginPath();
      g.arc(fx, fy, r * 0.3, 0, Math.PI * 2);
      g.fill();
    }
    if (s === 1) e.light(x + lean * 0.8, -h * 0.82, 0.25, '#dcd8ff', 0.5, 'bloom');
  });
}
