// The shop window's frame (metres from the middle of its sill; the glass 4 m wide, 2.15 high): an ivory frame, two
// slim mullions and a transom bar — six panes, the upper three small —, a brass rail low across the glass.
g.fillStyle = '#eee5d2';
g.fillRect(-2.06, -2.2, 4.12, 0.08);
g.fillRect(-2.06, -0.06, 4.12, 0.1);
g.fillRect(-2.06, -2.2, 0.08, 2.24);
g.fillRect(1.98, -2.2, 0.08, 2.24);
for (const x of [-0.73, 0.97]) g.fillRect(x, -2.2, 0.06, 2.2);
g.fillRect(-2.0, -1.6, 4.0, 0.06);
g.fillStyle = '#e1d5bd';
g.fillRect(-2.06, 0.0, 4.12, 0.04);
e.at(0, -1.0, 'window');
