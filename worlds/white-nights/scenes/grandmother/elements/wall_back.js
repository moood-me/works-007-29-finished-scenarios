// The back wall, x −2.65…2.75 across the room (the window's opening cut in it at x −1.53…−0.67, 0.85…1.95 m up):
// old wallpaper, and over Grandmother's armchair the general who once courted her — a small oval portrait in a gilt
// frame, a young officer in a dark green coat with gold epaulettes
e.lib.wallpaper(g, -2.65, 2.75, 2.8, 1);
e.lib.cut(g, -1.53, -1.95, 0.86, 1.1);
const INK = e.lib.INK;
g.save();
g.translate(0.3, -1.95);
g.beginPath();
g.ellipse(0, 0, 0.17, 0.215, 0, 0, Math.PI * 2);
g.fillStyle = '#c9a659';
g.fill();
g.strokeStyle = INK;
g.lineWidth = 0.01;
g.stroke();
g.beginPath();
g.ellipse(0, 0, 0.135, 0.18, 0, 0, Math.PI * 2);
g.fillStyle = '#b9b6a4';
g.fill();
g.stroke();
g.save();
g.clip();
// (the officer: his coat and shoulders, his epaulettes, his collar, his face and dark hair)
g.fillStyle = '#3e4c3e';
g.beginPath();
g.ellipse(0, 0.17, 0.13, 0.11, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#d2a947';
g.fillRect(-0.12, 0.075, 0.06, 0.025);
g.fillRect(0.06, 0.075, 0.06, 0.025);
g.fillStyle = '#a5383a';
g.fillRect(-0.025, 0.055, 0.05, 0.03);
g.fillStyle = '#e2c3a4';
g.beginPath();
g.ellipse(0, -0.015, 0.045, 0.06, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#3a2c24';
g.beginPath();
g.ellipse(0, -0.06, 0.05, 0.028, 0, Math.PI, Math.PI * 2);
g.fill();
g.restore();
g.restore();
// (the cord it hangs by, from a nail under the frieze)
g.beginPath();
g.moveTo(0.3, -2.62);
g.lineTo(0.2, -2.15);
g.moveTo(0.3, -2.62);
g.lineTo(0.4, -2.15);
g.strokeStyle = INK;
g.lineWidth = 0.008;
g.stroke();
