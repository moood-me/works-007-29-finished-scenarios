// The izba's back wall, 4.6 m ahead (x to the right, as the eye sees it; x 0 is 0.225 m left of the eye's line): hewn
// logs; the window to the right (across 0.45…1.25, between the son and the father as the eye sees them) with its pale
// frame and a white half-curtain over its top, two little wooden horses at the sill's left end (Semyon Yevseyevich
// carves them for Nastya of pale lime wood: their silhouettes stand against the dusk in the panes, by the boy's head); the clock on the wall over the mother's and the son's heads — its weights on their chains, its pendulum a
// layer that swings (animate) — and the father's photograph in a frame, high over the boy.
const L = e.lib;
L.hewn(g, 31, -1.78, 1.78, 2.4);
g.save();
g.translate(1.075, 0);
// the window's opening, cut out: the outside (`outside`) is seen through it
g.save();
g.globalCompositeOperation = "destination-out";
g.fillRect(-0.4, -1.75, 0.8, 0.9);
g.restore();
// its frame: the casing round it, the cross of the sash, the sill board standing out
g.fillStyle = "#d9d3c2";
g.fillRect(-0.5, -1.85, 1.0, 0.1);
g.fillRect(-0.5, -1.75, 0.1, 0.9);
g.fillRect(0.4, -1.75, 0.1, 0.9);
g.fillStyle = "#cfc8b5";
g.fillRect(-0.025, -1.75, 0.05, 0.9);
g.fillRect(-0.4, -1.35, 0.8, 0.045);
g.fillStyle = "#c4bba6";
g.fillRect(-0.58, -0.87, 1.16, 0.07);
g.fillStyle = "rgba(90,74,54,0.5)";
g.fillRect(-0.58, -0.8, 1.16, 0.015);
// the half-curtain: white cotton gathered on a string over the upper panes, its hem scalloped
g.fillStyle = "#f1ece0";
g.beginPath();
g.moveTo(-0.42, -1.76);
g.lineTo(0.42, -1.76);
g.lineTo(0.42, -1.6);
for (let x = 0.42; x > -0.41; x -= 0.07) g.quadraticCurveTo(x - 0.035, -1.55, x - 0.07, -1.6);
g.closePath();
g.fill();
g.fillStyle = "#d9d2c3";
for (let x = -0.38; x < 0.42; x += 0.07) g.fillRect(x, -1.76, 0.012, 0.16);
// two little horses on the sill, carved and left the wood's own pale colour, one a step behind the other
const horse = (x, s, flip) => {
  g.save();
  g.translate(x, -0.87);
  g.scale(flip ? -s : s, s);
  g.fillStyle = "#d9b682";
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
  g.fillRect(-0.065, -0.03, 0.015, 0.03);
  g.fillRect(0.04, -0.03, 0.015, 0.03);
  g.fillStyle = "#946f42";
  g.fillRect(0.05, -0.12, 0.012, 0.04);
  g.fillRect(-0.085, -0.07, 0.02, 0.04);
  g.restore();
};
horse(-0.39, 1.55, false);
horse(-0.2, 1.35, true);
g.restore();
e.at(0.78, -1.0, "horses");
// the photograph and the clock, moved over the heads (the wall's x: 0.42 the photograph, 0.075 the clock)
// the father's photograph: a small sepia card in a dark frame — a young man in a cap
g.fillStyle = "#4a3a2c";
g.fillRect(0.32, -2.02, 0.2, 0.26);
g.fillStyle = "#cdb794";
g.fillRect(0.345, -1.995, 0.15, 0.21);
g.fillStyle = "#7a6248";
g.beginPath();
g.ellipse(0.42, -1.9, 0.035, 0.045, 0, 0, Math.PI * 2);
g.fill();
g.fillRect(0.375, -1.84, 0.09, 0.055);
g.fillStyle = "#5c4836";
g.fillRect(0.38, -1.955, 0.08, 0.02);
e.at(0.42, -1.9, "photo");
// the clock: a little painted case, its face, the two weights hanging on their chains
g.fillStyle = "#6c4f36";
g.fillRect(-0.045, -2.0, 0.24, 0.3);
g.beginPath();
g.moveTo(-0.065, -2.0);
g.lineTo(0.075, -2.08);
g.lineTo(0.215, -2.0);
g.closePath();
g.fill();
g.fillStyle = "#e9e1cc";
g.beginPath();
g.arc(0.075, -1.87, 0.085, 0, Math.PI * 2);
g.fill();
g.strokeStyle = "#3b2f25";
g.lineWidth = 0.008;
g.beginPath();
g.moveTo(0.075, -1.87);
g.lineTo(0.075, -1.93);
g.moveTo(0.075, -1.87);
g.lineTo(0.12, -1.85);
g.stroke();
g.strokeStyle = "#5a554e";
g.lineWidth = 0.006;
g.beginPath();
g.moveTo(0.025, -1.7);
g.lineTo(0.025, -1.12);
g.moveTo(0.125, -1.7);
g.lineTo(0.125, -1.3);
g.stroke();
g.fillStyle = "#4e4a45";
g.fillRect(0.01, -1.14, 0.03, 0.12);
g.fillRect(0.11, -1.32, 0.03, 0.12);
e.at(0.075, -1.87, "clock");
// the pendulum, hung under the case: it swings (animate)
e.layer("pendulum", { pivot: [0.075, -1.7], box: [-0.025, -1.72, 0.175, -1.36] }, (p) => {
  p.strokeStyle = "#6a5a40";
  p.lineWidth = 0.008;
  p.beginPath();
  p.moveTo(0.075, -1.7);
  p.lineTo(0.075, -1.43);
  p.stroke();
  p.fillStyle = "#b8963e";
  p.beginPath();
  p.arc(0.075, -1.42, 0.03, 0, Math.PI * 2);
  p.fill();
});
