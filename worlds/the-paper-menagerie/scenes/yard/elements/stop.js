// The school bus stop on our side of the street: a grey post with the yellow sign (a black bus drawn on it, no words),
// and under it a low concrete block the children sit and stand on.
g.fillStyle = '#8d8f94';
g.fillRect(-0.035, -2.3, 0.07, 2.3);
g.fillStyle = '#e8be2c';
g.fillRect(-0.3, -2.35, 0.6, 0.42);
g.strokeStyle = '#2a2a2a';
g.lineWidth = 0.02;
g.strokeRect(-0.28, -2.33, 0.56, 0.38);
g.fillStyle = '#2a2a2a';
g.fillRect(-0.2, -2.22, 0.38, 0.14);
g.fillRect(0.12, -2.25, 0.06, 0.17);
for (const x of [-0.12, 0.1]) {
  g.beginPath();
  g.arc(x, -2.07, 0.03, 0, Math.PI * 2);
  g.fill();
}
g.fillStyle = '#f2e2a0';
for (let i = 0; i < 4; i++) g.fillRect(-0.17 + i * 0.075, -2.2, 0.05, 0.05);
g.fillStyle = '#b9b4a8';
g.fillRect(0.15, -0.4, 0.9, 0.4);
g.fillStyle = '#a49f94';
g.fillRect(0.15, -0.4, 0.9, 0.04);
e.at(0, -2.14, 'sign');
