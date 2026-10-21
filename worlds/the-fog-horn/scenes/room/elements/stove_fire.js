// The fire seen through the stove's door: an orange glow behind the iron grill (the layer `fire`, flickering, shown as
// much as `stove` by its animate); its light, `fire`, is the scene's light "stove".
e.layer('fire', { flicker: 0.5 }, c => {
  const r = c.createRadialGradient(0, -0.1, 0.02, 0, -0.14, 0.2);
  r.addColorStop(0, '#ffe08a');
  r.addColorStop(0.5, '#ff9a42');
  r.addColorStop(1, '#a8401c');
  c.fillStyle = r;
  c.fillRect(-0.15, -0.31, 0.3, 0.29);
});
g.fillStyle = '#211e1d';
for (const x of [-0.09, -0.03, 0.03, 0.09]) g.fillRect(x - 0.012, -0.31, 0.024, 0.29);
e.light(0, -0.16, 0.22, '#ff9a52', 1, 'fire');
