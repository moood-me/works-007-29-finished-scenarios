// The right wall (facing into the room; its x runs toward the viewer: x 0 at distance 3.6): the tiles and the cream
// paint; the door to the back — a swing door, its round window warm with the kitchen's light — and the pay telephone
// on the wall nearer the viewer, a pad of paper on a string under it.
e.lib.wallPaint(g, -2.6, 2.6);
g.fillStyle = '#5e3e2b';
g.fillRect(-0.4, -2.15, 0.9, 2.15);
g.fillStyle = '#7d5539';
g.fillRect(-0.34, -2.09, 0.78, 2.06);
g.fillStyle = '#c4c7c3';
g.fillRect(-0.34, -0.3, 0.78, 0.22);
g.fillStyle = '#8f938f';
g.beginPath();
g.arc(0.05, -1.55, 0.16, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#f0cf92';
g.beginPath();
g.arc(0.05, -1.55, 0.13, 0, Math.PI * 2);
g.fill();
// the telephone
g.fillStyle = '#2b2a2a';
g.fillRect(1.15, -1.75, 0.22, 0.38);
g.fillStyle = '#c4c7c3';
g.beginPath();
g.arc(1.26, -1.6, 0.06, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#1b1a1a';
g.fillRect(1.37, -1.78, 0.05, 0.3);
g.strokeStyle = '#1b1a1a';
g.lineWidth = 0.008;
g.beginPath();
g.moveTo(1.4, -1.48);
g.quadraticCurveTo(1.45, -1.2, 1.3, -1.25);
g.stroke();
g.fillStyle = '#f2ece0';
g.fillRect(1.18, -1.28, 0.14, 0.18);
