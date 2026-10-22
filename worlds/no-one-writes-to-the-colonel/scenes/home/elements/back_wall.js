// The back wall, from its foot (metres across from the room's middle): limewash over adobe with the window cut
// through it (x 1.25…2.25, sill 1.0, head 2.1), the stove's soot climbing the wall over it on the left, and the
// nails the hammock hangs from.
g.save();
g.beginPath();
g.rect(-3.0, -2.92, 6.0, 2.94);
g.rect(1.25, -2.1, 1.0, 1.1);
g.clip('evenodd');
e.lib.limewash(g, e, -3.0, 3.0, 2.9);
// the soot over the stove: black at the hearth's height, thinning as it climbs
const soot = g.createRadialGradient(-2.2, -1.0, 0.05, -2.2, -1.6, 1.3);
soot.addColorStop(0, 'rgba(40,34,30,0.85)');
soot.addColorStop(0.5, 'rgba(50,44,40,0.45)');
soot.addColorStop(1, 'rgba(50,44,40,0)');
g.fillStyle = soot;
g.beginPath();
g.ellipse(-2.2, -1.75, 0.75, 1.2, 0, 0, Math.PI * 2);
g.fill();
// the window's opening: its reveal, the adobe's thickness, a darker edge
g.fillStyle = '#c9c0ae';
g.fillRect(1.19, -2.16, 1.12, 0.06);
g.fillRect(1.19, -1.0, 1.12, 0.05);
g.restore();
// the hammock's iron hooks
g.strokeStyle = '#3a312a';
g.lineWidth = 0.025;
for (const x of [-1.7, 0.8]) {
  g.beginPath();
  g.moveTo(x, -1.9);
  g.lineTo(x, -1.84);
  g.arc(x + 0.03, -1.84, 0.03, Math.PI, 0, true);
  g.stroke();
}
// a calendar from a seed shop, its page long out of date, on a nail by the window
g.fillStyle = '#d8ccb0';
g.fillRect(2.45, -1.95, 0.32, 0.46);
g.fillStyle = '#9a4a3a';
g.fillRect(2.45, -1.95, 0.32, 0.18);
g.fillStyle = 'rgba(70,60,50,0.55)';
for (let r = 0; r < 5; r++) {
  for (let c = 0; c < 7; c++) g.fillRect(2.48 + c * 0.039, -1.73 + r * 0.045, 0.025, 0.02);
}
