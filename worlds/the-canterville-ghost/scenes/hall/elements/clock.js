// The old longcase clock at the stair's foot (2.35 m high): an oak case on its plinth, the trunk with a little glass
// window on the brass pendulum, the hood with its arched top and a painted dial (`clock#face`). Its hands are layers
// turned by the key `hour` (0…24), its pendulum a layer that swings while `clock_going` — at midnight, with the last
// stroke, it stops (clock.animate.js). Nothing here repaints as they move.
const L = e.lib;
// the plinth, the trunk, the hood
g.fillStyle = L.OAK_DARK;
g.fillRect(-0.32, -0.36, 0.64, 0.38);
g.fillStyle = L.OAK;
g.fillRect(-0.28, -0.32, 0.56, 0.3);
g.fillStyle = L.OAK;
g.fillRect(-0.23, -1.58, 0.46, 1.24);
g.fillStyle = L.OAK_DARK;
g.fillRect(-0.25, -1.6, 0.5, 0.05);
g.fillRect(-0.25, -0.4, 0.5, 0.05);
g.fillStyle = L.OAK_DARK;
g.beginPath();
g.moveTo(-0.3, -1.6);
g.lineTo(-0.3, -2.12);
g.quadraticCurveTo(0, -2.42, 0.3, -2.12);
g.lineTo(0.3, -1.6);
g.closePath();
g.fill();
g.fillStyle = L.OAK;
g.fillRect(-0.27, -2.12, 0.54, 0.5);
// the gilt finials on the hood
g.fillStyle = '#c6a254';
for (const x of [-0.27, 0, 0.27]) {
  g.beginPath();
  g.arc(x, x === 0 ? -2.33 : -2.16, 0.035, 0, Math.PI * 2);
  g.fill();
}
// the dial: a brass square with a white chapter ring, the hours as bold marks, a moon arch over it
g.fillStyle = '#c6a254';
g.fillRect(-0.21, -2.1, 0.42, 0.42);
g.beginPath();
g.arc(0, -2.1, 0.21, Math.PI, 0);
g.fill();
g.fillStyle = '#2e3a5a';
g.beginPath();
g.arc(0, -2.1, 0.15, Math.PI, 0);
g.fill();
g.fillStyle = '#e8e2d0';
g.beginPath();
g.arc(-0.04, -2.17, 0.05, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#efe8d6';
g.beginPath();
g.arc(0, -1.89, 0.19, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#1e1a16';
for (let h = 0; h < 12; h++) {
  const a = (h / 12) * Math.PI * 2;
  const s = Math.sin(a);
  const c = -Math.cos(a);
  g.save();
  g.translate(s * 0.155, -1.89 + c * 0.155);
  g.rotate(a);
  g.fillRect(-0.008, -0.022, 0.016, h % 3 ? 0.03 : 0.045);
  g.restore();
}
// the trunk's little window on the pendulum, cut through; the case's dark inside behind it
g.globalCompositeOperation = 'destination-out';
g.fillRect(-0.1, -1.38, 0.2, 0.62);
g.globalCompositeOperation = 'source-over';
g.strokeStyle = '#c6a254';
g.lineWidth = 0.02;
g.strokeRect(-0.1, -1.38, 0.2, 0.62);
e.layer('inside', { depth: -0.08, box: [-0.13, -1.42, 0.13, -0.72] }, c => {
  c.fillStyle = '#1a120c';
  c.fillRect(-0.13, -1.42, 0.26, 0.7);
});
// the pendulum behind the window: its rod and its brass bob, swinging about its top in the case
e.layer('pendulum', { depth: -0.04, pivot: [0, -1.55], box: [-0.12, -1.56, 0.12, -0.74] }, c => {
  c.fillStyle = '#8a6a2a';
  c.fillRect(-0.008, -1.55, 0.016, 0.68);
  c.fillStyle = '#d8b24a';
  c.beginPath();
  c.arc(0, -0.86, 0.075, 0, Math.PI * 2);
  c.fill();
});
// the hands, pointing to twelve as painted; the animate turns them
e.layer('minute', { depth: 0.006, pivot: [0, -1.89], box: [-0.02, -2.06, 0.02, -1.86] }, c => {
  c.fillStyle = '#1e1a16';
  c.fillRect(-0.007, -2.05, 0.014, 0.18);
});
e.layer('hour', { depth: 0.008, pivot: [0, -1.89], box: [-0.025, -2.01, 0.025, -1.86] }, c => {
  c.fillStyle = '#1e1a16';
  c.beginPath();
  c.moveTo(-0.014, -1.88);
  c.lineTo(0, -2.0);
  c.lineTo(0.014, -1.88);
  c.closePath();
  c.fill();
});
e.at(0, -1.89, 'face');
