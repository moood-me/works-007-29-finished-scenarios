// The doorway into the classroom (metres from its sill, x along the wall growing toward the viewer; the opening 1.0
// wide, 2.1 high): a frame of plain wood painted the school's blue, worn to the grain where hands go, the threshold
// board.
const C = '#5c7f89';
g.fillStyle = C;
g.fillRect(-0.62, -2.2, 0.12, 2.2);
g.fillRect(0.5, -2.2, 0.12, 2.2);
g.fillRect(-0.62, -2.22, 1.24, 0.12);
g.fillStyle = 'rgba(150,120,90,0.5)';
g.fillRect(0.52, -1.25, 0.06, 0.3);
g.fillStyle = 'rgba(40,52,58,0.4)';
g.fillRect(-0.52, -2.1, 0.02, 2.1);
g.fillRect(0.5, -2.1, 0.02, 2.1);
g.fillStyle = '#6a5440';
g.fillRect(-0.5, -0.03, 1.0, 0.05);
e.at(0, -1.2, 'doorway');
