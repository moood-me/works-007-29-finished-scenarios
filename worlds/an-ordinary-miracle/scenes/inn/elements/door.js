// The door to the yard, open (its opening x −0.45…0.45, up to 2.2 m — the blizzard beyond): an iron latch on the
// frame, the threshold heaped with blown snow, a wreath of dried rowan hung on a nail above. (The leaf, swung in
// against the wall, is `door_leaf`.)
const L = e.lib;
// the threshold beam and the snow on it
g.fillStyle = '#4a3020';
g.fillRect(-0.5, -0.08, 1.0, 0.08);
L.dabs(g, 331, -0.48, -0.16, 0.96, 0.12, ['#f2f5fa', '#dfe6f0', '#ffffff'], 40, 0.06, 0.5, 0.95, true);
// the latch
g.fillStyle = '#2e2a28';
g.fillRect(-0.5, -1.05, 0.06, 0.16);
// the rowan wreath above
g.strokeStyle = '#6a5a3a';
g.lineWidth = 0.03;
g.beginPath();
g.arc(0, -2.55, 0.16, 0, Math.PI * 2);
g.stroke();
L.dabs(g, 332, -0.2, -2.75, 0.4, 0.4, ['#c0392b', '#d9542e', '#a8281e'], 28, 0.025, 1, 0.95, true);
g.save();
g.globalCompositeOperation = 'destination-out';
g.beginPath();
g.arc(0, -2.55, 0.1, 0, Math.PI * 2);
g.fill();
g.restore();
