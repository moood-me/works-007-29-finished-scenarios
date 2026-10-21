// A blizzard at dusk, as the window and the open door show it: a low sky of driven snow, slate blue above, paler and
// whiter toward the horizon (0.42) where the snow hides everything; veils of snow sweeping across it (a layer drifting
// to the right, its ends meeting).
const A = e.aspect, L = e.lib, W = A + 0.6;
const sky = g.createLinearGradient(0, -0.35, 0, 1.25);
sky.addColorStop(0, '#4f5d7c');
sky.addColorStop(0.35, '#7484a4');
sky.addColorStop(0.47, '#aab6cc');
sky.addColorStop(0.5, '#c3ccdc');
sky.addColorStop(1, '#d3dae6');
g.fillStyle = sky;
g.fillRect(-0.3, -0.35, W, 1.6);
L.dabs(g, 21, -0.3, -0.3, W, 0.7, ['#5e6c8c', '#8592b0', '#6a7898'], 120, 0.08, 0.4, 0.35);
e.layer('veils', { drift: [0.02, 0], box: [-0.3, -0.35, A + 0.3, 1.25] }, (g) => {
  for (let i = 0; i < 26; i++) {
    const x = -0.3 + W * L.rnd(i, 31), y = 0.05 + 0.6 * L.rnd(i, 32), rx = 0.15 + 0.3 * L.rnd(i, 33);
    const gr = g.createRadialGradient(x, y, 0, x, y, rx);
    gr.addColorStop(0, 'rgba(226, 232, 244, 0.45)');
    gr.addColorStop(1, 'rgba(226, 232, 244, 0)');
    g.fillStyle = gr;
    g.save();
    g.translate(x, y);
    g.scale(1, 0.3);
    g.translate(-x, -y);
    g.fillRect(x - rx, y - rx, 2 * rx, 2 * rx);
    g.restore();
  }
});
