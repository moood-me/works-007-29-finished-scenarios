// The room's back wall (5 m ahead, x −2.85…2.85, up to 3.7 m): smoke-browned boards with the sand seeping through
// their seams, a rail at the door's head; above the eave's plate (2.8 m) the underside of the roof, rafters and
// sooty boards. The door stands open at x −2.1…−1.2 (left unpainted: the pit is seen through it), its plank leaf slid
// aside to the right; a water jar by the hearth's side; a shelf over where he stands, and below it her strings of
// beads hanging from nails; a small barred window high on the right with the sand pressed against its bars; his
// insect net leaning in the corner.
const r = e.lib.stream(61);
e.lib.boards(g, 62, -2.85, 2.85, -2.8);

// the eave's plate and the roof's underside over it: rafters and the boards between, darkened by the hearth's smoke
g.fillStyle = "#5a4636";
g.fillRect(-2.85, -3.7, 5.7, 0.9);
g.fillStyle = "#4a392c";
for (let x = -2.7; x < 2.85; x += 0.55) g.fillRect(x, -3.7, 0.09, 0.9);
g.fillStyle = "rgba(120, 98, 74, 0.5)";
for (let y = -3.62; y < -2.95; y += 0.17) g.fillRect(-2.85, y, 5.7, 0.015);
g.fillStyle = "#3f3127";
g.fillRect(-2.85, -2.95, 5.7, 0.16);

// the doorway: its posts and head; the plank leaf slid aside to the right of it
g.fillStyle = "#5e4b39";
g.fillRect(-2.18, -1.95, 0.08, 1.97);
g.fillRect(-1.2, -1.95, 0.08, 1.97);
g.fillRect(-2.18, -1.98, 1.06, 0.1);
g.fillStyle = "#7d6750";
g.fillRect(-1.12, -1.86, 0.84, 1.86);
g.fillStyle = "rgba(56, 42, 31, 0.55)";
for (let y = -1.86 + 0.2; y < 0; y += 0.2) g.fillRect(-1.12, y, 0.84, 0.014);
g.fillStyle = "#614d3b";
g.fillRect(-1.0, -1.86, 0.06, 1.86);
g.fillRect(-0.46, -1.86, 0.06, 1.86);

// the water jar by the wall: glazed brown, a board lid, the dipper on it
g.fillStyle = "#6b4a33";
g.beginPath();
g.moveTo(-1.36, 0);
g.quadraticCurveTo(-1.5, -0.32, -1.32, -0.58);
g.lineTo(-0.88, -0.58);
g.quadraticCurveTo(-0.7, -0.32, -0.84, 0);
g.closePath();
g.fill();
g.fillStyle = "rgba(220, 196, 160, 0.25)";
g.fillRect(-1.3, -0.5, 0.05, 0.4);
g.fillStyle = "#8a7258";
g.fillRect(-1.38, -0.64, 0.56, 0.06);
g.strokeStyle = "#7a6248";
g.lineWidth = 0.025;
g.beginPath();
g.moveTo(-1.14, -0.66);
g.lineTo(-0.8, -0.78);
g.stroke();

// the shelf over where he stands: a board on two brackets, a tin, a bottle, a folded cloth, a small lidded box
g.fillStyle = "#6f5945";
g.fillRect(0.3, -1.62, 1.7, 0.05);
g.fillRect(0.45, -1.57, 0.05, 0.16);
g.fillRect(1.8, -1.57, 0.05, 0.16);
g.fillStyle = "#8c8c86";
g.fillRect(0.45, -1.86, 0.16, 0.24);
g.fillStyle = "#4f6a5a";
g.fillRect(0.78, -1.9, 0.07, 0.28);
g.fillRect(0.795, -1.96, 0.04, 0.06);
g.fillStyle = "#b9ab8e";
g.fillRect(1.0, -1.74, 0.38, 0.12);
g.fillStyle = "#7a5a3e";
g.fillRect(1.5, -1.8, 0.32, 0.18);
g.fillStyle = "#5e442f";
g.fillRect(1.48, -1.82, 0.36, 0.04);

// her strings of beads hanging from three nails: loops of small glass beads, the one bright thing in the room
const colours = ["#b4473c", "#ebe5d6", "#4a68a4", "#d8a943", "#6a9460"];
for (let n = 0; n < 3; n++) {
  const nx = 0.42 + n * 0.24;
  g.fillStyle = "#3a332c";
  g.fillRect(nx - 0.012, -1.47, 0.024, 0.03);
  for (let k = 0; k < 2; k++) {
    const c = colours[(n * 2 + k) % colours.length];
    const drop = 0.38 + r() * 0.2;
    const half = 0.025 + k * 0.03;
    g.fillStyle = c;
    // a loop hanging from the nail: down one side, round the bottom, up the other
    for (let i = 0; i <= 24; i++) {
      const a = (Math.PI * i) / 24;
      g.beginPath();
      g.arc(nx - half * Math.cos(a), -1.45 + drop * Math.sin(a), 0.011, 0, 6.3);
      g.fill();
    }
  }
}

// the small window high on the right: a frame and four bars, the sand heaped outside against them
g.fillStyle = "#cfb07a";
g.fillRect(1.95, -2.55, 0.6, 0.48);
const pressed = g.createLinearGradient(0, -2.55, 0, -2.07);
pressed.addColorStop(0, "rgba(150, 120, 80, 0.5)");
pressed.addColorStop(1, "rgba(150, 120, 80, 0)");
g.fillStyle = pressed;
g.fillRect(1.95, -2.55, 0.6, 0.48);
g.fillStyle = "#5e4b39";
g.fillRect(1.9, -2.6, 0.7, 0.06);
g.fillRect(1.9, -2.08, 0.7, 0.06);
g.fillRect(1.9, -2.6, 0.06, 0.58);
g.fillRect(2.54, -2.6, 0.06, 0.58);
for (let k = 1; k <= 4; k++) g.fillRect(1.95 + k * 0.12 - 0.02, -2.55, 0.04, 0.48);
// a little of it has run in over the sill
g.fillStyle = "rgba(222, 196, 146, 0.8)";
g.fillRect(2.0, -2.02, 0.4, 0.03);

// his insect net leaning in the corner: the bamboo pole, the wire hoop, the gauze hanging from it
g.strokeStyle = "#b39966";
g.lineWidth = 0.025;
g.beginPath();
g.moveTo(2.74, 0);
g.lineTo(2.44, -1.92);
g.stroke();
g.strokeStyle = "#514f4a";
g.lineWidth = 0.012;
g.beginPath();
g.ellipse(2.41, -2.08, 0.17, 0.17, 0, 0, Math.PI * 2);
g.stroke();
g.fillStyle = "rgba(214, 212, 200, 0.8)";
g.beginPath();
g.moveTo(2.25, -2.06);
g.quadraticCurveTo(2.3, -1.7, 2.42, -1.58);
g.quadraticCurveTo(2.56, -1.72, 2.57, -2.06);
g.closePath();
g.fill();

// the door's hole: the wall taken away where it stands open (the pit is seen through it)
g.globalCompositeOperation = "destination-out";
g.fillStyle = "#000";
g.fillRect(-2.1, -1.86, 0.9, 1.9);
g.globalCompositeOperation = "source-over";
// the threshold's worn board, low
g.fillStyle = "#6c5642";
g.fillRect(-2.18, -0.04, 1.06, 0.06);
