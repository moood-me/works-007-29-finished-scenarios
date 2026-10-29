// Elzéard's iron rod, a thumb thick, stuck upright in the earth beside him (`rod_ground`: when it is not in his hand);
// its top is the point `top`
if (!e.state.rod_ground) return;
g.fillStyle = "#2c2a29";
g.fillRect(-0.011, -1.45, 0.022, 1.47);
g.fillStyle = "#4a4643";
g.fillRect(-0.005, -1.44, 0.006, 1.4);
e.at(0, -1.45, "top");
