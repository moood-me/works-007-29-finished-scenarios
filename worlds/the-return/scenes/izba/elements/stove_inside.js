// Inside the stove: the oven's far wall, half a metre in (facing the eye, 2.8 m ahead, across −1.92…−1.08: what the eye
// meets through the mouth), from 0.6 m up — its lower part is where the eye looks down onto the oven's floor, so the bed
// of embers is painted there, glowing, a couple of half-burnt logs on it; over it the vault, red with the heat, darker
// up. The fire's light is its glow (`fire`: the scene's light `stove`); the flames are `stove_fire`. It flickers (the
// element's "flicker").
const vault = g.createLinearGradient(0, -0.68, 0, 0);
vault.addColorStop(0, "#4a1c0e");
vault.addColorStop(0.5, "#8a3216");
vault.addColorStop(0.75, "#c4521e");
vault.addColorStop(1, "#7a3014");
g.fillStyle = vault;
g.fillRect(-0.42, -0.7, 0.84, 0.72);
// the embers' bed
for (let i = 0; i < 26; i++) {
  const x = -0.36 + 0.72 * e.lib.rnd(i, 3), y = -0.04 - 0.16 * e.lib.rnd(i, 5), r = 0.025 + 0.03 * e.lib.rnd(i, 4);
  g.fillStyle = ["#ffcf6a", "#ffb04a", "#f08a34", "#ffe08c", "#d8602a"][i % 5];
  g.beginPath();
  g.ellipse(x, y, r * 1.5, r * 0.7, 0, 0, Math.PI * 2);
  g.fill();
}
// two half-burnt logs lying across it
g.fillStyle = "#3a2216";
g.save();
g.translate(-0.05, -0.14);
g.rotate(-0.12);
g.fillRect(-0.24, -0.035, 0.42, 0.07);
g.restore();
g.save();
g.translate(0.12, -0.1);
g.rotate(0.18);
g.fillRect(-0.18, -0.03, 0.34, 0.06);
g.restore();
g.fillStyle = "#ff9a40";
g.fillRect(-0.25, -0.12, 0.3, 0.012);
e.light(0, -0.25, 0.42, "#ffa050", 1.2, "fire");
