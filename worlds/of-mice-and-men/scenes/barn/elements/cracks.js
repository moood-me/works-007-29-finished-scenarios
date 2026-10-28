// The sun in the cracks between the right wall's boards (the lib's CRACKS — where the light `sun` comes in): each a
// thread of white-gold daylight up the wall, pinched where the boards bow; it glows, as bright as the sun is (the
// layer `light`, its alpha the state's `sun`: cracks.animate.js).
e.layer('light', {}, g => {
  g.fillStyle = '#fff3d6';
  for (const [d, w] of e.lib.CRACKS) {
    const x = 4.25 - d - w / 2;
    g.beginPath();
    g.moveTo(x, -0.1);
    for (let y = -0.1; y >= -4.7; y -= 0.35) g.lineTo(x - w * (0.35 + 0.3 * Math.sin(y * 2.3 + d)), y);
    for (let y = -4.7; y <= -0.1; y += 0.35) g.lineTo(x + w * (0.35 + 0.3 * Math.sin(y * 1.7 + d * 2)), y);
    g.closePath();
    g.fill();
  }
});
