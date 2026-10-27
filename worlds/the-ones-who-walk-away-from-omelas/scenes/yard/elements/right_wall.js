// The yard's wall on the right, shutting it off from the neighbours' (x −8.2 at the house … 0 by the viewer, 2.6 m
// high): limewash gone a little rosy, a coping of tiles, the green of the neighbours' fig showing over it (layer
// `over`, in the wind); a rake and a wooden hoop hung on nails
const A = e.anim;
e.lib.plaster(g, [[-8.2, -2.5, 0, 0]], 43, '#f0ddd0');
g.fillStyle = '#b25d40';
g.fillRect(-8.2, -2.62, 8.2, 0.13);
g.fillStyle = '#c46d4e';
g.fillRect(-8.2, -2.62, 8.2, 0.04);
// the rake and the hoop
g.strokeStyle = '#8a6a48';
g.lineCap = 'round';
g.lineWidth = 0.04;
g.beginPath();
g.moveTo(-3.2, -2.1);
g.lineTo(-3.05, -0.1);
g.stroke();
g.lineWidth = 0.035;
g.beginPath();
g.moveTo(-3.42, -2.12);
g.lineTo(-2.98, -2.08);
g.stroke();
g.lineWidth = 0.015;
for (let k = 0; k < 7; k++) {
  g.beginPath();
  g.moveTo(-3.4 + k * 0.07, -2.1);
  g.lineTo(-3.4 + k * 0.07, -1.96);
  g.stroke();
}
g.strokeStyle = '#a07b54';
g.lineWidth = 0.03;
g.beginPath();
g.arc(-4.6, -1.45, 0.32, 0, Math.PI * 2);
g.stroke();
e.layer('over', { pivot: [-5, -2.6], wind: { strength: 0.08, gust: 0.5 }, box: [-8.2, -3.8, -1.5, -2.5] }, g => {
  for (let i = 0; i < 70; i++) {
    const x = -8.0 + 6.0 * A.hash(i, 1), y = -2.65 - 0.9 * Math.pow(A.hash(i, 2), 1.5) * (1 - Math.abs(x + 5.5) / 4);
    g.fillStyle = ['#4f6e3a', '#5f8244', '#729550'][i % 3];
    g.beginPath();
    g.ellipse(x, y, 0.2, 0.15, A.hash(i, 3) * 3, 0, Math.PI * 2);
    g.fill();
  }
});
