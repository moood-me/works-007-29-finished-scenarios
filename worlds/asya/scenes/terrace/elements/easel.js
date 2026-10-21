// Gagin's easel, turned a little toward us, and on it his portrait of Asya — begun and never finished: her face, her
// black curls, her white dress laid in, the background washed in a corner — and no eyes: the pencil's guide lines
// cross where they should be. The rest of the canvas is bare. Its point `portrait` is her painted face.
// the legs (two splayed before, the third behind, between them), a crossbar, the ledge and the clamp
g.strokeStyle = "#8a6b4c";
g.lineCap = "round";
g.lineWidth = 0.035;
g.beginPath();
g.moveTo(0, -1.86);
g.lineTo(-0.4, 0);
g.moveTo(0, -1.86);
g.lineTo(0.4, 0);
g.stroke();
g.strokeStyle = "#76593e";
g.lineWidth = 0.028;
g.beginPath();
g.moveTo(0, -1.8);
g.lineTo(0.04, 0);
g.moveTo(-0.27, -0.6);
g.lineTo(0.27, -0.6);
g.stroke();
g.fillStyle = "#8a6b4c";
g.fillRect(-0.36, -0.86, 0.72, 0.04);
g.fillRect(-0.04, -1.66, 0.08, 0.06);
// the canvas: primed, bare at its edges and below
const cx = 0;
const top = -1.62;
const bottom = -0.86;
g.fillStyle = "#ece6d6";
g.fillRect(-0.3, top, 0.6, bottom - top);
// the background washed in behind her head: green-grey, unevenly, not to the edges
g.fillStyle = "rgba(150, 168, 140, 0.75)";
g.beginPath();
g.moveTo(-0.27, -1.58);
g.lineTo(0.22, -1.6);
g.lineTo(0.25, -1.36);
g.lineTo(0.12, -1.18);
g.lineTo(-0.2, -1.2);
g.lineTo(-0.27, -1.34);
g.fill();
// her dress: white over the shoulders, its shadow a cool blue, left loose at the bottom
g.fillStyle = "#f6f3ec";
g.beginPath();
g.moveTo(-0.22, -0.98);
g.quadraticCurveTo(-0.2, -1.14, -0.06, -1.17);
g.lineTo(0.06, -1.17);
g.quadraticCurveTo(0.2, -1.14, 0.22, -0.98);
g.fill();
g.fillStyle = "rgba(160, 182, 200, 0.6)";
g.fillRect(-0.2, -1.06, 0.12, 0.05);
// the neck and the face: round, swarthy
g.fillStyle = "#cfa07c";
g.fillRect(cx - 0.03, -1.22, 0.06, 0.06);
g.fillStyle = "#d8ab86";
g.beginPath();
g.ellipse(cx, -1.33, 0.085, 0.105, 0, 0, Math.PI * 2);
g.fill();
// the black curls round it, short as a boy's
g.fillStyle = "#231b17";
for (let i = 0; i < 13; i++) {
  const a = Math.PI * (1.05 + (0.9 * i) / 12);
  g.beginPath();
  g.arc(cx + Math.cos(a) * 0.1, -1.36 + Math.sin(a) * 0.1, 0.035, 0, Math.PI * 2);
  g.fill();
}
for (const s of [-1, 1]) {
  g.beginPath();
  g.arc(cx + s * 0.095, -1.27, 0.03, 0, Math.PI * 2);
  g.fill();
}
// a nose, a mouth — and where the eyes should be, only the pencil's guide lines
g.fillStyle = "rgba(160, 104, 82, 0.8)";
g.fillRect(cx - 0.018, -1.285, 0.036, 0.008);
g.fillStyle = "rgba(150, 110, 90, 0.5)";
g.fillRect(cx - 0.004, -1.33, 0.008, 0.03);
g.strokeStyle = "rgba(96, 88, 80, 0.55)";
g.lineWidth = 0.003;
g.beginPath();
g.moveTo(cx - 0.08, -1.345);
g.lineTo(cx + 0.08, -1.345);
g.moveTo(cx, -1.43);
g.lineTo(cx, -1.24);
g.stroke();
// pencil marks on the bare canvas below: a hand, a fold, begun
g.beginPath();
g.moveTo(-0.15, -0.95);
g.quadraticCurveTo(-0.05, -0.92, 0.06, -0.96);
g.moveTo(0.1, -0.93);
g.lineTo(0.18, -0.9);
g.stroke();
e.at(cx, -1.33, "portrait");
