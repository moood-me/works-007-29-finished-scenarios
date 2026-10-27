// The shop door (metres from the middle of its foot; 0.9 wide, 2.4 high): slate-green like the front, a tall glass
// panel showing the shop dim within, a brass handle and a small bell over it on a curl of iron.
g.fillStyle = '#56686b';
g.fillRect(-0.45, -2.4, 0.9, 2.42);
g.fillStyle = '#eee5d2';
g.fillRect(-0.45, -2.4, 0.9, 0.04);
g.fillStyle = '#5b5a52';
g.fillRect(-0.33, -2.28, 0.66, 1.42);
g.fillStyle = '#6e6a5e';
g.fillRect(-0.33, -2.28, 0.66, 0.3);
g.strokeStyle = '#eee5d2';
g.lineWidth = 0.02;
g.strokeRect(-0.33, -0.72, 0.66, 0.56);
g.fillStyle = '#c9a85a';
g.fillRect(-0.36, -1.12, 0.035, 0.22);
g.beginPath();
g.arc(-0.1, -2.33, 0.05, Math.PI, 0);
g.fill();
e.at(0, -1.2, 'door');
