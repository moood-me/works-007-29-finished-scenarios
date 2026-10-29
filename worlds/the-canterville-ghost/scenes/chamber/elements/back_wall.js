// The chamber's far wall (6 m, 2.4 m high): rough stone. Left of the middle, at 0.95 m, a great iron ring hangs from
// a staple in the wall (back_wall#ring) — what is chained to it is the element `skeleton`; on the right the low
// round-headed mouth of the narrow passage in the wall (x 1.35…2.05, 1.75 m high at its crown), cut through — the
// stair going up into the dark behind it is `passage`.
e.lib.stone(g, -3.0, 3.0, 2.4, 1);
// the dressed stones round the passage's mouth
g.fillStyle = '#857c70';
e.lib.arch(g, 1.22, 2.18, -1.45);
g.fill();
g.globalCompositeOperation = 'destination-out';
e.lib.arch(g, 1.35, 2.05, -1.45);
g.fill();
g.globalCompositeOperation = 'source-over';
// the ring: an iron plate leaded into the stone, the staple through it, the ring hanging from it
g.fillStyle = '#2e2a26';
g.fillRect(-0.24, -1.07, 0.18, 0.14);
g.strokeStyle = '#3a332c';
g.lineWidth = 0.035;
g.beginPath();
g.ellipse(-0.15, -0.88, 0.1, 0.12, 0, 0, Math.PI * 2);
g.stroke();
g.strokeStyle = '#6a5a48';
g.lineWidth = 0.01;
g.beginPath();
g.ellipse(-0.15, -0.885, 0.1, 0.12, 0, Math.PI * 1.1, Math.PI * 1.7);
g.stroke();
e.at(-0.15, -0.9, 'ring');
// rust run down the stone under it
const rust = g.createLinearGradient(0, -0.8, 0, -0.2);
rust.addColorStop(0, 'rgba(110,62,34,0.45)');
rust.addColorStop(1, 'rgba(110,62,34,0)');
g.fillStyle = rust;
g.fillRect(-0.2, -0.8, 0.1, 0.6);
