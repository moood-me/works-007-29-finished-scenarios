// One slope of the roof seen from below (the underside, x along the attic — the painting runs on from the gable past
// the viewer, so the roof is overhead wherever one looks —, y up the slope from the knee wall to the ridge, 3.35 m): the
// roof boards between the rafters, the rafters every 0.6 m, darker; the ridge board along the top; nails coming
// through.
e.lib.boards(g, -4.62, 4.62, -3.37, 0.02, 0.6, 5);
g.fillStyle = 'rgba(120,96,74,0.12)';
g.fillRect(-4.62, -3.37, 9.24, 3.39);
for (let x = -4.4; x < 4.6; x += 0.6) {
  g.fillStyle = '#8a6a4e';
  g.fillRect(x, -3.37, 0.07, 3.39);
  g.fillStyle = 'rgba(240,214,176,0.3)';
  g.fillRect(x, -3.37, 0.012, 3.39);
}
g.fillStyle = '#7a5d45';
g.fillRect(-4.62, -3.37, 9.24, 0.12);
g.fillStyle = 'rgba(70,64,60,0.7)';
for (let i = 0; i < 60; i++) g.fillRect(-4.6 + e.rnd() * 9.2, -3.2 + e.rnd() * 3.1, 0.006, 0.02);
