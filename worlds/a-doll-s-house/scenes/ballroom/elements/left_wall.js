// The left wall (its +x runs back from the open front: x −2.92 at the front, 2.92 at the back wall): silk panels
// between pilasters, an oval portrait of old Consul Stenborg in gilt over the piano (the piano stands before the
// wall's back part, the chairs before its front).
const { GILT } = e.lib;
e.lib.wall(g, -2.95, 2.95, [[-2.72, -1.58], [-1.32, -0.13], [0.13, 1.32], [1.58, 2.72]]);
for (const x of [-2.85, -1.45, 0, 1.45, 2.85]) e.lib.pilaster(g, x);
g.fillStyle = GILT;
g.beginPath();
g.ellipse(2.15, -2.45, 0.34, 0.44, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#3f3a33';
g.beginPath();
g.ellipse(2.15, -2.45, 0.28, 0.37, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#d6b79a';
g.beginPath();
g.ellipse(2.15, -2.55, 0.1, 0.13, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#1f1d1c';
g.beginPath();
g.ellipse(2.15, -2.2, 0.2, 0.14, 0, Math.PI, 0);
g.fill();
g.fillStyle = '#e8e2d4';
g.fillRect(2.12, -2.36, 0.06, 0.1);
