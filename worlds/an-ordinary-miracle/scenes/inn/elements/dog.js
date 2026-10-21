// The Hunter's dog lying on the floor by his stool: a big hound, tan with a white chest and blaze, long drooping
// ears, its head up and turned toward the hearth — at the young man — the lip lifted over a fang. Its body breathes
// (the layer `body`, scaled from the floor) and its head growls, a small shiver (the layer `head`, at the neck).
const L = e.lib;
const TAN = '#b8773a', DARK = '#6e4220', WHITE = '#f1e8d6';
e.layer('body', { pivot: [0.1, 0] }, (g) => {
  // the body lying, the hind leg folded, the tail on the floor
  g.fillStyle = TAN;
  g.beginPath();
  g.ellipse(0.18, -0.15, 0.36, 0.15, 0, 0, Math.PI * 2);
  g.fill();
  g.beginPath();
  g.ellipse(0.4, -0.12, 0.15, 0.12, 0, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = DARK;
  g.beginPath();
  g.ellipse(0.22, -0.24, 0.24, 0.06, 0, 0, Math.PI * 2);
  g.fill();
  g.strokeStyle = TAN;
  g.lineWidth = 0.04;
  g.lineCap = 'round';
  g.beginPath();
  g.moveTo(0.52, -0.06);
  g.quadraticCurveTo(0.62, -0.02, 0.72, -0.03);
  g.stroke();
  // the forelegs stretched before it, white paws
  g.fillStyle = TAN;
  g.fillRect(-0.32, -0.07, 0.3, 0.06);
  g.fillRect(-0.28, -0.04, 0.28, 0.04);
  g.fillStyle = WHITE;
  g.beginPath();
  g.ellipse(-0.33, -0.035, 0.045, 0.03, 0, 0, Math.PI * 2);
  g.ellipse(-0.29, -0.015, 0.045, 0.025, 0, 0, Math.PI * 2);
  g.fill();
  // the white chest
  g.beginPath();
  g.ellipse(-0.08, -0.13, 0.09, 0.11, 0.3, 0, Math.PI * 2);
  g.fill();
});
e.layer('head', { pivot: [-0.08, -0.22] }, (g) => {
  // the neck and the head turned toward the left, the muzzle long
  g.fillStyle = TAN;
  g.beginPath();
  g.ellipse(-0.1, -0.27, 0.09, 0.12, 0.4, 0, Math.PI * 2);
  g.fill();
  g.beginPath();
  g.ellipse(-0.2, -0.36, 0.1, 0.085, 0, 0, Math.PI * 2);
  g.fill();
  g.beginPath();
  g.moveTo(-0.24, -0.41);
  g.quadraticCurveTo(-0.38, -0.38, -0.42, -0.32);
  g.lineTo(-0.4, -0.29);
  g.quadraticCurveTo(-0.32, -0.28, -0.22, -0.3);
  g.closePath();
  g.fill();
  // the white blaze down the face
  g.fillStyle = WHITE;
  g.beginPath();
  g.moveTo(-0.22, -0.44);
  g.quadraticCurveTo(-0.32, -0.38, -0.41, -0.33);
  g.lineTo(-0.38, -0.31);
  g.quadraticCurveTo(-0.3, -0.35, -0.2, -0.4);
  g.closePath();
  g.fill();
  // the nose, the eye, the lifted lip and the fang
  g.fillStyle = '#1e1612';
  g.beginPath();
  g.ellipse(-0.42, -0.325, 0.022, 0.017, 0, 0, Math.PI * 2);
  g.fill();
  g.beginPath();
  g.ellipse(-0.25, -0.385, 0.016, 0.011, -0.3, 0, Math.PI * 2);
  g.fill();
  g.strokeStyle = '#1e1612';
  g.lineWidth = 0.008;
  g.beginPath();
  g.moveTo(-0.39, -0.295);
  g.quadraticCurveTo(-0.34, -0.31, -0.28, -0.295);
  g.stroke();
  g.fillStyle = '#9a3a3a';
  g.beginPath();
  g.ellipse(-0.35, -0.3, 0.03, 0.01, 0, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = '#f6f0e2';
  g.beginPath();
  g.moveTo(-0.355, -0.305);
  g.lineTo(-0.345, -0.285);
  g.lineTo(-0.335, -0.305);
  g.closePath();
  g.fill();
  // the long ear hanging
  g.fillStyle = DARK;
  g.beginPath();
  g.moveTo(-0.16, -0.42);
  g.quadraticCurveTo(-0.08, -0.4, -0.1, -0.26);
  g.quadraticCurveTo(-0.13, -0.2, -0.17, -0.25);
  g.quadraticCurveTo(-0.2, -0.33, -0.16, -0.42);
  g.fill();
});
L.dabs(g, 441, -0.4, -0.3, 0.9, 0.3, ['#5a4030'], 6, 0.12, 0.2, 0.25);
