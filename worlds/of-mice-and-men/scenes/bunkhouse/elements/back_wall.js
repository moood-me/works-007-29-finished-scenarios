// The back wall (facing the room, metres from its foot at the middle): whitewashed boards gone grey, cut for the small
// square window (x −1.375…−0.625, from 1.25 m to 2.0 m up) and the door to the yard (x 1.3…2.3, 2.1 m high); the
// door's frame; Candy's broom leaning by it; a calendar from a feed store on a nail; a slicker on a nail.
g.save();
g.beginPath();
g.rect(-4.25, -3.05, 8.5, 3.07);
g.rect(-1.375, -2.0, 0.75, 0.75);
g.rect(1.3, -2.1, 1.0, 2.1);
g.clip('evenodd');
e.lib.boards(g, -4.25, -3.05, 4.25, 0.02, 0.2, '#d5ceba', 5);
// the skirting gone dark with dirt and wet boots
g.fillStyle = 'rgba(110,95,75,0.35)';
g.fillRect(-4.25, -0.12, 8.5, 0.12);
// the door's frame
g.fillStyle = '#9a8566';
g.fillRect(1.2, -2.2, 1.2, 0.1);
g.fillRect(1.2, -2.2, 0.1, 2.2);
g.fillRect(2.3, -2.2, 0.1, 2.2);
// the window's casing
g.fillStyle = '#b6a586';
g.fillRect(-1.44, -2.07, 0.88, 0.07);
g.fillRect(-1.44, -1.25, 0.88, 0.06);
g.fillRect(-1.44, -2.07, 0.065, 0.88);
g.fillRect(-0.625, -2.07, 0.065, 0.88);
// the calendar: a feed store's, a girl in a sunbonnet over the months
g.fillStyle = '#efe6cf';
g.fillRect(0.82, -1.95, 0.3, 0.42);
g.fillStyle = '#c86a4e';
g.fillRect(0.85, -1.92, 0.24, 0.16);
g.fillStyle = '#7d7363';
for (let i = 0; i < 5; i++) g.fillRect(0.86, -1.72 + i * 0.035, 0.22, 0.012);
g.fillStyle = '#4a4036';
g.fillRect(0.96, -1.97, 0.02, 0.03);
// the broom leaning by the door, its straw worn to one side
g.strokeStyle = '#a07c4c';
g.lineWidth = 0.03;
g.beginPath();
g.moveTo(1.1, -1.5);
g.lineTo(1.0, -0.32);
g.stroke();
g.fillStyle = '#c7a660';
g.beginPath();
g.moveTo(0.94, -0.34);
g.lineTo(1.07, -0.34);
g.lineTo(1.12, 0);
g.lineTo(0.84, 0);
g.closePath();
g.fill();
g.fillStyle = '#8e3a2e';
g.fillRect(0.95, -0.31, 0.12, 0.025);
g.restore();
