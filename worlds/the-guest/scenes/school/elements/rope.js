// The rope Balducci holds, from his hand to the Arab's tied wrists: painted once along x from 0 to 2 m, sagging; its
// animate lays it each frame from one end to the other (the two hands, wherever they are), turned and stretched to them.
e.layer('rope', { pivot: [0, 0], box: [-0.05, -0.05, 2.05, 0.4] }, c => {
  c.strokeStyle = '#9a8460';
  c.lineWidth = 0.022;
  c.lineCap = 'round';
  c.beginPath();
  c.moveTo(0, 0);
  c.quadraticCurveTo(1, 0.55, 2, 0);
  c.stroke();
});
