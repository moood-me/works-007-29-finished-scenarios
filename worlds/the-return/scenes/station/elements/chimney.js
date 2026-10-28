// The station house's brick chimney on the roof's slope, its iron cap; a thin smoke from the stove inside (the
// particles `house_smoke` come out of its mouth).
g.fillStyle = "#a06c57";
g.fillRect(-0.28, -1.1, 0.56, 1.1);
g.fillStyle = "#8a5b49";
for (let y = -1.0; y < 0; y += 0.16) g.fillRect(-0.28, y, 0.56, 0.02);
g.fillStyle = "#4c4a46";
g.fillRect(-0.36, -1.2, 0.72, 0.1);
e.at(0, -1.25, "mouth");
