// The passage (сени) beyond the open doorway, its far wall 0.75 m past the room's (facing left, as the room's right
// wall: x 0 is 5.15 m ahead, a point d metres ahead at x 5.15 − d; the doorway shows it from about 4.7 to 5.8 ahead):
// unheated, its boards greyer than the room's logs; a bench with the two water buckets (one with its patch), the yoke on
// its peg over them, a sheepskin coat on a nail. Lit only by what comes in at the door: the lamp's light.
const L = e.lib;
L.planks(g, 81, -0.8, -2.2, 1.6, 2.2, 0.22, ["#8d8170", "#837766", "#958976"], true, 0.6);
// the bench and its legs
g.fillStyle = "#7a6a54";
g.fillRect(-0.62, -0.52, 1.0, 0.06);
g.fillRect(-0.56, -0.46, 0.05, 0.46);
g.fillRect(0.27, -0.46, 0.05, 0.46);
// the buckets on it: tin, a handle each; the nearer one patched
const bucket = (x, patch) => {
  g.fillStyle = "#9ea3a2";
  g.beginPath();
  g.moveTo(x - 0.13, -0.52);
  g.lineTo(x - 0.15, -0.83);
  g.lineTo(x + 0.15, -0.83);
  g.lineTo(x + 0.13, -0.52);
  g.closePath();
  g.fill();
  g.fillStyle = "#83898a";
  g.fillRect(x - 0.15, -0.85, 0.3, 0.025);
  g.fillRect(x - 0.14, -0.6, 0.28, 0.015);
  g.strokeStyle = "#5e6263";
  g.lineWidth = 0.01;
  g.beginPath();
  g.arc(x, -0.84, 0.15, Math.PI, 0);
  g.stroke();
  if (patch) {
    g.fillStyle = "#7d7365";
    g.fillRect(x - 0.06, -0.74, 0.08, 0.07);
  }
};
bucket(-0.32, false);
bucket(0.02, true);
// the yoke on its peg over them: a curved pole, its hooks
g.strokeStyle = "#8b6a44";
g.lineWidth = 0.035;
g.beginPath();
g.moveTo(-0.7, -1.35);
g.quadraticCurveTo(-0.15, -1.55, 0.4, -1.35);
g.stroke();
g.fillStyle = "#4b453d";
g.fillRect(-0.16, -1.5, 0.03, 0.06);
// a sheepskin coat on a nail at the far end, hanging heavy
g.fillStyle = "#6b5a44";
g.beginPath();
g.moveTo(0.55, -1.7);
g.quadraticCurveTo(0.42, -1.6, 0.44, -1.3);
g.lineTo(0.42, -0.75);
g.lineTo(0.72, -0.75);
g.lineTo(0.7, -1.3);
g.quadraticCurveTo(0.7, -1.6, 0.55, -1.7);
g.closePath();
g.fill();
g.fillStyle = "#c8b896";
g.fillRect(0.42, -0.79, 0.3, 0.04);
