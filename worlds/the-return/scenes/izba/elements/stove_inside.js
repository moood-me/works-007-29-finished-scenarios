// Inside the stove's mouth, a little behind its face: the vault, red with the heat, and the bed of embers on the
// hearth, glowing — the fire's light is its glow (`fire`: the scene's light `stove`); the flames are `stove_fire`.
// It flickers (the element's "flicker").
const vault = g.createLinearGradient(0, -0.55, 0, 0);
vault.addColorStop(0, "#7a3a24");
vault.addColorStop(0.6, "#b4542c");
vault.addColorStop(1, "#e08a3c");
g.fillStyle = vault;
g.fillRect(-0.32, -0.55, 0.64, 0.57);
for (let i = 0; i < 16; i++) {
  const x = -0.28 + 0.56 * e.lib.rnd(i, 3), r = 0.03 + 0.03 * e.lib.rnd(i, 4);
  g.fillStyle = ["#ffcf6a", "#ffb04a", "#f08a34", "#ffe08c"][i % 4];
  g.beginPath();
  g.ellipse(x, -0.03, r * 1.4, r * 0.7, 0, 0, Math.PI * 2);
  g.fill();
}
e.light(0, -0.12, 0.35, "#ffa050", 0.9, "fire");
