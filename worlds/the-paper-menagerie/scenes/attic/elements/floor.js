// The attic floor from above (metres, its middle at distance 4.0; y toward the viewer — distance d is y 4.0 − d): wide
// pine boards, grey with dust, paler paths trodden from the hatch; the hatch (x 0.65…1.35, y 0.2…1.0): open (`hatch`), a
// hole with its frame, the lid laid back flat on the boards beyond it; shut, the lid in its frame, its ring.
const open = e.state.hatch > 0.5;
g.save();
g.beginPath();
g.rect(-2.72, -2.62, 5.44, 5.24);
if (open) g.rect(0.65, 0.2, 0.7, 0.8);
g.clip('evenodd');
e.lib.boards(g, -2.72, 2.72, -2.62, 2.62, 0.24, 3);
g.fillStyle = 'rgba(190,178,160,0.35)';
g.fillRect(-2.72, -2.62, 5.44, 5.24);
g.fillStyle = 'rgba(150,120,90,0.25)';
g.beginPath();
g.ellipse(0.6, 0.3, 0.9, 0.5, 0.3, 0, Math.PI * 2);
g.fill();
g.restore();
g.strokeStyle = '#7a5e44';
g.lineWidth = 0.05;
g.strokeRect(0.63, 0.18, 0.74, 0.84);
if (open) {
  // the lid laid back beyond the hole, its underside up: plaster-white, its frame of boards
  g.fillStyle = '#e4ded0';
  g.fillRect(0.68, -0.52, 0.64, 0.7);
  g.strokeStyle = '#b9a88e';
  g.lineWidth = 0.035;
  g.strokeRect(0.68, -0.52, 0.64, 0.7);
} else {
  e.lib.boards(g, 0.66, 1.34, 0.21, 0.99, 0.17, 9);
  g.fillStyle = '#5a4a3c';
  g.beginPath();
  g.arc(1.0, 0.85, 0.03, 0, Math.PI * 2);
  g.fill();
}
e.at(1.0, 0.6, 'hatch');
