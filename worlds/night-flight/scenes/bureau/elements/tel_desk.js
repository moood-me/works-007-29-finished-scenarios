// The telegraph table's front: an oak top 0.79 m up, a panel down to the floor (so the telegraphist's legs are hidden
// behind it), a drawer; the inker's paper tape coming over the edge and down to the floor in loose loops — the hanging
// strip its own layer `tape`, creeping down while the inker runs (`tape`).
g.fillStyle = '#6a4a30';
g.fillRect(-0.95, -0.81, 1.9, 0.05);
g.fillStyle = '#563c27';
g.fillRect(-0.92, -0.76, 1.84, 0.76);
g.fillStyle = '#4a3322';
g.fillRect(-0.92, -0.76, 0.05, 0.76);
g.fillRect(0.87, -0.76, 0.05, 0.76);
g.fillStyle = '#62452e';
g.fillRect(-0.8, -0.7, 0.9, 0.16);
g.fillStyle = '#b89a5a';
g.fillRect(-0.4, -0.63, 0.1, 0.02);
g.fillStyle = '#3c2a1c';
g.fillRect(-0.92, -0.04, 1.84, 0.04);
// the tape's loops on the floor
g.strokeStyle = '#e9e3d2';
g.lineWidth = 0.022;
g.beginPath();
g.moveTo(0.55, -0.07);
g.bezierCurveTo(0.58, 0.04, 0.85, 0.04, 0.8, -0.03);
g.bezierCurveTo(0.75, -0.09, 0.42, -0.02, 0.5, 0.03);
g.bezierCurveTo(0.6, 0.07, 0.95, 0.05, 1.05, 0.03);
g.stroke();
// the hanging strip with its dots and dashes; the pattern repeats every 0.074 m, so its ends meet as it drifts
const T0 = -0.8;
const T1 = -0.06;
e.layer('tape', { box: [0.53, T0, 0.575, T1], drift: [0, e.state.tape ? 0.035 : 0] }, c => {
  c.fillStyle = '#ece6d6';
  c.fillRect(0.543, T0, 0.022, T1 - T0);
  c.fillStyle = '#2a3a6a';
  for (let y = T0; y < T1 - 0.001; y += 0.074) {
    for (const [d, l] of [[0.006, 0.004], [0.016, 0.014], [0.036, 0.004], [0.046, 0.014]]) c.fillRect(0.551, y + d, 0.006, l);
  }
});
