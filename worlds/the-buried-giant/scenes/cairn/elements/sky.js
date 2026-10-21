// The sky over the pass: a pale milky haze, lighter toward the horizon, the sun a soft bright patch behind the mist
// up to the right (where the light "sun" comes from) — painted once
const W = e.aspect, sx = W * 0.7, sy = 0.14;
const grd = g.createLinearGradient(0, -0.35, 0, 1.25);
grd.addColorStop(0, '#a9b5bc');
grd.addColorStop(0.22, '#c4ccce');
grd.addColorStop(0.4, '#dfe2dc');
grd.addColorStop(0.55, '#e3e5df');
grd.addColorStop(1, '#d6dad7');
g.fillStyle = grd;
g.fillRect(-0.3, -0.35, W + 0.6, 1.6);
// the sun's glow spread wide in the mist
g.save();
g.translate(sx, sy);
g.scale(1.6, 1);
const glow = g.createRadialGradient(0, 0, 0, 0, 0, 0.42);
glow.addColorStop(0, 'rgba(252,247,234,0.85)');
glow.addColorStop(0.25, 'rgba(246,240,224,0.45)');
glow.addColorStop(1, 'rgba(240,236,224,0)');
g.fillStyle = glow;
g.fillRect(-0.42, -0.42, 0.84, 0.84);
g.restore();
// the disc itself, barely there
g.fillStyle = 'rgba(255,252,243,0.9)';
g.beginPath();
g.arc(sx, sy, 0.024, 0, Math.PI * 2);
g.fill();
e.light(sx, sy, 0.06, '#fff8e8', 0.5);
