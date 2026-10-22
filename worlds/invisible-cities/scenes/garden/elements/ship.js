// The big ship at anchor off the lighthouse, waiting for the dawn: a dark hull, three bare masts, her lamps — the
// stern lantern, the bow, the masthead, a row of lit ports (`ship#lights`)
g.fillStyle = '#172038';
g.beginPath();
g.moveTo(-38, -7);
g.lineTo(32, -7);
g.lineTo(42, -10);
g.lineTo(36, 0);
g.lineTo(-33, 0);
g.lineTo(-38, -9);
g.closePath();
g.fill();
g.fillRect(-36, -11, 12, 4);
g.strokeStyle = '#172038';
g.lineWidth = 0.9;
for (const [x, h] of [[-20, 36], [2, 42], [22, 34]]) {
  g.beginPath();
  g.moveTo(x, -7);
  g.lineTo(x, -7 - h);
  g.stroke();
  g.lineWidth = 0.5;
  g.beginPath();
  g.moveTo(x - 9, -7 - h * 0.62);
  g.lineTo(x + 9, -7 - h * 0.62);
  g.moveTo(x - 6, -7 - h * 0.85);
  g.lineTo(x + 6, -7 - h * 0.85);
  g.stroke();
  g.lineWidth = 0.9;
}
g.lineWidth = 0.35;
g.beginPath();
g.moveTo(42, -10);
g.lineTo(22, -41);
g.moveTo(-36, -11);
g.lineTo(-20, -43);
g.stroke();
g.fillStyle = '#ffd593';
for (let i = 0; i < 7; i++) {
  const x = -26 + i * 8;
  g.fillRect(x, -4.2, 1.4, 1.2);
  e.light(x + 0.7, -3.6, 1.6, '#ffcb80', 0.5);
}
e.light(-37, -12, 2.4, '#ffd08a', 0.9);
e.light(41, -11, 2, '#ffe0a8', 0.8);
e.light(2, -50, 2, '#fff0d0', 0.7);
e.at(0, -12, 'lights');
