// The izba's back wall, 4.4 m ahead (x to the right as the eye sees it; x 0 is 0.15 m left of the eye's line, so a point
// `across` is at x = across + 0.15): hewn logs; the window (x −0.3…0.5, 0.9…1.95 m up — over the table, the lamp before
// it) cut out, the dusk (`outside`) seen through it, its pale frame and sash, the war's paper strips still on the panes,
// a white valance over its top, on the sill two carved horses of pale lime wood (Semyon Yevseyevich's, for Nastya) and a
// red geranium in a clay pot; the clock over the boy's head, its pendulum a layer swung by animate; Petrushka's cupboard
// with its little padlock, where the sugar and the ration cards are kept; the father's photograph over it.
const L = e.lib;
L.hewn(g, 31, -2.1, 2.1, 2.25);
// the window: the casing round the opening, the opening cut out, the sash's cross, the sill board
const wx = 0.1, w = 0.8, sill = 0.9, top = 1.95;
g.fillStyle = "#d8d0bc";
g.fillRect(wx - w / 2 - 0.09, -top - 0.09, w + 0.18, top - sill + 0.12);
g.save();
g.globalCompositeOperation = "destination-out";
g.fillRect(wx - w / 2, -top, w, top - sill);
g.restore();
g.fillStyle = "#cfc6b0";
g.fillRect(wx - 0.022, -top, 0.044, top - sill);
g.fillRect(wx - w / 2, -top + 0.34, w, 0.04);
// the paper strips, yellowed, crosswise over the four panes
g.strokeStyle = "rgba(226,212,172,0.6)";
g.lineWidth = 0.02;
const lower = top - sill - 0.38;
const panes = [
  [wx - w / 2, -top + 0.38, w / 2 - 0.022, lower],
  [wx + 0.022, -top + 0.38, w / 2 - 0.022, lower],
  [wx - w / 2, -top, w / 2 - 0.022, 0.34],
  [wx + 0.022, -top, w / 2 - 0.022, 0.34],
];
for (const [px, py, pw, ph] of panes) {
  g.beginPath();
  g.moveTo(px + 0.02, py + 0.02);
  g.lineTo(px + pw - 0.02, py + ph - 0.02);
  g.moveTo(px + pw - 0.02, py + 0.02);
  g.lineTo(px + 0.02, py + ph - 0.02);
  g.stroke();
}
// the valance: white cotton gathered over the top panes, its hem scalloped
g.fillStyle = "#f2ede1";
g.beginPath();
g.moveTo(wx - w / 2 - 0.04, -top - 0.02);
g.lineTo(wx + w / 2 + 0.04, -top - 0.02);
g.lineTo(wx + w / 2 + 0.04, -top + 0.16);
for (let x = wx + w / 2 + 0.04; x > wx - w / 2 - 0.03; x -= 0.088) g.quadraticCurveTo(x - 0.044, -top + 0.22, x - 0.088, -top + 0.16);
g.closePath();
g.fill();
g.fillStyle = "rgba(170,158,136,0.5)";
for (let x = wx - w / 2; x < wx + w / 2 + 0.04; x += 0.088) g.fillRect(x, -top - 0.02, 0.012, 0.17);
// the sill board, standing out, its shade under it
g.fillStyle = "#c9bea6";
g.fillRect(wx - w / 2 - 0.14, -sill, w + 0.28, 0.06);
g.fillStyle = "rgba(80,62,42,0.45)";
g.fillRect(wx - w / 2 - 0.14, -sill + 0.06, w + 0.28, 0.025);
// two little horses at the sill's left end, the wood's own pale colour, one a step behind the other
const horse = (x, s, flip) => {
  g.save();
  g.translate(x, -sill);
  g.scale(flip ? -s : s, s);
  g.fillStyle = "#e0bf8a";
  g.beginPath();
  g.moveTo(-0.07, -0.02);
  g.lineTo(-0.065, -0.07);
  g.lineTo(0.04, -0.075);
  g.lineTo(0.065, -0.12);
  g.lineTo(0.085, -0.115);
  g.lineTo(0.08, -0.08);
  g.lineTo(0.06, -0.06);
  g.lineTo(0.055, -0.02);
  g.closePath();
  g.fill();
  g.fillRect(-0.065, -0.03, 0.017, 0.03);
  g.fillRect(0.04, -0.03, 0.017, 0.03);
  g.fillStyle = "#946f42";
  g.fillRect(0.05, -0.12, 0.012, 0.04);
  g.fillRect(-0.085, -0.07, 0.02, 0.04);
  g.restore();
};
horse(wx - 0.28, 1.5, false);
horse(wx - 0.1, 1.3, true);
e.at(wx - 0.2, -sill - 0.1, "horses");
// a geranium in a clay pot at the sill's right end: the pot, the round leaves, the red heads — the room's one red
g.fillStyle = "#a45a38";
g.beginPath();
g.moveTo(wx + 0.22, -sill);
g.lineTo(wx + 0.2, -sill - 0.12);
g.lineTo(wx + 0.38, -sill - 0.12);
g.lineTo(wx + 0.36, -sill);
g.closePath();
g.fill();
g.fillStyle = "#8a4a2e";
g.fillRect(wx + 0.195, -sill - 0.135, 0.19, 0.03);
for (let i = 0; i < 9; i++) {
  g.fillStyle = ["#5d7a46", "#6f8b52", "#4f6a3c"][i % 3];
  g.beginPath();
  g.ellipse(wx + 0.21 + 0.17 * L.rnd(i, 41), -sill - 0.16 - 0.14 * L.rnd(i, 42), 0.04, 0.032, 0, 0, Math.PI * 2);
  g.fill();
}
for (const [x, y] of [[0.25, -0.36], [0.33, -0.33], [0.29, -0.4]]) {
  g.fillStyle = "#c8432f";
  g.beginPath();
  g.arc(wx + x, -sill + y + 0.04, 0.034, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = "#e0654a";
  g.beginPath();
  g.arc(wx + x - 0.01, -sill + y + 0.03, 0.016, 0, Math.PI * 2);
  g.fill();
}
// the clock: a little painted case under a gable, its white face, two iron weights on their chains
const cx = 0.9;
g.fillStyle = "#6c4f36";
g.fillRect(cx - 0.12, -2.14, 0.24, 0.27);
g.beginPath();
g.moveTo(cx - 0.14, -2.14);
g.lineTo(cx, -2.22);
g.lineTo(cx + 0.14, -2.14);
g.closePath();
g.fill();
g.fillStyle = "#ebe3ce";
g.beginPath();
g.arc(cx, -2.01, 0.085, 0, Math.PI * 2);
g.fill();
g.strokeStyle = "#3b2f25";
g.lineWidth = 0.009;
g.beginPath();
g.moveTo(cx, -2.01);
g.lineTo(cx - 0.02, -2.07);
g.moveTo(cx, -2.01);
g.lineTo(cx + 0.05, -1.99);
g.stroke();
g.fillStyle = "#c2563e";
g.beginPath();
g.arc(cx - 0.05, -1.92, 0.012, 0, Math.PI * 2);
g.arc(cx + 0.05, -1.92, 0.012, 0, Math.PI * 2);
g.fill();
g.strokeStyle = "#5a554e";
g.lineWidth = 0.006;
g.beginPath();
g.moveTo(cx - 0.05, -1.87);
g.lineTo(cx - 0.05, -1.38);
g.moveTo(cx + 0.05, -1.87);
g.lineTo(cx + 0.05, -1.52);
g.stroke();
g.fillStyle = "#4e4a45";
g.fillRect(cx - 0.065, -1.4, 0.03, 0.12);
g.fillRect(cx + 0.035, -1.54, 0.03, 0.12);
e.at(cx, -2.01, "clock");
// its pendulum, hung under the case: it swings (animate)
e.layer("pendulum", { pivot: [cx, -1.87], box: [cx - 0.1, -1.89, cx + 0.1, -1.5] }, (p) => {
  p.strokeStyle = "#6a5a40";
  p.lineWidth = 0.008;
  p.beginPath();
  p.moveTo(cx, -1.87);
  p.lineTo(cx, -1.6);
  p.stroke();
  p.fillStyle = "#c19d46";
  p.beginPath();
  p.arc(cx, -1.58, 0.03, 0, Math.PI * 2);
  p.fill();
});
// Petrushka's cupboard: a little wall cupboard of painted boards, its door, the hasp and a small padlock
const ux = 1.15, uw = 0.5;
g.fillStyle = "#5f6f68";
g.fillRect(ux, -1.78, uw, 0.56);
g.fillStyle = "#6f8078";
g.fillRect(ux + 0.04, -1.73, uw - 0.08, 0.46);
L.strokes(g, 33, ux + 0.06, -1.7, uw - 0.12, 0.4, ["#7e8f86", "#56655e"], 8, 0.25, 0.05, Math.PI / 2, 0.3);
g.fillStyle = "rgba(40,48,44,0.5)";
g.fillRect(ux + 0.04, -1.27, uw - 0.08, 0.02);
g.fillRect(ux + uw - 0.045, -1.73, 0.01, 0.46);
g.fillStyle = "#4a4640";
g.fillRect(ux + uw - 0.1, -1.53, 0.08, 0.02);
g.fillStyle = "#b8963e";
g.beginPath();
g.arc(ux + uw - 0.06, -1.47, 0.025, 0, Math.PI * 2);
g.fill();
g.strokeStyle = "#8a7a5a";
g.lineWidth = 0.008;
g.beginPath();
g.arc(ux + uw - 0.06, -1.5, 0.016, Math.PI, 0);
g.stroke();
e.at(ux + uw / 2, -1.5, "cupboard");
// the father's photograph over it: a small sepia card in a dark frame — a young man in a cap
const fx = ux + 0.25;
g.fillStyle = "#4a3a2c";
g.fillRect(fx - 0.1, -2.12, 0.2, 0.26);
g.fillStyle = "#d2bd98";
g.fillRect(fx - 0.075, -2.095, 0.15, 0.21);
g.fillStyle = "#7a6248";
g.beginPath();
g.ellipse(fx, -2.0, 0.035, 0.045, 0, 0, Math.PI * 2);
g.fill();
g.fillRect(fx - 0.045, -1.94, 0.09, 0.055);
g.fillStyle = "#5c4836";
g.fillRect(fx - 0.04, -2.055, 0.08, 0.02);
e.at(fx, -2.0, "photo");
