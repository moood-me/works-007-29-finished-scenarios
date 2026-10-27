// The farm's lit back door and two lit windows, the kitchen's lamplight inside: a warm doorway (the kitchen beyond
// it: a dresser's edge, the warm wall) and the panes of the kitchen and the stair window, their bars dark across
// them. The open door's light is the point "farm_lit#door".
const warm = g.createLinearGradient(0, -2.2, 0, 0);
warm.addColorStop(0, '#f6c77e');
warm.addColorStop(1, '#e49a52');
g.fillStyle = warm;
g.fillRect(-1.5, -2.15, 1.0, 2.15);
g.fillStyle = 'rgba(120, 70, 40, 0.55)';
g.fillRect(-1.5, -2.15, 0.22, 2.15);
g.fillRect(-1.5, -0.25, 1.0, 0.25);
g.fillStyle = 'rgba(150, 90, 50, 0.5)';
g.fillRect(-0.72, -1.5, 0.18, 1.25);
for (const [x, y, a] of [[-3.3, -2.0, 1], [-1.3, -4.6, 0.8]]) {
  const pane = g.createRadialGradient(x + 0.5, y + 0.7, 0.1, x + 0.5, y + 0.6, 0.9);
  pane.addColorStop(0, `rgba(255, 214, 140, ${a})`);
  pane.addColorStop(1, `rgba(222, 140, 70, ${a})`);
  g.fillStyle = pane;
  g.fillRect(x, y, 1.0, 1.2);
  g.fillStyle = 'rgba(90, 60, 40, 0.9)';
  g.fillRect(x + 0.47, y, 0.06, 1.2);
  g.fillRect(x, y + 0.57, 1.0, 0.06);
}
e.light(-1.0, -1.1, 0.9, '#ffc27a', 0.9, 'door');
e.light(-2.8, -1.4, 0.6, '#ffc27a', 0.6, 'kitchen');
e.light(-0.8, -4.0, 0.5, '#ffc27a', 0.45, 'stair');
