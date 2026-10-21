// Inside the stove: the oven's far wall, half a metre in (3.2 m ahead, across −1.98…−1.42, facing the eye: what the eye
// meets through the mouth, looking a little down into it), from 0.55 m up — its lower part is the oven's floor seen from
// above, so the bed of embers is painted there, glowing, two half-burnt logs on it; over it the vault, red with the
// heat, darker up. The fire's light is its glow (`fire`: the scene's light `stove`); the flames are `stove_fire`.
const vault = g.createLinearGradient(0, -0.68, 0, 0);
vault.addColorStop(0, "#4a1c0e");
vault.addColorStop(0.5, "#8a3216");
vault.addColorStop(0.78, "#c95a22");
vault.addColorStop(1, "#7a3014");
g.fillStyle = vault;
g.fillRect(-0.28, -0.7, 0.56, 0.72);
for (let i = 0; i < 26; i++) {
  const x = -0.24 + 0.48 * e.lib.rnd(i, 3), y = -0.04 - 0.16 * e.lib.rnd(i, 5), r = 0.022 + 0.026 * e.lib.rnd(i, 4);
  g.fillStyle = ["#ffcf6a", "#ffb04a", "#f08a34", "#ffe08c", "#d8602a"][i % 5];
  g.beginPath();
  g.ellipse(x, y, r * 1.5, r * 0.7, 0, 0, Math.PI * 2);
  g.fill();
}
g.fillStyle = "#3a2216";
g.save();
g.translate(-0.04, -0.14);
g.rotate(-0.12);
g.fillRect(-0.18, -0.032, 0.32, 0.064);
g.restore();
g.save();
g.translate(0.08, -0.1);
g.rotate(0.18);
g.fillRect(-0.13, -0.028, 0.25, 0.056);
g.restore();
g.fillStyle = "#ff9a40";
g.fillRect(-0.2, -0.12, 0.24, 0.012);
e.light(0, -0.25, 0.4, "#ffa050", 1.2, "fire");
