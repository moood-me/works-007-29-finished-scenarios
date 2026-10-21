// The snow on the ground, seen from above: the yard (the near 15 m: y 85…100) and the fields beyond the fence to the
// horizon. In the yard: the sleigh's two runner tracks curving from the gate to where it stands at the porch, the
// horse's hoofprints between them, the trodden grey round the steps, the post and where Nikita stands, a path of
// footprints, hay scattered by the horse's head; everywhere else the soft blue ridges the wind lays in snow. Beyond the
// gate the road, trodden pale, going off to the right across the fields.
// (x −150…150 m across, y −100…100: y 100 the viewer's feet, y = 100 − distance)
const C = e.lib.C;
const D = d => 100 - d;

g.fillStyle = C.snow;
g.fillRect(-150, -100, 300, 200);

// the wind's ridges: long soft blue strokes lying across, finer near
g.lineCap = "round";
for (let i = 0; i < 260; i++) {
  const near = i < 140;
  const y = near ? D(2 + e.rnd() * 14) : -100 + e.rnd() * 186;
  const x = -150 + e.rnd() * 300;
  const len = near ? 0.6 + e.rnd() * 2.2 : 4 + e.rnd() * 14;
  g.strokeStyle = e.rnd() < 0.5 ? "rgba(196,208,224,0.55)" : "rgba(214,223,236,0.6)";
  g.lineWidth = near ? 0.04 + e.rnd() * 0.05 : 0.3 + e.rnd() * 0.5;
  g.beginPath();
  g.moveTo(x, y);
  g.quadraticCurveTo(x + len * 0.5, y - len * 0.06, x + len, y + len * 0.02);
  g.stroke();
}

// the road beyond the gate: out across the fields and away to the right
g.strokeStyle = "rgba(200,208,218,0.9)";
g.lineWidth = 3;
g.beginPath();
g.moveTo(10.7, D(15));
g.quadraticCurveTo(14, D(40), 40, D(120));
g.quadraticCurveTo(60, D(170), 90, D(200));
g.stroke();

// the trodden yard: grey-blue round the steps' foot, before the porch, by the post and where Nikita stands
g.fillStyle = "rgba(196,206,219,0.85)";
for (const [x, d, rx, ry] of [[-1.4, 6.4, 1.1, 0.7], [-2.6, 5.4, 1.6, 0.6], [4.1, 7.4, 1.0, 0.8], [2.5, 6.6, 1.5, 0.6], [0.6, 6.2, 1.4, 0.5]]) {
  g.beginPath();
  g.ellipse(x, D(d), rx, ry, 0.1, 0, Math.PI * 2);
  g.fill();
}
// (footprints from the steps to the post and back: small blue ovals, two by two)
g.fillStyle = "rgba(170,184,204,0.8)";
for (let i = 0; i < 18; i++) {
  const u = i / 17;
  const x = -1.2 + u * 5.2;
  const d = 6.3 + Math.sin(u * Math.PI) * -0.5;
  const side = i % 2 ? 0.13 : -0.13;
  g.beginPath();
  g.ellipse(x, D(d) + side, 0.12, 0.06, 0, 0, Math.PI * 2);
  g.fill();
}

// the runner tracks: from the gate, round, to the sleigh at the porch (its runners 0.3 m each side of its line, d 7.25)
g.strokeStyle = "rgba(160,174,196,0.9)";
g.lineWidth = 0.07;
for (const off of [-0.3, 0.3]) {
  g.beginPath();
  g.moveTo(-2.7, D(7.25 + off));
  g.lineTo(-0.3, D(7.25 + off));
  g.bezierCurveTo(4, D(7.25 + off * 1.2), 9, D(9.5 + off), 10.7 + off, D(15));
  g.stroke();
}
// (the hoofprints between them, from the gate up to where the horse stands)
g.fillStyle = "rgba(160,174,196,0.75)";
for (let i = 0; i < 22; i++) {
  const u = i / 21;
  const x = 1.8 + u * 8.7 + (i % 2 ? 0.12 : -0.12);
  const d = 7.25 + u * u * 7.6;
  g.beginPath();
  g.ellipse(x, D(d), 0.08, 0.07, 0, 0, Math.PI * 2);
  g.fill();
}

// hay dropped by the horse's head and by the post: thin pale yellow-grey straws
g.strokeStyle = "rgba(186,168,120,0.9)";
g.lineWidth = 0.012;
for (let i = 0; i < 90; i++) {
  const x = 3.3 + e.rnd() * 1.6;
  const d = 6.9 + e.rnd() * 0.8;
  const a = e.rnd() * Math.PI;
  g.beginPath();
  g.moveTo(x, D(d));
  g.lineTo(x + Math.cos(a) * 0.12, D(d) + Math.sin(a) * 0.12);
  g.stroke();
}
