// The porch light beside the back door, from the bottom of its lantern (metres): a black iron bracket, a small
// lantern of four frosted panes, its bulb lit (its glow `bulb`).
g.fillStyle = '#262624';
g.fillRect(-0.02, -0.4, 0.04, 0.12);
g.fillRect(-0.02, -0.4, 0.1, 0.03);
g.fillStyle = '#2e2d2a';
g.beginPath();
g.moveTo(-0.09, -0.28);
g.lineTo(0.09, -0.28);
g.lineTo(0.05, -0.32);
g.lineTo(-0.05, -0.32);
g.closePath();
g.fill();
g.fillStyle = '#f6dca8';
g.fillRect(-0.075, -0.27, 0.15, 0.24);
g.fillStyle = '#2e2d2a';
g.fillRect(-0.085, -0.03, 0.17, 0.03);
g.fillRect(-0.005, -0.27, 0.01, 0.24);
e.light(0, -0.15, 0.14, '#ffcf8a', 1.0, 'bulb');
