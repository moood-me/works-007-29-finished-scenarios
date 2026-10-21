// Grandmother's pin: a thin bright line from her dress to Nastenka's (a layer laid each frame from one to the other by
// animate — from her hips' point to Nastenka's, a little below) with a glint on it, the engine's glow
e.layer('pin', { pivot: [0, 0], box: [-1.2, -1.2, 1.2, 0.3] }, (g) => {
  g.fillStyle = '#f3f5f9';
  g.fillRect(0, -0.007, 1, 0.014);
  e.light(0.55, 0, 0.035, '#fff4dc', 1.2, 'glint');
});
