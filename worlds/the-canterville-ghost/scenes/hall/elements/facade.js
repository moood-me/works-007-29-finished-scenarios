// What she sees, looking up from the porch (an insert, opened by `facade_open`; «Пятно», the morning they leave): the
// house's grey stone front from below, high up the Tapestry Chamber's window under its Tudor arch — leaded diamonds,
// dark glass with the morning sky in it, a stone sill, ivy up the wall beside it. Nobody at the glass.
const W = e.aspect;
const cx = W / 2;
// the stone: ashlar courses, a cold grey morning light from the left
const wall = g.createLinearGradient(cx - 0.9, 0, cx + 0.9, 1);
wall.addColorStop(0, '#8d8b84');
wall.addColorStop(1, '#6b6a65');
g.fillStyle = wall;
g.fillRect(cx - 1.2, -0.1, 2.4, 1.2);
g.strokeStyle = 'rgba(40,40,38,0.35)';
g.lineWidth = 0.004;
for (let y = 0.02, row = 0; y < 1.1; y += 0.075, row++) {
  g.beginPath();
  g.moveTo(cx - 1.2, y);
  g.lineTo(cx + 1.2, y);
  g.stroke();
  for (let x = cx - 1.2 + (row % 2) * 0.09; x < cx + 1.2; x += 0.18) {
    g.beginPath();
    g.moveTo(x, y);
    g.lineTo(x, y + 0.075);
    g.stroke();
  }
}
// the window: its stone surround, the arch, the glass (leaded diamonds, the pale sky in it), the mullion
const x0 = cx - 0.2, x1 = cx + 0.2, top = 0.18, foot = 0.78;
g.fillStyle = '#a8a59c';
g.beginPath();
g.moveTo(x0 - 0.05, foot + 0.03);
g.lineTo(x0 - 0.05, top + 0.08);
g.quadraticCurveTo(cx, top - 0.06, x1 + 0.05, top + 0.08);
g.lineTo(x1 + 0.05, foot + 0.03);
g.closePath();
g.fill();
const glass = g.createLinearGradient(0, top, 0, foot);
glass.addColorStop(0, '#9fb0c2');
glass.addColorStop(1, '#3d4652');
g.fillStyle = glass;
g.beginPath();
g.moveTo(x0, foot);
g.lineTo(x0, top + 0.09);
g.quadraticCurveTo(cx, top - 0.02, x1, top + 0.09);
g.lineTo(x1, foot);
g.closePath();
g.fill();
g.save();
g.clip();
g.strokeStyle = 'rgba(30,32,36,0.7)';
g.lineWidth = 0.003;
for (let k = -12; k < 12; k++) {
  g.beginPath();
  g.moveTo(x0 + k * 0.05, top);
  g.lineTo(x0 + k * 0.05 + 0.6, foot);
  g.moveTo(x0 + k * 0.05 + 0.6, top);
  g.lineTo(x0 + k * 0.05, foot);
  g.stroke();
}
// the cold sky's light caught in the upper panes
g.fillStyle = 'rgba(230,236,245,0.18)';
g.fillRect(x0, top, 0.4, 0.15);
g.restore();
g.fillStyle = '#a8a59c';
g.fillRect(cx - 0.012, top + 0.03, 0.024, foot - top);
g.fillRect(x0, 0.46, 0.4, 0.02);
// the sill
g.fillStyle = '#b5b2a8';
g.fillRect(x0 - 0.08, foot, 0.56, 0.035);
g.fillStyle = 'rgba(0,0,0,0.3)';
g.fillRect(x0 - 0.08, foot + 0.035, 0.56, 0.015);
// the ivy climbing beside it
for (let i = 0; i < 70; i++) {
  const y = 1.05 - e.rnd() * 0.95, x = x1 + 0.12 + Math.sin(y * 9) * 0.05 + (e.rnd() - 0.5) * 0.12;
  g.fillStyle = e.rnd() < 0.5 ? '#2f4a2a' : '#3d5c33';
  g.beginPath();
  g.ellipse(x, y, 0.022, 0.016, e.rnd() * 3, 0, Math.PI * 2);
  g.fill();
}
