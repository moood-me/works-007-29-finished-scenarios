// The house's side over the valley (from its corner on the terrace, 2.6 m left and 4.1 m ahead, running away from us
// 4.6 m): whitewash over the plinth, the sun on it, and upstairs Asya's window — its pale green-blue shutters folded
// back against the wall, the glass dark, a white curtain; her geranium stands on its sill (its own element, `geranium`).
g.fillStyle = "#f1eadc";
g.fillRect(0, -4.4, 4.6, 4.42);
for (let i = 0; i < 10; i++) {
  g.fillStyle = i % 2 ? "rgba(232, 220, 196, 0.35)" : "rgba(250, 247, 240, 0.4)";
  g.beginPath();
  g.ellipse(0.3 + 4 * e.lib.rnd(i, 151), -0.6 - 3.4 * e.lib.rnd(i, 153), 0.3 + 0.5 * e.lib.rnd(i, 155), 0.2 + 0.25 * e.lib.rnd(i, 157), 0, 0, Math.PI * 2);
  g.fill();
}
g.fillStyle = "#cfc2a6";
g.fillRect(0, -0.42, 4.6, 0.44);
g.fillStyle = "#e6dfd0";
for (let y = -0.45; y > -4.4; y -= 0.5) g.fillRect(0, y - 0.24, 0.3, 0.22);
// Asya's window: its middle 2.4 m along (6.5 m ahead), the sill 3.05 m up
const cx = 2.4;
const sill = 3.05;
const w = 0.8;
const h = 1.15;
g.fillStyle = "#e2dccd";
g.fillRect(cx - w / 2 - 0.08, -sill - h - 0.08, w + 0.16, h + 0.08);
g.fillStyle = "#56656c";
g.fillRect(cx - w / 2, -sill - h, w, h);
g.fillStyle = "rgba(244, 240, 232, 0.8)";
g.fillRect(cx - w / 2 + 0.04, -sill - h + 0.04, w * 0.32, h - 0.1);
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
  const x0 = s < 0 ? cx - w / 2 - 0.52 : cx + w / 2 + 0.12;
  g.fillStyle = "#9fbab4";
  g.fillRect(x0, -sill - h, 0.4, h);
  g.strokeStyle = "#86a39c";
  g.lineWidth = 0.02;
  for (let y = -sill - h + 0.1; y < -sill; y += 0.09) {
    g.beginPath();
    g.moveTo(x0 + 0.04, y);
    g.lineTo(x0 + 0.36, y);
    g.stroke();
  }
}
g.fillStyle = "#d6cab0";
g.fillRect(cx - w / 2 - 0.14, -sill, w + 0.28, 0.07);
// a window below it, shut
g.fillStyle = "#9fbab4";
g.fillRect(cx - 0.35, -1.95, 0.7, 1.0);
g.strokeStyle = "#86a39c";
g.lineWidth = 0.02;
g.beginPath();
g.moveTo(cx, -1.95);
g.lineTo(cx, -0.95);
g.stroke();
