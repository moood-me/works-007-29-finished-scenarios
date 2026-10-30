// The old face in the window's glass, behind the family (`face`): Sir Simon's — an old man's, gaunt, grey-green, the
// wild white hair of an old portrait and a long grey beard, the cheeks fallen in, the brows heavy over deep sockets and
// in them the eyes, two red coals — pale as a reflection but plain to see in the lightning, looking down at the floor
// where the stain was. One layer; the animate shows it by the key.
const CX = 0, CY = -2.12; // the middle of the face
e.layer('face', {}, f => {
  // the hair: long wild strands out from the crown and down past the ears
  f.lineCap = 'round';
  f.strokeStyle = 'rgba(225,235,228,0.62)';
  for (let i = 0; i < 26; i++) {
    const side = i % 2 ? 1 : -1, k = Math.floor(i / 2) / 13;
    const sx = CX + side * (0.05 + 0.17 * k), sy = CY - 0.3 + 0.12 * k * k;
    f.lineWidth = 0.012 + 0.008 * ((i * 7) % 3) / 2;
    f.beginPath();
    f.moveTo(sx, sy);
    f.bezierCurveTo(sx + side * (0.1 + 0.14 * k), sy - 0.06 + 0.1 * k, sx + side * (0.2 + 0.12 * k), sy + 0.2 + 0.2 * k,
      sx + side * (0.16 + 0.16 * k), sy + 0.42 + 0.22 * k);
    f.stroke();
  }
  // the long beard, from the chin far down
  f.fillStyle = 'rgba(205,218,210,0.62)';
  f.beginPath();
  f.moveTo(CX - 0.17, CY + 0.12);
  f.quadraticCurveTo(CX - 0.16, CY + 0.42, CX - 0.03, CY + 0.62);
  f.lineTo(CX + 0.02, CY + 0.66);
  f.quadraticCurveTo(CX + 0.17, CY + 0.42, CX + 0.17, CY + 0.12);
  f.closePath();
  f.fill();
  f.strokeStyle = 'rgba(150,170,160,0.55)';
  f.lineWidth = 0.006;
  for (let i = -4; i <= 4; i++) {
    f.beginPath();
    f.moveTo(CX + i * 0.035, CY + 0.18);
    f.quadraticCurveTo(CX + i * 0.03, CY + 0.4, CX + i * 0.012, CY + 0.58);
    f.stroke();
  }
  // the face: long and gaunt
  const skin = f.createRadialGradient(CX, CY - 0.06, 0.03, CX, CY, 0.3);
  skin.addColorStop(0, 'rgba(222,238,228,0.86)');
  skin.addColorStop(1, 'rgba(170,198,185,0.8)');
  f.fillStyle = skin;
  f.beginPath();
  f.ellipse(CX, CY, 0.2, 0.29, 0, 0, Math.PI * 2);
  f.fill();
  // the fallen cheeks and temples
  f.fillStyle = 'rgba(80,105,95,0.35)';
  for (const s of [-1, 1]) {
    f.beginPath();
    f.ellipse(CX + s * 0.12, CY + 0.06, 0.06, 0.11, s * 0.2, 0, Math.PI * 2);
    f.fill();
    f.beginPath();
    f.ellipse(CX + s * 0.16, CY - 0.13, 0.04, 0.07, 0, 0, Math.PI * 2);
    f.fill();
  }
  // the moustache over the mouth, the mouth turned down
  f.fillStyle = 'rgba(200,214,206,0.85)';
  f.beginPath();
  f.moveTo(CX - 0.11, CY + 0.16);
  f.quadraticCurveTo(CX, CY + 0.08, CX + 0.11, CY + 0.16);
  f.quadraticCurveTo(CX, CY + 0.12, CX - 0.11, CY + 0.16);
  f.fill();
  f.strokeStyle = 'rgba(30,45,40,0.75)';
  f.lineWidth = 0.01;
  f.beginPath();
  f.moveTo(CX - 0.06, CY + 0.18);
  f.quadraticCurveTo(CX, CY + 0.16, CX + 0.06, CY + 0.18);
  f.stroke();
  // the nose, long, its shadow
  f.strokeStyle = 'rgba(60,85,75,0.6)';
  f.lineWidth = 0.012;
  f.beginPath();
  f.moveTo(CX + 0.01, CY - 0.06);
  f.quadraticCurveTo(CX + 0.03, CY + 0.04, CX + 0.0, CY + 0.08);
  f.stroke();
  // the sockets, deep under the heavy brows
  f.fillStyle = 'rgba(15,24,22,0.92)';
  for (const s of [-1, 1]) {
    f.beginPath();
    f.ellipse(CX + s * 0.08, CY - 0.08, 0.06, 0.042, s * -0.15, 0, Math.PI * 2);
    f.fill();
  }
  f.strokeStyle = 'rgba(235,240,236,0.8)';
  f.lineWidth = 0.022;
  for (const s of [-1, 1]) {
    f.beginPath();
    f.moveTo(CX + s * 0.025, CY - 0.13);
    f.quadraticCurveTo(CX + s * 0.08, CY - 0.17, CX + s * 0.15, CY - 0.12);
    f.stroke();
  }
  // the eyes: two coals, burning
  for (const s of [-1, 1]) {
    const x = CX + s * 0.08, y = CY - 0.075;
    const coal = f.createRadialGradient(x, y, 0, x, y, 0.035);
    coal.addColorStop(0, '#fff0b0');
    coal.addColorStop(0.35, '#ff6a2a');
    coal.addColorStop(1, 'rgba(160,20,0,0)');
    f.fillStyle = coal;
    f.beginPath();
    f.arc(x, y, 0.035, 0, Math.PI * 2);
    f.fill();
  }
  e.light(CX, CY - 0.075, 0.14, '#ff6a3a', 0.8, 'eyes');
});
