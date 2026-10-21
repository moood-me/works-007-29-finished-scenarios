// The Russian stove's long side to the room (facing right: x runs away from the eye, x 0 is 3.45 m ahead — a point d
// metres ahead is at x d − 3.45; its near corner at 2.3, it runs to the back wall): whitewashed, a little crooked by
// hand, a niche in it, the greyed plinth; above its top (1.85) its chimney going up into the ceiling near the back.
const L = e.lib;
L.whitewash(g, 81, -1.15, -1.85, 2.3, 1.85, 0.9);
L.whitewash(g, 82, 0.45, -2.42, 0.5, 0.6, 0.9);
// the cornice at the top's edge, a line of shade under it
g.fillStyle = "#d8cfbb";
g.fillRect(-1.15, -1.88, 2.3, 0.07);
g.fillStyle = "rgba(120,104,82,0.35)";
g.fillRect(-1.15, -1.81, 2.3, 0.02);
// a niche (the pechurka) with a tin box in it
g.fillStyle = "#8f806b";
g.beginPath();
g.moveTo(-0.5, -1.1);
g.lineTo(-0.5, -1.3);
g.quadraticCurveTo(-0.38, -1.4, -0.26, -1.3);
g.lineTo(-0.26, -1.1);
g.closePath();
g.fill();
g.fillStyle = "#7d8486";
g.fillRect(-0.44, -1.2, 0.1, 0.09);
// the near corner, a soft line of shade along it; the shade of the far end, toward the corner behind the stove
g.fillStyle = "rgba(150,134,110,0.35)";
g.fillRect(-1.15, -1.85, 0.05, 1.85);
const far = g.createLinearGradient(0.6, 0, 1.15, 0);
far.addColorStop(0, "rgba(90,78,62,0)");
far.addColorStop(1, "rgba(90,78,62,0.4)");
g.fillStyle = far;
g.fillRect(0.6, -1.85, 0.55, 1.85);
// the plinth along the foot
g.fillStyle = "#b9ad97";
g.fillRect(-1.15, -0.22, 2.3, 0.22);
g.fillStyle = "rgba(110,94,74,0.4)";
g.fillRect(-1.15, -0.23, 2.3, 0.015);
