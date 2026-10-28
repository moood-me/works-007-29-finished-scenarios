// The worktop seen from above (x −2.11…2.11, y toward the viewer, ±0.3): pale laminate, its front edge, the steel
// sink under the window (x 0.57…1.21 here), a dish rack beside it.
g.fillStyle = '#ddd1b8';
g.fillRect(-2.11, -0.3, 4.22, 0.6);
g.fillStyle = '#c9bc9f';
g.fillRect(-2.11, 0.26, 4.22, 0.04);
g.fillStyle = '#b6babb';
g.beginPath();
g.roundRect(0.57, -0.2, 0.64, 0.38, 0.06);
g.fill();
g.fillStyle = '#9da2a4';
g.beginPath();
g.roundRect(0.61, -0.17, 0.56, 0.32, 0.05);
g.fill();
g.fillStyle = '#6f7476';
g.beginPath();
g.arc(0.89, -0.01, 0.025, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#e4e2dc';
g.fillRect(1.32, -0.22, 0.5, 0.36);
g.strokeStyle = '#a9aaa6';
g.lineWidth = 0.01;
for (let x = 1.36; x < 1.82; x += 0.06) {
  g.beginPath();
  g.moveTo(x, -0.2);
  g.lineTo(x, 0.12);
  g.stroke();
}
