// The landing outside the office's door, its far wall seen through the doorway (its +x runs away from the viewer; it
// runs from 3.2 to 7.8 m away, the door's opening at x 0.55…1.4): dim distemper over the same dark dado, the banister
// of the stair going down beyond the door, a bare bulb on its cord (`bulb`) over the stair's head.
g.fillStyle = '#a49c84';
g.fillRect(-1.0, -2.95, 4.6, 3.0);
g.fillStyle = '#4c3828';
g.fillRect(-1.0, -0.85, 4.6, 0.85);
g.fillStyle = '#3a2a1e';
g.fillRect(-1.0, -0.9, 4.6, 0.06);
g.fillStyle = '#2b2018';
g.fillRect(-1.0, -0.12, 4.6, 0.12);
// a door further along the landing, shut
g.fillStyle = '#45311f';
g.fillRect(2.4, -2.1, 0.85, 2.1);
g.fillStyle = '#53392a';
g.fillRect(2.47, -2.02, 0.71, 0.9);
g.fillRect(2.47, -1.02, 0.71, 0.95);
// the banister going down to the right, beyond the door
g.strokeStyle = '#3a2a1e';
g.lineWidth = 0.06;
g.beginPath();
g.moveTo(0.6, -0.95);
g.lineTo(2.2, -0.2);
g.stroke();
g.lineWidth = 0.03;
for (let k = 0; k < 6; k++) {
  const x = 0.7 + k * 0.28;
  g.beginPath();
  g.moveTo(x, -0.9 + k * 0.13);
  g.lineTo(x, 0);
  g.stroke();
}
// the bulb on its cord over the stair's head
g.strokeStyle = '#2a2420';
g.lineWidth = 0.01;
g.beginPath();
g.moveTo(1.1, -2.95);
g.lineTo(1.1, -2.55);
g.stroke();
g.fillStyle = '#fff1cf';
g.beginPath();
g.arc(1.1, -2.5, 0.045, 0, Math.PI * 2);
g.fill();
e.light(1.1, -2.5, 0.2, '#ffd49a', 0.8, 'bulb');
