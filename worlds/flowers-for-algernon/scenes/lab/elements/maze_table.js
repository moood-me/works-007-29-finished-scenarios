// The long table the maze stands on, seen from the front (metres from its foot, x −1.05…1.05): a pale oak apron, two
// square legs at the front and a stretcher low between them; its back legs are a part behind,
// 0.85 m farther (the top itself is `maze_top`).
const leg = c => {
  c.fillStyle = '#b39470';
  c.fillRect(-1.0, -0.78, 0.06, 0.78);
  c.fillRect(0.94, -0.78, 0.06, 0.78);
};
e.part(0, 0.85, leg, [-1.05, -0.8, 1.05, 0.02]);
leg(g);
g.fillStyle = '#c4a57f';
g.fillRect(-1.03, -0.84, 2.06, 0.1);
g.fillStyle = '#9d7f5c';
g.fillRect(-1.03, -0.75, 2.06, 0.015);
g.fillStyle = '#b39470';
g.fillRect(-0.94, -0.2, 1.88, 0.03);
