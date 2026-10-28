// The mail launch moored at the landing stage, broadside to the square (metres from her waterline, bow to the left):
// a white wooden river boat gone grey with the rains — her hull with a red boot-top, a long cabin of shuttered
// windows, a flat roof on slender posts loaded with plantains and crates, the pilot house forward, a black funnel
// banded white and red, a faded pennant at the stern. All of her is one layer her animate rocks a little on the water.
e.layer('boat', { pivot: [0, 0] }, g2 => {
  // the hull
  g2.fillStyle = '#d9d4c6';
  g2.beginPath();
  g2.moveTo(-6.8, -1.55);
  g2.quadraticCurveTo(-6.2, -0.3, -5.2, 0.02);
  g2.lineTo(6.2, 0.02);
  g2.lineTo(6.45, -1.2);
  g2.lineTo(-3.0, -1.2);
  g2.quadraticCurveTo(-5.5, -1.25, -6.8, -1.55);
  g2.closePath();
  g2.fill();
  g2.fillStyle = '#8a3a2a';
  g2.beginPath();
  g2.moveTo(-5.6, -0.24);
  g2.lineTo(6.3, -0.24);
  g2.lineTo(6.2, 0.02);
  g2.lineTo(-5.2, 0.02);
  g2.closePath();
  g2.fill();
  g2.fillStyle = '#3f6a66';
  g2.fillRect(-6.0, -1.08, 12.4, 0.07);
  // rust weeping from the scuppers and the hawse
  for (let i = 0; i < 14; i++) {
    const x = -5 + e.rnd() * 11;
    const gr = g2.createLinearGradient(0, -1.0, 0, -0.3);
    gr.addColorStop(0, 'rgba(140,84,52,0.5)');
    gr.addColorStop(1, 'rgba(140,84,52,0)');
    g2.fillStyle = gr;
    g2.fillRect(x, -1.0, 0.05 + e.rnd() * 0.06, 0.7);
  }
  g2.fillStyle = '#2a2622';
  g2.beginPath();
  g2.arc(-5.9, -1.15, 0.08, 0, Math.PI * 2);
  g2.fill();
  // the cabin
  g2.fillStyle = '#e2ddcf';
  g2.fillRect(-3.6, -2.75, 6.4, 1.56);
  g2.fillStyle = '#4f7f72';
  g2.fillRect(-3.6, -2.75, 6.4, 0.08);
  g2.fillRect(-3.6, -1.27, 6.4, 0.08);
  for (let x = -3.3; x < 2.5; x += 0.72) {
    g2.fillStyle = '#3a3a36';
    g2.fillRect(x, -2.4, 0.46, 0.55);
    g2.fillStyle = '#5f8f80';
    g2.fillRect(x, -2.4, 0.46, 0.16);
    g2.strokeStyle = '#4f7f72';
    g2.lineWidth = 0.03;
    g2.strokeRect(x, -2.4, 0.46, 0.55);
  }
  g2.fillStyle = '#5c4636';
  g2.fillRect(1.2, -2.55, 0.5, 1.3);
  // the life rings
  for (const x of [-2.2, 2.25]) {
    g2.strokeStyle = '#efe9da';
    g2.lineWidth = 0.09;
    g2.beginPath();
    g2.arc(x, -1.62, 0.2, 0, Math.PI * 2);
    g2.stroke();
    g2.strokeStyle = '#b8402e';
    g2.lineWidth = 0.09;
    for (let k = 0; k < 4; k++) {
      g2.beginPath();
      g2.arc(x, -1.62, 0.2, k * Math.PI / 2, k * Math.PI / 2 + 0.35);
      g2.stroke();
    }
  }
  // the roof on its posts, open fore and aft
  g2.fillStyle = '#d6d0c0';
  for (const x of [-5.6, -4.6, 3.4, 4.6, 5.8]) g2.fillRect(x, -2.92, 0.07, 1.75);
  g2.fillStyle = '#cbc4b2';
  g2.fillRect(-5.9, -3.02, 12.0, 0.14);
  g2.fillStyle = '#3f6a66';
  g2.fillRect(-5.9, -2.9, 12.0, 0.04);
  g2.strokeStyle = '#bdb6a4';
  g2.lineWidth = 0.025;
  g2.beginPath();
  g2.moveTo(-5.8, -3.35);
  g2.lineTo(6.0, -3.35);
  g2.stroke();
  for (let x = -5.8; x <= 6.0; x += 0.6) {
    g2.beginPath();
    g2.moveTo(x, -3.02);
    g2.lineTo(x, -3.35);
    g2.stroke();
  }
  // the pilot house forward
  g2.fillStyle = '#e4dfd2';
  g2.fillRect(-4.9, -3.95, 1.5, 0.95);
  g2.fillStyle = '#3a3a36';
  for (const x of [-4.75, -4.3, -3.85]) g2.fillRect(x, -3.8, 0.32, 0.38);
  g2.fillStyle = '#4f7f72';
  g2.fillRect(-5.0, -4.05, 1.7, 0.12);
  // the cargo on the roof: plantains, crates, a tarpaulin
  for (let i = 0; i < 9; i++) {
    const x = -2.6 + i * 0.42 + e.rnd() * 0.1;
    g2.fillStyle = e.rnd() < 0.5 ? '#6e8a3a' : '#7e9a42';
    g2.beginPath();
    g2.ellipse(x, -3.3, 0.22, 0.28, 0, 0, Math.PI * 2);
    g2.fill();
    g2.strokeStyle = 'rgba(50,64,30,0.6)';
    g2.lineWidth = 0.02;
    for (let k = -1; k <= 1; k++) {
      g2.beginPath();
      g2.moveTo(x + k * 0.08, -3.52);
      g2.lineTo(x + k * 0.1, -3.06);
      g2.stroke();
    }
  }
  g2.fillStyle = '#9a7a52';
  g2.fillRect(1.5, -3.5, 0.5, 0.48);
  g2.fillRect(2.05, -3.42, 0.45, 0.4);
  g2.fillStyle = '#7e6a4e';
  g2.fillRect(1.75, -3.86, 0.5, 0.36);
  g2.fillStyle = '#6f7466';
  g2.beginPath();
  g2.moveTo(4.2, -3.02);
  g2.quadraticCurveTo(4.8, -3.6, 5.6, -3.02);
  g2.closePath();
  g2.fill();
  // the funnel
  g2.fillStyle = '#1e1c1c';
  g2.fillRect(3.3, -4.55, 0.46, 1.55);
  g2.fillStyle = '#e8e2d4';
  g2.fillRect(3.3, -4.05, 0.46, 0.16);
  g2.fillStyle = '#9a3a2a';
  g2.fillRect(3.3, -4.55, 0.46, 0.12);
  // the pennant at the stern
  g2.strokeStyle = '#3a342c';
  g2.lineWidth = 0.035;
  g2.beginPath();
  g2.moveTo(6.2, -1.2);
  g2.lineTo(6.25, -4.3);
  g2.stroke();
  g2.fillStyle = '#a8584a';
  g2.beginPath();
  g2.moveTo(6.25, -4.28);
  g2.quadraticCurveTo(6.6, -4.15, 6.85, -4.0);
  g2.lineTo(6.25, -3.9);
  g2.closePath();
  g2.fill();
});
e.at(3.53, -4.6, 'funnel');
