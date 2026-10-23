// The Meeting House, the square's left side, seen along its length (x −8, 6 m ahead, … x 8, 22 m ahead): pale
// limestone, an arcade along the ground floor, tall round-headed windows above, a cornice, festival cloths hung
// between the windows. Nearest the viewer, apart from the arcade, its side door: a low plain door of dark iron-bound
// wood, three steps down to it under a heavy lintel — the way to the cellar (point "meeting#door").
const A = e.anim, H = 13;
g.fillStyle = '#f3e7d0';
g.fillRect(-8, -H, 16, H);
// a plinth and the courses of the stone
g.fillStyle = '#d9cfbb';
g.fillRect(-8, -0.7, 16, 0.7);
g.strokeStyle = '#ddd3c0';
g.lineWidth = 0.04;
for (let y = -0.7; y > -H; y -= 0.55) {
  g.beginPath();
  g.moveTo(-8, y);
  g.lineTo(8, y);
  g.stroke();
}
// the arcade: three arches past the door, their depth shaded
for (let i = 0; i < 3; i++) {
  const x = 1.8 + i * 2.4;
  g.fillStyle = '#a99f8f';
  g.beginPath();
  g.moveTo(x - 0.85, 0);
  g.lineTo(x - 0.85, -2.8);
  g.arc(x, -2.8, 0.85, Math.PI, 0);
  g.lineTo(x + 0.85, 0);
  g.closePath();
  g.fill();
  g.fillStyle = '#8f8576';
  g.fillRect(x - 0.85, -1.4, 1.7, 1.4);
}
// tall windows above, round-headed, with festival cloths hanging between them
for (let i = 0; i < 6; i++) {
  const x = -6.5 + i * 2.6;
  g.fillStyle = '#d6cbb5';
  g.fillRect(x - 0.75, -9.3, 1.5, 3.9);
  g.fillStyle = '#6d7480';
  g.beginPath();
  g.moveTo(x - 0.55, -5.6);
  g.lineTo(x - 0.55, -8.5);
  g.arc(x, -8.5, 0.55, Math.PI, 0);
  g.lineTo(x + 0.55, -5.6);
  g.closePath();
  g.fill();
  if (i < 5) {
    g.fillStyle = ['#e0a49a', '#e9cf86', '#a9c3d6'][i % 3];
    g.beginPath();
    g.moveTo(x + 1.15, -10.4);
    g.lineTo(x + 1.65, -10.4);
    g.lineTo(x + 1.65, -7.2);
    g.lineTo(x + 1.4, -7.6);
    g.lineTo(x + 1.15, -7.2);
    g.closePath();
    g.fill();
  }
}
// the cornice and a frieze under it
g.fillStyle = '#e3d9c6';
g.fillRect(-8, -H - 0.2, 16, 0.9);
g.fillStyle = '#cfc4ae';
g.fillRect(-8, -H + 0.7, 16, 0.2);
for (let x = -7.7; x < 8; x += 0.6) g.fillRect(x, -H + 0.35, 0.25, 0.3);
// the side door, at x −1 (13 m ahead): a heavy lintel, a dark recess, three steps down into it, the door shut
const dx = -1;
g.fillStyle = '#b3a892';
g.fillRect(dx - 0.95, -2.35, 1.9, 0.35);
g.fillStyle = '#5b544b';
g.fillRect(dx - 0.75, -2.0, 1.5, 2.0);
g.fillStyle = '#463a2f';
g.fillRect(dx - 0.6, -1.85, 1.2, 1.55);
g.fillStyle = '#2f2721';
for (const y of [-1.55, -1.0, -0.6]) g.fillRect(dx - 0.6, y, 1.2, 0.07);
g.fillStyle = '#6e6458';
g.beginPath();
g.arc(dx + 0.38, -1.05, 0.05, 0, Math.PI * 2);
g.fill();
// the steps going down to it: their edges lighter
for (let k = 0; k < 3; k++) {
  g.fillStyle = k % 2 ? '#8a8173' : '#9b9282';
  g.fillRect(dx - 0.75, -0.3 + k * 0.1, 1.5, 0.1);
}
e.at(dx, -1.1, 'door');
