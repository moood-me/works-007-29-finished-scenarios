// The university's older building across the lawn: warm brick, rows of tall white-framed windows, a stone cornice
// and a low slate roof; it stands on the campus land 4 m below the laboratory's floor. Metres from its foot.
g.fillStyle = '#a8705a';
g.fillRect(-14, -9, 28, 9.05);
// the brick's courses, faint
g.fillStyle = 'rgba(120,70,55,0.18)';
for (let y = -8.8; y < 0; y += 0.3) g.fillRect(-14, y, 28, 0.03);
// the windows: three storeys, white frames, the glass a darker grey-blue with a pale reflection of the sky
for (const y of [-2.6, -5.2, -7.8]) {
  for (let x = -13; x < 13.5; x += 2.2) {
    g.fillStyle = '#efe9df';
    g.fillRect(x - 0.08, y - 0.08, 1.16, 1.96);
    g.fillStyle = '#5a6672';
    g.fillRect(x, y, 1.0, 1.8);
    g.fillStyle = 'rgba(200,215,228,0.35)';
    g.fillRect(x, y, 1.0, 0.7);
    g.fillStyle = '#efe9df';
    g.fillRect(x + 0.47, y, 0.06, 1.8);
    g.fillRect(x, y + 0.86, 1.0, 0.06);
  }
}
// the cornice and the roof
g.fillStyle = '#d8d0c2';
g.fillRect(-14.2, -9.25, 28.4, 0.3);
g.fillStyle = '#5f6670';
g.beginPath();
g.moveTo(-14, -9.25);
g.lineTo(-12.5, -10.6);
g.lineTo(12.5, -10.6);
g.lineTo(14, -9.25);
g.closePath();
g.fill();
