// The izba's back wall, 5.8 m ahead (x to the right, as the eye sees it): hewn logs; the window with its pale frame and
// a white half-curtain over its top, two little wooden horses on the sill (Semyon Yevseyevich carves them for Nastya);
// to its right the father's photograph in a frame and the clock on the wall — its weights on their chains, its
// pendulum a layer that swings (animate). The bed's corner on the left is behind the curtain (`curtain`, `bed`).
const L = e.lib;
L.hewn(g, 31, -3.0, 2.9, 2.4);
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
// two little horses on the sill, carved and left the wood's own colour, one a step behind the other
const horse = (x, s, flip) => {
  g.save();
  g.translate(x, -0.87);
  g.scale(flip ? -s : s, s);
  g.fillStyle = "#c19a62";
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
  g.fillStyle = "#8a6a40";
  g.fillRect(0.05, -0.12, 0.012, 0.04);
  g.fillRect(-0.085, -0.07, 0.02, 0.04);
  g.restore();
};
horse(-0.22, 1, false);
horse(0.06, 0.85, true);
e.at(-0.1, -0.95, "horses");
// the father's photograph: a small sepia card in a dark frame — a young man in a cap
g.fillStyle = "#4a3a2c";
g.fillRect(0.66, -1.72, 0.2, 0.26);
g.fillStyle = "#cdb794";
g.fillRect(0.685, -1.695, 0.15, 0.21);
g.fillStyle = "#7a6248";
g.beginPath();
g.ellipse(0.76, -1.6, 0.035, 0.045, 0, 0, Math.PI * 2);
g.fill();
g.fillRect(0.715, -1.54, 0.09, 0.055);
g.fillStyle = "#5c4836";
g.fillRect(0.72, -1.655, 0.08, 0.02);
e.at(0.76, -1.6, "photo");
// the clock: a little painted case, its face, the two weights hanging on their chains
g.fillStyle = "#6c4f36";
g.fillRect(1.18, -2.0, 0.24, 0.3);
g.beginPath();
g.moveTo(1.16, -2.0);
g.lineTo(1.3, -2.08);
g.lineTo(1.44, -2.0);
g.closePath();
g.fill();
g.fillStyle = "#e9e1cc";
g.beginPath();
g.arc(1.3, -1.87, 0.085, 0, Math.PI * 2);
g.fill();
g.strokeStyle = "#3b2f25";
g.lineWidth = 0.008;
g.beginPath();
g.moveTo(1.3, -1.87);
g.lineTo(1.3, -1.93);
g.moveTo(1.3, -1.87);
g.lineTo(1.345, -1.85);
g.stroke();
g.strokeStyle = "#5a554e";
g.lineWidth = 0.006;
g.beginPath();
g.moveTo(1.25, -1.7);
g.lineTo(1.25, -1.12);
g.moveTo(1.35, -1.7);
g.lineTo(1.35, -1.3);
g.stroke();
g.fillStyle = "#4e4a45";
g.fillRect(1.235, -1.14, 0.03, 0.12);
g.fillRect(1.335, -1.32, 0.03, 0.12);
e.at(1.3, -1.87, "clock");
// the pendulum, hung under the case: it swings (animate)
e.layer("pendulum", { pivot: [1.3, -1.7], box: [1.2, -1.72, 1.4, -1.36] }, (p) => {
  p.strokeStyle = "#6a5a40";
  p.lineWidth = 0.008;
  p.beginPath();
  p.moveTo(1.3, -1.7);
  p.lineTo(1.3, -1.43);
  p.stroke();
  p.fillStyle = "#b8963e";
  p.beginPath();
  p.arc(1.3, -1.42, 0.03, 0, Math.PI * 2);
  p.fill();
});
