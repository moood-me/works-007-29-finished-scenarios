// Balducci's horse, left below where the path ices over (metres, side-on, facing left — up the path; its foot at y 0):
// a bay with a dark mane, the gendarme's saddle and his carbine in its scabbard. It stands; only its breath moves (the
// particles `breath`, from its muzzle — the point `muzzle`).
g.fillStyle = '#5a4433';
// body
g.beginPath();
g.ellipse(0.1, -1.05, 0.75, 0.32, 0, 0, Math.PI * 2);
g.fill();
// neck and head
g.beginPath();
g.moveTo(-0.5, -1.25);
g.quadraticCurveTo(-0.75, -1.65, -0.9, -1.72);
g.lineTo(-1.2, -1.42);
g.lineTo(-1.12, -1.34);
g.lineTo(-0.85, -1.5);
g.quadraticCurveTo(-0.65, -1.2, -0.45, -0.9);
g.closePath();
g.fill();
// legs
g.lineCap = 'round';
g.strokeStyle = '#4a382a';
g.lineWidth = 0.09;
for (const x of [-0.5, -0.32, 0.5, 0.7]) {
  g.beginPath();
  g.moveTo(x, -0.9);
  g.lineTo(x + 0.02, 0);
  g.stroke();
}
// mane and tail
g.strokeStyle = '#231b16';
g.lineWidth = 0.07;
g.beginPath();
g.moveTo(-0.88, -1.7);
g.quadraticCurveTo(-0.7, -1.55, -0.5, -1.3);
g.moveTo(0.83, -1.15);
g.quadraticCurveTo(0.98, -0.8, 0.92, -0.45);
g.stroke();
// saddle, its blanket, the carbine
g.fillStyle = '#2d3446';
g.fillRect(-0.2, -1.35, 0.6, 0.38);
g.fillStyle = '#3a2a1e';
g.beginPath();
g.ellipse(0.1, -1.36, 0.3, 0.08, 0, 0, Math.PI * 2);
g.fill();
g.strokeStyle = '#2a2420';
g.lineWidth = 0.05;
g.beginPath();
g.moveTo(0.35, -1.45);
g.lineTo(0.62, -0.75);
g.stroke();
e.at(-1.18, -1.4, 'muzzle');
