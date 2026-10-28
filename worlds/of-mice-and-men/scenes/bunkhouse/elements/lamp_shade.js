// The lamp's shade: a cone of tin enamelled dark green outside, white within, its rim just under the bulb (the
// element's anchor is the rim's middle). It casts the lamp's light down on the table and leaves the rafters dark.
g.fillStyle = '#3e4a3c';
g.beginPath();
g.moveTo(-0.05, -0.2);
g.lineTo(0.05, -0.2);
g.lineTo(0.27, -0.01);
g.lineTo(-0.27, -0.01);
g.closePath();
g.fill();
g.fillStyle = '#56644f';
g.beginPath();
g.moveTo(-0.05, -0.2);
g.lineTo(-0.01, -0.2);
g.lineTo(-0.18, -0.01);
g.lineTo(-0.27, -0.01);
g.closePath();
g.fill();
g.fillStyle = '#2a3329';
g.fillRect(-0.06, -0.24, 0.12, 0.05);
g.fillStyle = '#e8e2d2';
g.beginPath();
g.ellipse(0, 0, 0.27, 0.022, 0, 0, Math.PI);
g.fill();
