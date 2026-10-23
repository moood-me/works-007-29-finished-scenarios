// The line's office over the field: a plain two-storey block in pale stucco, a flat roof with a parapet, the radio
// mast on it with its wires. Below, the bureau (the telegraph, the map); upstairs, the big window of Rivière's office
// looking out over the field. The windows' frames are painted here, dark; their lit glass is `office_windows`.
const WIN_LOW = [-6.5, -3.6, -0.7, 2.2, 5.1];
const WIN_UP = [-6.5, -3.6, 5.1];
g.fillStyle = '#cbbd9f';
g.fillRect(-8.5, -8.2, 17, 8.2);
// the parapet and the cornice
g.fillStyle = '#b5a88c';
g.fillRect(-8.7, -8.6, 17.4, 0.5);
g.fillRect(-8.6, -4.15, 17.2, 0.18);
// the plinth
g.fillStyle = '#9d927b';
g.fillRect(-8.5, -0.6, 17, 0.6);
// windows: dark openings with pale frames
const win = (x, y, w, h) => {
  g.fillStyle = '#e6dfcf';
  g.fillRect(x - 0.08, y - 0.08, w + 0.16, h + 0.16);
  g.fillStyle = '#39404e';
  g.fillRect(x, y, w, h);
  g.fillStyle = '#e6dfcf';
  g.fillRect(x + w / 2 - 0.04, y, 0.08, h);
  g.fillRect(x, y + h * 0.35, w, 0.06);
};
for (const x of WIN_LOW) win(x, -3.3, 1.5, 2.1);
for (const x of WIN_UP) win(x, -7.2, 1.5, 2.2);
// Rivière's window, wider
win(0.6, -7.3, 3.2, 2.4);
// the door
g.fillStyle = '#5a4d3e';
g.fillRect(7.0, -2.6, 1.1, 2.6);
// the radio mast on the roof and its stays
g.strokeStyle = '#4f535a';
g.lineWidth = 0.12;
g.beginPath();
g.moveTo(-5, -8.6);
g.lineTo(-5, -13);
g.stroke();
g.lineWidth = 0.03;
g.beginPath();
g.moveTo(-5, -12.8);
g.lineTo(-8.3, -8.6);
g.moveTo(-5, -12.8);
g.lineTo(-1.7, -8.6);
g.moveTo(-5, -12.2);
g.lineTo(8.6, -11.2);
g.stroke();
