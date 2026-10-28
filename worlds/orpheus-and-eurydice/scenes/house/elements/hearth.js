// The hearth in the middle of the hall, as in an old king's hall: a low round ring of rough stones on the floor, 1.2 m
// across and knee-high, black with soot at its lip; the fire burns in it (the scene's "fire" and "embers", its light
// "hearth_fire"). Its point fire — where the fire burns (Hades looks into it).
g.fillStyle = '#5d554d';
g.beginPath();
g.moveTo(-0.62, 0.02);
g.lineTo(-0.6, -0.26);
g.quadraticCurveTo(0, -0.36, 0.6, -0.26);
g.lineTo(0.62, 0.02);
g.closePath();
g.fill();
// its stones, each its own shade
for (let r = 0; r < 2; r++) {
  for (let i = 0, x = -0.62 + r * 0.08; x < 0.6; i++) {
    const w = 0.16 + 0.08 * e.anim.hash(i + r * 9, 1), t = e.anim.hash(i + r * 9, 2), y = -0.14 * r;
    g.fillStyle = t > 0.66 ? '#81776c' : t > 0.33 ? '#776d63' : '#6b625a';
    g.beginPath();
    g.ellipse(x + w / 2, y - 0.07, w / 2 - 0.01, 0.065, 0, 0, Math.PI * 2);
    g.fill();
    x += w;
  }
}
// the soot at its lip
g.fillStyle = '#2a2420';
g.beginPath();
g.moveTo(-0.6, -0.26);
g.quadraticCurveTo(0, -0.38, 0.6, -0.26);
g.quadraticCurveTo(0, -0.3, -0.6, -0.26);
g.closePath();
g.fill();
e.at(0, -0.45, 'fire');
