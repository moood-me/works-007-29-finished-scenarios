// The Gagins' white house, its front on the terrace (on the left, its corner 2.6 m left of the start, 4.1 m ahead):
// whitewashed walls over a sandstone plinth, two windows with pale green-blue shutters, a vine climbing the corner.
// Toward the left it dissolves into a drawing. (Asya's window is on its side, over the valley: house_side.)
const L = e.lib;
const ACROSS = -5.8;
const D = 4.1;
const box = [-3.2, -4.75, 3.2, 0.04];
// the wall: whitewash with a little warm wash in it
g.fillStyle = "#f2ede2";
g.fillRect(-3.2, -4.4, 6.4, 4.42);
for (let i = 0; i < 18; i++) {
  g.fillStyle = i % 2 ? "rgba(232, 220, 196, 0.35)" : "rgba(250, 247, 240, 0.4)";
  g.beginPath();
  g.ellipse(-3 + 6 * L.rnd(i, 101), -0.6 - 3.6 * L.rnd(i, 103), 0.4 + 0.6 * L.rnd(i, 105), 0.2 + 0.3 * L.rnd(i, 107), 0, 0, Math.PI * 2);
  g.fill();
}
// the plinth
g.fillStyle = "#cfc2a6";
g.fillRect(-3.2, -0.42, 6.4, 0.44);
g.fillStyle = "#c0b192";
g.fillRect(-3.2, -0.45, 6.4, 0.04);
// the corner's quoins
g.fillStyle = "#e6dfd0";
for (let y = -0.45; y > -4.4; y -= 0.5) g.fillRect(2.9, y - 0.24, 0.3, 0.22);
// a window: glass, its frame, its two shutters folded open, its sill
const opening = (cx, sill, w, h) => {
  g.fillStyle = "#e2dccd";
  g.fillRect(cx - w / 2 - 0.08, -sill - h - 0.08, w + 0.16, h + 0.08);
  g.fillStyle = "#56656c";
  g.fillRect(cx - w / 2, -sill - h, w, h);
  g.fillStyle = "rgba(240, 236, 226, 0.55)";
  g.fillRect(cx - w / 2 + 0.04, -sill - h + 0.04, w * 0.3, h - 0.08);
  g.strokeStyle = "#f6f3eb";
  g.lineWidth = 0.045;
  g.strokeRect(cx - w / 2, -sill - h, w, h);
  g.beginPath();
  g.moveTo(cx, -sill - h);
  g.lineTo(cx, -sill);
  g.moveTo(cx - w / 2, -sill - h * 0.45);
  g.lineTo(cx + w / 2, -sill - h * 0.45);
  g.stroke();
  for (const s of [-1, 1]) {
    const x0 = cx + s * (w / 2 + 0.1);
    g.fillStyle = "#9fbab4";
    g.fillRect(Math.min(x0, x0 + s * 0.4), -sill - h, 0.4, h);
    g.strokeStyle = "#86a39c";
    g.lineWidth = 0.02;
    for (let y = -sill - h + 0.1; y < -sill; y += 0.09) {
      g.beginPath();
      g.moveTo(Math.min(x0, x0 + s * 0.4) + 0.04, y);
      g.lineTo(Math.max(x0, x0 + s * 0.4) - 0.04, y);
      g.stroke();
    }
  }
  g.fillStyle = "#d6cab0";
  g.fillRect(cx - w / 2 - 0.14, -sill, w + 0.28, 0.07);
};
opening(2.45, 3.0, 0.72, 1.15);
opening(0.5, 0.95, 0.85, 1.2);
// the vine up the corner: its old stem and its leaves, stirring in the air
g.strokeStyle = "#7a634a";
g.lineWidth = 0.05;
g.beginPath();
g.moveTo(2.95, 0);
g.bezierCurveTo(2.7, -0.8, 3.1, -1.6, 2.85, -2.5);
g.stroke();
e.layer("vine", { pivot: [2.9, -2.6], wind: { strength: 0.12, gust: 0.4 } }, (v) => {
  for (let i = 0; i < 34; i++) {
    const t = i / 34;
    const x = Math.min(3.02, 2.72 + 0.28 * Math.sin(t * 9) * (0.4 + t) - 0.1 * L.rnd(i, 111));
    const y = -0.3 - 2.6 * t - 0.25 * L.rnd(i, 113);
    v.fillStyle = ["#6f9648", "#84aa58", "#5e8640"][i % 3];
    L.leaf(v, x, y, 0.16 + 0.08 * L.rnd(i, 115), -0.5 + L.rnd(i, 117));
    v.fill();
  }
});
L.unfinish(g, box, ACROSS, D);
