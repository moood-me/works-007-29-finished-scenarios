// The room's floor from above (x across, y toward the eye; its middle 3 m ahead, the back wall at y −2): worn boards
// running away from the eye, sand lying pale in every seam; by the door (back left) the trodden earth of the entry,
// a fan of sand blown in over it from the doorway, the edge of the raised floor along it; three straw mats, frayed,
// with dark cloth borders; the sunken hearth (x −1.4…−0.4, y −0.5…0.5): its wooden frame, the grey ash, the charcoal
// and its live coals (the glow `embers` — the scene's light `hearth`).
const r = e.lib.stream(91);
// the boards and their sanded seams
const tones = ["#8f7a62", "#86715a", "#957f66", "#8b765e"];
const seams = new Path2D();
let x = -2.85;
let i = 0;
while (x < 2.85) {
  const w = 0.18 + r() * 0.05;
  g.fillStyle = tones[i % tones.length];
  g.fillRect(x, -2.05, Math.min(w, 2.85 - x), 4.1);
  seams.rect(x, -2.05, 0.02, 4.1);
  x += w;
  i++;
}
g.fillStyle = "#d4b47e";
g.fill(seams);
// a dusting of sand all over, thicker toward the walls
for (let k = 0; k < 18; k++) {
  const sx = -2.8 + r() * 5.6;
  const sy = -2 + r() * 4;
  const rad = 0.3 + r() * 0.7;
  const p = g.createRadialGradient(sx, sy, 0, sx, sy, rad);
  p.addColorStop(0, "rgba(218, 190, 140, 0.35)");
  p.addColorStop(1, "rgba(218, 190, 140, 0)");
  g.fillStyle = p;
  g.fillRect(sx - rad, sy - rad, rad * 2, rad * 2);
}

// the entry by the door: trodden earth, the sand fanned in over it from the doorway, the raised floor's edge
g.fillStyle = "#b39470";
g.fillRect(-2.85, -2.05, 1.95, 0.75);
const fan = g.createRadialGradient(-1.65, -2.0, 0.1, -1.65, -2.0, 1.0);
fan.addColorStop(0, "rgba(220, 188, 134, 1)");
fan.addColorStop(0.7, "rgba(220, 188, 134, 0.7)");
fan.addColorStop(1, "rgba(220, 188, 134, 0)");
g.fillStyle = fan;
g.fillRect(-2.85, -2.05, 2.4, 1.2);
g.strokeStyle = "#c39b64";
g.lineWidth = 0.02;
for (let k = 0; k < 5; k++) {
  g.beginPath();
  g.ellipse(-1.65, -2.0, 0.3 + k * 0.14, 0.18 + k * 0.1, 0, 0.1, Math.PI - 0.1);
  g.stroke();
}
g.fillStyle = "#5e4b39";
g.fillRect(-2.85, -1.32, 1.97, 0.07);
g.fillRect(-0.95, -2.05, 0.07, 0.8);

// the straw mats: a weave of fine lines, frayed paler where they are walked, dark cloth along their long edges
const mat = (x0, y0, w, h, along) => {
  g.fillStyle = "#c4b07a";
  g.fillRect(x0, y0, w, h);
  const weave = new Path2D();
  if (along) for (let y = y0 + 0.03; y < y0 + h; y += 0.035) weave.rect(x0, y, w, 0.006);
  else for (let xx = x0 + 0.03; xx < x0 + w; xx += 0.035) weave.rect(xx, y0, 0.006, h);
  g.fillStyle = "rgba(140, 120, 76, 0.45)";
  g.fill(weave);
  const worn = g.createRadialGradient(x0 + w * 0.5, y0 + h * 0.5, 0.05, x0 + w * 0.5, y0 + h * 0.5, Math.max(w, h) * 0.6);
  worn.addColorStop(0, "rgba(228, 214, 172, 0.35)");
  worn.addColorStop(1, "rgba(228, 214, 172, 0)");
  g.fillStyle = worn;
  g.fillRect(x0, y0, w, h);
  g.fillStyle = "#3f3a2e";
  if (along) {
    g.fillRect(x0, y0, w, 0.05);
    g.fillRect(x0, y0 + h - 0.05, w, 0.05);
  } else {
    g.fillRect(x0, y0, 0.05, h);
    g.fillRect(x0 + w - 0.05, y0, 0.05, h);
  }
};
mat(0.0, -1.25, 1.9, 0.9, true);
mat(0.0, -0.33, 1.9, 0.9, true);
mat(-2.6, -0.95, 0.9, 1.8, false);

// the sunken hearth: its frame, the ash, the charcoal and the live coals
g.fillStyle = "#4a3a2c";
g.fillRect(-1.4, -0.5, 1.0, 1.0);
g.fillStyle = "#a8a297";
g.fillRect(-1.3, -0.4, 0.8, 0.8);
const ash = g.createRadialGradient(-0.9, 0.0, 0.05, -0.9, 0.0, 0.42);
ash.addColorStop(0, "rgba(96, 90, 82, 0.8)");
ash.addColorStop(1, "rgba(96, 90, 82, 0)");
g.fillStyle = ash;
g.fillRect(-1.3, -0.4, 0.8, 0.8);
for (let k = 0; k < 9; k++) {
  const cx = -0.9 + (r() - 0.5) * 0.3;
  const cy = (r() - 0.5) * 0.3;
  g.fillStyle = k < 5 ? "#2e2a26" : "#d9542a";
  g.beginPath();
  g.ellipse(cx, cy, 0.04 + r() * 0.03, 0.025 + r() * 0.02, r() * 3, 0, Math.PI * 2);
  g.fill();
}
g.fillStyle = "#f08a3c";
g.beginPath();
g.ellipse(-0.9, 0.02, 0.05, 0.03, 0.4, 0, Math.PI * 2);
g.fill();
e.light(-0.9, 0.0, 0.16, "#ff8a3c", 1.0, "embers");
