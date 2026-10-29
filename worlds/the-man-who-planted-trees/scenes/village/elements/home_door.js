// The door of Lina's father's house: one leaf of weathered planks on two iron straps, painted from its hinge (x 0) to
// its free edge (x 0.94); it turns on the hinge by `home_door` (180 shut, less — open into the dark house)
g.fillStyle = "#76624c";
g.fillRect(0, -1.95, 0.94, 1.95);
g.fillStyle = "rgba(40, 32, 26, 0.45)";
for (let x = 0.19; x < 0.9; x += 0.19) g.fillRect(x, -1.95, 0.018, 1.95);
g.fillStyle = "#3d3630";
g.fillRect(0.04, -1.62, 0.84, 0.05);
g.fillRect(0.04, -0.5, 0.84, 0.05);
g.beginPath();
g.arc(0.8, -0.98, 0.03, 0, Math.PI * 2);
g.fill();
