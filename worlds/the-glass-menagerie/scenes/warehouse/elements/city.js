// The city's backs below and beyond the window: from the yards 12 m under the storeroom's floor (the card's foot),
// the rear walls (a gap of low sheds just right of the middle, where the harbour shows through) of tenements and lofts in faded brick and soot, their roofs and parapets, water tanks on their
// stilts, a tall factory chimney (its top the point `stack`, where the smoke comes out), fire escapes in thin dark
// lines, a few washing lines; metres across from the card's anchor, y up negative.
const blocks = [
  [-30, 6, 15, '#9b7563'], [-24, 7, 19, '#8a6a5c'], [-17, 5, 13, '#a3836d'], [-12, 6, 17, '#7f6458'],
  [-6, 5, 11, '#a88a72'], [-1, 4, 6, '#94725f'], [3, 7, 5, '#8c766a'], [10, 6, 16, '#9a7a66'],
  [16, 5, 10, '#a78a76'], [21, 8, 18, '#866659'], [29, 6, 13, '#9c806c'],
];
for (const [x, w, h, c] of blocks) {
  g.fillStyle = c;
  g.fillRect(x, -h, w, h + 0.05);
  // the parapet and its coping
  g.fillStyle = 'rgba(70,52,46,0.55)';
  g.fillRect(x - 0.1, -h - 0.4, w + 0.2, 0.4);
  // rows of windows, a few with a blind down, a few bright with the sun on the glass
  for (let y = -h + 1.2; y < -1; y += 2.8) {
    for (let wx = x + 0.6; wx < x + w - 0.8; wx += 1.5) {
      const r = e.rnd();
      g.fillStyle = r < 0.15 ? '#e8dcc0' : r < 0.45 ? '#6c6466' : '#4d4648';
      g.fillRect(wx, y, 0.7, 1.3);
    }
  }
  // soot down from the coping
  const s = g.createLinearGradient(0, -h, 0, -h + 4);
  s.addColorStop(0, 'rgba(50,38,34,0.35)');
  s.addColorStop(1, 'rgba(50,38,34,0)');
  g.fillStyle = s;
  g.fillRect(x, -h, w, 4);
}
// fire escapes zigzagging down two of the backs
g.strokeStyle = 'rgba(40,32,32,0.8)';
g.lineWidth = 0.12;
for (const [x, h] of [[-23, 19], [11, 16]]) {
  for (let y = -h + 2; y < -1; y += 2.8) {
    g.beginPath();
    g.moveTo(x, y);
    g.lineTo(x + 3, y);
    g.moveTo(x + 3, y);
    g.lineTo(x, y + 2.8);
    g.stroke();
  }
}
// washing on a line strung across one of the backs
g.strokeStyle = 'rgba(60,50,50,0.6)';
g.lineWidth = 0.05;
g.beginPath();
g.moveTo(-11, -9);
g.quadraticCurveTo(-8.5, -8.3, -6, -9.2);
g.stroke();
for (const [x, c] of [[-10.2, '#e9e3d6'], [-9.3, '#c9d2dc'], [-8.2, '#e2cfc6'], [-7.2, '#ecebe2']]) {
  g.fillStyle = c;
  g.fillRect(x, -8.75, 0.6, 0.9);
}
// water tanks on their stilts
for (const [x, h] of [[-21, 19], [12, 16], [23, 18]]) {
  g.fillStyle = '#4e423c';
  g.fillRect(x - 0.9, -h - 2.6, 0.15, 2.6);
  g.fillRect(x + 0.75, -h - 2.6, 0.15, 2.6);
  g.fillStyle = '#6d5a4b';
  g.fillRect(x - 1.1, -h - 5.2, 2.2, 2.7);
  g.fillStyle = '#574a42';
  g.beginPath();
  g.moveTo(x - 1.2, -h - 5.2);
  g.lineTo(x, -h - 6.1);
  g.lineTo(x + 1.2, -h - 5.2);
  g.fill();
  g.fillStyle = 'rgba(40,30,26,0.35)';
  for (let k = -h - 4.8; k < -h - 2.6; k += 0.6) g.fillRect(x - 1.1, k, 2.2, 0.08);
}
// the factory chimney, banded, rising past the roofs
g.fillStyle = '#7a5a4c';
g.beginPath();
g.moveTo(-14.6, -13);
g.lineTo(-13.6, -27);
g.lineTo(-12.6, -27);
g.lineTo(-11.6, -13);
g.fill();
g.fillStyle = '#5a4038';
g.fillRect(-13.8, -27.2, 1.4, 0.5);
g.fillRect(-13.9, -22, 1.6, 0.3);
e.at(-13.1, -27.3, 'stack');
