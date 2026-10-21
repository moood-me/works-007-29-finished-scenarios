// The samovar on the table: a copper urn on a square foot with four small legs, its sides fluted, two dark wooden
// knobs for handles, the brass tap on its right with its little key, the crown on top and on it the teapot — white
// porcelain with blue flowers — keeping warm. Painted in its own colours; the lamp's light makes it glow.
// (x −0.22…0.26, its foot at y 0 on the table's top, the teapot's lid at y −0.66)
const L = e.lib;
const C = L.C;
// the foot and its legs
g.fillStyle = C.copperDark;
g.fillRect(-0.12, -0.03, 0.03, 0.03);
g.fillRect(0.09, -0.03, 0.03, 0.03);
g.fillStyle = C.copper;
g.fillRect(-0.13, -0.09, 0.26, 0.06);
g.fillRect(-0.06, -0.13, 0.12, 0.04);
// the urn: wide in the shoulder, narrowing to the foot
g.beginPath();
g.moveTo(-0.08, -0.13);
g.bezierCurveTo(-0.2, -0.17, -0.2, -0.38, -0.15, -0.43);
g.lineTo(0.15, -0.43);
g.bezierCurveTo(0.2, -0.38, 0.2, -0.17, 0.08, -0.13);
g.closePath();
g.fill();
// (its fluting: lighter and darker bands down it)
g.save();
g.clip();
for (let x = -0.18; x < 0.19; x += 0.045) {
  g.fillStyle = "rgba(240,180,120,0.35)";
  g.fillRect(x, -0.44, 0.012, 0.32);
  g.fillStyle = "rgba(110,50,20,0.25)";
  g.fillRect(x + 0.022, -0.44, 0.012, 0.32);
}
g.restore();
g.fillStyle = C.copperLight;
g.fillRect(-0.16, -0.44, 0.32, 0.02);
// the handles: dark wooden knobs on brass stems
for (const s of [-1, 1]) {
  g.fillStyle = C.copperDark;
  g.fillRect(s * 0.17 - 0.01, -0.39, 0.02, 0.03);
  g.fillStyle = "#2e2420";
  g.beginPath();
  g.ellipse(s * 0.205, -0.375, 0.025, 0.018, 0, 0, Math.PI * 2);
  g.fill();
}
// the tap on the right, its key
g.fillStyle = "#c89a48";
g.fillRect(0.15, -0.19, 0.08, 0.022);
g.fillRect(0.21, -0.19, 0.02, 0.05);
g.fillRect(0.175, -0.225, 0.03, 0.04);
// the crown and the teapot on it
g.fillStyle = C.copper;
g.fillRect(-0.07, -0.49, 0.14, 0.06);
g.fillStyle = "#f2efe8";
g.beginPath();
g.ellipse(0, -0.56, 0.085, 0.065, 0, 0, Math.PI * 2);
g.fill();
g.fillRect(0.06, -0.58, 0.07, 0.016);
g.beginPath();
g.ellipse(0, -0.63, 0.035, 0.02, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = "#3e5a9a";
for (const [x, y] of [[-0.04, -0.56], [0.03, -0.55], [0, -0.585]]) {
  g.beginPath();
  g.arc(x, y, 0.014, 0, Math.PI * 2);
  g.fill();
}
e.at(0.22, -0.15, "tap");
e.at(-0.02, -0.66, "top");
e.at(0, -0.3);
