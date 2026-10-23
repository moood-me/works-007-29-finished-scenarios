// The left wall (x away from us: −2.3 at its near end … 2.3 at the back): boards laid across, a shelf with jars of
// turpentine and brushes, an old coat on a nail, the frames of old pictures leaning against it on the floor.
e.lib.planks(g, e, -2.3, -4.3, 2.3, 0.02, false, ['#8a7a66', '#827260', '#90806b', '#7c6c5a']);
// the shelf and its brackets
g.fillStyle = '#5e4d3c';
g.fillRect(-2.3, -1.72, 1.9, 0.05);
g.fillRect(-2.2, -1.72, 0.04, 0.22);
g.fillRect(-0.6, -1.72, 0.04, 0.22);
// jars on it: glass of brushes, a tin, a bottle, a jar of rags
const jars = [[-2.15, 0.12, 0.2, '#b9c2b4'], [-1.92, 0.1, 0.14, '#8b6a4c'], [-1.72, 0.07, 0.26, '#5f7a6a'], [-1.5, 0.13, 0.17, '#cbbfa6'], [-1.25, 0.1, 0.12, '#a0552f'], [-1.05, 0.12, 0.2, '#b3b8ae'], [-0.8, 0.09, 0.15, '#6d5b48']];
for (const [x, w, h, c] of jars) {
  g.fillStyle = c;
  g.fillRect(x, -1.72 - h, w, h);
  g.fillStyle = 'rgba(255,255,255,0.18)';
  g.fillRect(x + w * 0.15, -1.72 - h * 0.9, w * 0.12, h * 0.7);
}
// brush handles standing in two of the jars
g.strokeStyle = '#c9b48a';
g.lineWidth = 0.012;
for (const [x, top] of [[-2.1, -2.12], [-2.05, -2.18], [-1.98, -2.08], [-1.0, -2.1], [-0.95, -2.16]]) {
  g.beginPath();
  g.moveTo(x, -1.85);
  g.lineTo(x + 0.02, top);
  g.stroke();
}
// an old coat hanging on a nail
g.fillStyle = '#5a5446';
g.beginPath();
g.moveTo(0.35, -2.2);
g.quadraticCurveTo(0.12, -2.0, 0.08, -1.2);
g.lineTo(0.18, -0.9);
g.lineTo(0.62, -0.92);
g.lineTo(0.66, -1.3);
g.quadraticCurveTo(0.6, -2.0, 0.35, -2.2);
g.fill();
g.fillStyle = 'rgba(30,26,20,0.35)';
g.fillRect(0.34, -2.1, 0.02, 1.15);
g.fillStyle = '#2f2a26';
g.beginPath();
g.arc(0.35, -2.21, 0.02, 0, Math.PI * 2);
g.fill();
// old pictures leaning against the wall: frames, their backs and a corner of one painted
const frames = [[-2.3, 0.8, 0.95, '#6b5843', '#c9b996'], [-1.85, 0.7, 0.7, '#57483a', '#8ea0a8'], [-1.4, 0.55, 0.5, '#6e5a46', '#b8ad8a']];
for (const [x, w, h, wood, face] of frames) {
  g.fillStyle = wood;
  g.fillRect(x, -h, w, h);
  g.fillStyle = face;
  g.fillRect(x + 0.06, -h + 0.06, w - 0.12, h - 0.12);
}
// a sketch of a far hill on the middle one
g.fillStyle = '#6f8a74';
g.beginPath();
g.moveTo(-1.79, -0.2);
g.quadraticCurveTo(-1.5, -0.55, -1.21, -0.25);
g.lineTo(-1.21, -0.06);
g.lineTo(-1.79, -0.06);
g.closePath();
g.fill();
