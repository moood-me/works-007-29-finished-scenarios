// The door's pane of ribbed glass with the corridor's light behind it, cool and even, the ribs a little brighter
// (glowing: lit from beyond, not by the room). Facing the room; x across the pane −0.2…0.2.
g.fillStyle = '#d8e6df';
g.fillRect(-0.18, -0.68, 0.36, 0.66);
g.fillStyle = 'rgba(255,255,255,0.35)';
for (let x = -0.17; x < 0.18; x += 0.03) g.fillRect(x, -0.68, 0.012, 0.66);
