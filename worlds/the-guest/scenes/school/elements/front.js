// The school's front: a long low whitewashed wall of rough stone (metres, x along it from its middle, y up from the
// ground), the lime gone grey and streaked at the foot, an ochre plinth; the classroom's door (faded blue boards) at
// x −2.4 over the terrace, its windows with blue shutters at x 0.6 and 3.6, Daru's room's small window at x −5;
// snow on the sills.
g.fillStyle = '#e8e3d6';
g.fillRect(-6.2, -3.42, 12.4, 3.42);
// the lime's unevenness: patches a shade warmer or greyer
for (let i = 0; i < 60; i++) {
  g.fillStyle = e.rnd() < 0.5 ? 'rgba(214,206,190,0.45)' : 'rgba(244,241,234,0.5)';
  g.beginPath();
  g.ellipse(-6 + e.rnd() * 12, -3.2 + e.rnd() * 3, 0.2 + e.rnd() * 0.6, 0.1 + e.rnd() * 0.3, 0, 0, Math.PI * 2);
  g.fill();
}
// streaks of damp from the eaves
for (let i = 0; i < 14; i++) {
  const x = -6 + e.rnd() * 12;
  const r = g.createLinearGradient(0, -3.42, 0, -2.2);
  r.addColorStop(0, 'rgba(160,150,132,0.4)');
  r.addColorStop(1, 'rgba(160,150,132,0)');
  g.fillStyle = r;
  g.fillRect(x, -3.42, 0.08 + e.rnd() * 0.2, 1.2);
}
// the plinth
g.fillStyle = '#b9a785';
g.fillRect(-6.2, -0.55, 12.4, 0.55);
g.fillStyle = 'rgba(120,110,95,0.35)';
g.fillRect(-6.2, -0.55, 12.4, 0.05);
// the classroom's door: a stone frame, boards of faded blue, an iron latch
g.fillStyle = '#cfc6b3';
g.fillRect(-3.05, -2.75, 1.3, 2.3);
g.fillStyle = '#4f7884';
g.fillRect(-2.9, -2.6, 1.0, 2.15);
g.strokeStyle = '#3e626d';
g.lineWidth = 0.025;
for (let x = -2.9 + 0.2; x < -1.9; x += 0.2) {
  g.beginPath();
  g.moveTo(x, -2.6);
  g.lineTo(x, -0.45);
  g.stroke();
}
g.fillStyle = '#2b2a28';
g.fillRect(-2.06, -1.55, 0.05, 0.16);
// a window: its stone frame, dark panes with their bars, the shutters folded back, snow along the sill
function win(x, w, h, top) {
  g.fillStyle = '#cfc6b3';
  g.fillRect(x - w / 2 - 0.1, top - 0.1, w + 0.2, h + 0.2);
  g.fillStyle = '#34414b';
  g.fillRect(x - w / 2, top, w, h);
  g.strokeStyle = '#d9d2c2';
  g.lineWidth = 0.04;
  g.beginPath();
  g.moveTo(x, top);
  g.lineTo(x, top + h);
  g.moveTo(x - w / 2, top + h / 2);
  g.lineTo(x + w / 2, top + h / 2);
  g.stroke();
  g.fillStyle = '#4d7690';
  g.fillRect(x - w / 2 - 0.1 - w / 2, top, w / 2 - 0.02, h);
  g.fillRect(x + w / 2 + 0.12, top, w / 2 - 0.02, h);
  g.strokeStyle = '#3e6178';
  g.lineWidth = 0.02;
  for (const sx of [-1, 1]) {
    const x0 = sx < 0 ? x - w - 0.1 : x + w / 2 + 0.12;
    for (let y = top + 0.15; y < top + h; y += 0.15) {
      g.beginPath();
      g.moveTo(x0, y);
      g.lineTo(x0 + w / 2 - 0.02, y);
      g.stroke();
    }
  }
  g.fillStyle = '#f1f3f5';
  g.beginPath();
  g.moveTo(x - w / 2 - 0.12, top + h + 0.1);
  g.quadraticCurveTo(x, top + h - 0.02, x + w / 2 + 0.12, top + h + 0.1);
  g.lineTo(x + w / 2 + 0.12, top + h + 0.13);
  g.lineTo(x - w / 2 - 0.12, top + h + 0.13);
  g.closePath();
  g.fill();
}
win(0.6, 0.9, 1.2, -2.45);
win(3.6, 0.9, 1.2, -2.45);
win(-5.0, 0.6, 0.8, -2.25);
// snow banked against the foot of the wall where the terrace does not cover it
g.fillStyle = '#eef1f4';
g.beginPath();
g.moveTo(-6.2, 0.02);
g.quadraticCurveTo(-5.6, -0.42, -4.8, -0.2);
g.quadraticCurveTo(-4.4, -0.08, -4.1, 0.02);
g.closePath();
g.fill();
