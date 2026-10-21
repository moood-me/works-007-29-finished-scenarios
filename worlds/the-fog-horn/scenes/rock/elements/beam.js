// The lamp's beam in the air: a long soft cone of light from the lamp, painted pointing right (`right`) and left
// (`left`); its animate turns it round — foreshortened as it swings toward or away from the eye. Added light.
const LY = -1.35;
const cone = (c, dir) => {
  for (const [w, a] of [[1, 0.22], [0.6, 0.3], [0.3, 0.4]]) {
    const r = c.createLinearGradient(0, 0, dir * 72, 0);
    r.addColorStop(0, `rgba(255,236,196,${a})`);
    r.addColorStop(0.35, `rgba(255,232,190,${a * 0.55})`);
    r.addColorStop(1, 'rgba(255,230,190,0)');
    c.fillStyle = r;
    c.beginPath();
    c.moveTo(0, LY - 0.35 * w);
    c.lineTo(dir * 72, LY - 7.5 * w);
    c.lineTo(dir * 72, LY + 5.5 * w);
    c.lineTo(0, LY + 0.35 * w);
    c.closePath();
    c.fill();
  }
};
e.layer('right', { pivot: [0, LY], blend: 'add', box: [0, -10, 74, 6] }, c => cone(c, 1));
e.layer('left', { pivot: [0, LY], blend: 'add', box: [-74, -10, 0, 6] }, c => cone(c, -1));
