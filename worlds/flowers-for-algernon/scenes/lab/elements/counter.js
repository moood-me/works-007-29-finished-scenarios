// The bench under the window: a cabinet of white-painted doors with small steel pulls, its top a slab of black
// laboratory stone whose front edge is seen (the top itself is `counter_top`). Metres from its foot, x −1.0…1.0.
g.fillStyle = '#e6e8e1';
g.fillRect(-1.0, -0.88, 2.0, 0.8);
g.fillStyle = '#3c3f40';
g.fillRect(-1.0, -0.08, 2.0, 0.08);
g.strokeStyle = '#c3c8c0';
g.lineWidth = 0.012;
for (let x = -1.0; x < 1.0; x += 0.5) g.strokeRect(x + 0.03, -0.84, 0.44, 0.72);
g.fillStyle = '#8e9496';
for (let x = -1.0; x < 1.0; x += 0.5) g.fillRect(x + 0.4, -0.62, 0.025, 0.1);
g.fillStyle = '#2b2e30';
g.fillRect(-1.03, -0.94, 2.06, 0.06);
