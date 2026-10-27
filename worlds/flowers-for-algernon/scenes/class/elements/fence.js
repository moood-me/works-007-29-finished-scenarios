// The schoolyard's iron railing along the sidewalk: thin dark bars on two rails, a stone kerb under them. Metres from
// its foot, x −30…30.
g.fillStyle = '#8b857a';
g.fillRect(-30, -0.25, 60, 0.25);
g.fillStyle = '#2d302e';
g.fillRect(-30, -1.35, 60, 0.05);
g.fillRect(-30, -0.45, 60, 0.05);
for (let x = -30; x <= 30; x += 0.14) g.fillRect(x - 0.012, -1.45, 0.024, 1.2);
for (let x = -30; x <= 30; x += 2.8) g.fillRect(x - 0.05, -1.55, 0.1, 1.3);
