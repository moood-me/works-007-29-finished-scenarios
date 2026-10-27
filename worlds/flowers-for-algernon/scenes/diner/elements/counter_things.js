// What stands on the counter (metres from the top's middle, x −1.5…1.5 along it, y up negative): at its left end a
// pie on a plate under a slice gone; Frank's glass of beer, half drunk, and an empty one by it; a glass ashtray with
// a cigarette smouldering on its rim (its point `ashtray`); a cup on its saucer; the ketchup and the mustard, the
// napkins' chrome box, the sugar pourer.
// pie
g.fillStyle = '#f2efe6';
g.beginPath();
g.ellipse(-1.25, -0.01, 0.13, 0.025, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#d9a35e';
g.beginPath();
g.moveTo(-1.35, -0.02);
g.quadraticCurveTo(-1.25, -0.08, -1.15, -0.02);
g.lineTo(-1.2, -0.02);
g.lineTo(-1.25, -0.05);
g.lineTo(-1.3, -0.02);
g.fill();
g.fillStyle = '#8c3b4a';
g.fillRect(-1.25, -0.05, 0.004, 0.03);
// Frank's glass, half drunk, and an empty one
g.fillStyle = 'rgba(214,224,222,0.6)';
g.fillRect(-0.36, -0.15, 0.07, 0.15);
g.fillStyle = '#c98e33';
g.fillRect(-0.355, -0.08, 0.06, 0.075);
g.fillStyle = '#f2ead6';
g.fillRect(-0.355, -0.095, 0.06, 0.018);
g.fillStyle = 'rgba(214,224,222,0.55)';
g.fillRect(-0.2, -0.15, 0.07, 0.15);
g.fillStyle = 'rgba(242,234,214,0.6)';
g.fillRect(-0.195, -0.05, 0.06, 0.012);
// the ashtray and its cigarette
g.fillStyle = 'rgba(190,206,204,0.75)';
g.fillRect(0.28, -0.025, 0.14, 0.025);
g.fillStyle = '#efe9dc';
g.fillRect(0.38, -0.034, 0.07, 0.009);
g.fillStyle = '#c4502e';
g.fillRect(0.448, -0.034, 0.006, 0.009);
e.at(0.452, -0.035, 'ashtray');
// a cup on its saucer
g.fillStyle = '#efece4';
g.fillRect(0.62, -0.075, 0.08, 0.065);
g.beginPath();
g.ellipse(0.66, -0.008, 0.08, 0.012, 0, 0, Math.PI * 2);
g.fill();
g.strokeStyle = '#efece4';
g.lineWidth = 0.012;
g.beginPath();
g.arc(0.715, -0.045, 0.02, -Math.PI / 2, Math.PI / 2);
g.stroke();
// ketchup, mustard
g.fillStyle = '#a82b26';
g.fillRect(0.9, -0.17, 0.05, 0.17);
g.fillRect(0.915, -0.2, 0.02, 0.03);
g.fillStyle = '#d9a72c';
g.fillRect(0.98, -0.16, 0.05, 0.16);
g.fillRect(0.995, -0.19, 0.02, 0.03);
// the napkins' box
g.fillStyle = '#c9ccc8';
g.fillRect(1.08, -0.13, 0.12, 0.13);
g.fillStyle = '#f4f2ec';
g.fillRect(1.1, -0.155, 0.08, 0.03);
// the sugar pourer
g.fillStyle = 'rgba(220,226,224,0.7)';
g.fillRect(1.28, -0.12, 0.06, 0.12);
g.fillStyle = '#f6f4ef';
g.fillRect(1.285, -0.07, 0.05, 0.065);
g.fillStyle = '#c4c7c3';
g.beginPath();
g.moveTo(1.28, -0.12);
g.lineTo(1.31, -0.16);
g.lineTo(1.34, -0.12);
g.fill();
