// The great Russian stove, its front toward the room: whitewashed clay, the whitewash greyed and cracked here and
// there, soot over the mouth. Below, the arched hole under the hearth with firewood stacked in it; the hearth's ledge;
// the mouth — an arched opening left unpainted, the fire inside it seen through it (the element `embers`); a small
// niche for drying mittens; the stove's top at 1.8 m (felt boots and a sheepskin drying on it) and the chimney's breast
// rising narrower to the ceiling.
// (x −1.05…1.05: across 1.3…3.4; the mouth x 0.1…0.65, 0.62…1.15 m up; its foot at the floor)
const L = e.lib;
const C = L.C;
const TOP = 1.8;
const M0 = 0.1;
const M1 = 0.65;
const MB = 0.62;
const MT = 1.15;
const MR = (M1 - M0) / 2;
const MC = (M0 + M1) / 2;

// the body, with the mouth's arch cut out of it (evenodd: the hole shows the fire behind)
const body = new Path2D();
body.rect(-1.05, -TOP, 2.1, TOP);
body.rect(-0.2, -2.42, 1.15, 2.42 - TOP + 0.01);
const mouth = new Path2D();
mouth.moveTo(M0, -MB);
mouth.lineTo(M0, -(MT - MR));
mouth.arc(MC, -(MT - MR), MR, Math.PI, 0);
mouth.lineTo(M1, -MB);
mouth.closePath();
body.addPath(mouth);
g.fillStyle = C.lime;
g.fill(body, "evenodd");

// (the whitewash: greyer below and at the edges, a few cracks)
g.save();
g.clip(body, "evenodd");
g.fillStyle = "rgba(170,160,146,0.25)";
g.fillRect(-1.05, -0.3, 2.1, 0.3);
g.fillRect(-1.05, -2.42, 0.06, 2.42);
g.fillRect(0.99, -TOP, 0.06, TOP);
g.strokeStyle = "rgba(140,130,118,0.6)";
g.lineWidth = 0.008;
for (const [x, y, dx, dy] of [[-0.6, -1.5, 0.12, 0.18], [0.85, -0.4, -0.1, 0.22], [-0.3, -0.75, 0.2, 0.06], [0.5, -2.1, 0.08, 0.2]]) {
  g.beginPath();
  g.moveTo(x, y);
  g.lineTo(x + dx * 0.5, y + dy * 0.6);
  g.lineTo(x + dx, y + dy);
  g.stroke();
}
// (soot over the mouth, up the stove's forehead, soft)
const soot = g.createRadialGradient(MC, -MT - 0.05, 0.02, MC, -MT - 0.05, 0.42);
soot.addColorStop(0, "rgba(50,44,40,0.75)");
soot.addColorStop(0.6, "rgba(60,54,50,0.3)");
soot.addColorStop(1, "rgba(60,54,50,0)");
g.fillStyle = soot;
g.fillRect(M0 - 0.4, -MT - 0.5, M1 - M0 + 0.8, 0.6);
g.restore();

// the hearth's ledge under the mouth: a step of clay, a little darker
g.fillStyle = C.limeShade;
g.fillRect(-0.15, -MB, 1.2, 0.05);
g.fillStyle = "rgba(90,80,70,0.4)";
g.fillRect(-0.15, -MB + 0.05, 1.2, 0.015);
// an iron pot standing on the ledge, a poker leaning by it
g.fillStyle = C.iron;
g.beginPath();
g.ellipse(-0.02, -MB - 0.08, 0.09, 0.08, 0, 0, Math.PI * 2);
g.fill();
g.fillRect(-0.09, -MB - 0.16, 0.14, 0.02);
g.strokeStyle = C.iron;
g.lineWidth = 0.015;
g.beginPath();
g.moveTo(0.75, 0);
g.lineTo(0.92, -0.95);
g.stroke();

// the hole under the hearth: an arch, dark, logs stacked in it
g.fillStyle = "#2e2622";
g.beginPath();
g.moveTo(0.05, 0);
g.lineTo(0.05, -0.3);
g.arc(0.35, -0.3, 0.3, Math.PI, 0);
g.lineTo(0.65, 0);
g.closePath();
g.fill();
for (const [x, y] of [[0.17, -0.06], [0.3, -0.06], [0.43, -0.06], [0.56, -0.06], [0.23, -0.17], [0.36, -0.17], [0.49, -0.17], [0.3, -0.28], [0.43, -0.28]]) {
  g.fillStyle = "#8a6a48";
  g.beginPath();
  g.arc(x, y, 0.055, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = "#c8a878";
  g.beginPath();
  g.arc(x, y, 0.035, 0, Math.PI * 2);
  g.fill();
}

// the niche for mittens, dark, a pair in it
g.fillStyle = "#4a403a";
g.fillRect(-0.78, -1.32, 0.22, 0.18);
g.fillStyle = "#7a5a3e";
g.fillRect(-0.75, -1.22, 0.07, 0.08);
g.fillStyle = "#6a4e36";
g.fillRect(-0.66, -1.22, 0.07, 0.08);

// the top's edge, a plain cornice; on the top, felt boots drying and a rolled sheepskin
g.fillStyle = C.limeShade;
g.fillRect(-1.05, -TOP - 0.04, 2.1, 0.06);
g.fillStyle = "#6c655d";
g.fillRect(-0.95, -TOP - 0.3, 0.09, 0.26);
g.fillRect(-0.95, -TOP - 0.1, 0.17, 0.06);
g.fillRect(-0.82, -TOP - 0.28, 0.09, 0.24);
g.fillRect(-0.82, -TOP - 0.1, 0.16, 0.06);
g.fillStyle = "#c8ad84";
g.beginPath();
g.ellipse(-0.45, -TOP - 0.13, 0.22, 0.11, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = "#a88a62";
g.beginPath();
g.ellipse(-0.3, -TOP - 0.13, 0.07, 0.09, 0, 0, Math.PI * 2);
g.fill();
// (the chimney breast's damper: a little iron door high up)
g.fillStyle = C.iron;
g.fillRect(0.3, -2.2, 0.16, 0.12);
e.at(MC, -0.9, "mouth");
