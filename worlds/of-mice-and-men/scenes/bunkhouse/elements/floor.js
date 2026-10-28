// The floor from above (metres, its middle 3.8 m ahead, y toward the viewer): unpainted boards running from the
// door side back to the viewer, grey-brown and dull, worn paler in a path from the door to the table, a few dark
// stains where the men spit, the dust of the yard by the door.
e.lib.boards(g, -4.25, -3.85, 4.25, 3.85, 0.16, '#8c7254', 11);
g.fillStyle = 'rgba(190,170,135,0.22)';
g.beginPath();
g.ellipse(1.2, -1.6, 0.9, 2.6, 0.35, 0, Math.PI * 2);
g.fill();
g.fillStyle = 'rgba(150,130,100,0.3)';
g.beginPath();
g.ellipse(1.8, -3.5, 0.9, 0.5, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = 'rgba(55,40,28,0.28)';
for (let i = 0; i < 14; i++) {
  g.beginPath();
  g.ellipse(-3.8 + e.rnd() * 7.6, -3.4 + e.rnd() * 6.8, 0.05 + e.rnd() * 0.08, 0.04 + e.rnd() * 0.05, e.rnd() * 3, 0, Math.PI * 2);
  g.fill();
}
