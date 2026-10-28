// What stands on the teacher's desk (the card faces the room; its x runs away from the viewer, as the desk's): the
// hand bell she rings at the start of class (`#bell`), a pile of exercise books, and her lamp — a brass stem and a
// green glass shade, its bulb warm under it (`#lamp`).
// the bell: a brass bell on a turned black handle
g.fillStyle = '#b68d3a';
g.beginPath();
g.moveTo(-0.38, -0.01);
g.quadraticCurveTo(-0.37, -0.09, -0.32, -0.1);
g.lineTo(-0.28, -0.1);
g.quadraticCurveTo(-0.23, -0.09, -0.22, -0.01);
g.closePath();
g.fill();
g.fillStyle = '#d7b866';
g.fillRect(-0.36, -0.08, 0.02, 0.06);
g.fillStyle = '#2a2420';
g.fillRect(-0.315, -0.2, 0.03, 0.1);
g.beginPath();
g.arc(-0.3, -0.21, 0.022, 0, Math.PI * 2);
g.fill();
e.at(-0.3, -0.1, 'bell');
// the exercise books
const colours = ['#2e3d5a', '#5a2e2e', '#2e4a3a', '#2e3d5a', '#4a3a2a', '#2e3d5a'];
colours.forEach((c, i) => {
  g.fillStyle = c;
  g.fillRect(-0.12 + (i % 2) * 0.01, -0.02 - i * 0.018, 0.26, 0.016);
  g.fillStyle = '#e6dfca';
  g.fillRect(-0.11 + (i % 2) * 0.01, -0.016 - i * 0.018, 0.24, 0.006);
});
// the lamp
g.fillStyle = '#7a6230';
g.beginPath();
g.ellipse(0.38, -0.01, 0.08, 0.015, 0, 0, Math.PI * 2);
g.fill();
g.fillRect(0.372, -0.34, 0.016, 0.33);
g.fillStyle = '#3f6a48';
g.beginPath();
g.moveTo(0.24, -0.3);
g.quadraticCurveTo(0.38, -0.42, 0.52, -0.3);
g.closePath();
g.fill();
g.fillStyle = '#ffe9b8';
g.beginPath();
g.ellipse(0.38, -0.3, 0.1, 0.012, 0, 0, Math.PI * 2);
g.fill();
e.light(0.38, -0.28, 0.14, '#ffd9a0', 0.8, 'lamp');
