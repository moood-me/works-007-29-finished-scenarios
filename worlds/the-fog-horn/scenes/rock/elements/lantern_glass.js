// The lamp behind the lantern room's glass: the glass grey by day and warm gold when the lamp is lit (layers cross-
// faded by `lamp`), the lamp itself a bright core — its glow `lamp`, the scene's light `lamp`.
const glass = (c, top, bottom) => {
  const r = c.createLinearGradient(0, -2.4, 0, -0.5);
  r.addColorStop(0, top);
  r.addColorStop(1, bottom);
  c.fillStyle = r;
  c.fillRect(-1.3, -2.4, 2.6, 1.9);
};
e.layer('dark', {}, c => glass(c, '#6c7682', '#56606c'));
e.layer('lit', {}, c => {
  glass(c, '#ffe4a8', '#ffc672');
  c.fillStyle = '#fff6dc';
  c.beginPath();
  c.ellipse(0, -1.35, 0.42, 0.55, 0, 0, Math.PI * 2);
  c.fill();
});
e.light(0, -1.35, 0.9, '#ffd890', 1.2, 'lamp');
