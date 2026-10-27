// The ferrywoman's boat lying across the landing's end, seen from its side: a long low hull, its bow lifted to the
// left, an oar shipped along it, a small lantern on a pole at the bow (its glass is boat_lamp's). The anchor is the
// keel's middle under the water; the waterline is y −0.2, the gunwale y −0.75.
g.fillStyle = '#4a3c31';
g.beginPath();
g.moveTo(2.3, -0.75);
g.lineTo(-1.8, -0.75);
g.quadraticCurveTo(-2.35, -0.8, -2.55, -1.1);
g.quadraticCurveTo(-2.3, -0.3, -1.6, 0);
g.lineTo(1.9, 0);
g.quadraticCurveTo(2.3, -0.2, 2.3, -0.75);
g.closePath();
g.fill();
g.fillStyle = '#86745f';
g.fillRect(-2.0, -0.78, 4.3, 0.06);
g.strokeStyle = '#8f7d68';
g.lineWidth = 0.05;
g.beginPath();
g.moveTo(-1.2, -0.86);
g.lineTo(2.2, -0.8);
g.stroke();
// the bow's pole and the lantern's frame
g.fillStyle = '#2b2826';
g.fillRect(-2.06, -2.05, 0.05, 1.3);
g.fillRect(-2.17, -2.08, 0.27, 0.04);
g.fillRect(-2.13, -2.36, 0.2, 0.04);
e.at(0, -0.8, 'boat');
