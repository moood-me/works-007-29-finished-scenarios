// The open hatch in the ceiling over the ladder, seen from below: a dark square of the lantern room above in its frame
// — warm when the great lamp up there is lit (`beacon`: the layers cross-faded by its animate; its glow `glow`).
g.fillStyle = '#4e3d2f';
g.fillRect(-0.4, -0.78, 0.8, 0.8);
e.layer('dark', {}, c => {
  c.fillStyle = '#2b2622';
  c.fillRect(-0.33, -0.71, 0.66, 0.66);
});
e.layer('lit', {}, c => {
  const r = c.createRadialGradient(0, -0.38, 0.05, 0, -0.38, 0.45);
  r.addColorStop(0, '#ffe2a8');
  r.addColorStop(1, '#d9a35e');
  c.fillStyle = r;
  c.fillRect(-0.33, -0.71, 0.66, 0.66);
  e.light(0, -0.38, 0.3, '#ffd28e', 0.7, 'glow');
});
e.at(0, -0.38);
