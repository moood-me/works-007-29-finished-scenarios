// Mev's house, its front onto the yard (x −3.5 … 4.7, the eaves at 7.3 m): limewashed, two floors; on the ground floor
// the kitchen door standing open (x 0.5 … 1.6, 2.15 m high, a worn wooden lintel over it) and the kitchen window to its
// left with green shutters open and a box of geraniums; two small windows above, their shutters half closed; the
// tiles' ends along the eaves; a vine climbing the left corner and along under the eaves (layer `vine`, in the wind).
// Points "house#door", "house#window".
const A = e.anim;
e.lib.plaster(g, [[-3.5, -7.0, 0.5, 0], [0.5, -7.0, 1.6, -2.15], [1.6, -7.0, 4.7, 0]], 21, '#f1e9d8');
// the door's stone surround and the lintel
g.fillStyle = '#d9cdb5';
g.fillRect(0.36, -2.28, 0.14, 2.28);
g.fillRect(1.6, -2.28, 0.14, 2.28);
g.fillStyle = '#7a5a3e';
g.fillRect(0.3, -2.42, 1.5, 0.2);
g.fillStyle = '#8d6b4c';
g.fillRect(0.3, -2.42, 1.5, 0.05);
// the kitchen window: its dark panes, the frame's cross, the shutters folded back, the box of geraniums
const wx0 = -2.5, wx1 = -1.5, wy0 = -2.35, wy1 = -1.1;
g.fillStyle = '#d9cdb5';
g.fillRect(wx0 - 0.1, wy0 - 0.1, wx1 - wx0 + 0.2, wy1 - wy0 + 0.2);
g.fillStyle = '#4e4a44';
g.fillRect(wx0, wy0, wx1 - wx0, wy1 - wy0);
g.fillStyle = '#e8e0cf';
g.fillRect((wx0 + wx1) / 2 - 0.025, wy0, 0.05, wy1 - wy0);
g.fillRect(wx0, (wy0 + wy1) / 2 - 0.025, wx1 - wx0, 0.05);
const shutter = (x, w, y0, y1) => {
  g.fillStyle = '#6f9184';
  g.fillRect(x, y0, w, y1 - y0);
  g.fillStyle = '#5d7e72';
  for (let y = y0 + 0.08; y < y1 - 0.04; y += 0.09) g.fillRect(x + 0.04, y, w - 0.08, 0.03);
};
shutter(wx0 - 0.62, 0.48, wy0, wy1);
shutter(wx1 + 0.14, 0.48, wy0, wy1);
g.fillStyle = '#7d5b40';
g.fillRect(wx0 - 0.12, wy1 + 0.06, wx1 - wx0 + 0.24, 0.2);
for (let f = 0; f < 6; f++) {
  g.fillStyle = f % 2 ? '#4f7a3a' : '#6c9448';
  g.beginPath();
  g.ellipse(wx0 - 0.02 + f * 0.21, wy1 + 0.02, 0.13, 0.08, 0, 0, Math.PI * 2);
  g.fill();
}
for (let f = 0; f < 5; f++) {
  g.fillStyle = f % 2 ? '#d8483c' : '#ea6a58';
  g.beginPath();
  g.arc(wx0 + 0.08 + f * 0.21, wy1 - 0.05 - 0.04 * A.hash(f, 2), 0.075, 0, Math.PI * 2);
  g.fill();
}
e.at((wx0 + wx1) / 2, (wy0 + wy1) / 2, 'window');
// the windows upstairs, their shutters half closed against the coming heat
for (const ux of [-2.3, 1.6]) {
  g.fillStyle = '#d9cdb5';
  g.fillRect(ux - 0.08, -5.78, 0.96, 1.36);
  g.fillStyle = '#4e4a44';
  g.fillRect(ux, -5.7, 0.8, 1.2);
  shutter(ux, 0.3, -5.7, -4.5);
  shutter(ux + 0.5, 0.3, -5.7, -4.5);
  g.fillStyle = '#d9cdb5';
  g.fillRect(ux - 0.1, -4.5, 1.0, 0.08);
}
// the eaves: a strip of shade under them, then the ends of the curved tiles
g.fillStyle = '#ddd0b8';
g.fillRect(-3.5, -7.0, 8.2, 0.18);
g.fillStyle = '#a9553a';
g.fillRect(-3.6, -7.3, 8.4, 0.3);
for (let x = -3.6; x < 4.8; x += 0.24) {
  g.fillStyle = A.hash(Math.round(x * 10), 3) < 0.5 ? '#c0674a' : '#b45d41';
  g.beginPath();
  g.arc(x + 0.12, -7.02, 0.11, 0, Math.PI);
  g.fill();
}
e.at(1.05, -1.1, 'door');
// the vine: a gnarled stem up the left corner and along under the eaves, its leaves stirring
g.strokeStyle = '#6e5a44';
g.lineCap = 'round';
g.lineWidth = 0.07;
g.beginPath();
g.moveTo(-3.3, 0);
g.bezierCurveTo(-3.1, -2, -3.45, -4, -3.2, -6.6);
g.quadraticCurveTo(-2.4, -6.85, -0.6, -6.7);
g.stroke();
e.layer('vine', { pivot: [-3.2, -6.7], wind: { strength: 0.06, gust: 0.4 }, box: [-3.9, -7.3, 0.2, -1.4] }, g => {
  for (let i = 0; i < 120; i++) {
    const u = A.hash(i, 5);
    let x, y;
    if (u < 0.45) {
      x = -3.3 + 0.5 * (A.hash(i, 6) - 0.5);
      y = -1.6 - 5.2 * (u / 0.45);
    } else {
      x = -3.2 + 2.9 * ((u - 0.45) / 0.55);
      y = -6.65 + 0.5 * A.hash(i, 6) * (1 - (u - 0.45) / 0.55);
    }
    g.fillStyle = ['#4f7a3a', '#6c9448', '#86a85a', '#5e8541'][i % 4];
    g.beginPath();
    g.ellipse(x, y, 0.13, 0.11, A.hash(i, 7) * 3, 0, Math.PI * 2);
    g.fill();
  }
  // a few bunches of green grapes under the eaves
  for (const [x, y] of [[-2.6, -6.3], [-1.4, -6.35]]) {
    g.fillStyle = '#a9b86a';
    for (let k = 0; k < 9; k++) {
      g.beginPath();
      g.arc(x + 0.05 * ((k % 3) - 1), y + 0.05 * Math.floor(k / 3) - 0.02 * Math.abs((k % 3) - 1), 0.035, 0, Math.PI * 2);
      g.fill();
    }
  }
});
