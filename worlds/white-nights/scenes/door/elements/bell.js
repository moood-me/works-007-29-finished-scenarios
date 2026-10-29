// The bell pull beside the door (x −0.1…0.1, y −2.6 under the ceiling … 0): a brass crank on the wall, the wire down
// to a worsted cord of faded red, a turned brass handle at the height of a hand; its point `handle`
const INK = e.lib.INK;
g.fillStyle = '#b8954a';
g.beginPath();
g.arc(0, -2.52, 0.05, 0, Math.PI * 2);
g.fill();
g.strokeStyle = INK;
g.lineWidth = 0.006;
g.stroke();
g.beginPath();
g.moveTo(0, -2.5);
g.lineTo(0, -1.5);
g.strokeStyle = '#6a6a66';
g.lineWidth = 0.008;
g.stroke();
g.fillStyle = '#93463c';
g.fillRect(-0.012, -1.5, 0.024, 0.3);
g.fillStyle = '#c8a557';
g.beginPath();
g.ellipse(0, -1.17, 0.028, 0.045, 0, 0, Math.PI * 2);
g.fill();
g.strokeStyle = INK;
g.lineWidth = 0.006;
g.stroke();
e.at(0, -1.17, 'handle');
