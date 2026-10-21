// The stool's seat seen from above (0.34 × 0.32 m): one thick board, worn pale in the middle.
const L = e.lib;
L.planks(g, 111, -0.17, -0.16, 0.34, 0.32, 0.34, ["#b39a74"], true, 0.6);
g.fillStyle = "rgba(220,204,170,0.35)";
g.beginPath();
g.ellipse(0, 0, 0.1, 0.09, 0, 0, Math.PI * 2);
g.fill();
