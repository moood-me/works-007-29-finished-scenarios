// The twins' ghost at the corner, from before (2 m), when `spook` is "standing": a broomstick under a white bed sheet
// draped from a crossbar for shoulders to the floor, a hollow turnip for a head with a candle burning inside (its eyes
// and grin cut out; the light spook#turnip), a kitchen knife held up in one stick hand, and on its chest the
// placard. Nothing when it is not standing (on the floor it is spook_bits). Points `turnip`, `placard`.
if (e.state.spook === 'standing') {
  // the sheet: from the crossbar to the floor, wider at the hem, its folds and its ragged edge
  g.fillStyle = '#ece8de';
  g.beginPath();
  g.moveTo(-0.08, -1.66);
  g.quadraticCurveTo(-0.3, -1.62, -0.36, -1.52);
  g.lineTo(-0.5, -1.2);
  g.lineTo(-0.38, -1.12);
  g.lineTo(-0.36, -0.6);
  g.lineTo(-0.44, 0);
  for (let x = -0.44; x < 0.44; x += 0.11) g.lineTo(x + 0.055, -0.06 + (Math.round(x * 100) % 2 ? 0.02 : 0));
  g.lineTo(0.44, 0);
  g.lineTo(0.36, -0.6);
  g.lineTo(0.38, -1.12);
  g.lineTo(0.56, -1.36);
  g.lineTo(0.46, -1.44);
  g.lineTo(0.36, -1.52);
  g.quadraticCurveTo(0.3, -1.62, 0.08, -1.66);
  g.closePath();
  g.fill();
  g.strokeStyle = '#c8c2b4';
  g.lineWidth = 0.014;
  for (const x of [-0.22, -0.08, 0.1, 0.24]) {
    g.beginPath();
    g.moveTo(x * 0.6, -1.5);
    g.quadraticCurveTo(x * 1.1, -0.8, x * 1.3, -0.05);
    g.stroke();
  }
  // the stick hand out to the right, the kitchen knife up in it
  g.strokeStyle = '#6a4a2a';
  g.lineWidth = 0.025;
  g.beginPath();
  g.moveTo(0.5, -1.38);
  g.lineTo(0.62, -1.46);
  g.stroke();
  g.fillStyle = '#2a201a';
  g.fillRect(0.6, -1.56, 0.03, 0.12);
  g.fillStyle = '#c8ccd0';
  g.beginPath();
  g.moveTo(0.6, -1.56);
  g.lineTo(0.63, -1.56);
  g.lineTo(0.62, -1.8);
  g.quadraticCurveTo(0.6, -1.72, 0.6, -1.56);
  g.closePath();
  g.fill();
  // the placard on its chest, lettered in black paint
  g.fillStyle = '#d6c8a2';
  g.fillRect(-0.24, -1.4, 0.48, 0.3);
  g.strokeStyle = '#5a4a32';
  g.lineWidth = 0.01;
  g.strokeRect(-0.24, -1.4, 0.48, 0.3);
  g.fillStyle = '#1a1612';
  g.textAlign = 'center';
  g.font = 'bold 0.05px serif';
  g.fillText(tr('YE OTIS GHOSTE'), 0, -1.32);
  g.font = '0.03px serif';
  g.fillText(tr('Ye Onlie True and Originale Spook.'), 0, -1.26);
  g.fillText(tr('Beware of Ye Imitationes.'), 0, -1.215);
  g.fillText(tr('All others are Counterfeite.'), 0, -1.17);
  e.at(0, -1.25, 'placard');
  // the turnip: pale with a purple crown, its leaves' stubs, the eyes and the grin cut out and lit from within
  g.fillStyle = '#e8dcc0';
  g.beginPath();
  g.ellipse(0, -1.8, 0.14, 0.13, 0, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = '#8a4a7a';
  g.beginPath();
  g.ellipse(0, -1.86, 0.13, 0.08, 0, Math.PI, Math.PI * 2);
  g.fill();
  g.strokeStyle = '#5a6a3a';
  g.lineWidth = 0.015;
  g.beginPath();
  g.moveTo(-0.02, -1.93);
  g.lineTo(-0.04, -1.99);
  g.moveTo(0.02, -1.93);
  g.lineTo(0.05, -1.98);
  g.stroke();
  g.fillStyle = '#ffb040';
  for (const s of [-1, 1]) {
    g.beginPath();
    g.moveTo(s * 0.03, -1.84);
    g.lineTo(s * 0.09, -1.86);
    g.lineTo(s * 0.06, -1.8);
    g.closePath();
    g.fill();
  }
  g.beginPath();
  g.moveTo(-0.08, -1.76);
  for (let i = 0; i <= 8; i++) g.lineTo(-0.08 + i * 0.02, i % 2 ? -1.72 : -1.75);
  g.lineTo(0.08, -1.76);
  g.quadraticCurveTo(0, -1.69, -0.08, -1.76);
  g.closePath();
  g.fill();
  e.light(0, -1.8, 0.9, '#ffa040', 1.1, 'turnip');
  e.at(0, -1.8, 'turnip');
}
