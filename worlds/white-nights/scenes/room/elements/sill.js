// The windowsill from above (x −0.13 at the wall … 0.13 into the room, y along the wall, −0.52 at its far end): old
// painted boards; two books lying on it, one on the other, and a bit of candle-end. Over it, a layer: the rain come in
// at the open window — the boards and the books gone dark with water, a puddle along the wall (`wet`: its animate)
const INK = e.lib.INK;
e.lib.box(g, -0.13, -0.52, 0.26, 1.04, '#c8bea6', 0.008);
e.lib.box(g, -0.08, -0.32, 0.15, 0.22, '#6e4a3a', 0.006);
e.lib.box(g, -0.06, -0.29, 0.13, 0.19, '#4f5a3e', 0.006);
g.fillStyle = '#efe6cf';
g.fillRect(-0.04, 0.2, 0.02, 0.06);
e.layer('wet', {}, w => {
  w.fillStyle = 'rgba(70,74,78,0.45)';
  w.fillRect(-0.13, -0.52, 0.26, 1.04);
  w.fillStyle = 'rgba(150,170,186,0.35)';
  w.beginPath();
  w.ellipse(-0.06, -0.05, 0.05, 0.4, 0, 0, Math.PI * 2);
  w.ellipse(0.04, 0.3, 0.06, 0.12, 0.3, 0, Math.PI * 2);
  w.fill();
  w.strokeStyle = 'rgba(235,240,244,0.5)';
  w.lineWidth = 0.004;
  w.beginPath();
  w.moveTo(-0.09, -0.35);
  w.quadraticCurveTo(-0.07, -0.05, -0.09, 0.3);
  w.stroke();
});
e.at(0.02, 0.08, 'hand');
