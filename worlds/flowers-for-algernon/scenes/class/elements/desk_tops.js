// A pupil's desk top from above (one painting, a copy on each desk; metres, y toward the viewer): worn oak with a
// pencil groove along the far edge, an exercise book open on it, a pencil.
g.fillStyle = '#87613f';
g.fillRect(-0.27, -0.31, 0.54, 0.62);
g.fillStyle = 'rgba(70,45,25,0.35)';
g.fillRect(-0.25, -0.29, 0.03, 0.58);
g.fillStyle = '#ebe5d2';
g.fillRect(-0.12, -0.17, 0.26, 0.34);
g.fillStyle = '#d9d2bc';
g.fillRect(-0.12, -0.003, 0.26, 0.006);
g.fillStyle = 'rgba(90,110,150,0.4)';
for (let y = -0.15; y < 0.16; y += 0.025) g.fillRect(-0.1, y, 0.22, 0.003);
g.fillStyle = '#d4a23a';
g.save();
g.translate(0.17, 0.1);
g.rotate(1.3);
g.fillRect(-0.08, -0.004, 0.16, 0.008);
g.restore();
