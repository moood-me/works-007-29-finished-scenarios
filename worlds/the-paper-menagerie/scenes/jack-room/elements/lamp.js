// Jack's bedside lamp on the cupboard (its anchor the cupboard's top): a turned maple foot, a cream pleated shade, the
// bulb under it — the scene's light "lamp" — and beside it the red alarm clock with two bells (packed away once the
// room is emptied, `packed`; the lamp stays, unlit).
{
  g.fillStyle = '#b8895a';
  g.beginPath();
  g.ellipse(-0.04, -0.012, 0.06, 0.014, 0, 0, Math.PI * 2);
  g.fill();
  g.fillRect(-0.052, -0.2, 0.024, 0.19);
  g.beginPath();
  g.ellipse(-0.04, -0.12, 0.028, 0.035, 0, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = '#efe2c4';
  g.beginPath();
  g.moveTo(-0.1, -0.33);
  g.lineTo(0.02, -0.33);
  g.lineTo(0.06, -0.19);
  g.lineTo(-0.14, -0.19);
  g.closePath();
  g.fill();
  g.strokeStyle = 'rgba(190,170,130,0.5)';
  g.lineWidth = 0.003;
  for (let i = 1; i < 7; i++) {
    const u = i / 7;
    g.beginPath();
    g.moveTo(-0.1 + 0.12 * u, -0.33);
    g.lineTo(-0.14 + 0.2 * u, -0.19);
    g.stroke();
  }
  g.fillStyle = '#fff3d6';
  g.beginPath();
  g.ellipse(-0.04, -0.19, 0.035, 0.01, 0, 0, Math.PI * 2);
  g.fill();
  e.light(-0.04, -0.2, 0.14, '#ffdba6', 1.2, 'bulb');
}
if (!e.state.packed) {
  // the alarm clock
  g.fillStyle = '#c4433a';
  g.beginPath();
  g.arc(0.12, -0.055, 0.045, 0, Math.PI * 2);
  g.fill();
  g.beginPath();
  g.arc(0.095, -0.105, 0.016, 0, Math.PI * 2);
  g.arc(0.145, -0.105, 0.016, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = '#f6f1e2';
  g.beginPath();
  g.arc(0.12, -0.055, 0.034, 0, Math.PI * 2);
  g.fill();
  g.strokeStyle = '#2a2624';
  g.lineWidth = 0.004;
  g.beginPath();
  g.moveTo(0.12, -0.055);
  g.lineTo(0.12, -0.08);
  g.moveTo(0.12, -0.055);
  g.lineTo(0.137, -0.05);
  g.stroke();
  g.fillRect(0.09, -0.012, 0.008, 0.012);
  g.fillRect(0.142, -0.012, 0.008, 0.012);
}
