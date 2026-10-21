// Z. on the far bank, 1.3 km off and 100 m below: its embankment along the water, a row of houses — white, cream,
// timbered —, the church with its spire, the inn (the big white house by the landing, where N. N. lodges), poplars,
// the ferry's landing stage; the setting sun catches a few of its windows (gold glints). Its ends are a pencil drawing.
const L = e.lib;
const W = 320;
const ACROSS = 430;
const D = 1300;
// the bank behind the houses, and the embankment's wall at the water
g.fillStyle = "#86a06a";
g.beginPath();
g.moveTo(-W, 1);
for (let x = -W; x <= W; x += 20) g.lineTo(x, -16 - 8 * (0.5 + 0.5 * e.anim.noise(x / 90, 31)));
g.lineTo(W, 1);
g.fill();
g.fillStyle = "#cbbfa6";
g.fillRect(-W, -3, 2 * W, 4);
// the houses: a row along the embankment, roofs slate-blue and red-brown tile
const walls = ["#f1ece0", "#e9dcc2", "#efe6d2", "#e2d4bb", "#f4efe4"];
const roofs = ["#6f7784", "#8a6a58", "#7b7f88", "#93705c"];
let n = 0;
for (let x = -W + 6; x < W - 10; n++) {
  const w = 7 + 7 * L.rnd(n, 33);
  const h = 6 + 6 * L.rnd(n, 35);
  if (x > -70 && x < -40) {
    x = -40;
    continue;
  }
  g.fillStyle = walls[n % walls.length];
  g.fillRect(x, -3 - h, w, h);
  g.fillStyle = roofs[n % roofs.length];
  g.beginPath();
  g.moveTo(x - 0.6, -3 - h);
  g.lineTo(x + w / 2, -3 - h - 3.5 - 2 * L.rnd(n, 37));
  g.lineTo(x + w + 0.6, -3 - h);
  g.fill();
  // windows: dark, a few catching the sun
  for (let k = 0; k < Math.floor(w / 3); k++) {
    const glint = L.rnd(n * 7 + k, 39) > 0.86;
    g.fillStyle = glint ? "#ffe2a0" : "#5d6470";
    g.fillRect(x + 1.2 + k * 3, -3 - h + 2, 1.1, 1.5);
  }
  x += w + 1 + 4 * L.rnd(n, 41);
}
// the church: nave and spire (left of the middle)
g.fillStyle = "#ece6d8";
g.fillRect(-150, -18, 26, 15);
g.fillRect(-128, -30, 8, 27);
g.fillStyle = "#6c7480";
g.beginPath();
g.moveTo(-129, -30);
g.lineTo(-124, -46);
g.lineTo(-119, -30);
g.fill();
g.beginPath();
g.moveTo(-151, -18);
g.lineTo(-137, -24);
g.lineTo(-123, -18);
g.fill();
// the inn by the landing: a big white house of three floors, its garden of limes
g.fillStyle = "#6f8c5a";
for (let i = 0; i < 4; i++) {
  g.beginPath();
  g.ellipse(-66 + 9 * i, -8, 5, 6, 0, 0, Math.PI * 2);
  g.fill();
}
g.fillStyle = "#f6f2ea";
g.fillRect(-60, -19, 20, 16);
g.fillStyle = "#757c87";
g.fillRect(-61, -22, 22, 3);
g.fillStyle = "#5d6470";
for (let r = 0; r < 3; r++) for (let k = 0; k < 5; k++) g.fillRect(-58 + k * 3.8, -17 + r * 4.6, 1.3, 1.8);
g.fillStyle = "#ffe2a0";
g.fillRect(-46.6, -17, 1.3, 1.8);
// the ferry's landing: a short dark stage into the water
g.fillStyle = "#6b5b49";
g.fillRect(-48, -1, 14, 2);
// poplars along the embankment
g.fillStyle = "#6a8a50";
for (let i = 0; i < 9; i++) {
  const x = -W + 30 + ((2 * W - 60) * i) / 8 + 10 * L.rnd(i, 43);
  g.beginPath();
  g.ellipse(x, -12, 2.4, 9 + 3 * L.rnd(i, 45), 0, 0, Math.PI * 2);
  g.fill();
}
L.unfinish(g, [-W - 10, -46, W + 10, 2], ACROSS, D);
