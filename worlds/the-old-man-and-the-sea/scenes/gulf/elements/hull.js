// The old man's skiff: its hull a form lofted over its sections from the transom to the stem (lib.section), the
// painting the hull unrolled — across, round the section by its length (the near side's outside down to the keel and
// up the far side, the far gunwale's top, the far side's inside, the bottom and the near side's inside, the near
// gunwale's top); down, along the skiff from the transom (top) to the stem (bottom). Outside: sun-bleached white over a
// faded blue strake under the gunwales, dark and weedy below the waterline; inside: bare grey-brown planking crossed
// by the frames.
const { section, girth, LENGTH } = e.lib;
const W = girth.all;
const X0 = -W / 2;
const at = u => X0 + u * W;
const band = (u0, u1, color) => {
  g.fillStyle = color;
  g.fillRect(at(u0), -LENGTH, at(u1) - at(u0), LENGTH);
};
// the inside's planking, and its frames: thin ribs across it every thirty-five centimetres
band(girth.inside, girth.near, '#8f7d63');
g.strokeStyle = 'rgba(70,56,42,0.55)';
g.lineWidth = 0.035;
for (let y = -LENGTH + 0.3; y < -0.2; y += 0.35) {
  g.beginPath();
  g.moveTo(at(girth.inside), y);
  g.lineTo(at(girth.near), y);
  g.stroke();
}
// the bilge, darker where water has stood in it
band(girth.inside + 0.12, girth.near - 0.12, 'rgba(86,72,56,0.35)');
// the outside: white; the blue strake under each gunwale; below the waterline the old dark paint, green with weed
band(0, girth.far, '#d6d3c6');
const strake = 0.14 / W;
const water = 0.62 / W;
band(0.012, strake, '#55788f');
band(girth.far - strake, girth.far - 0.012, '#55788f');
band(water, girth.far - water, '#5e5a46');
band(water, water + 0.03 / W, '#3f4a3e');
band(girth.far - water - 0.03 / W, girth.far - water, '#3f4a3e');
// the planks' seams along the outside, and the paint worn off in patches
g.strokeStyle = 'rgba(60,50,40,0.25)';
g.lineWidth = 0.012;
for (const u of [0.05, 0.08, girth.far - 0.08, girth.far - 0.05]) {
  g.beginPath();
  g.moveTo(at(u), -LENGTH);
  g.lineTo(at(u), 0);
  g.stroke();
}
for (let i = 0; i < 40; i++) {
  const u = e.rnd() < 0.5 ? 0.015 + e.rnd() * (water - 0.03) : girth.far - 0.015 - e.rnd() * (water - 0.03);
  g.fillStyle = e.rnd() < 0.5 ? 'rgba(160,150,128,0.5)' : 'rgba(120,108,90,0.35)';
  g.fillRect(at(u), -LENGTH + e.rnd() * LENGTH, 0.02 + e.rnd() * 0.05, 0.05 + e.rnd() * 0.25);
}
// the gunwales' tops, dark worn wood
band(0, 0.012, '#5b4a3a');
band(girth.far - 0.012, girth.inside + 0.006, '#5b4a3a');
band(girth.near - 0.006, 1, '#5b4a3a');
// the sections, close together toward the stem where the hull turns fastest
const ribs = [];
for (const t of [0, 0.04, 0.1, 0.18, 0.27, 0.36, 0.45, 0.54, 0.62, 0.7, 0.77, 0.83, 0.88, 0.92, 0.95, 0.975, 1]) ribs.push(section(t));
e.form(e.kit.loft(ribs), { closed: 'u', ground: '#8f7d63' });
