// The boards under the open window, from above (x across, y toward the viewer): where the rain off the sill runs down the
// wall and pools — a layer, dark and glossy, as `wet` rises (its animate); nothing else (the floor is the floor's)
e.layer('wet', {}, w => {
  w.fillStyle = 'rgba(66,62,58,0.5)';
  w.beginPath();
  w.moveTo(-0.27, -0.5);
  w.quadraticCurveTo(0.05, -0.45, 0.12, -0.15);
  w.quadraticCurveTo(0.22, 0.1, 0.05, 0.32);
  w.quadraticCurveTo(-0.1, 0.5, -0.27, 0.45);
  w.closePath();
  w.fill();
  w.fillStyle = 'rgba(176,186,196,0.3)';
  w.beginPath();
  w.ellipse(-0.12, 0.0, 0.08, 0.26, 0.2, 0, Math.PI * 2);
  w.fill();
});
