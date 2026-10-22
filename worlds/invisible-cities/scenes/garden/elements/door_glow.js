// The warm light of the house inside, through the gap between the door's leaves and the fanlight over them: it
// glows by itself (the night doesn't darken it) and gives its light out (`door_glow#gap`)
g.fillStyle = '#ffc77e';
g.fillRect(2.95, -2.7, 0.15, 2.7);
g.fillStyle = 'rgba(255, 199, 126, 0.85)';
g.fillRect(2.45, -2.82, 1.1, 0.1);
e.light(3.02, -1.3, 0.5, '#ffbf78', 0.8, 'gap');
