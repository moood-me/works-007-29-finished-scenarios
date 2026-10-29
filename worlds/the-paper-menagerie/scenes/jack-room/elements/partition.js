// The wall between Jack's room and the hall (its room side toward us at a slant; x runs from the back, −1.07, to the
// front, +1.07): Jack's wallpaper, the doorway (x −0.65…0.2, 2.0 m high) in its white casing, the light switch, and
// on the casing pencil marks of Jack's height year by year.
g.save();
g.beginPath();
g.rect(-1.09, -2.54, 2.18, 2.58);
g.rect(-0.65, -2.0, 0.85, 2.02);
g.clip('evenodd');
e.lib.wallpaper(g, -1.09, 1.09);
g.restore();
g.fillStyle = '#f2eee4';
g.fillRect(-0.73, -2.08, 0.08, 2.08);
g.fillRect(0.2, -2.08, 0.08, 2.08);
g.fillRect(-0.73, -2.08, 1.01, 0.08);
g.fillStyle = 'rgba(70,70,80,0.7)';
for (let i = 0; i < 6; i++) g.fillRect(0.205, -0.85 - i * 0.07, 0.05, 0.004);
g.fillStyle = '#f4f1ea';
g.fillRect(0.36, -1.26, 0.07, 0.11);
g.fillStyle = '#d8d2c4';
g.fillRect(0.39, -1.23, 0.012, 0.04);
e.at(-0.22, -1.1, 'doorway');
