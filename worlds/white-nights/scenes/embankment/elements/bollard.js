// A granite bollard at the roadway's edge near the viewer, where carriages are kept off the flags: a squat post turned
// as on a lathe (a form: e.kit.revolve — round, seen from the viewer's side and from the lamp's), its stone the
// parapet's pinkish grey, washed unevenly and speckled. Its painting is the post unrolled: the way round (1.14 m) by
// its profile's length (0.95 m), x −0.57…0.57, y −0.95…0
const L = 0.95;
g.fillStyle = '#a99b95';
g.fillRect(-0.57, -L, 1.14, L);
e.lib.wash(g, -0.57, -L, 1.14, L, [169, 155, 149], 17, 0.04, 0.3, 0.2);
g.beginPath();
for (let i = 0; i < 70; i++) g.rect(-0.57 + 1.14 * e.anim.hash(i, 71), -L + L * e.anim.hash(i, 72), 0.012, 0.012);
g.fillStyle = 'rgba(74,63,58,0.45)';
g.fill();
// (its cap's rim and its foot's, inked)
g.beginPath();
g.moveTo(-0.57, -L + 0.2);
g.lineTo(0.57, -L + 0.2);
g.moveTo(-0.57, -0.13);
g.lineTo(0.57, -0.13);
g.strokeStyle = 'rgba(74,63,58,0.55)';
g.lineWidth = 0.012;
g.stroke();
e.form(
  e.kit.revolve([
    [0, 0.78],
    [0.1, 0.77],
    [0.15, 0.72],
    [0.16, 0.6],
    [0.18, 0.12],
    [0.21, 0.06],
    [0.21, 0],
  ]),
  { closed: 'u' },
);
