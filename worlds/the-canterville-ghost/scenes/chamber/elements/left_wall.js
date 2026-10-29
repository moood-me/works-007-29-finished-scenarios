// The chamber's left wall (4.7 m along the room, from 0.9 m to 5.6 m away, +x running away from the viewer): rough
// stone, and in it the way out to the hall — the hidden panel on the staircase landing (x 1.05…1.85, 4.3…5.1 m away,
// 1.85 m high), standing open, its oak lining showing round the opening; cut through — the landing beyond is `hall`.
e.lib.stone(g, -2.35, 2.35, 2.4, 2);
// the oak lining of the panel's opening
g.fillStyle = '#3e2a1c';
g.fillRect(0.95, -1.95, 1.0, 1.97);
g.globalCompositeOperation = 'destination-out';
g.fillRect(1.05, -1.85, 0.8, 1.87);
g.globalCompositeOperation = 'source-over';
e.at(1.45, -1.0, 'panel');
