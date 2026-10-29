// On the doorstep, left for him and untouched (`bread_step`): a loaf in a linen cloth and a pair of knitted grey
// socks folded beside it — the village's thanks (3.4 when Lina knows; the epilogue on Silence). Its point `loaf`
if (!e.state.bread_step) return;
g.fillStyle = "#a99c86";
g.fillRect(-0.45, -0.12, 0.9, 0.12);
g.fillStyle = "#ece6d6";
g.beginPath();
g.moveTo(-0.34, -0.12);
g.quadraticCurveTo(-0.32, -0.3, -0.12, -0.31);
g.quadraticCurveTo(0.06, -0.3, 0.06, -0.12);
g.closePath();
g.fill();
g.fillStyle = "#b08552";
g.beginPath();
g.ellipse(-0.16, -0.2, 0.07, 0.045, -0.3, 0, Math.PI * 2);
g.fill();
g.fillStyle = "#8f8a82";
g.beginPath();
g.roundRect(0.12, -0.2, 0.26, 0.08, 0.02);
g.fill();
g.fillStyle = "#7c776f";
g.fillRect(0.12, -0.16, 0.26, 0.012);
e.at(-0.14, -0.2, "loaf");
