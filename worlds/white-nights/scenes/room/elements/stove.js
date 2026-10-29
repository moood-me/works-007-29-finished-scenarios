// The tiled stove standing against the left wall before the window (its face to the room, 1.7…2.5 m in; x runs into
// the room's depth): glazed tiles gone ivory-grey with years of smoke, each with a faded blue-grey flower; a cornice at
// the top, a band at the middle, a dark plinth; the cast-iron firebox door low on it, the damper's knob high. It is
// cold in summer. Its points: `nail` (where his wet coat hangs to dry, `coat_dry`), `door`
e.lib.tiles(g, -0.4, 0.4, 2.2, 5);
const INK = e.lib.INK;
e.lib.box(g, -0.12, -0.72, 0.24, 0.3, '#3d3936', 0.008);
g.strokeStyle = 'rgba(160,150,140,0.6)';
g.lineWidth = 0.006;
g.strokeRect(-0.1, -0.7, 0.2, 0.26);
e.lib.box(g, 0.06, -0.6, 0.03, 0.03, '#b08a44', 0.004);
g.fillStyle = '#3d3936';
g.beginPath();
g.arc(0.25, -1.9, 0.03, 0, Math.PI * 2);
g.fill();
g.strokeStyle = INK;
g.stroke();
e.at(0, -1.82, 'nail');
e.at(0, -0.6, 'door');
