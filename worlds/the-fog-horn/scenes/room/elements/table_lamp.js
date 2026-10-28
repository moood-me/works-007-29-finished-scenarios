// The oil lamp's glass chimney over its brass foot (table_things): grey glass when out, warm gold with the flame in it
// when lit — the layers cross-faded by `lamp` in its animate; its light `flame` is the scene's light "lamp".
const chimney = c => {
  c.beginPath();
  c.moveTo(-0.028, -0.135);
  c.bezierCurveTo(-0.075, -0.17, -0.07, -0.25, -0.03, -0.29);
  c.lineTo(-0.024, -0.42);
  c.lineTo(0.024, -0.42);
  c.lineTo(0.03, -0.29);
  c.bezierCurveTo(0.07, -0.25, 0.075, -0.17, 0.028, -0.135);
  c.closePath();
  c.fill();
};
e.layer('dark', {}, c => {
  c.fillStyle = 'rgba(190,196,196,0.75)';
  chimney(c);
});
e.layer('lit', {}, c => {
  c.fillStyle = '#ffe2a6';
  chimney(c);
  c.fillStyle = '#fff6dc';
  c.beginPath();
  c.ellipse(0, -0.19, 0.016, 0.035, 0, 0, Math.PI * 2);
  c.fill();
});
e.light(0, -0.2, 0.12, '#ffd890', 1, 'flame');
e.at(0, -0.22);
