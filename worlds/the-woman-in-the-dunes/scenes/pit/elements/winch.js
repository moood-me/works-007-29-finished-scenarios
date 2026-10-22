// The winch on the far lip, where the rope goes down the wall: two rough posts, a wooden drum between them with the
// rope wound on it and a crank, the rope ladder rolled up beside it (taken up for the night) and a lantern hung on the
// right post (`flame`: its glow and the scene's light `lip_lantern`). Point `ladder` — the rolled ladder.
g.fillStyle = "#5b4a3a";
g.fillRect(-0.62, -1.2, 0.1, 1.25);
g.fillRect(0.52, -1.2, 0.1, 1.25);
// the drum and the rope on it
g.fillStyle = "#7a644c";
g.fillRect(-0.55, -0.98, 1.1, 0.2);
g.strokeStyle = "#a88d63";
g.lineWidth = 0.03;
for (let k = 0; k < 7; k++) {
  g.beginPath();
  g.moveTo(-0.4 + k * 0.12, -0.98);
  g.lineTo(-0.36 + k * 0.12, -0.78);
  g.stroke();
}
// the crank
g.strokeStyle = "#4a3c30";
g.lineWidth = 0.04;
g.beginPath();
g.moveTo(-0.62, -0.88);
g.lineTo(-0.78, -0.88);
g.lineTo(-0.78, -0.62);
g.stroke();
// the rope ladder rolled up on the sand to the left
g.fillStyle = "#8d7552";
g.beginPath();
g.ellipse(-1.25, -0.16, 0.38, 0.16, 0, 0, Math.PI * 2);
g.fill();
g.strokeStyle = "#5e4b35";
g.lineWidth = 0.025;
for (let k = 0; k < 4; k++) {
  g.beginPath();
  g.moveTo(-1.55 + k * 0.2, -0.3);
  g.lineTo(-1.5 + k * 0.2, -0.02);
  g.stroke();
}
e.at(-1.25, -0.16, "ladder");
// the lantern on its hook on the right post
g.strokeStyle = "#35322d";
g.lineWidth = 0.015;
g.beginPath();
g.moveTo(0.62, -1.12);
g.lineTo(0.78, -1.12);
g.lineTo(0.78, -1.04);
g.stroke();
g.fillStyle = "#3b3833";
g.fillRect(0.71, -1.05, 0.14, 0.035);
g.fillRect(0.71, -0.84, 0.14, 0.035);
g.fillStyle = "#e9dcc0";
g.beginPath();
g.ellipse(0.78, -0.94, 0.055, 0.085, 0, 0, Math.PI * 2);
g.fill();
e.light(0.78, -0.94, 0.12, "#ffc27a", 1, "flame");
// sand blown up round the posts
g.fillStyle = "#d8b680";
g.beginPath();
g.ellipse(0, 0.02, 1.0, 0.12, 0, Math.PI, 0);
g.fill();
