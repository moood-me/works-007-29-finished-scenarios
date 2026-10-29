// The payphone on the corridor's wall: a steel box with its buttons and coin slot under a small grey hood, the black
// receiver on its hook (point `receiver`) — off it with `phone_off` (in someone's hand: the cast's part `receiver`); a little shelf with the phone book under it.
g.fillStyle = '#9ea4a8';
g.fillRect(-0.25, -0.62, 0.5, 0.05);
g.fillRect(-0.25, -0.62, 0.04, 0.42);
g.fillRect(0.21, -0.62, 0.04, 0.42);
g.fillStyle = '#b9bec1';
g.fillRect(-0.14, -0.56, 0.28, 0.4);
g.fillStyle = '#8a9094';
for (let r = 0; r < 4; r++) for (let c = 0; c < 3; c++) g.fillRect(-0.06 + c * 0.04, -0.4 + r * 0.04, 0.026, 0.026);
g.fillStyle = '#3a3c40';
g.fillRect(0.06, -0.52, 0.04, 0.015);
if (!e.state.phone_off) {
  g.fillStyle = '#1f2023';
  g.fillRect(-0.13, -0.55, 0.045, 0.2);
  g.strokeStyle = '#2a2b2e';
  g.lineWidth = 0.008;
  g.beginPath();
  g.moveTo(-0.11, -0.35);
  g.bezierCurveTo(-0.12, -0.2, -0.05, -0.2, -0.06, -0.16);
  g.stroke();
} else {
  g.fillStyle = '#3a3c40';
  g.fillRect(-0.13, -0.55, 0.045, 0.02);
}
g.fillStyle = '#b48a5e';
g.fillRect(-0.24, -0.16, 0.48, 0.03);
g.fillStyle = '#e6d488';
g.fillRect(-0.15, -0.19, 0.22, 0.03);
e.at(-0.11, -0.45, 'receiver');
