// The back wall, seen straight at it from the hall (4.5 m to the ceiling, 6.2 m ahead): whitewashed plaster between
// dark oak timbers — a sill beam at the floor, posts, a beam under the gallery at 2.55 m, braces; up on the gallery
// two plank doors to the rooms. Cut through it: the window (x −0.65…0.45, 1.05…2.15 m up) and the door to the yard
// (x 2.7…3.6, up to 2.2 m), where the blizzard shows.
const L = e.lib;
g.beginPath();
g.rect(-5, -4.5, 10, 4.52);
g.clip();
L.plaster(g, 51, -5.5, -4.5, 11, 4.5);
// the timbers
for (const x of [-4.4, -1.6, 1.1, 2.55, 3.75, 5.2]) L.timber(g, 52 + x * 10, x, 0, x, -4.5, 0.2);
L.timber(g, 61, -5.5, -0.1, 5.5, -0.1, 0.2);
L.timber(g, 62, -5.5, -2.55, 5.5, -2.55, 0.24);
L.timber(g, 63, -5.5, -4.42, 5.5, -4.42, 0.18);
L.timber(g, 64, -1.6, -1.1, -0.85, -2.45, 0.14);
L.timber(g, 65, 1.1, -1.4, 0.6, -2.45, 0.14);
// the window's frame of timbers round its opening
L.timber(g, 66, -0.85, -2.28, 0.65, -2.28, 0.16);
L.timber(g, 67, -0.85, -0.95, 0.65, -0.95, 0.16);
// the door's frame
L.timber(g, 68, 2.6, 0, 2.6, -2.3, 0.2);
L.timber(g, 69, 3.7, 0, 3.7, -2.3, 0.2);
L.timber(g, 70, 2.5, -2.3, 3.8, -2.3, 0.22);
// the gallery's doors to the rooms, plank doors with iron straps, and a little round window between
const door = (x) => {
  g.fillStyle = '#7a5232';
  g.fillRect(x - 0.42, -4.35, 0.84, 1.75);
  for (let i = 0; i < 6; i++) {
    g.fillStyle = ['#8a6038', '#7a5232', '#6e4a2c'][i % 3];
    g.fillRect(x - 0.42 + i * 0.14, -4.35, 0.13, 1.75);
  }
  g.fillStyle = '#2e2622';
  for (const y of [-4.1, -2.95]) g.fillRect(x - 0.42, y, 0.6, 0.05);
  g.beginPath();
  g.arc(x + 0.28, -3.45, 0.035, 0, Math.PI * 2);
  g.fill();
};
door(-0.4);
door(1.9);
g.fillStyle = '#3a2a20';
g.beginPath();
g.arc(0.75, -3.6, 0.24, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#5c6f8f';
g.beginPath();
g.arc(0.75, -3.6, 0.18, 0, Math.PI * 2);
g.fill();
// the openings
g.globalCompositeOperation = 'destination-out';
g.fillRect(-0.65, -2.15, 1.1, 1.1);
g.fillRect(2.7, -2.2, 0.9, 2.2);
g.globalCompositeOperation = 'source-over';
