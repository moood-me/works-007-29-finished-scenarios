// The spur's cliff beyond the low wall's right end: from the wall's corner (1.4 m right, 6.4 m ahead) back along the
// spur's edge to its end 10.8 m on, its face turned toward the valley and a little toward us (facing 112). Bare
// sandstone in strata, scrub and grass clinging to it, the crest's turf overhanging its top; it goes on down out of the
// frame. Seen whole in colour (it is never far enough aside to be unfinished).
const L = e.lib;
const LEN = 10.8;
g.fillStyle = "#a8977d";
g.beginPath();
g.moveTo(0, 0);
for (let x = 0; x <= LEN; x += 0.3) g.lineTo(x, 0.1 * e.anim.noise(x * 1.7, 13));
g.lineTo(LEN, 12);
g.lineTo(0, 12);
g.closePath();
g.fill();
// strata: long bands, lighter and darker, sloping a little
for (let i = 0; i < 60; i++) {
  const y = 0.2 + 11.6 * L.rnd(i, 251);
  const x = LEN * L.rnd(i, 253) - 1;
  g.fillStyle = i % 3 === 0 ? "rgba(80, 68, 56, 0.35)" : "rgba(198, 182, 156, 0.45)";
  g.save();
  g.translate(x, y);
  g.rotate(0.04);
  g.fillRect(0, 0, 1 + 3 * L.rnd(i, 255), 0.05 + 0.12 * L.rnd(i, 257));
  g.restore();
}
// vertical cracks
g.strokeStyle = "rgba(70, 60, 50, 0.4)";
g.lineWidth = 0.04;
for (let i = 0; i < 14; i++) {
  const x = LEN * L.rnd(i, 259);
  g.beginPath();
  g.moveTo(x, 0.2 + 2 * L.rnd(i, 261));
  g.lineTo(x + 0.2 * (L.rnd(i, 263) - 0.5), 3 + 8 * L.rnd(i, 265));
  g.stroke();
}
// scrub clinging in the ledges: dark rounded bushes
for (let i = 0; i < 18; i++) {
  const x = LEN * L.rnd(i, 267);
  const y = 0.6 + 10 * L.rnd(i, 269);
  const r = 0.2 + 0.35 * L.rnd(i, 271);
  g.fillStyle = ["#5f7d48", "#6c8a50", "#56733f"][i % 3];
  g.beginPath();
  g.ellipse(x, y, r * 1.4, r, 0, 0, Math.PI * 2);
  g.fill();
}
// the turf of the spur's top hanging over the edge
g.fillStyle = "#87a05a";
for (let x = 0; x < LEN; x += 0.18) {
  g.beginPath();
  g.ellipse(x, 0.06, 0.13, 0.09 + 0.05 * L.rnd(Math.round(x * 10), 273), 0, 0, Math.PI * 2);
  g.fill();
}
e.layer("grass", { wind: 0.4, pivot: [LEN / 2, 0] }, (c) => {
  for (let i = 0; i < 90; i++) {
    const x = LEN * L.rnd(i, 275);
    const h = 0.12 + 0.3 * L.rnd(i, 277);
    const lean = 0.12 * (L.rnd(i, 279) - 0.3);
    c.strokeStyle = ["#86a05a", "#9cad62", "#7a9450"][i % 3];
    c.lineWidth = 0.03;
    c.beginPath();
    c.moveTo(x, 0.05);
    c.quadraticCurveTo(x + lean * 0.3, -h * 0.6, x + lean, -h);
    c.stroke();
  }
});
