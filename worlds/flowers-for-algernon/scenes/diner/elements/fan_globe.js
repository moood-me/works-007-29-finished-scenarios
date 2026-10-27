// The milk-glass globe under the fan, lit (glows): the room's middle light. Metres from its foot.
g.fillStyle = '#fff1d2';
g.beginPath();
g.arc(0, -0.09, 0.09, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#9c7c3c';
g.fillRect(-0.04, -0.19, 0.08, 0.025);
e.light(0, -0.09, 0.25, '#ffe4b8', 0.8, 'globe');
