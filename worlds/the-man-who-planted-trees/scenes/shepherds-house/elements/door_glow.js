// What is seen through the open door (its point `handle`: the open leaf's edge, where a hand pulls it shut): the room lit by the lamp — a warm wall, the floor, the door leaf swung in
// against the jamb on the left; its light (`door`) is the scene's door_light. With the lamp out, a dark room
// Not there in the epilogue's hut beyond the ridge (`hut`).
if (e.state.hut) return;
const lit = e.state.lamp > 0.5;
g.fillStyle = lit ? "#f0b56f" : "#3a2f28";
g.fillRect(-0.5, -1.95, 1, 1.95);
g.fillStyle = lit ? "#c98a52" : "#2c241f";
g.fillRect(-0.5, -0.32, 1, 0.32);
g.fillStyle = lit ? "#d99c5e" : "#30281f";
g.fillRect(0.12, -0.95, 0.38, 0.06);
g.fillStyle = "#5c412e";
g.beginPath();
g.moveTo(-0.5, -1.95);
g.lineTo(-0.3, -1.85);
g.lineTo(-0.3, -0.06);
g.lineTo(-0.5, 0);
g.closePath();
g.fill();
e.light(0, -1.1, 0.45, "#ffc27a", 0.8, "door");
e.at(-0.45, -1.0, "handle");
