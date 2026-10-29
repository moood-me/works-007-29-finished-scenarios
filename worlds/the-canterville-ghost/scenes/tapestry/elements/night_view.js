// The avenue at night, just outside the glass (`night`, and in the dark): the lawn and the gravel walk grey-blue under
// the moon, the limes' crowns dark against a deep sky. It keeps its own colours (glows) — the sunlit park beyond would
// otherwise still show through the window at night; its layer fades in with the night.
e.layer('night', {}, l => {
  const sky = l.createLinearGradient(0, -3.4, 0, -0.9);
  sky.addColorStop(0, '#060a20');
  sky.addColorStop(1, '#1c2a52');
  l.fillStyle = sky;
  l.fillRect(-2.4, -3.4, 4.8, 2.6);
  l.fillStyle = '#dfe6f4';
  for (let i = 0; i < 40; i++) {
    l.beginPath();
    l.arc(-2.3 + e.rnd() * 4.6, -3.3 + e.rnd() * 1.4, 0.005 + e.rnd() * 0.005, 0, Math.PI * 2);
    l.fill();
  }
  // the woods far off, a dark band
  l.fillStyle = '#0d1424';
  l.fillRect(-2.4, -1.2, 4.8, 0.35);
  // the lawn and the walk
  const lawn = l.createLinearGradient(0, -0.9, 0, 0.3);
  lawn.addColorStop(0, '#1a2630');
  lawn.addColorStop(1, '#24343c');
  l.fillStyle = lawn;
  l.fillRect(-2.4, -0.9, 4.8, 1.2);
  l.fillStyle = '#4a5466';
  l.beginPath();
  l.moveTo(0.35, -0.9);
  l.lineTo(0.55, -0.9);
  l.lineTo(1.6, 0.3);
  l.lineTo(0.2, 0.3);
  l.closePath();
  l.fill();
  // the limes: dark trunks and crowns
  l.fillStyle = '#0a0f16';
  for (const [x, w, top] of [[-1.5, 0.9, -2.9], [-0.2, 0.6, -2.4], [1.3, 0.7, -2.5], [2.1, 1.0, -3.1]]) {
    l.fillRect(x - 0.04, top + 0.6, 0.08, -top - 1.5);
    l.beginPath();
    l.ellipse(x, top + 0.4, w * 0.6, 0.55, 0, 0, Math.PI * 2);
    l.fill();
  }
});
