// The great lens in the middle of the lantern room, on its iron pedestal: a tall drum of glass prisms in a brass frame,
// the bull's-eye in its middle — grey-blue glass when the lamp is out (`dark`), all gold with the lamp's bright core
// when it is lit (`lit`, faded in by `lamp` in its animate). Its lights: `lamp` (the lamp's own, round about) and
// `beam_a`, `beam_b` (the two beams the scene's lights turn). Metres, y up from the gallery's floor.
const CY = -1.7;
const body = (c, glass, ring, frame) => {
  c.fillStyle = frame;
  c.fillRect(-0.58, -2.62, 1.16, 1.9);
  c.fillStyle = glass;
  c.fillRect(-0.54, -2.56, 1.08, 1.78);
  // the prism rings above and below the bull's-eye
  c.fillStyle = ring;
  for (const y of [-2.5, -2.38, -2.26, -1.14, -1.02, -0.9]) c.fillRect(-0.54, y, 1.08, 0.05);
  c.fillStyle = frame;
  for (const x of [-0.54, -0.18, 0.18, 0.5]) c.fillRect(x, -2.56, 0.04, 1.78);
  // the bull's-eye: rings round its middle
  c.strokeStyle = ring;
  c.lineWidth = 0.03;
  for (const r of [0.08, 0.16, 0.24, 0.32]) {
    c.beginPath();
    c.arc(0, CY, r, 0, Math.PI * 2);
    c.stroke();
  }
};
// the pedestal
g.fillStyle = '#33373c';
g.beginPath();
g.moveTo(-0.32, 0);
g.lineTo(-0.2, -0.72);
g.lineTo(0.2, -0.72);
g.lineTo(0.32, 0);
g.closePath();
g.fill();
e.layer('dark', {}, c => body(c, '#93a4b0', '#b6c4cc', '#7d6c4c'));
e.layer('lit', {}, c => {
  body(c, '#ffd88e', '#fff0c8', '#a88a52');
  const r = c.createRadialGradient(0, CY, 0, 0, CY, 0.45);
  r.addColorStop(0, '#fffaf0');
  r.addColorStop(0.5, 'rgba(255,240,205,0.85)');
  r.addColorStop(1, 'rgba(255,226,160,0)');
  c.fillStyle = r;
  c.fillRect(-0.5, CY - 0.5, 1, 1);
});
e.light(0, CY, 0.7, '#ffe0a0', 1.5, 'lamp');
e.light(0, CY, 0.25, '#fff0d0', 1, 'beam_a');
e.light(0, CY, 0.25, '#fff0d0', 1, 'beam_b');
