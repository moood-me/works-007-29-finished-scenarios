// The roller blinds, drawn a third of the way down: cream holland cloth, thin, the evening light through it; a wooden
// slat at the hem and a ring on a cord. Metres from 0.75 under the windows' head (x across, as the back wall's).
for (const x0 of [-2.0, 0.6]) {
  g.fillStyle = '#7a6550';
  g.fillRect(x0 - 0.04, -0.79, 1.48, 0.06);
  g.fillStyle = '#efe3c4';
  g.fillRect(x0 + 0.01, -0.73, 1.38, 0.58);
  g.fillStyle = 'rgba(180,160,120,0.25)';
  for (let y = -0.65; y < -0.15; y += 0.12) g.fillRect(x0 + 0.01, y, 1.38, 0.01);
  g.fillStyle = '#8a6a4a';
  g.fillRect(x0 + 0.01, -0.17, 1.38, 0.03);
  g.fillStyle = '#5a4a3a';
  g.fillRect(x0 + 0.69, -0.14, 0.012, 0.1);
  g.beginPath();
  g.arc(x0 + 0.696, -0.015, 0.012, 0, Math.PI * 2);
  g.lineWidth = 0.006;
  g.strokeStyle = '#5a4a3a';
  g.stroke();
}
