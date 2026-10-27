// The wall behind the counter (metres from its foot, x −1.5…1.5 across from the counter's middle): white tiles up to
// 2.15 m, the cream paint above; the hatch to the kitchen (x −0.5…0.4, 1.3…1.95 m), its light warm, pans hanging
// beyond, the order slips clipped over it; on the back counter the coffee urn (its steam's point `urn`), stacked cups,
// a pie under a glass dome; a shelf of cups and glasses each side; the menu board along the top, its lines
// chalk-white and unread from here.
g.fillStyle = '#ece6d6';
g.fillRect(-1.52, -2.15, 3.04, 1.2);
g.strokeStyle = '#d3ccb9';
g.lineWidth = 0.006;
g.beginPath();
for (let y = -2.15; y < -0.95; y += 0.075) {
  g.moveTo(-1.52, y);
  g.lineTo(1.52, y);
}
for (let x = -1.5; x < 1.52; x += 0.15) {
  g.moveTo(x, -2.15);
  g.lineTo(x, -0.95);
}
g.stroke();
g.fillStyle = '#5b3b2a';
g.fillRect(-1.52, -2.2, 3.04, 0.05);
// the hatch: the kitchen beyond, lit
g.fillStyle = '#f0cf92';
g.fillRect(-0.5, -1.95, 0.9, 0.65);
g.fillStyle = '#e2b877';
g.fillRect(-0.5, -1.5, 0.9, 0.2);
g.fillStyle = '#6b5a4c';
for (const [x, r] of [[-0.32, 0.09], [-0.08, 0.07], [0.18, 0.1]]) {
  g.fillRect(x - 0.005, -1.95, 0.01, 0.12);
  g.beginPath();
  g.arc(x, -1.83 + r, r, 0, Math.PI * 2);
  g.fill();
}
g.fillStyle = '#c9ccc8';
g.fillRect(-0.56, -1.33, 1.02, 0.05);
g.strokeStyle = '#8f938f';
g.lineWidth = 0.03;
g.strokeRect(-0.515, -1.965, 0.93, 0.68);
// the order slips on their rail
g.fillStyle = '#9da19d';
g.fillRect(-0.5, -2.02, 0.9, 0.015);
g.fillStyle = '#f6f2e6';
for (const x of [-0.38, -0.2, 0.15]) g.fillRect(x, -2.01, 0.08, 0.12);
e.light(-0.05, -1.62, 0.35, '#ffd9a0', 0.7, 'hatch');
// the coffee urn
g.fillStyle = '#b5b8b4';
g.fillRect(-1.25, -1.55, 0.3, 0.6);
g.fillStyle = '#d6d9d5';
g.fillRect(-1.2, -1.55, 0.06, 0.6);
g.fillStyle = '#8a8d89';
g.beginPath();
g.ellipse(-1.1, -1.55, 0.15, 0.04, 0, 0, Math.PI * 2);
g.fill();
g.fillRect(-1.12, -1.62, 0.04, 0.06);
g.fillStyle = '#2e2a28';
g.fillRect(-1.12, -1.2, 0.05, 0.03);
g.fillRect(-1.04, -1.45, 0.012, 0.3);
e.at(-1.1, -1.62, 'urn');
// cups stacked upside down
g.fillStyle = '#efece4';
for (let k = 0; k < 4; k++) {
  g.fillRect(-0.85, -1.01 - k * 0.06, 0.09, 0.055);
  g.fillRect(-0.72, -1.01 - k * 0.06, 0.09, 0.055);
}
// the pie under its dome
g.fillStyle = '#c9ccc8';
g.fillRect(0.88, -1.08, 0.02, 0.12);
g.beginPath();
g.ellipse(0.89, -0.97, 0.08, 0.015, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#d9a35e';
g.beginPath();
g.ellipse(0.89, -1.1, 0.15, 0.03, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = 'rgba(225,235,235,0.35)';
g.beginPath();
g.ellipse(0.89, -1.1, 0.17, 0.2, 0, Math.PI, 0);
g.fill();
// the shelves
g.fillStyle = '#6e4a33';
g.fillRect(-1.5, -2.35, 0.85, 0.035);
g.fillRect(0.6, -2.35, 0.9, 0.035);
g.fillStyle = '#efece4';
for (let x = -1.45; x < -0.7; x += 0.13) g.fillRect(x, -2.43, 0.08, 0.08);
g.fillStyle = 'rgba(214,224,222,0.7)';
for (let x = 0.65; x < 1.45; x += 0.11) g.fillRect(x, -2.48, 0.06, 0.13);
// the menu board
g.fillStyle = '#2a2b27';
g.fillRect(-1.45, -2.92, 2.9, 0.47);
g.strokeStyle = '#8a7a5c';
g.lineWidth = 0.025;
g.strokeRect(-1.45, -2.92, 2.9, 0.47);
g.strokeStyle = 'rgba(236,230,214,0.7)';
g.lineWidth = 0.012;
g.beginPath();
for (const col of [-1.35, -0.4, 0.55]) {
  for (let r = 0; r < 4; r++) {
    const y = -2.83 + r * 0.095, w = 0.35 + ((r * 7 + col * 10) % 5) * 0.06;
    g.moveTo(col, y);
    g.lineTo(col + w, y);
    g.moveTo(col + 0.72, y);
    g.lineTo(col + 0.82, y);
  }
}
g.stroke();
