// Orpheus's lyre, upright on his left thigh: a sound box of tortoise shell at its foot, two curved arms of wood rising
// from it, the crossbar between their tops, seven strings from the bridge to the bar. Its points: `arm` — the right-hand
// arm as one looks at it, where his left hand holds it; `strings` — the middle of the strings, where his right hand
// plays.
// the sound box: a rounded shell, its pattern of plates
g.fillStyle = '#7b4f2b';
g.beginPath();
g.ellipse(0, -0.09, 0.15, 0.085, 0, 0, Math.PI * 2);
g.fill();
g.strokeStyle = 'rgba(40,24,12,0.55)';
g.lineWidth = 0.008;
for (const [x, y] of [[-0.07, -0.1], [0, -0.12], [0.07, -0.1], [-0.035, -0.06], [0.035, -0.06]]) {
  g.beginPath();
  g.ellipse(x, y, 0.035, 0.022, 0, 0, Math.PI * 2);
  g.stroke();
}
// the arms: curving out, then in toward the top
g.strokeStyle = '#8f6136';
g.lineWidth = 0.028;
g.lineCap = 'round';
for (const s of [-1, 1]) {
  g.beginPath();
  g.moveTo(s * 0.11, -0.13);
  g.bezierCurveTo(s * 0.21, -0.28, s * 0.09, -0.42, s * 0.17, -0.57);
  g.stroke();
}
// the crossbar
g.strokeStyle = '#6b4423';
g.lineWidth = 0.024;
g.beginPath();
g.moveTo(-0.19, -0.5);
g.lineTo(0.19, -0.5);
g.stroke();
// the bridge and the strings
g.fillStyle = '#d9c7a0';
g.fillRect(-0.06, -0.13, 0.12, 0.015);
g.strokeStyle = '#efe4c8';
g.lineWidth = 0.004;
for (let i = 0; i < 7; i++) {
  const x = -0.054 + i * 0.018;
  g.beginPath();
  g.moveTo(x, -0.125);
  g.lineTo(x * 1.25, -0.5);
  g.stroke();
}
e.at(0.15, -0.44, 'arm');
e.at(-0.01, -0.29, 'strings');
