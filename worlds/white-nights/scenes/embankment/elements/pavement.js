// The embankment's street from above (x −3.9 at the parapet … 3.9 at the yellow house; y toward the viewer, its far
// end 320 m off at −160): flagstones two metres wide along the parapet, their joints; the cobbled roadway beyond
// them, a warm grey wash laid near the viewer (0…35 m) with an even texture of setts — courses across the road, their
// joints staggered course by course — fading into the plain tone farther off
const W = 7.8, D = 320, x0 = -W / 2 + 2.0, x1 = W / 2 - 0.35, near = 35, course = 0.16;
g.fillStyle = '#b6aea4';
g.fillRect(-W / 2, -D / 2, W, D);
g.fillStyle = '#c6beb3';
g.fillRect(-W / 2, -D / 2, 2.0, D);
g.beginPath();
for (let y = -D / 2; y < D / 2; y += 1.1) {
  g.moveTo(-W / 2, y);
  g.lineTo(-W / 2 + 2.0, y);
}
g.moveTo(-W / 2 + 1.0, -D / 2);
g.lineTo(-W / 2 + 1.0, D / 2);
g.moveTo(x0, -D / 2);
g.lineTo(x0, D / 2);
g.strokeStyle = 'rgba(74,63,58,0.32)';
g.lineWidth = 0.02;
g.stroke();
// (the setts: the lines between their courses, one path; then each course's joints, a dashed stroke as tall as the
// course, every other one shifted half a sett)
g.beginPath();
for (let y = D / 2; y > D / 2 - near; y -= course) {
  g.moveTo(x0, y);
  g.lineTo(x1, y);
}
g.strokeStyle = 'rgba(96,86,80,0.2)';
g.lineWidth = 0.014;
g.stroke();
g.lineWidth = course - 0.03;
g.setLineDash([0.014, 0.2]);
for (let k = 0; k < near / course; k++) {
  const y = D / 2 - (k + 0.5) * course;
  g.lineDashOffset = (k % 2) * 0.107;
  g.beginPath();
  g.moveTo(x0, y);
  g.lineTo(x1, y);
  g.stroke();
}
g.setLineDash([]);
// (farther off the texture goes into the road's tone)
const fade = g.createLinearGradient(0, D / 2 - near, 0, D / 2 - 6);
fade.addColorStop(0, 'rgba(182,174,164,1)');
fade.addColorStop(1, 'rgba(182,174,164,0)');
g.fillStyle = fade;
g.fillRect(x0 + 0.01, D / 2 - near, x1 - x0 - 0.01, near - 6);
// (the gutter by the houses)
g.fillStyle = 'rgba(110,100,96,0.25)';
g.fillRect(W / 2 - 0.35, -D / 2, 0.35, D);
