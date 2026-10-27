// The churchyard's wall: old rubble, waist high, coped with stones on edge, moss along its top; the gate in it to the
// lane — two square piers, a wooden gate shut between them (metres: x along it, y up from its foot).
const gate = -14;
g.fillStyle = '#a39a86';
g.fillRect(-80, -1.15, 160, 1.45);
g.fillStyle = 'rgba(132,124,106,0.6)';
for (let i = 0; i < 260; i++) g.fillRect(-80 + e.rnd() * 160, -1.1 + e.rnd() * 1.1, 0.3 + e.rnd() * 0.4, 0.2);
g.fillStyle = '#b2aa94';
for (let x = -80; x < 80; x += 0.16) g.fillRect(x, -1.32, 0.12, 0.2);
g.fillStyle = 'rgba(92,104,58,0.6)';
for (let i = 0; i < 180; i++) {
  g.beginPath();
  g.ellipse(-80 + e.rnd() * 160, -1.2, 0.2 + e.rnd() * 0.6, 0.06 + e.rnd() * 0.05, 0, 0, Math.PI * 2);
  g.fill();
}
// the gate's opening and the gate
g.save();
g.globalCompositeOperation = 'destination-out';
g.fillRect(gate - 0.75, -1.4, 1.5, 1.8);
g.restore();
g.fillStyle = '#6e5e4a';
for (let x = gate - 0.7; x < gate + 0.7; x += 0.14) g.fillRect(x, -1.0, 0.06, 1.0);
g.fillRect(gate - 0.72, -0.95, 1.44, 0.07);
g.fillRect(gate - 0.72, -0.35, 1.44, 0.07);
for (const x of [gate - 1.2, gate + 0.75]) {
  g.fillStyle = '#b6ae98';
  g.fillRect(x, -1.65, 0.45, 1.95);
  g.fillStyle = '#c4bca6';
  g.fillRect(x - 0.05, -1.75, 0.55, 0.12);
}
