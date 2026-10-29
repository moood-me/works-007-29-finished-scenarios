// In the smoke over the bucket (the ending «Дым»), for a moment, something striped — a tiger's long body going up
// through the apple tree and gone: a layer of soft see-through bands the animate carries up and fades by `stripes`
// (0 none … 1 gone up).
e.layer('tiger', { pivot: [0, -0.5] }, l => {
  l.fillStyle = 'rgba(236,140,92,0.5)';
  l.beginPath();
  l.ellipse(0, -0.5, 0.42, 0.16, -0.25, 0, Math.PI * 2);
  l.fill();
  l.fillStyle = 'rgba(70,40,30,0.5)';
  for (let i = -3; i <= 3; i++) {
    l.beginPath();
    l.ellipse(i * 0.1, -0.5 + i * 0.025, 0.025, 0.13, -0.25, 0, Math.PI * 2);
    l.fill();
  }
  l.fillStyle = 'rgba(236,140,92,0.45)';
  l.beginPath();
  l.ellipse(-0.45, -0.62, 0.12, 0.1, 0, 0, Math.PI * 2);
  l.fill();
});
