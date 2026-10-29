// A loaf in a linen cloth laid on a fresh stump of the felled lower edge (`stump_bread`: Lina lays there the bread she
// was taking to the stone — 3.5, on Silence, when she knows); it stands on the stump's cut (its elevation). Its point
// `loaf`
if (!e.state.stump_bread) return;
g.fillStyle = "#ece6d6";
g.beginPath();
g.moveTo(-0.2, 0);
g.quadraticCurveTo(-0.18, -0.16, 0.02, -0.18);
g.quadraticCurveTo(0.2, -0.16, 0.2, 0);
g.closePath();
g.fill();
g.fillStyle = "#b08552";
g.beginPath();
g.ellipse(0.08, -0.07, 0.07, 0.045, -0.3, 0, Math.PI * 2);
g.fill();
g.fillStyle = "#d6cdb9";
g.beginPath();
g.moveTo(-0.04, -0.18);
g.lineTo(-0.09, -0.25);
g.lineTo(0.0, -0.22);
g.lineTo(0.07, -0.27);
g.lineTo(0.05, -0.17);
g.closePath();
g.fill();
e.at(0, -0.1, "loaf");
