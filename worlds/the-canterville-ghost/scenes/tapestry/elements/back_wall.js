// The chamber's far wall (6.5 m, 3.1 m high): plaster over the oak dado, a tapestry of the hunt on the left; on the
// right the deep window under its Tudor arch (x 0.6…2.6, from 0.5 m to 2.7 m), cut through — its embrasure, its seat
// and its glass are elements of their own.
e.lib.wall(g, -3.25, 3.25, 3.1);
e.lib.tapestry(g, e, -3.1, -2.85, 0.25, -0.98, 1);
// the dressed stone round the window
g.fillStyle = '#857a6c';
e.lib.arch(g, 0.45, 2.75, -2.85, -0.4, 0.42);
g.fill();
g.strokeStyle = '#6a6156';
g.lineWidth = 0.02;
e.lib.arch(g, 0.52, 2.68, -2.78, -0.45, 0.4);
g.stroke();
g.globalCompositeOperation = 'destination-out';
e.lib.arch(g, 0.6, 2.6, -2.7, -0.5, 0.36);
g.fill();
g.globalCompositeOperation = 'source-over';
