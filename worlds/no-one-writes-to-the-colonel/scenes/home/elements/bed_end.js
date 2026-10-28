// An iron end of the bed (the head and the foot are copies), seen from the side the room is (metres; across the bed's
// width from its middle): two posts with brass knobs, a top rail, plain bars, the paint gone black and chipped.
g.fillStyle = '#26221f';
for (const x of [-0.48, 0.48]) {
  g.fillRect(x - 0.02, -1.15, 0.04, 1.15);
}
g.fillRect(-0.48, -1.1, 0.96, 0.035);
g.fillRect(-0.48, -0.55, 0.96, 0.03);
for (let x = -0.36; x <= 0.37; x += 0.12) g.fillRect(x - 0.008, -1.08, 0.016, 0.54);
g.fillStyle = '#b89a52';
for (const x of [-0.48, 0.48]) {
  g.beginPath();
  g.arc(x, -1.17, 0.035, 0, Math.PI * 2);
  g.fill();
}
