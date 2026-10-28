// Grandmother's pin: a thin bright line from her dress to Nastenka's — a layer laid each frame along the way from her
// hips' point to Nastenka's (animate; the layer's 0…1 is that way), drawn only over its middle, from the edge of one
// lap to the other's, a little into each dress — steel with an ink edge so it reads on both, its head glinting at
// Grandmother's end and a glint along it (the engine's glow)
e.layer('pin', { pivot: [0, 0], box: [-1.2, -1.2, 1.2, 0.3] }, (g) => {
  g.fillStyle = e.lib.INK;
  g.fillRect(0.2, -0.01, 0.6, 0.02);
  g.fillStyle = '#dfe4ec';
  g.fillRect(0.2, -0.005, 0.6, 0.01);
  e.light(0.22, 0, 0.03, '#fff4dc', 0.7, 'head');
  e.light(0.52, 0, 0.022, '#fff4dc', 0.45, 'glint');
});
