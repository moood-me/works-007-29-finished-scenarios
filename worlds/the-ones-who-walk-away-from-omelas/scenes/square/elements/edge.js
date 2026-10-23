// The square's far edge, 31 m ahead: a low stone kerb with a broad stair going down in the middle to the lower city,
// two stone urns of flowers at the stair's head
g.fillStyle = '#d7ccb6';
g.fillRect(-20, -0.45, 15.5, 0.45);
g.fillRect(4.5, -0.45, 15.5, 0.45);
g.fillStyle = '#c4b8a1';
g.fillRect(-20, -0.5, 15.5, 0.08);
g.fillRect(4.5, -0.5, 15.5, 0.08);
for (const x of [-4.5, 4.5]) {
  g.fillStyle = '#d0c4ad';
  g.beginPath();
  g.moveTo(x - 0.45, -0.45);
  g.lineTo(x - 0.6, -1.25);
  g.lineTo(x + 0.6, -1.25);
  g.lineTo(x + 0.45, -0.45);
  g.closePath();
  g.fill();
  for (let i = 0; i < 9; i++) {
    g.fillStyle = ['#c95f4f', '#e6c45e', '#f1ece2', '#5f7f45'][i % 4];
    g.beginPath();
    g.arc(x - 0.5 + (i % 5) * 0.25, -1.35 - Math.floor(i / 5) * 0.2, 0.17, 0, Math.PI * 2);
    g.fill();
  }
}
