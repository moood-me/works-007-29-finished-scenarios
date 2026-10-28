// The left wall (facing into the room; its x runs away from the viewer: x 0 at distance 3.6): the tiles and the
// cream paint; nearest the viewer the street door — wood, a glass panel dark with the night, the bell on its spring
// over it; hooks with a coat and a hat; a framed photograph of a ball team; a calendar with a picture of a lake.
e.lib.wallPaint(g, -2.6, 2.6);
// the door
g.fillStyle = '#5e3e2b';
g.fillRect(-2.25, -2.2, 0.95, 2.2);
g.fillStyle = '#6f4a33';
g.fillRect(-2.18, -2.13, 0.81, 2.1);
g.fillStyle = '#20263a';
g.fillRect(-2.08, -2.0, 0.61, 0.95);
g.fillStyle = '#c9a457';
g.fillRect(-1.48, -1.05, 0.04, 0.14);
g.fillRect(-1.95, -0.98, 0.35, 0.06);
g.fillStyle = '#b08d4a';
g.beginPath();
g.arc(-1.55, -2.28, 0.04, 0, Math.PI * 2);
g.fill();
// the hooks, a coat, a hat
g.fillStyle = '#5e3e2b';
g.fillRect(-0.9, -1.85, 0.9, 0.06);
g.fillStyle = '#4a4740';
g.beginPath();
g.moveTo(-0.72, -1.8);
g.lineTo(-0.88, -0.95);
g.lineTo(-0.46, -0.92);
g.lineTo(-0.58, -1.8);
g.fill();
g.fillStyle = '#2f2c28';
g.beginPath();
g.ellipse(-0.25, -1.79, 0.14, 0.03, 0, 0, Math.PI * 2);
g.fill();
g.fillRect(-0.34, -1.9, 0.18, 0.1);
// the photograph
g.fillStyle = '#3b2a1f';
g.fillRect(0.4, -2.3, 0.6, 0.42);
g.fillStyle = '#bcb3a1';
g.fillRect(0.44, -2.26, 0.52, 0.34);
g.fillStyle = '#6f675c';
for (let i = 0; i < 9; i++) {
  g.beginPath();
  g.arc(0.49 + i * 0.053, -2.06 + (i % 2) * 0.04, 0.016, 0, Math.PI * 2);
  g.fill();
  g.fillRect(0.475 + i * 0.053, -2.05 + (i % 2) * 0.04, 0.03, 0.08);
}
// the calendar
g.fillStyle = '#f2ece0';
g.fillRect(1.5, -2.05, 0.36, 0.55);
g.fillStyle = '#6f93a8';
g.fillRect(1.53, -2.02, 0.3, 0.2);
g.fillStyle = '#4c6b4a';
g.fillRect(1.53, -1.88, 0.3, 0.06);
g.fillStyle = 'rgba(80,70,60,0.5)';
for (let r = 0; r < 4; r++) for (let c = 0; c < 6; c++) g.fillRect(1.54 + c * 0.05, -1.76 + r * 0.06, 0.03, 0.03);
