// The top of the fuselage between its sides, seen from above: the doped fabric, a seam down its middle, the two
// cockpits' openings cut through it (the far wall and the people seen through them). Its own metres: x across, y
// toward the viewer (x −2.6…2.6, y −0.4…0.4); the cockpits at x −0.95 and 0.65.
g.fillStyle = '#b9b9b1';
g.beginPath();
g.rect(-2.6, -0.4, 5.2, 0.8);
for (const x of [-0.95, 0.65]) g.ellipse(x, 0, 0.42, 0.3, 0, 0, Math.PI * 2);
g.fill('evenodd');
g.strokeStyle = '#5a3f2b';
g.lineWidth = 0.05;
for (const x of [-0.95, 0.65]) {
  g.beginPath();
  g.ellipse(x, 0, 0.43, 0.31, 0, 0, Math.PI * 2);
  g.stroke();
}
