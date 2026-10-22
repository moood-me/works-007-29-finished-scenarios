// The doll's house's open front: the flat is a room of a cabinet whose front is taken away. Round the opening (6 m wide,
// 3 m high, its foot at the floor) the cut of the house — the plaster of the side walls' ends and of the floor above
// with its joists — and round that the cabinet: green-black lacquer with gilt mouldings, a cornice over the top.
const LACQUER = '#253029';
const GILT = '#b8954f';
g.fillStyle = LACQUER;
g.fillRect(-7, -4.8, 14, 4.82);
// the cabinet's panels on either side, framed in gilt
g.strokeStyle = GILT;
g.lineWidth = 0.03;
for (const s of [-1, 1]) {
  g.strokeRect(s > 0 ? 3.55 : -6.75, -2.9, 3.2, 2.6);
  g.strokeRect(s > 0 ? 3.62 : -6.68, -2.83, 3.06, 2.46);
}
// the cornice: a band of dentils under a gilt-edged crown
g.fillStyle = '#1d2621';
g.fillRect(-7, -4.8, 14, 0.5);
g.fillStyle = GILT;
g.fillRect(-7, -4.32, 14, 0.035);
g.fillStyle = '#2f3b33';
for (let x = -7; x < 7; x += 0.16) g.fillRect(x, -4.26, 0.09, 0.12);
g.fillStyle = GILT;
g.fillRect(-7, -4.12, 14, 0.02);
// the cut of the house: the side walls' ends and the floor above, plaster, a gilt fillet round them
g.fillStyle = '#e2d6bf';
g.fillRect(-3.28, -3.5, 6.56, 3.5);
// the joists of the floor above, cut across
g.fillStyle = '#8c6c4b';
for (let x = -3.0; x < 3.0; x += 0.6) g.fillRect(x + 0.22, -3.42, 0.14, 0.3);
g.fillStyle = '#d6c8ad';
g.fillRect(-3.28, -3.5, 6.56, 0.07);
g.strokeStyle = GILT;
g.lineWidth = 0.035;
g.strokeRect(-3.3, -3.52, 6.6, 3.53);
// the room itself: the opening
g.globalCompositeOperation = 'destination-out';
g.fillRect(-3.0, -3.0, 6.0, 3.05);
g.globalCompositeOperation = 'source-over';
