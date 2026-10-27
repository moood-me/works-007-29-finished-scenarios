// The stove before the back wall (metres from the floor): a round cast-iron stove on four short legs, its top plate, a
// blue enamel kettle on it, the black pipe going straight up into the ceiling; in its draught door low down a slit of
// red fire (a layer that flickers; its glow `embers` is the light `stove`), a little ash spilled below.
const IRON = '#2c2b29';
const on = e.state.stove;
// the pipe
g.fillStyle = '#242322';
g.fillRect(-0.07, -2.88, 0.14, 2.0);
g.fillStyle = 'rgba(120,116,110,0.35)';
g.fillRect(-0.05, -2.88, 0.025, 2.0);
g.fillStyle = '#1c1b1a';
g.fillRect(-0.085, -1.6, 0.17, 0.03);
// the legs
g.fillStyle = IRON;
g.fillRect(-0.23, -0.14, 0.05, 0.14);
g.fillRect(0.18, -0.14, 0.05, 0.14);
// the body: a cylinder seen from the front, ribbed
g.fillStyle = IRON;
g.beginPath();
g.moveTo(-0.27, -0.12);
g.lineTo(-0.27, -0.84);
g.quadraticCurveTo(0, -0.9, 0.27, -0.84);
g.lineTo(0.27, -0.12);
g.quadraticCurveTo(0, -0.08, -0.27, -0.12);
g.closePath();
g.fill();
g.fillStyle = 'rgba(140,134,124,0.25)';
g.fillRect(-0.18, -0.82, 0.04, 0.68);
for (const y of [-0.7, -0.5]) {
  g.fillStyle = '#1e1d1c';
  g.fillRect(-0.27, y, 0.54, 0.025);
}
// the top plate
g.fillStyle = '#3a3836';
g.fillRect(-0.32, -0.92, 0.64, 0.05);
// the kettle
g.fillStyle = '#4f6d84';
g.beginPath();
g.moveTo(0.0, -0.93);
g.quadraticCurveTo(-0.02, -1.12, 0.12, -1.13);
g.quadraticCurveTo(0.26, -1.12, 0.24, -0.93);
g.closePath();
g.fill();
g.strokeStyle = '#4f6d84';
g.lineWidth = 0.02;
g.beginPath();
g.moveTo(0.22, -1.0);
g.lineTo(0.3, -1.08);
g.stroke();
g.strokeStyle = '#2a2a2a';
g.lineWidth = 0.012;
g.beginPath();
g.arc(0.12, -1.13, 0.07, Math.PI, 0);
g.stroke();
// the draught door and its slit of fire
g.fillStyle = '#1a1918';
g.fillRect(-0.12, -0.42, 0.24, 0.2);
e.layer('fire', { flicker: 0.5, blend: 'add' }, c => {
  const r = c.createLinearGradient(0, -0.35, 0, -0.29);
  r.addColorStop(0, `rgba(255,150,60,${0.9 * on})`);
  r.addColorStop(1, `rgba(200,50,20,${0.9 * on})`);
  c.fillStyle = r;
  c.fillRect(-0.09, -0.35, 0.18, 0.05);
});
e.light(0, -0.32, 0.12, '#ff7a32', 0.9 * on, 'embers');
// the ash below
g.fillStyle = 'rgba(130,124,116,0.6)';
g.beginPath();
g.ellipse(0, 0.0, 0.2, 0.02, 0, 0, Math.PI * 2);
g.fill();
