// The letter fallen into the puddle (the key `letter_down`), from above: the folded sheet lying in the water, its red
// seal, the wet already darkening a corner of it brown
if (!e.state.letter_down) return;
g.save();
g.rotate(-0.4);
g.fillStyle = '#efe9da';
g.fillRect(-0.1, -0.07, 0.2, 0.14);
g.fillStyle = 'rgba(150,120,80,0.55)';
g.beginPath(); g.ellipse(0.05, 0.03, 0.06, 0.04, 0.3, 0, Math.PI * 2); g.fill();
g.fillStyle = '#9e2a22';
g.beginPath(); g.arc(0, 0, 0.014, 0, Math.PI * 2); g.fill();
g.strokeStyle = e.lib.INK; g.lineWidth = 0.004; g.strokeRect(-0.1, -0.07, 0.2, 0.14);
g.restore();
