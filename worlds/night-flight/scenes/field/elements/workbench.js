// The mechanics' workbench outside the gate, under its lamp on a post (`lamp`): a heavy top of dark boards on trestle
// legs, a vice at its end; with `workbench` tools — Roblet's: a can, rags, a spanner laid out, his old jacket over its
// end; empty — bare boards under the lamp.
g.fillStyle = '#5a4634';
g.fillRect(-1.15, -1.0, 2.3, 0.12);
g.fillRect(-1.05, -0.88, 0.1, 0.88);
g.fillRect(0.95, -0.88, 0.1, 0.88);
g.fillRect(-1.05, -0.3, 2.1, 0.06);
g.fillStyle = '#44484b';
g.fillRect(0.75, -1.18, 0.3, 0.18);
g.fillRect(0.85, -1.13, 0.05, 0.13);
if (e.state.workbench === 'tools') {
g.fillStyle = '#8a4f3c';
g.fillRect(-0.85, -1.26, 0.22, 0.26);
g.fillStyle = '#c9c1ae';
g.beginPath();
g.ellipse(-0.25, -1.03, 0.22, 0.05, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#6a6f72';
g.fillRect(0.1, -1.04, 0.42, 0.035);
  g.fillStyle = '#4c6f93';
  g.beginPath();
  g.moveTo(-1.15, -1.0);
  g.lineTo(-0.85, -1.0);
  g.lineTo(-0.9, -0.45);
  g.lineTo(-1.2, -0.5);
  g.closePath();
  g.fill();
}
// the lamp on its post at the bench's right end: an enamel shade over a bare bulb
g.fillStyle = '#3a3e42';
g.fillRect(1.3, -3.2, 0.08, 3.2);
g.fillRect(0.5, -3.2, 0.88, 0.06);
g.fillStyle = '#2f4a3a';
g.beginPath();
g.moveTo(0.3, -2.85);
g.lineTo(0.75, -2.85);
g.lineTo(0.62, -3.14);
g.lineTo(0.43, -3.14);
g.closePath();
g.fill();
g.fillStyle = '#fff1cf';
g.beginPath();
g.arc(0.525, -2.84, 0.06, 0, Math.PI * 2);
g.fill();
e.light(0.525, -2.8, 0.4, '#ffcf8f', 1, 'lamp');
e.at(0, -1.05, 'top');
