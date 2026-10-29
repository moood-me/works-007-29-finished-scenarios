// The European mail's plane below, before the hangar, when it has been stood down (`plane`: standing): a
// parasol-winged monoplane in profile, nose to the left, its silver fabric wet, the dark red band of the European
// line along its flank, the propeller still; its pilot by the wing, his hand on its side. Nothing when it has gone.
// Metres from its anchor (the middle of its length on the ground), y up negative.
if (e.state.plane === 'standing') {
  g.fillStyle = '#c4c4bb';
  g.beginPath();
  g.moveTo(-4.3, -2.42);
  g.bezierCurveTo(-2.5, -2.58, 0.5, -2.6, 4.8, -2.18);
  g.lineTo(5.35, -2.08);
  g.lineTo(5.35, -1.9);
  g.bezierCurveTo(3, -1.55, 0.6, -1.3, -2.6, -1.18);
  g.lineTo(-4.3, -1.22);
  g.closePath();
  g.fill();
  g.fillStyle = '#7a2a26';
  g.beginPath();
  g.moveTo(-4.3, -1.95);
  g.bezierCurveTo(-2, -2.02, 1.5, -1.95, 5.3, -2.0);
  g.lineTo(5.3, -1.9);
  g.bezierCurveTo(1.5, -1.7, -2, -1.68, -4.3, -1.68);
  g.closePath();
  g.fill();
  g.fillStyle = '#8c9194';
  g.beginPath();
  g.moveTo(-4.3, -2.42);
  g.lineTo(-5.55, -2.3);
  g.quadraticCurveTo(-5.85, -1.85, -5.55, -1.38);
  g.lineTo(-4.3, -1.22);
  g.closePath();
  g.fill();
  // the tail
  g.fillStyle = '#c4c4bb';
  g.beginPath();
  g.moveTo(4.2, -2.2);
  g.quadraticCurveTo(4.7, -3.2, 5.3, -3.35);
  g.quadraticCurveTo(5.75, -3.2, 5.7, -2.6);
  g.lineTo(5.55, -1.9);
  g.lineTo(5.35, -2.08);
  g.closePath();
  g.fill();
  // the wing over it, the struts, the wheel
  g.fillStyle = '#d0d0c7';
  g.beginPath();
  g.moveTo(-4.35, -3.62);
  g.quadraticCurveTo(-4.4, -3.9, -3.6, -3.92);
  g.bezierCurveTo(-2.4, -3.95, -1.4, -3.85, -0.9, -3.7);
  g.lineTo(-0.9, -3.64);
  g.bezierCurveTo(-2, -3.55, -3.6, -3.52, -4.35, -3.62);
  g.closePath();
  g.fill();
  g.strokeStyle = '#6b6f72';
  g.lineWidth = 0.09;
  g.beginPath();
  g.moveTo(-2.6, -1.25);
  g.lineTo(-3.6, -3.55);
  g.moveTo(-1.0, -1.38);
  g.lineTo(-1.6, -3.6);
  g.moveTo(-3.6, -1.22);
  g.lineTo(-3.15, -0.5);
  g.moveTo(-2.4, -1.2);
  g.lineTo(-3.15, -0.5);
  g.moveTo(4.9, -1.95);
  g.lineTo(5.1, -0.02);
  g.stroke();
  g.fillStyle = '#2a2b2d';
  g.beginPath();
  g.arc(-3.15, -0.48, 0.48, 0, Math.PI * 2);
  g.fill();
  // the propeller standing still, up and down
  g.fillStyle = '#7f5535';
  g.fillRect(-5.98, -3.2, 0.1, 2.7);
  // the pilot by the wing, his hand on the side of the plane
  g.fillStyle = '#4a3a2c';
  g.fillRect(-0.36, -0.8, 0.12, 0.8);
  g.fillRect(-0.18, -0.8, 0.12, 0.8);
  g.fillStyle = '#6b4a32';
  g.beginPath();
  g.moveTo(-0.46, -0.78);
  g.lineTo(-0.48, -1.42);
  g.lineTo(0.04, -1.42);
  g.lineTo(0.02, -0.78);
  g.closePath();
  g.fill();
  g.fillStyle = '#ece7dc';
  g.fillRect(-0.36, -1.48, 0.28, 0.08);
  g.fillStyle = '#c79a7a';
  g.beginPath();
  g.arc(-0.22, -1.6, 0.12, 0, Math.PI * 2);
  g.fill();
  g.strokeStyle = '#6b4a32';
  g.lineWidth = 0.09;
  g.beginPath();
  g.moveTo(-0.02, -1.36);
  g.lineTo(0.35, -1.45);
  g.stroke();
}
