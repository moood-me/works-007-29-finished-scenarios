// The chimney at the gable end: a squat stone stack with a flat capstone; its top is the point `top` the smoke rises from
g.fillStyle = "#a99880";
g.fillRect(-0.24, -1.4, 0.48, 1.4);
g.fillStyle = "#8f806a";
for (let y = -0.2; y > -1.4; y -= 0.25) g.fillRect(-0.24, y, 0.48, 0.03);
g.fillStyle = "#6c6156";
g.fillRect(-0.3, -1.52, 0.6, 0.12);
e.at(0, -1.55, "top");
