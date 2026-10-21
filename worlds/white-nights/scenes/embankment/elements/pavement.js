// The embankment's street from above (x −3.9 at the parapet … 3.9 at the yellow house; y toward the viewer, its far
// end 320 m off at −160): granite flagstones two metres wide along the parapet, each slab its own shade of the wash,
// their joints; the roadway beyond them paved with rounded setts — near the viewer (0…20 m) each stone drawn, in
// courses across the road, of a few greys, the joints between them darker; farther off only the courses' lines, then
// the plain tone; the gutter by the houses
const W = 7.8, D = 320, x0 = -W / 2 + 2.0, x1 = W / 2 - 0.35, near = 20, lines = 45, course = 0.17;
const hash = e.anim.hash;
// the flagstones: each slab a shade of its own, then the joints (one path)
g.fillStyle = '#c6beb3';
g.fillRect(-W / 2, -D / 2, 2.0, D);
const slabs = ['rgba(150,138,130,0.10)', 'rgba(255,250,240,0.12)'];
for (let k = 0; k < 2; k++) {
  g.beginPath();
  for (let y = -D / 2, i = 0; y < D / 2; y += 1.1, i++) {
    for (const s of [0, 1]) if (hash(i * 2 + s, 61) > 0.5 === (k === 0) && hash(i * 2 + s, 62) > 0.35) g.rect(-W / 2 + s * 1.0, y, 1.0, 1.1);
  }
  g.fillStyle = slabs[k];
  g.fill();
}
g.beginPath();
for (let y = -D / 2; y < D / 2; y += 1.1) {
  g.moveTo(-W / 2, y);
  g.lineTo(-W / 2 + 2.0, y);
}
g.moveTo(-W / 2 + 1.0, -D / 2);
g.lineTo(-W / 2 + 1.0, D / 2);
g.moveTo(x0, -D / 2);
g.lineTo(x0, D / 2);
g.strokeStyle = 'rgba(74,63,58,0.36)';
g.lineWidth = 0.02;
g.stroke();
// the roadway's tone; near the viewer the joints' darker grey under the stones
g.fillStyle = '#b4aca2';
g.fillRect(x0, -D / 2, x1 - x0, D);
g.fillStyle = '#8f877f';
g.fillRect(x0, D / 2 - near, x1 - x0, near);
// the setts near the viewer: course by course across the road, each stone a rounded block of one of four greys
// (a path each), a little uneven in width, the joints staggered
const greys = ['#b9b1a6', '#aaa298', '#c3bbb0', '#a39a92'], paths = greys.map(() => new Path2D());
for (let k = 0; k < near / course; k++) {
  const y = D / 2 - (k + 1) * course;
  let x = x0 - 0.12 * hash(k, 63);
  for (let i = 0; x < x1; i++) {
    const w = 0.2 + 0.08 * hash(k * 97 + i, 64), a = Math.max(x, x0) + 0.018, b = Math.min(x + w, x1) - 0.018;
    if (b - a > 0.04) paths[Math.floor(hash(k * 97 + i, 65) * 4)].roundRect(a, y + 0.018, b - a, course - 0.036, 0.045);
    x += w;
  }
}
greys.forEach((c, i) => {
  g.fillStyle = c;
  g.fill(paths[i]);
});
// farther off: the courses' lines, fading into the road's tone
g.beginPath();
for (let y = D / 2 - near; y > D / 2 - lines; y -= course) {
  g.moveTo(x0, y);
  g.lineTo(x1, y);
}
g.strokeStyle = 'rgba(96,86,80,0.3)';
g.lineWidth = 0.02;
g.stroke();
const fade = g.createLinearGradient(0, D / 2 - lines, 0, D / 2 - near);
fade.addColorStop(0, 'rgba(180,172,162,1)');
fade.addColorStop(1, 'rgba(180,172,162,0)');
g.fillStyle = fade;
g.fillRect(x0, D / 2 - lines, x1 - x0, lines - near);
// the roadway's wash: the lithograph's uneven pigment over the whole street near the viewer
e.lib.wash(g, -W / 2, D / 2 - lines, W, lines, [176, 168, 160], 7, 3, 2.2);
// (the gutter by the houses)
g.fillStyle = 'rgba(110,100,96,0.3)';
g.fillRect(W / 2 - 0.35, -D / 2, 0.35, D);
