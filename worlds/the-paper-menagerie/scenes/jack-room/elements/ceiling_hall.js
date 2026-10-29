// The hall's ceiling, laid face down (x across from its middle at 1.56, y toward the viewer from the back wall): white
// plaster, the bare-bulb light near us (its glow; the light "hall"), and the hatch to the attic (x −0.36…0.24, y
// −1.15…−0.45): shut, a painted panel in its frame; open (`hatch`), a hole up into the dark.
const open = e.state.hatch > 0.5;
g.save();
g.beginPath();
g.rect(-0.94, -2.17, 1.88, 2.2);
if (open) g.rect(-0.36, -1.15, 0.6, 0.7);
g.clip('evenodd');
g.fillStyle = '#efebe1';
g.fillRect(-0.94, -2.17, 1.88, 2.2);
g.restore();
g.strokeStyle = '#dcd5c6';
g.lineWidth = 0.04;
g.strokeRect(-0.38, -1.17, 0.64, 0.74);
if (!open) {
  g.fillStyle = '#e9e4d8';
  g.fillRect(-0.34, -1.13, 0.56, 0.66);
  g.fillStyle = 'rgba(120,110,100,0.25)';
  g.fillRect(-0.34, -0.5, 0.56, 0.01);
}
// the light: a porcelain rose and a frosted bulb
g.fillStyle = '#e6e0d2';
g.beginPath();
g.arc(0, -1.7, 0.06, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#fbf6e8';
g.beginPath();
g.arc(0, -1.7, 0.035, 0, Math.PI * 2);
g.fill();
e.light(0, -1.7, 0.08, '#ffe2b0', 1.0, 'bulb');
e.at(-0.06, -0.8, 'hatch');
