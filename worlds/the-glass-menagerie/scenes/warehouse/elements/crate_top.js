// The crate's lid seen from above (metres, y toward the viewer): three boards, their nails.
g.fillStyle = '#bd9f72';
g.fillRect(-0.3, -0.2, 0.6, 0.4);
g.fillStyle = 'rgba(80,58,36,0.5)';
for (const y of [-0.067, 0.067]) g.fillRect(-0.3, y, 0.6, 0.008);
g.fillStyle = '#3d3530';
for (const y of [-0.15, 0, 0.15]) for (const x of [-0.26, 0.26]) g.fillRect(x - 0.006, y - 0.006, 0.012, 0.012);
