// The village on the valley floor, 235 m ahead and 120 m right, seen from the brink above: a dozen stone houses each
// standing at its own depth on the land (parts), and fruit trees in the gardens. Three chimneys smoke (the particles
// `smoke_1…3`, from the tops these houses paint; their places are in scene.json; how much: `smoke`). As the years
// have it (`year`): in the first two chapters the dying village — old grey roofs, the houses left empty roofless, the
// gardens' trees bare; in the third some roofs new pale shingle — people have come back — and the trees in leaf; in
// the epilogue every roof mended
const year = e.state.year;
const WALLS = ["#d3c7ab", "#c4b697", "#dcd1b6", "#bfb196"], OLD = "#77716a", NEW = "#b09a7c", DOOR = "#5a4a3a", WIN = "#4a4640";
// a house, its foot's middle at 0: a gable end (`gable`) or a long side (`eave`) toward the slope above
const house = (g, o) => {
  const { w, wall, roof, kind, colour, chimney } = o;
  g.fillStyle = colour;
  g.fillRect(-w / 2, -wall, w, wall);
  if (o.ruin) {
    // a house left empty: its roof fallen in, the gable's stones broken off, the openings dark
    g.fillStyle = colour;
    g.beginPath();
    g.moveTo(-w / 2, -wall);
    g.lineTo(-w / 4, -wall - 0.6);
    g.lineTo(0, -wall - 0.2);
    g.lineTo(w / 5, -wall - 0.9);
    g.lineTo(w / 2, -wall);
    g.closePath();
    g.fill();
    g.fillStyle = DOOR;
    g.fillRect(-w * 0.12 - 0.5, -2, 1, 2);
    g.fillStyle = WIN;
    g.fillRect(w * 0.2 - 0.4, -wall * 0.62, 0.8, 0.9);
    return;
  }
  g.fillStyle = o.fresh ? NEW : OLD;
  g.beginPath();
  if (kind === "gable") {
    g.moveTo(-w / 2 - 0.3, -wall);
    g.lineTo(0, -wall - roof);
    g.lineTo(w / 2 + 0.3, -wall);
  } else {
    g.moveTo(-w / 2 - 0.3, -wall);
    g.lineTo(-w / 2 + 0.6, -wall - roof);
    g.lineTo(w / 2 - 0.6, -wall - roof);
    g.lineTo(w / 2 + 0.3, -wall);
  }
  g.closePath();
  g.fill();
  if (chimney !== undefined) {
    g.fillStyle = "#8f8574";
    g.fillRect(chimney - 0.35, -wall - roof - 0.9, 0.7, roof * 0.6 + 0.9);
  }
  g.fillStyle = DOOR;
  g.fillRect(-w * 0.12 - 0.5, -2, 1, 2);
  g.fillStyle = WIN;
  for (const x of kind === "gable" ? [w * 0.25] : [-w * 0.32, w * 0.2, w * 0.36]) g.fillRect(x - 0.4, -wall * 0.62, 0.8, 0.9);
  if (kind === "gable") g.fillRect(-0.35, -wall - roof * 0.45, 0.7, 0.7);
};
// a round fruit tree in a garden; before the water came back, a bare one
const tree = (g, h) => {
  g.fillStyle = "#4f453a";
  g.fillRect(-0.15, -h * 0.45, 0.3, h * 0.45);
  if (year < 20) {
    g.strokeStyle = "#5a5046";
    g.lineWidth = 0.14;
    g.lineCap = "round";
    for (const [x, y] of [[-h * 0.3, -h * 0.85], [h * 0.05, -h * 0.98], [h * 0.32, -h * 0.8]]) {
      g.beginPath();
      g.moveTo(0, -h * 0.45);
      g.lineTo(x, y);
      g.stroke();
    }
    return;
  }
  g.fillStyle = "#5f7445";
  g.beginPath();
  g.ellipse(0, -h * 0.66, h * 0.38, h * 0.33, 0, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = "#7b8d55";
  g.beginPath();
  g.ellipse(-h * 0.08, -h * 0.74, h * 0.24, h * 0.2, 0, 0, Math.PI * 2);
  g.fill();
};
const HOUSES = [
  [-22, -8, { w: 7, wall: 3.6, roof: 3, kind: "gable", fresh: true }],
  [-13, -2, { w: 9, wall: 3.8, roof: 2.6, kind: "eave", chimney: 2.2 }],
  [-5, 7, { w: 6.5, wall: 3.4, roof: 2.8, kind: "gable" }],
  [3, -5, { w: 10, wall: 4, roof: 2.8, kind: "eave", fresh: true, chimney: -2.4 }],
  [11, 3, { w: 7, wall: 3.6, roof: 3, kind: "gable", fresh: true }],
  [18, -11, { w: 8, wall: 3.6, roof: 2.4, kind: "eave", chimney: 2 }],
  [25, 8, { w: 6, wall: 3.2, roof: 2.6, kind: "gable" }],
  [-2, 19, { w: 9, wall: 3.6, roof: 2.6, kind: "eave", fresh: true }],
  [14, 21, { w: 7, wall: 3.4, roof: 2.8, kind: "gable" }],
  [-17, 15, { w: 7, wall: 3.4, roof: 2.4, kind: "eave", fresh: true }],
];
HOUSES.forEach(([dx, dz, o], i) => {
  o.colour = WALLS[i % WALLS.length];
  if (year < 20) {
    o.ruin = !!o.fresh && o.chimney === undefined;
    o.fresh = false;
  } else if (year >= 30) o.fresh = true;
  e.part(dx, dz, (g) => house(g, o), [-o.w / 2 - 0.5, -o.wall - o.roof - 1.2, o.w / 2 + 0.5, 0.3]);
});
for (const [dx, dz, h] of [[-27, -3, 5], [-9, 2, 4.5], [7, -12, 5.5], [21, -2, 4.8], [-11, 11, 5], [6, 13, 4.2], [28, 16, 5], [-24, 9, 4.6]]) {
  e.part(dx, dz, (g) => tree(g, h), [-h * 0.45, -h, h * 0.45, 0.2]);
}
