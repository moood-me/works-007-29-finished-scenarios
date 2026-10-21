// The low wall over the cliff, 5 m ahead, its face toward us: what is left of the castle's outer wall, 1.9 m high,
// from its broken left end (a step, a heap of fallen stones — the way up onto its broad crest) to its right end over
// the drop, where Asya sits. Left of 0.9 m it stands on the crest's grass; right of it the crest ends and the wall
// stands on the bare rock of the cliff, which goes on down out of the frame. Ivy on its left end and a festoon near
// its right; grass on its top in the wind (its own layers).
const L = e.lib;
const ACROSS = 0;
const D = 5;
const box = [-2.45, -2.25, 1.5, 2.6];
const EDGE = 0.9;
// the top of the wall over x: the fallen left end, a step, the long level crest with its notches, the broken corner
const topAt = (x) => {
  if (x < -2.0) return -0.5 - 0.15 * L.smooth(-2.45, -2.0, x);
  if (x < -1.55) return -1.25;
  if (x > 1.3) return -1.86 + 0.5 * L.smooth(1.3, 1.5, x);
  return -1.9 + 0.05 * e.anim.noise(x * 3, 7) + (x > -0.6 && x < -0.35 ? 0.12 : 0);
};
// the masonry's outline: along the top, down the right end to the rock, along the rock's top and the grass back
const face = new Path2D();
face.moveTo(-2.45, 0.05);
for (let x = -2.45; x <= 1.5; x += 0.05) face.lineTo(x, topAt(x));
face.lineTo(1.5, -0.15);
face.lineTo(EDGE, -0.12);
face.lineTo(EDGE, 0.05);
face.closePath();
// the rock under the wall where the crest has ended: the cliff's top, going on down
const rock = new Path2D();
rock.moveTo(EDGE - 0.05, -0.15);
rock.lineTo(1.5, -0.2);
rock.lineTo(1.5, 2.6);
rock.lineTo(EDGE + 0.12, 2.6);
for (let y = 2.6; y > 0; y -= 0.2) rock.lineTo(EDGE + 0.06 * e.anim.noise(y * 4, 9), y);
rock.closePath();
g.fillStyle = "#857462";
g.fill(rock);
g.save();
g.clip(rock);
// the rock's strata and cracks
for (let i = 0; i < 26; i++) {
  const y = -0.1 + 2.7 * L.rnd(i, 201);
  g.fillStyle = i % 2 ? "rgba(62, 52, 44, 0.45)" : "rgba(168, 150, 126, 0.45)";
  g.fillRect(EDGE + 1.2 * L.rnd(i, 203) - 0.3, y, 0.3 + 0.6 * L.rnd(i, 205), 0.03 + 0.04 * L.rnd(i, 207));
}
g.restore();
// tufts and a small bush clinging to the rock
g.fillStyle = "#6f8a4c";
for (const [x, y, r] of [[1.05, 0.45, 0.14], [1.3, 1.2, 0.18], [1.1, 1.9, 0.14], [1.42, 0.15, 0.08]]) {
  g.beginPath();
  g.ellipse(x, y, r * 1.3, r, 0, 0, Math.PI * 2);
  g.fill();
}
// the masonry: courses of rough sandstone blocks, each its own warm grey
g.fillStyle = "#a99a80";
g.fill(face);
g.save();
g.clip(face);
const tones = ["#c9b99b", "#c2b193", "#cdbea0", "#bcab8c", "#c6b596"];
let n = 0;
for (let y = 0.05; y > -2.05; y -= 0.3) {
  for (let x = -2.45 + 0.35 * L.rnd(n, 209); x < 1.5; n++) {
    const w = 0.36 + 0.4 * L.rnd(n, 211);
    g.fillStyle = tones[n % tones.length];
    g.fillRect(x + 0.025, y - 0.28, w - 0.05, 0.255);
    x += w;
  }
}
// weather streaks from the top, darker near the foot
for (let i = 0; i < 16; i++) {
  const x = -2.4 + 3.8 * L.rnd(i, 213);
  g.fillStyle = `rgba(96, 88, 78, ${0.07 + 0.08 * L.rnd(i, 215)})`;
  g.fillRect(x, -2, 0.06 + 0.14 * L.rnd(i, 217), 0.8 + 1.0 * L.rnd(i, 219));
}
const damp = g.createLinearGradient(0, -0.5, 0, 0.05);
damp.addColorStop(0, "rgba(90, 96, 70, 0)");
damp.addColorStop(1, "rgba(90, 96, 70, 0.3)");
g.fillStyle = damp;
g.fillRect(-2.45, -0.5, 2.8, 0.55);
g.restore();
// fallen stones heaped at the broken left end, on the grass
const heap = ["#c6b597", "#b7a588", "#cfbfa2"];
for (let i = 0; i < 14; i++) {
  const x = -2.45 + 0.9 * L.rnd(i, 221);
  const w = 0.18 + 0.2 * L.rnd(i, 223);
  const h = 0.12 + 0.12 * L.rnd(i, 225);
  g.fillStyle = heap[i % 3];
  g.beginPath();
  g.ellipse(x, -h * 0.4 - 0.25 * L.rnd(i, 227) * L.smooth(-1.6, -2.4, x), w / 2, h / 2, 0.3 * (L.rnd(i, 229) - 0.5), 0, Math.PI * 2);
  g.fill();
}
// grass at the wall's foot on the crest
g.fillStyle = "#87a05a";
for (let i = 0; i < 30; i++) {
  const x = -2.4 + (EDGE + 2.35) * L.rnd(i, 231);
  g.beginPath();
  g.ellipse(x, 0.02, 0.07 + 0.07 * L.rnd(i, 233), 0.05 + 0.05 * L.rnd(i, 235), 0, Math.PI, 0);
  g.fill();
}
L.unfinish(g, box, ACROSS, D);
// ivy over the broken left end, and a festoon hanging from the crest near the right end
e.layer("ivy", { wind: 0.15, pivot: [-1.6, -1.6] }, (c) => {
  for (let i = 0; i < 110; i++) {
    const u = L.rnd(i, 237);
    const right = i % 4 === 0;
    const x = right ? 0.35 + 0.45 * u : -2.45 + 1.1 * u;
    const top = topAt(x) + 0.05;
    const y = right ? top + 1.1 * L.rnd(i, 239) ** 1.6 : top + (0.05 - top) * L.rnd(i, 239) ** 0.8;
    c.fillStyle = ["#4f6f3e", "#5d7d47", "#46663a", "#6a8a50"][i % 4];
    L.leaf(c, x, y, 0.12 + 0.07 * L.rnd(i, 241), -0.6 + 1.2 * L.rnd(i, 243));
    c.fill();
  }
});
// grass and a few flowers (white yarrow, yellow hawkweed, blue chicory) along the crest, three stretches in the wind
const stretches = [[-2.45, -1.55], [-1.55, 0.0], [0.0, 1.45]];
stretches.forEach(([x0, x1], k) => {
  const mid = (x0 + x1) / 2;
  e.layer(`tufts${k}`, { wind: 0.45, pivot: [mid, topAt(mid)] }, (c) => {
    for (let i = 0; i < 46; i++) {
      const x = x0 + (x1 - x0) * L.rnd(i + k * 60, 245);
      if (k === 2 && x > 1.0 && x < 1.45) continue;
      const y = topAt(x) + 0.04;
      const h = 0.1 + 0.26 * L.rnd(i + k * 60, 247);
      const lean = 0.1 * (L.rnd(i + k * 60, 249) - 0.4);
      c.strokeStyle = ["#86a05a", "#9cad62", "#7a9450"][i % 3];
      c.lineWidth = 0.025;
      c.beginPath();
      c.moveTo(x, y);
      c.quadraticCurveTo(x + lean * 0.3, y - h * 0.6, x + lean, y - h);
      c.stroke();
      if (i % 7 === 0) {
        c.fillStyle = ["#f2efe4", "#e8c94e", "#7d97cf"][(i / 7 + k) % 3];
        c.beginPath();
        c.arc(x + lean, y - h, 0.03, 0, Math.PI * 2);
        c.fill();
      }
    }
    L.unfinish(c, [x0 - 0.3, -2.25, x1 + 0.3, 0], ACROSS, D);
  });
});
