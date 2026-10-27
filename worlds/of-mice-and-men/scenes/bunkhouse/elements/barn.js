// The barn across the yard (metres, its foot at the middle): a long gabled barn of dark red boards, its big doors
// open and lamplit inside — where the men have gone to see Slim's pups —, a hay hood under the ridge, the stable's
// lean-to on the left with Crooks's small lit window.
const W = 14, H = 7.2;
// the lean-to
g.fillStyle = '#5a3a30';
g.fillRect(-W / 2 - 5, -3.4, 5.2, 3.4);
g.fillStyle = '#463029';
g.beginPath();
g.moveTo(-W / 2 - 5.4, -3.3);
g.lineTo(-W / 2 + 0.2, -4.6);
g.lineTo(-W / 2 + 0.2, -4.2);
g.lineTo(-W / 2 - 5.4, -2.9);
g.closePath();
g.fill();
// the barn's wall and gable
g.fillStyle = '#6b3b31';
g.beginPath();
g.moveTo(-W / 2, 0);
g.lineTo(-W / 2, -4.6);
g.lineTo(0, -H - 2.2);
g.lineTo(W / 2, -4.6);
g.lineTo(W / 2, 0);
g.closePath();
g.fill();
g.strokeStyle = 'rgba(40,22,18,0.45)';
g.lineWidth = 0.05;
for (let x = -W / 2 + 0.3; x < W / 2; x += 0.3) {
  g.beginPath();
  g.moveTo(x, 0);
  g.lineTo(x, -4.6 - (W / 2 - Math.abs(x)) * ((H + 2.2 - 4.6) / (W / 2)));
  g.stroke();
}
// the roof's edges
g.strokeStyle = '#3c2a26';
g.lineWidth = 0.35;
g.beginPath();
g.moveTo(-W / 2 - 0.5, -4.3);
g.lineTo(0, -H - 2.5);
g.lineTo(W / 2 + 0.5, -4.3);
g.stroke();
// the hay door under the ridge, the hood over it
g.fillStyle = '#3a221d';
g.fillRect(-0.9, -7.6, 1.8, 1.6);
g.fillStyle = '#4a2d26';
g.fillRect(-1.1, -7.8, 2.2, 0.25);
// the big doors open on the lamplit inside, the hay and a stall's post in the light
g.fillStyle = '#e0a45c';
g.fillRect(-1.9, -3.8, 3.8, 3.8);
g.fillStyle = '#b77a40';
g.fillRect(-1.9, -1.2, 3.8, 1.2);
g.fillStyle = '#7a4c2a';
g.fillRect(0.6, -3.8, 0.16, 3.8);
g.fillStyle = '#c98b4a';
g.fillRect(-1.9, -3.8, 3.8, 0.35);
g.fillStyle = '#5a332a';
g.fillRect(-3.8, -3.9, 1.9, 3.9);
g.fillRect(1.9, -3.9, 1.9, 3.9);
g.strokeStyle = 'rgba(30,18,14,0.6)';
g.lineWidth = 0.08;
for (const x0 of [-3.8, 1.9]) {
  g.beginPath();
  g.moveTo(x0, -3.9);
  g.lineTo(x0 + 1.9, 0);
  g.moveTo(x0 + 1.9, -3.9);
  g.lineTo(x0, 0);
  g.stroke();
}
e.light(0, -1.8, 2.4, '#ffb466', 0.9, 'door');
// Crooks's window in the lean-to
g.fillStyle = '#f0b465';
g.fillRect(-W / 2 - 3.2, -2.3, 0.7, 0.6);
e.light(-W / 2 - 2.85, -2.0, 0.6, '#ffbb70', 0.6, 'crooks');
