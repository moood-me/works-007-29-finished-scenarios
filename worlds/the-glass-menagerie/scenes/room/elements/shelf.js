// Laura's glass menagerie: a light whatnot of dark wood with four glass shelves, the little glass animals on them —
// a swan, deer, cats, a dog, a fish, tiny bottles — and on the third shelf, a little apart, the unicorn (its point
// `unicorn`). The glass itself is the painting's; where it catches the light is the layer `glints`, which the
// element's shader makes shine and tremble (the brightest things in the room).
const SH = [-0.42, -0.78, -1.14, -1.5];
// the frame: four slim posts (two seen), the shelves' wooden rails, a fretwork crest
g.fillStyle = '#3d2a1f';
g.fillRect(-0.4, -1.72, 0.035, 1.72);
g.fillRect(0.365, -1.72, 0.035, 1.72);
g.fillRect(-0.4, -0.08, 0.8, 0.04);
g.fillRect(-0.4, -1.74, 0.8, 0.035);
g.beginPath();
g.moveTo(-0.3, -1.74);
g.quadraticCurveTo(0, -1.86, 0.3, -1.74);
g.closePath();
g.fill();
// the glass shelves: thin pale slabs, a brighter front edge
for (const y of SH) {
  g.fillStyle = 'rgba(200,220,226,0.45)';
  g.fillRect(-0.365, y - 0.012, 0.73, 0.03);
  g.fillStyle = 'rgba(236,246,250,0.8)';
  g.fillRect(-0.365, y + 0.012, 0.73, 0.008);
}
const glass = ['rgba(198,222,238,0.85)', 'rgba(228,206,236,0.85)', 'rgba(204,236,214,0.85)', 'rgba(240,226,190,0.85)'];
// a small creature: a body, a head on a neck, legs — glass-coloured, a lighter edge
function creature(x, y, s, col, flip) {
  g.save();
  g.translate(x, y);
  g.scale(flip ? -s : s, s);
  g.fillStyle = col;
  g.beginPath();
  g.ellipse(0, -0.05, 0.05, 0.025, 0, 0, Math.PI * 2);
  g.fill();
  g.beginPath();
  g.moveTo(0.03, -0.06);
  g.lineTo(0.055, -0.11);
  g.lineTo(0.07, -0.105);
  g.lineTo(0.05, -0.055);
  g.closePath();
  g.fill();
  g.beginPath();
  g.ellipse(0.068, -0.115, 0.02, 0.012, -0.3, 0, Math.PI * 2);
  g.fill();
  for (const lx of [-0.035, -0.02, 0.02, 0.035]) g.fillRect(lx, -0.04, 0.008, 0.04);
  g.restore();
}
// shelf 1 (lowest): a swan, two bottles, a dog
g.fillStyle = glass[0];
g.beginPath();
g.ellipse(-0.22, -0.46, 0.06, 0.03, 0, 0, Math.PI * 2);
g.fill();
g.lineWidth = 0.012;
g.strokeStyle = glass[0];
g.beginPath();
g.moveTo(-0.18, -0.47);
g.quadraticCurveTo(-0.15, -0.56, -0.18, -0.58);
g.stroke();
for (const [x, h, c] of [[-0.02, 0.1, 1], [0.05, 0.07, 3]]) {
  g.fillStyle = glass[c];
  g.fillRect(x - 0.018, -0.42 - h, 0.036, h);
  g.fillRect(x - 0.007, -0.42 - h - 0.03, 0.014, 0.03);
}
creature(0.22, -0.42, 1.1, glass[3], true);
// shelf 2: a deer with antlers, a cat, a fish
creature(-0.2, -0.78, 1.2, glass[2], false);
g.strokeStyle = glass[2];
g.lineWidth = 0.006;
g.beginPath();
g.moveTo(-0.12, -0.92);
g.lineTo(-0.1, -0.97);
g.moveTo(-0.11, -0.94);
g.lineTo(-0.13, -0.97);
g.stroke();
g.fillStyle = glass[1];
g.beginPath();
g.ellipse(0.04, -0.81, 0.03, 0.03, 0, 0, Math.PI * 2);
g.ellipse(0.04, -0.85, 0.02, 0.02, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = glass[0];
g.beginPath();
g.ellipse(0.22, -0.82, 0.045, 0.022, 0, 0, Math.PI * 2);
g.moveTo(0.26, -0.82);
g.lineTo(0.3, -0.85);
g.lineTo(0.3, -0.79);
g.closePath();
g.fill();
// shelf 3: two little horses — and the unicorn, apart from them, its horn catching the light
creature(-0.22, -1.14, 1.0, glass[3], false);
creature(-0.08, -1.14, 0.9, glass[1], true);
creature(0.14, -1.14, 1.1, 'rgba(236,244,250,0.92)', false);
g.strokeStyle = 'rgba(250,250,255,0.95)';
g.lineWidth = 0.007;
g.beginPath();
g.moveTo(0.14 + 0.085, -1.14 - 0.135);
g.lineTo(0.14 + 0.115, -1.14 - 0.175);
g.stroke();
e.at(0.15, -1.22, 'unicorn');
// shelf 4 (top): a bowl, a tiny elephant, a bud vase
g.fillStyle = glass[2];
g.beginPath();
g.ellipse(-0.2, -1.53, 0.06, 0.03, 0, 0, Math.PI);
g.fill();
creature(0.02, -1.5, 1.0, glass[0], true);
g.fillStyle = glass[1];
g.fillRect(0.2, -1.62, 0.025, 0.12);
// where the glass catches the light: small bright spots and slivers, shimmered by the shader
e.layer('glints', {}, c => {
  c.fillStyle = 'rgba(255,255,255,0.95)';
  const spots = [[-0.24, -0.47], [-0.17, -0.57], [-0.02, -0.5], [0.05, -0.47], [0.2, -0.5], [-0.17, -0.85], [0.03, -0.86],
    [0.21, -0.83], [-0.2, -1.2], [-0.07, -1.19], [0.2, -1.2], [0.25, -1.3], [-0.2, -1.54], [0.04, -1.58], [0.21, -1.6]];
  for (const [x, y] of spots) {
    c.beginPath();
    c.ellipse(x, y, 0.009, 0.006, 0.5, 0, Math.PI * 2);
    c.fill();
  }
  for (const y of SH) {
    c.fillRect(-0.3, y + 0.012, 0.18, 0.004);
    c.fillRect(0.12, y + 0.012, 0.1, 0.004);
  }
});
