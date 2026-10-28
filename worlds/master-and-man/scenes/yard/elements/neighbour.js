// A neighbour's hut beyond the fence, 24 m off: grey log walls (mostly hidden by the fence), a steep roof under deep
// snow, a brick chimney with smoke going up from it (the particles `chimney_smoke`, at its point `chimney`), a small
// window glinting yellow.
// (x −3.8…3.8 m, its foot at 0, the chimney's top at 6.6)
const L = e.lib;
const C = L.C;
// the walls
L.logs(g, -3.2, 3.2, -3.0, 0, 0.3, () => e.rnd());
g.fillStyle = "#e6b864";
g.fillRect(-0.9, -2.3, 0.5, 0.55);
// the roof: its gable end toward us, steep, under deep snow
g.fillStyle = "#6a5f55";
g.beginPath();
g.moveTo(-3.6, -2.9);
g.lineTo(0, -5.9);
g.lineTo(3.6, -2.9);
g.closePath();
g.fill();
g.fillStyle = C.snow;
g.beginPath();
g.moveTo(-3.8, -2.85);
g.quadraticCurveTo(-1.8, -4.8, 0, -6.2);
g.quadraticCurveTo(1.8, -4.8, 3.8, -2.85);
g.lineTo(3.4, -3.05);
g.lineTo(0, -5.75);
g.lineTo(-3.4, -3.05);
g.closePath();
g.fill();
g.fillStyle = "#8b7a68";
g.beginPath();
g.moveTo(-2.9, -3.05);
g.lineTo(0, -5.5);
g.lineTo(2.9, -3.05);
g.closePath();
g.fill();
// the chimney, a cap of snow on it
g.fillStyle = "#8a5a46";
g.fillRect(1.1, -6.6, 0.5, 1.6);
L.snowCap(g, 1.05, 1.65, -6.6, 0.1, 81);
e.at(1.35, -6.65, "chimney");
