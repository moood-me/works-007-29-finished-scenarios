// Bly's old tower far off over the trees, toward the house: grey stone square, its battlements against the sky, a
// lancet or two dark in it, the low sun on its face (metres: x across from its middle, y up from its foot).
g.fillStyle = '#b1aa98';
g.fillRect(-3.1, -21.5, 6.2, 21.5);
g.fillStyle = 'rgba(70,64,54,0.3)';
for (const y of [-7.2, -14.2]) g.fillRect(-3.1, y, 6.2, 0.15);
g.save();
g.globalCompositeOperation = 'destination-out';
for (let k = 0; k < 4; k++) g.fillRect(-3.1 + 1.2 + k * 1.45, -21.55, 0.5, 0.8);
g.restore();
g.fillStyle = '#2c2e33';
for (const [x, y] of [[0, -9.5], [-0.6, -16], [0.6, -16]]) g.fillRect(x - 0.2, y - 1.6, 0.4, 1.6);
e.at(0, -21.5, 'top');
