// Inside the stove's mouth, a little behind its face: the vault, red with the heat, and the bed of embers on the
// hearth, glowing — the fire's light is its glow (`fire`: the scene's light `stove`); the flames are `stove_fire`.
// It flickers (the element's "flicker").
const vault = g.createLinearGradient(0, -0.62, 0, 0);
vault.addColorStop(0, "#3a160c");
vault.addColorStop(0.6, "#6e2814");
vault.addColorStop(1, "#b0441c");
g.fillStyle = vault;
g.fillRect(-0.34, -0.62, 0.68, 0.64);
for (let i = 0; i < 16; i++) {
  const x = -0.3 + 0.6 * e.lib.rnd(i, 3), r = 0.03 + 0.03 * e.lib.rnd(i, 4);
  g.fillStyle = ["#ffcf6a", "#ffb04a", "#f08a34", "#ffe08c"][i % 4];
  g.beginPath();
  g.ellipse(x, -0.03, r * 1.4, r * 0.7, 0, 0, Math.PI * 2);
  g.fill();
}
e.light(0, -0.14, 0.4, "#ffa050", 1.1, "fire");
