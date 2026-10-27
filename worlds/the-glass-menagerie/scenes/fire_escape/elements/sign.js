// The Paradise Dance Hall's sign on its roof across the alley, behind the viewer — seen only mirrored in the
// window, its light on the landing: pink neon letters on a dark iron frame, a green underline and star. Its tubes
// tremble as old neon does; its glow is the light "sign" (by the key `neon`), the same sign the flat sees.
g.fillStyle = '#1f1a20';
g.fillRect(-1.3, -0.95, 0.03, 0.97);
g.fillRect(1.27, -0.95, 0.03, 0.97);
g.fillRect(-1.32, -0.08, 2.64, 0.03);
g.fillRect(-1.32, -0.92, 2.64, 0.02);
e.layer('tubes', { flicker: 0.25 }, c => {
  c.save();
  c.scale(0.01, 0.01);
  c.font = 'italic 600 52px Georgia, serif';
  c.textAlign = 'center';
  c.textBaseline = 'alphabetic';
  c.lineJoin = 'round';
  c.strokeStyle = '#ff7fb8';
  c.lineWidth = 5;
  c.strokeText(tr('Paradise'), 0, -38);
  c.strokeStyle = '#ffe1ef';
  c.lineWidth = 1.6;
  c.strokeText(tr('Paradise'), 0, -38);
  c.strokeStyle = '#54f0b2';
  c.lineWidth = 3.5;
  c.beginPath();
  c.moveTo(-110, -22);
  c.lineTo(110, -22);
  c.stroke();
  // the star over the first letter
  c.beginPath();
  for (let i = 0; i < 10; i++) {
    const r = i % 2 ? 6 : 14;
    const a = (i * Math.PI) / 5 - Math.PI / 2;
    c.lineTo(-104 + r * Math.cos(a), -78 + r * Math.sin(a));
  }
  c.closePath();
  c.stroke();
  c.restore();
});
e.light(0, -0.5, 0.9, '#ff5aa0', 1, 'neon');
e.at(0, -0.5);
