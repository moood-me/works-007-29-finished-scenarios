// His knotty stick lying on the setts where it fell (the key `stick_down`; it lies where stick_a, stick_d say), from
// above: a dark hazel stick about 0.9 m long lying aslant, its two knots, its worn knob
if (!e.state.stick_down) return;
g.save();
g.rotate(0.6);
g.fillStyle = '#54402e';
g.fillRect(-0.45, -0.013, 0.9, 0.026);
g.fillStyle = '#6b5240';
for (const x of [-0.15, 0.12]) { g.beginPath(); g.ellipse(x, 0, 0.022, 0.02, 0, 0, Math.PI * 2); g.fill(); }
g.beginPath(); g.ellipse(-0.45, 0, 0.028, 0.026, 0, 0, Math.PI * 2); g.fill();
g.strokeStyle = e.lib.INK; g.lineWidth = 0.006; g.strokeRect(-0.45, -0.013, 0.9, 0.026);
g.restore();
