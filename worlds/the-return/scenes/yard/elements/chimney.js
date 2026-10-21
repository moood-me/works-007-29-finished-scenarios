// The stove's brick chimney through the roof's slope, a cap of tin on it; its mouth the smoke's point.
g.fillStyle = "#a4705a";
g.fillRect(-0.26, -1.0, 0.52, 1.0);
g.fillStyle = "#8a5b49";
for (let y = -0.92, i = 0; y < 0; y += 0.13, i++) g.fillRect(-0.26, y, 0.52, 0.018);
g.fillStyle = "#6c6863";
g.fillRect(-0.32, -1.05, 0.64, 0.07);
e.lib.paper(g, -0.33, -1.06, 0.66, 1.08, 2);
e.at(0, -1.05, "mouth");
