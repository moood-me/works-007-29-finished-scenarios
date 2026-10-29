// The door shut from outside (`door` "shut") and propped with a stick ("propped": the house left empty, 3.5 on the
// Name) — planks, a wooden latch, the stick leaning against it from the ground; nothing while the door stands open
// ("open": the open door and the room behind are door_glow). Its points `stick`, `handle` (the latch)
if ((e.state.door !== "propped" && e.state.door !== "shut") || e.state.hut) return;
g.fillStyle = "#6a5440";
g.fillRect(-0.48, -1.92, 0.96, 1.92);
g.fillStyle = "#58442f";
for (let x = -0.48 + 0.24; x < 0.48; x += 0.24) g.fillRect(x - 0.01, -1.92, 0.02, 1.92);
g.fillRect(-0.48, -1.55, 0.96, 0.07);
g.fillRect(-0.48, -0.45, 0.96, 0.07);
g.fillStyle = "#3b2f25";
g.fillRect(0.28, -1.0, 0.12, 0.05);
e.at(0.34, -0.98, "handle");
if (e.state.door !== "propped") return;
g.strokeStyle = "#7a6650";
g.lineWidth = 0.045;
g.lineCap = "round";
g.beginPath();
g.moveTo(0.05, 0.02);
g.lineTo(0.3, -0.98);
g.stroke();
e.at(0.2, -0.6, "stick");
