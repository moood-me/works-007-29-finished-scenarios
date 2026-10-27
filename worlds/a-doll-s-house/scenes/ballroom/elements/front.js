// The doll's house's open front, a storey up: the Stenborgs' ballroom is a room of the same cabinet, its front taken
// away. Round the opening (7 m wide, 3.4 m high, its foot at the floor) the cut of the house — the plaster of the side
// walls' ends and of the floor above with its joists — and round that the cabinet: green-black lacquer with gilt
// mouldings, the cornice of its top storey with a gilt garland in the middle.
const LACQUER = '#253029';
const GILT = '#b8954f';
g.fillStyle = LACQUER;
g.fillRect(-7.5, -4.6, 15, 4.62);
// the cabinet's panels on either side, framed in gilt
g.strokeStyle = GILT;
g.lineWidth = 0.03;
for (const s of [-1, 1]) {
  const x = s > 0 ? 4.05 : -7.2;
  g.strokeRect(x, -3.1, 3.15, 2.8);
  g.strokeRect(x + 0.07, -3.03, 3.01, 2.66);
}
// the cornice of the top storey: dentils under a gilt-edged crown, a garland swagged in the middle
g.fillStyle = '#1d2621';
g.fillRect(-7.5, -4.6, 15, 0.6);
g.fillStyle = GILT;
g.fillRect(-7.5, -4.02, 15, 0.035);
g.fillStyle = '#2f3b33';
for (let x = -7.5; x < 7.5; x += 0.16) g.fillRect(x, -3.96, 0.09, 0.1);
g.fillStyle = GILT;
g.fillRect(-7.5, -3.84, 15, 0.02);
g.strokeStyle = GILT;
g.lineWidth = 0.035;
for (const s of [-1, 1]) {
  g.beginPath();
  g.moveTo(0, -4.42);
  g.quadraticCurveTo(s * 0.55, -4.1, s * 1.1, -4.42);
  g.quadraticCurveTo(s * 1.5, -4.18, s * 1.9, -4.42);
  g.stroke();
}
g.fillStyle = GILT;
g.beginPath();
g.ellipse(0, -4.36, 0.16, 0.11, 0, 0, Math.PI * 2);
g.fill();
// the cut of the house: the side walls' ends and the floor above, plaster, a gilt fillet round them
g.fillStyle = '#e2d6bf';
g.fillRect(-3.78, -3.82, 7.56, 3.82);
g.fillStyle = '#c4ad8a';
for (let x = -3.5; x < 3.5; x += 0.6) g.fillRect(x + 0.24, -3.72, 0.1, 0.24);
g.fillStyle = '#d6c8ad';
g.fillRect(-3.78, -3.82, 7.56, 0.07);
g.strokeStyle = GILT;
g.lineWidth = 0.035;
g.strokeRect(-3.8, -3.84, 7.6, 3.85);
// the room itself: the opening
g.globalCompositeOperation = 'destination-out';
g.fillRect(-3.5, -3.4, 7.0, 3.45);
g.globalCompositeOperation = 'source-over';
