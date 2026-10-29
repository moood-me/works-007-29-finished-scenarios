// The chamber's right wall (4.7 m along the room, from 5.6 m to 0.9 m away, +x running toward the viewer): rough
// stone, and high in it the little window onto the garden (x −1.95…−1.25, 4.5…5.2 m away, from 1.1 m to 1.7 m), cut
// through — its far reveal, its sill and its iron bars are elements of their own (`reveal`, `sill`, `window`).
e.lib.stone(g, -2.35, 2.35, 2.4, 3);
g.fillStyle = '#857c70';
g.fillRect(-2.05, -1.8, 0.9, 0.8);
g.globalCompositeOperation = 'destination-out';
g.fillRect(-1.95, -1.7, 0.7, 0.6);
g.globalCompositeOperation = 'source-over';
