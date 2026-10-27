// A milk-glass dome on the ceiling over the door, lit (glows): the light that falls on the faces of those standing
// in the room. Metres from its foot (the ceiling just over its top).
g.fillStyle = '#9c7c3c';
g.fillRect(-0.18, -0.12, 0.36, 0.02);
g.fillStyle = '#fff1d2';
g.beginPath();
g.ellipse(0, -0.1, 0.16, 0.1, 0, 0, Math.PI);
g.fill();
e.light(0, -0.05, 0.25, '#ffe6c0', 0.8, 'dome');
