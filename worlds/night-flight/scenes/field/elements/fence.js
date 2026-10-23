// The field's fence far off: wooden posts every four metres and three wires, the gate standing open on the left.
g.strokeStyle = '#7a7466';
g.lineWidth = 0.04;
for (const y of [-0.5, -0.95, -1.4]) {
  for (const [a, b] of [[-220, -66], [-58, 220]]) {
    g.beginPath();
    g.moveTo(a, y);
    g.lineTo(b, y);
    g.stroke();
  }
}
g.fillStyle = '#6a604f';
for (let x = -220; x <= 220; x += 4) {
  if (x > -66 && x < -58) continue;
  g.fillRect(x - 0.07, -1.55 - 0.1 * e.rnd(), 0.14, 1.6);
}
// the gate: two tall posts and its leaf swung open toward the field
g.fillRect(-66.15, -2.1, 0.3, 2.15);
g.fillRect(-58.15, -2.1, 0.3, 2.15);
g.strokeStyle = '#8b8372';
g.lineWidth = 0.08;
g.strokeRect(-66, -1.6, 3.2, 1.3);
g.beginPath();
g.moveTo(-66, -0.3);
g.lineTo(-62.8, -1.6);
g.stroke();
