// The water tower beyond the tracks on the left, where the trains stop to take water: an eight-sided base of old red
// brick (its front face and the two aslant ones, a shade apart in tone), narrow arched windows and a low door, a cornice
// of brick; over it the timber tank of grey boards bound with iron hoops; a cone of a roof, sheet iron, and its little
// finial. Beside it a low brick annex with a pitched roof.
const L = e.lib, BRICK = ["#a86e57", "#9c644f", "#b07a62"];
// the annex on the right
g.fillStyle = "#a06a55";
g.fillRect(2.4, -3.0, 3.6, 3.0);
g.fillStyle = "#6f6c66";
g.beginPath();
g.moveTo(2.2, -3.0);
g.lineTo(4.2, -4.1);
g.lineTo(6.2, -3.0);
g.closePath();
g.fill();
g.fillStyle = "#50555a";
g.fillRect(3.6, -2.1, 0.9, 1.0);
// the base: three faces seen
for (const [x0, x1, k] of [[-2.9, -1.2, 0], [-1.2, 1.2, 1], [1.2, 2.9, 2]]) {
  g.fillStyle = BRICK[k];
  g.fillRect(x0, -8.2, x1 - x0, 8.2);
  L.strokes(g, 141 + k, x0, -8.2, x1 - x0, 8.2, ["#b98670", "#8a5845", "#c3917a"], 120, 0.5, 0.08, 0, 0.35);
}
g.fillStyle = "rgba(70,40,32,0.35)";
g.fillRect(-1.24, -8.2, 0.08, 8.2);
g.fillRect(1.16, -8.2, 0.08, 8.2);
// the arched windows, the door
g.fillStyle = "#4c4744";
for (const [x, y] of [[0, -3.4], [0, -6.4], [-2.05, -4.9], [2.05, -4.9]]) {
  g.beginPath();
  g.moveTo(x - 0.28, y + 0.6);
  g.lineTo(x - 0.28, y - 0.3);
  g.arc(x, y - 0.3, 0.28, Math.PI, 0);
  g.lineTo(x + 0.28, y + 0.6);
  g.closePath();
  g.fill();
}
g.fillRect(-0.45, -1.9, 0.9, 1.9);
// the cornice
g.fillStyle = "#b8846c";
g.fillRect(-3.15, -8.6, 6.3, 0.4);
g.fillStyle = "#94604c";
g.fillRect(-3.0, -8.25, 6.0, 0.08);
// the tank: grey boards, iron hoops
L.boards(g, 145, -3.4, -12.0, 6.8, 3.4, 0.32, ["#9b968a", "#8f8a7e", "#a6a194", "#86817a"], true, 4);
g.fillStyle = "#5c5a55";
for (const y of [-11.4, -10.2, -9.1]) g.fillRect(-3.4, y, 6.8, 0.1);
// the cone of the roof and its finial
g.fillStyle = "#77746d";
g.beginPath();
g.moveTo(-3.9, -12.0);
g.lineTo(0, -14.3);
g.lineTo(3.9, -12.0);
g.closePath();
g.fill();
L.strokes(g, 147, -3.9, -14.3, 7.8, 2.3, ["#8c8980", "#64615b"], 50, 1.2, 0.06, -0.5, 0.3);
g.fillStyle = "#55534e";
g.fillRect(-0.05, -14.9, 0.1, 0.65);
g.beginPath();
g.arc(0, -14.9, 0.12, 0, Math.PI * 2);
g.fill();
L.paper(g, -4, -15.1, 10.3, 15.1, 6);
e.at(0, -10, "tank");
