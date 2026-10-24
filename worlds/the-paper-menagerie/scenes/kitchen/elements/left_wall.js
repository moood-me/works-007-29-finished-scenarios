// The left wall (its face toward the room; x runs from the back of the room, +1.7, to the front, −1.7): the wallpaper,
// a calendar from the hardware store, and the telephone on its little shelf.
e.lib.wallpaper(g, -1.77, 1.77);
// the calendar: a picture of mountains over a grid of days
g.fillStyle = '#f6f1e6';
g.fillRect(0.3, -1.95, 0.42, 0.62);
g.fillStyle = '#7d9bb0';
g.fillRect(0.33, -1.92, 0.36, 0.22);
g.fillStyle = '#e6ecef';
g.beginPath();
g.moveTo(0.33, -1.7);
g.lineTo(0.45, -1.84);
g.lineTo(0.53, -1.76);
g.lineTo(0.6, -1.86);
g.lineTo(0.69, -1.7);
g.closePath();
g.fill();
g.fillStyle = '#b4aa98';
for (let r = 0; r < 5; r++) for (let c = 0; c < 7; c++) g.fillRect(0.34 + c * 0.05, -1.64 + r * 0.055, 0.035, 0.035);
g.fillStyle = '#c0453a';
g.fillRect(0.34 + 3 * 0.05, -1.64 + 2 * 0.055, 0.035, 0.035);
// the telephone shelf and the phone
g.fillStyle = '#8a6a4e';
g.fillRect(-0.5, -1.12, 0.4, 0.04);
g.fillStyle = '#d3c7a8';
g.beginPath();
g.moveTo(-0.44, -1.12);
g.lineTo(-0.41, -1.24);
g.lineTo(-0.19, -1.24);
g.lineTo(-0.16, -1.12);
g.closePath();
g.fill();
g.fillStyle = '#c4b896';
g.fillRect(-0.45, -1.3, 0.3, 0.06);
