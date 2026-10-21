// A tuft of dry late-summer grass, a few blades of ochre and faded green from one root (a layer bending in the air
// about its foot); the copies stand along the platform's kerb and its near edge, and in the sand by the track.
const L = e.lib, BLADES = ["#9d9b66", "#8c8c5c", "#aba674", "#b9a978"];
e.layer("blades", { pivot: [0, 0], wind: { strength: 0.35, gust: 0.4 }, box: [-0.3, -0.42, 0.3, 0.02] }, (g) => {
  for (let i = 0; i < 14; i++) {
    const a = (L.rnd(i, 211) - 0.5) * 0.9, h = 0.14 + 0.22 * L.rnd(i, 212), x0 = (L.rnd(i, 213) - 0.5) * 0.12;
    const tx = x0 + Math.sin(a) * h, ty = -Math.cos(a) * h;
    g.fillStyle = BLADES[i % BLADES.length];
    g.beginPath();
    g.moveTo(x0 - 0.012, 0);
    g.quadraticCurveTo(x0 + (tx - x0) * 0.4, ty * 0.6, tx, ty);
    g.quadraticCurveTo(x0 + (tx - x0) * 0.5, ty * 0.5, x0 + 0.012, 0);
    g.closePath();
    g.fill();
  }
});
