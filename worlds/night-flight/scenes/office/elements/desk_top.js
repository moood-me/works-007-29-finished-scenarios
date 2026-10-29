// The desk's top seen from above (x across, y toward the viewer; 1.6 × 0.7 m): oak, a green leather inset; the log of
// the line open in the middle — two pages of ruled columns, the night's lines in ink, the last left blank; an ink
// stand and a pen; a pile of telegram forms on the left; an ashtray. Its point `log` — the open page.
g.fillStyle = '#6e4e33';
g.fillRect(-0.8, -0.35, 1.6, 0.7);
g.fillStyle = '#2f4a3a';
g.fillRect(-0.55, -0.27, 1.1, 0.52);
// the log, open: a thick ledger, its two pages
g.fillStyle = '#3a2a22';
g.fillRect(-0.32, -0.2, 0.64, 0.44);
g.fillStyle = '#efe8d6';
g.fillRect(-0.3, -0.18, 0.295, 0.4);
g.fillRect(0.005, -0.18, 0.295, 0.4);
g.fillStyle = 'rgba(120,60,50,0.5)';
for (const x of [-0.3, 0.005]) {
  g.fillRect(x + 0.06, -0.18, 0.003, 0.4);
  g.fillRect(x + 0.2, -0.18, 0.003, 0.4);
}
g.fillStyle = 'rgba(90,110,140,0.45)';
for (let k = 0; k < 13; k++) {
  g.fillRect(-0.3, -0.15 + k * 0.028, 0.295, 0.0025);
  g.fillRect(0.005, -0.15 + k * 0.028, 0.295, 0.0025);
}
// the night's lines written, the right page filled two-thirds down
g.fillStyle = 'rgba(30,30,50,0.75)';
for (let k = 0; k < 12; k++) g.fillRect(-0.28, -0.142 + k * 0.028, 0.1 + 0.15 * ((k * 5) % 3) / 2, 0.006);
for (let k = 0; k < 8; k++) g.fillRect(0.02, -0.142 + k * 0.028, 0.12 + 0.12 * ((k * 7) % 3) / 2, 0.006);
// the ink stand and the pen laid across the page's foot
g.fillStyle = '#1c2230';
g.fillRect(0.38, -0.25, 0.16, 0.09);
g.fillStyle = '#9c7e3e';
g.fillRect(0.4, -0.23, 0.05, 0.05);
g.fillStyle = '#26221e';
g.save();
g.translate(0.18, 0.18);
g.rotate(-0.4);
g.fillRect(-0.09, -0.005, 0.18, 0.01);
g.restore();
// the telegram forms, squared, the top one written on
g.fillStyle = '#e4dcc6';
g.fillRect(-0.74, -0.24, 0.2, 0.28);
g.fillRect(-0.73, -0.25, 0.2, 0.28);
g.fillStyle = 'rgba(40,40,60,0.6)';
for (let k = 0; k < 5; k++) g.fillRect(-0.71, -0.2 + k * 0.035, 0.12, 0.005);
// the ashtray, a cigarette end in it
g.fillStyle = '#5a5e60';
g.beginPath();
g.arc(-0.62, 0.2, 0.06, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#3c3f41';
g.beginPath();
g.arc(-0.62, 0.2, 0.04, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#e6dfcf';
g.fillRect(-0.64, 0.19, 0.05, 0.01);
e.at(0, 0.02, 'log');
