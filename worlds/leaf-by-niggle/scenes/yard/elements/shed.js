// Niggle's shed from the yard: its front, tall and narrow, on the old potato bed (x across from its middle, 0 at its
// foot; 4.4 wide, the eaves at 3.7, the ridge at 4.75): grey weathered boards, tarred barge boards, the doorway open
// (x 0.3…1.5, 2.3 high — a hole: the room behind it is `shed_inside`), the sketch of a leaf pinned beside it.
const L = e.lib;
g.save();
g.beginPath();
g.moveTo(-2.2, 0);
g.lineTo(-2.2, -3.7);
g.lineTo(0, -4.7);
g.lineTo(2.2, -3.7);
g.lineTo(2.2, 0);
g.closePath();
g.rect(0.3, -2.3, 1.2, 2.3);
g.clip('evenodd');
L.planks(g, e, -2.2, -4.7, 2.2, 0, true, ['#7d776e', '#857e74', '#746e66', '#8a8378']);
// damp at the foot, a green stain under the eaves' drip
const damp = g.createLinearGradient(0, -0.8, 0, 0);
damp.addColorStop(0, 'rgba(70,74,52,0)');
damp.addColorStop(1, 'rgba(70,74,52,0.45)');
g.fillStyle = damp;
g.fillRect(-2.2, -0.8, 4.4, 0.8);
g.restore();
// the barge boards along the gable, tarred dark, a little out over the wall
g.strokeStyle = '#3e3832';
g.lineWidth = 0.16;
g.lineCap = 'round';
g.beginPath();
g.moveTo(-2.42, -3.6);
g.lineTo(0, -4.82);
g.lineTo(2.42, -3.6);
g.stroke();
// the door's frame and its threshold
g.strokeStyle = '#5a5146';
g.lineWidth = 0.08;
g.beginPath();
g.moveTo(0.26, 0);
g.lineTo(0.26, -2.34);
g.lineTo(1.54, -2.34);
g.lineTo(1.54, 0);
g.stroke();
g.fillStyle = '#4c443a';
g.fillRect(0.22, -0.06, 1.36, 0.08);
// the sketch of a leaf pinned beside the door: a sheet, a leaf in green and gold, a nail
g.save();
g.translate(-0.45, -1.62);
g.rotate(-0.05);
g.fillStyle = '#ece4d0';
g.fillRect(-0.24, -0.3, 0.48, 0.6);
L.leaf(g, -0.16, 0.12, 0.34, -0.7, '#7d9a52', '#4f6a36');
g.fillStyle = 'rgba(200,170,80,0.55)';
g.beginPath();
g.ellipse(0.02, -0.05, 0.05, 0.02, -0.7, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#3a342e';
g.beginPath();
g.arc(0, -0.26, 0.015, 0, Math.PI * 2);
g.fill();
g.restore();
e.at(0.9, -1.3, 'door');
e.at(-0.45, -1.62, 'sketch');
