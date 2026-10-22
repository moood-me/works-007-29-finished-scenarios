// The counter top from above (metres, its middle at across −0.55, distance 4.95; y toward the viewer): pale grey
// laminate with a steel edge, the white sink under the window (x 0.0…0.5 from here, i.e. across −0.55…−0.05) with a
// little water in it, a dish rack, a jar of chopsticks.
g.fillStyle = '#d8d6cf';
g.fillRect(-1.25, -0.25, 2.5, 0.5);
g.fillStyle = '#b9bab8';
g.fillRect(-1.25, 0.22, 2.5, 0.03);
// the sink: its rim, the basin, the water
g.fillStyle = '#f2f1ec';
g.fillRect(-0.03, -0.2, 0.56, 0.38);
g.fillStyle = '#c9ccd0';
g.fillRect(0.0, -0.17, 0.5, 0.32);
g.fillStyle = '#9fb7c2';
g.fillRect(0.02, -0.15, 0.46, 0.28);
g.fillStyle = 'rgba(230,240,245,0.5)';
g.fillRect(0.06, -0.1, 0.2, 0.02);
// the tap at the back
g.fillStyle = '#a9adb0';
g.fillRect(0.22, -0.25, 0.06, 0.08);
// the dish rack, left of the sink: a few plates on edge (seen from above, their rims)
g.fillStyle = '#c0c4c2';
g.fillRect(-0.62, -0.18, 0.46, 0.32);
g.fillStyle = '#f7f5ef';
for (let i = 0; i < 5; i++) g.fillRect(-0.58 + i * 0.08, -0.16, 0.025, 0.28);
// a jar of chopsticks and a bowl of spring onions (right end)
g.fillStyle = '#c99b6a';
g.beginPath();
g.arc(0.9, -0.08, 0.06, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#e8e2d2';
g.beginPath();
g.arc(0.7, 0.04, 0.09, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#7da55a';
for (let i = 0; i < 6; i++) g.fillRect(0.64 + i * 0.02, -0.02, 0.008, 0.12);
