// The telegraph table's top seen from above (x across, y toward the viewer; 1.6 × 0.7 m): oak, a green blotter, the
// key — a brass lever on its black base — before the telegraphist's right hand (x −0.15), a pad of telegram forms, a
// spike of the night's messages, an inkwell.
g.fillStyle = '#6e4e33';
g.fillRect(-0.8, -0.35, 1.6, 0.7);
g.fillStyle = '#3f5a44';
g.fillRect(-0.55, -0.2, 0.75, 0.42);
// the key
g.fillStyle = '#1e1c1a';
g.fillRect(-0.25, -0.02, 0.2, 0.1);
g.fillStyle = '#c9a24e';
g.fillRect(-0.21, 0.02, 0.15, 0.02);
g.fillStyle = '#2a2622';
g.beginPath();
g.arc(-0.06, 0.03, 0.022, 0, Math.PI * 2);
g.fill();
// the forms
g.fillStyle = '#efe9da';
g.fillRect(-0.62, -0.05, 0.22, 0.28);
g.fillStyle = 'rgba(70,60,50,0.5)';
for (let k = 0; k < 6; k++) g.fillRect(-0.6, 0.0 + k * 0.035, 0.17 - (k % 2) * 0.05, 0.006);
// the spike and its messages
g.fillStyle = '#e6dfcc';
g.beginPath();
g.arc(0.25, -0.15, 0.06, 0, Math.PI * 2);
g.fill();
// the inkwell
g.fillStyle = '#1c2230';
g.beginPath();
g.arc(-0.68, -0.2, 0.035, 0, Math.PI * 2);
g.fill();
