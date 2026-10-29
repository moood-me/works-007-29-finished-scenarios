// The left wall, seen from the room (its +x runs away from the viewer): distemper over the dark dado; the door onto
// the landing open (x 0.4…1.25: the landing's light beyond it), its leaf swung back flat against the wall before it;
// nearer, the coat hooks — Rivière's long dark overcoat and his hat hung up.
g.fillStyle = '#b6ae96';
g.beginPath();
g.rect(-2.05, -3.15, 4.1, 3.2);
g.rect(0.4, -2.15, 0.85, 2.2);
g.fill('evenodd');
g.fillStyle = '#56402f';
g.beginPath();
g.rect(-2.05, -0.85, 4.1, 0.85);
g.rect(0.4, -0.9, 0.85, 0.95);
g.fill('evenodd');
g.fillStyle = '#3f2d20';
g.fillRect(-2.05, -0.9, 2.45, 0.06);
g.fillRect(1.25, -0.9, 0.8, 0.06);
g.fillStyle = '#2b2018';
g.fillRect(-2.05, -0.13, 2.45, 0.13);
g.fillRect(1.25, -0.13, 0.8, 0.13);
// the door's frame and threshold
g.fillStyle = '#3a2a1e';
g.fillRect(0.3, -2.25, 0.1, 2.25);
g.fillRect(1.25, -2.25, 0.1, 2.25);
g.fillRect(0.3, -2.27, 1.05, 0.12);
g.fillStyle = '#5c4632';
g.fillRect(0.4, -0.03, 0.85, 0.06);
// the leaf swung back against the wall: dark varnished wood, four panels, a brass knob
g.fillStyle = '#45311f';
g.fillRect(-0.5, -2.12, 0.84, 2.1);
g.fillStyle = '#53392a';
for (const [x, y, h] of [[-0.43, -2.04, 0.85], [-0.07, -2.04, 0.85], [-0.43, -1.05, 0.95], [-0.07, -1.05, 0.95]]) g.fillRect(x, y, 0.3, h);
g.fillStyle = '#b89a5a';
g.beginPath();
g.arc(-0.42, -1.0, 0.03, 0, Math.PI * 2);
g.fill();
// the coat hooks nearer the viewer: a board, his overcoat hanging long, his hat on the next hook
g.fillStyle = '#3a2a1e';
g.fillRect(-1.75, -1.98, 0.95, 0.07);
g.fillStyle = '#2c3240';
g.beginPath();
g.moveTo(-1.6, -1.93);
g.lineTo(-1.32, -1.93);
g.lineTo(-1.18, -0.55);
g.lineTo(-1.74, -0.55);
g.closePath();
g.fill();
g.fillStyle = '#232835';
g.fillRect(-1.48, -1.93, 0.04, 1.38);
g.fillStyle = '#1f2229';
g.beginPath();
g.ellipse(-0.98, -2.0, 0.19, 0.04, 0, 0, Math.PI * 2);
g.fill();
g.beginPath();
g.ellipse(-0.98, -2.06, 0.12, 0.1, 0, Math.PI, 0);
g.fill();
