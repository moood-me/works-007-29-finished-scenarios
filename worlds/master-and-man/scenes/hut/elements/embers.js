// Inside the stove's mouth, behind its front: the sooty vault and, on the hearth, the fire burnt down to a bed of
// coals with two logs still burning — it glows; its light is the light `stove`. The coals breathe (a layer that
// flickers); the flames over them are the particles `stove_fire`.
// (x −0.35…0.35, the hearth at y −0.66 — level with the mouth's foot)
g.fillStyle = "#2a201c";
g.fillRect(-0.35, -1.22, 0.7, 0.62);
const vault = g.createRadialGradient(0, -0.7, 0.05, 0, -0.75, 0.5);
vault.addColorStop(0, "#a8502a");
vault.addColorStop(0.5, "#5a2c1c");
vault.addColorStop(1, "#2a201c");
g.fillStyle = vault;
g.fillRect(-0.35, -1.22, 0.7, 0.62);
e.layer("coals", { flicker: 0.6 }, l => {
  for (let i = 0; i < 22; i++) {
    const x = -0.26 + e.rnd() * 0.52;
    const r = 0.025 + e.rnd() * 0.03;
    l.fillStyle = e.rnd() < 0.5 ? "#ff8a32" : "#e8481e";
    l.beginPath();
    l.ellipse(x, -0.67, r, r * 0.6, 0, 0, Math.PI * 2);
    l.fill();
  }
  l.fillStyle = "#ffd070";
  for (let i = 0; i < 8; i++) {
    l.beginPath();
    l.arc(-0.2 + e.rnd() * 0.4, -0.68, 0.012, 0, Math.PI * 2);
    l.fill();
  }
});
// two logs across the coals, charred, their ends glowing
g.fillStyle = "#3a2a22";
g.fillRect(-0.22, -0.74, 0.4, 0.05);
g.fillRect(-0.1, -0.79, 0.34, 0.05);
g.fillStyle = "#ff7a2a";
g.fillRect(0.16, -0.74, 0.03, 0.05);
g.fillRect(0.22, -0.79, 0.03, 0.05);
e.light(0, -0.75, 0.3, "#ff8a3a", 1.0, "coals");
e.at(0, -0.8, "fire");
