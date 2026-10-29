// The twins' turnip ghost's head on the floor by the window seat (`turnip`): the hollow turnip, its eyes and grin cut
// out, dark now, and the placard leaning against the seat beside it. Nothing is painted while `turnip` is false.
// Points `turnip#turnip`, `turnip#placard`.
if (e.state.turnip) {
  // the placard, leaning
  g.save();
  g.translate(0.16, 0);
  g.rotate(0.12);
  g.fillStyle = '#d6c8a2';
  g.fillRect(-0.24, -0.34, 0.48, 0.3);
  g.strokeStyle = '#5a4a32';
  g.lineWidth = 0.01;
  g.strokeRect(-0.24, -0.34, 0.48, 0.3);
  g.fillStyle = '#1a1612';
  g.textAlign = 'center';
  g.font = 'bold 0.05px serif';
  g.fillText(tr('YE OTIS GHOSTE'), 0, -0.26);
  g.font = '0.03px serif';
  g.fillText(tr('Ye Onlie True and Originale Spook.'), 0, -0.2);
  g.fillText(tr('Beware of Ye Imitationes.'), 0, -0.155);
  g.fillText(tr('All others are Counterfeite.'), 0, -0.11);
  g.restore();
  // the turnip
  g.fillStyle = '#e8dcc0';
  g.beginPath();
  g.ellipse(-0.2, -0.13, 0.14, 0.13, 0, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = '#8a4a7a';
  g.beginPath();
  g.ellipse(-0.2, -0.19, 0.13, 0.08, 0, Math.PI, Math.PI * 2);
  g.fill();
  g.fillStyle = '#2a2018';
  for (const x of [-0.25, -0.15]) {
    g.beginPath();
    g.moveTo(x - 0.025, -0.15);
    g.lineTo(x + 0.025, -0.15);
    g.lineTo(x, -0.115);
    g.closePath();
    g.fill();
  }
  g.beginPath();
  g.moveTo(-0.28, -0.08);
  g.quadraticCurveTo(-0.2, -0.04, -0.12, -0.08);
  g.quadraticCurveTo(-0.2, -0.06, -0.28, -0.08);
  g.fill();
}
e.at(-0.2, -0.13, 'turnip');
e.at(0.16, -0.2, 'placard');
