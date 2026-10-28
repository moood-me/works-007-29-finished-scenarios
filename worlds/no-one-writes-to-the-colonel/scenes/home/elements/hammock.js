// The colonel's hammock, slung from two hooks in the back wall (metres across from its middle; the hooks at x −1.25 and
// 1.25, 1.9 up): cords to its gathered ends, then the woven cloth sagging between — faded ochre and red stripes, a
// fringe along its edge. It swings a very little (a layer the animate moves).
e.layer('hammock', { pivot: [0, -1.9] }, c => {
  c.strokeStyle = '#b7a586';
  c.lineWidth = 0.012;
  for (const s of [-1, 1]) {
    for (let k = 0; k < 5; k++) {
      c.beginPath();
      c.moveTo(s * 1.25, -1.9);
      c.lineTo(s * 0.86, -1.05 + k * 0.035);
      c.stroke();
    }
  }
  const top = x => -1.05 + 0.32 * (1 - (x / 0.86) ** 2);
  const bottom = x => -0.98 + 0.48 * (1 - (x / 0.86) ** 2);
  c.beginPath();
  c.moveTo(-0.86, top(-0.86));
  for (let x = -0.86; x <= 0.861; x += 0.04) c.lineTo(x, top(x));
  for (let x = 0.86; x >= -0.861; x -= 0.04) c.lineTo(x, bottom(x));
  c.closePath();
  c.save();
  c.clip();
  const stripes = ['#c99a4e', '#a3483a', '#d8c39a', '#c99a4e', '#7a5a6a', '#d8c39a'];
  for (let i = 0; i < 24; i++) {
    c.fillStyle = stripes[i % stripes.length];
    c.fillRect(-0.9 + i * 0.075, -1.2, 0.075, 0.8);
  }
  const shade = c.createLinearGradient(0, -1.05, 0, -0.5);
  shade.addColorStop(0, 'rgba(60,40,30,0.35)');
  shade.addColorStop(1, 'rgba(60,40,30,0)');
  c.fillStyle = shade;
  c.fillRect(-0.9, -1.2, 1.8, 0.8);
  c.restore();
  c.strokeStyle = '#d8c39a';
  c.lineWidth = 0.008;
  for (let x = -0.8; x <= 0.8; x += 0.025) {
    c.beginPath();
    c.moveTo(x, bottom(x));
    c.lineTo(x + 0.004, bottom(x) + 0.07);
    c.stroke();
  }
});
