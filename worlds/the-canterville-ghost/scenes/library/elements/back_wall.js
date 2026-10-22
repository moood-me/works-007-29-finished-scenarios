// The library's far wall (8.1 m, 3.4 m high): the oak, bookcases either side, and between them the great window —
// three lights over three, stone mullions and a transom (x −1.45…1.05, from 0.95 m to 3.05 m); its six lights are cut
// through, the painted glass behind them (window).
e.lib.oak(g, -4.05, 4.05);
e.lib.bookcase(g, e, -3.95, -1.9, 3.05);
e.lib.bookcase(g, e, 1.5, 3.95, 3.05);
// the window's stone: the surround, a deep sill, the mullions and the transom
g.fillStyle = '#7d756a';
g.fillRect(-1.6, -3.15, 2.8, 2.3);
g.fillStyle = '#6a6359';
g.fillRect(-1.68, -0.95, 2.96, 0.1);
g.fillStyle = '#8c8478';
g.fillRect(-1.6, -3.15, 2.8, 0.08);
// the six lights
const COLS = [[-1.45, -0.65], [-0.55, 0.15], [0.25, 1.05]];
const ROWS = [[-3.05, -2.33], [-2.25, -0.95]];
g.globalCompositeOperation = 'destination-out';
for (const [x0, x1] of COLS) for (const [y0, y1] of ROWS) g.fillRect(x0, y0, x1 - x0, y1 - y0);
g.globalCompositeOperation = 'source-over';
