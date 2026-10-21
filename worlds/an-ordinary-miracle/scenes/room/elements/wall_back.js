// The back wall, seen straight at it from the room: hewn honey logs from the floor to the ceiling (3 m), the window's
// opening cut through it (x −1.32…−0.02, 1.15…2.35 m up: the storm and the mountains beyond show there).
const L = e.lib;
L.logs(g, 71, -4.7, 4.7, -3.05, 0.25);
L.dabs(g, 72, -4.7, -3.0, 9.4, 3.0, ['#d9a86c', '#b07c48'], 160, 0.18, 0.35, 0.25);
g.globalCompositeOperation = 'destination-out';
g.fillRect(-1.32, -2.35, 1.3, 1.2);
g.globalCompositeOperation = 'source-over';
