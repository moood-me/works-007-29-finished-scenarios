// The mail plane before the hangar (`plane`: chilean — Pellerin's, just in from the Andes, its band dark blue;
// european — the European mail, its band dark red; none — no plane there): a parasol-winged monoplane seen from its
// left side, nose to the left — doped fabric in pale silver, the band along its flank, the metal cowling of its engine,
// a big two-bladed wooden propeller, two open cockpits one behind the other with their small windscreens, the wing
// high over them on its struts, spoked wheels, the tail on its skid; a muted red band on the rudder.
// It moves by its place (plane_a, plane_d, plane_h — up in the air), pitches about its wheel (plane_pitch, degrees,
// nose up +: the layers `body`, `blades`, `disc` turned by animate); the propeller a blur while `engine` runs (the
// layer `disc`, the still blades `blades`), the exhaust glowing; its landing lamp (`lamp`, by `plane_lights`); the
// chocks at its wheel while `chocks` is 1 and it stands on the ground.
// Metres from its anchor (the middle of its length on the ground), y up negative. Points: `cockpit`, `wheel`, `nose`.
const which = e.state.plane;
if (which !== 'none') {
const BAND = which === 'european' ? '#7a2a26' : '#2f4769';
const PIVOT = [-3.15, -0.02];
e.layer('body', { pivot: PIVOT }, c => {
// the far side's struts and wheel, behind the fuselage
c.strokeStyle = '#6d7174';
c.lineWidth = 0.07;
c.beginPath();
c.moveTo(-2.8, -1.25);
c.lineTo(-3.4, -3.55);
c.moveTo(-1.2, -1.4);
c.lineTo(-2.0, -3.55);
c.stroke();
// the fuselage
c.fillStyle = '#c8c8bf';
c.beginPath();
c.moveTo(-4.3, -2.42);
c.bezierCurveTo(-2.5, -2.58, 0.5, -2.6, 4.8, -2.18);
c.lineTo(5.35, -2.08);
c.lineTo(5.35, -1.9);
c.bezierCurveTo(3, -1.55, 0.6, -1.3, -2.6, -1.18);
c.lineTo(-4.3, -1.22);
c.closePath();
c.fill();
// the blue band along it
c.fillStyle = BAND;
c.beginPath();
c.moveTo(-4.3, -1.95);
c.bezierCurveTo(-2, -2.02, 1.5, -1.95, 5.3, -2.0);
c.lineTo(5.3, -1.92);
c.bezierCurveTo(1.5, -1.72, -2, -1.7, -4.3, -1.7);
c.closePath();
c.fill();
// the engine cowling and its exhaust stubs
c.fillStyle = '#8c9194';
c.beginPath();
c.moveTo(-4.3, -2.42);
c.lineTo(-5.55, -2.3);
c.quadraticCurveTo(-5.85, -1.85, -5.55, -1.38);
c.lineTo(-4.3, -1.22);
c.closePath();
c.fill();
c.strokeStyle = '#6a6e70';
c.lineWidth = 0.03;
for (const x of [-5.2, -4.85, -4.5]) {
  c.beginPath();
  c.moveTo(x, -2.36);
  c.lineTo(x, -1.3);
  c.stroke();
}
c.fillStyle = '#4b4c4e';
for (const x of [-5.05, -4.75, -4.45]) c.fillRect(x, -1.32, 0.12, 0.22);
// fabric ribs showing through the dope
c.strokeStyle = 'rgba(160,160,150,0.7)';
c.lineWidth = 0.025;
for (let x = -3.6; x < 5; x += 0.55) {
  c.beginPath();
  c.moveTo(x, -2.5 + 0.03 * x);
  c.lineTo(x, -1.25 - 0.07 * Math.max(0, x));
  c.stroke();
}
// the two open cockpits: leather rims, small windscreens
for (const x of [-1.6, 0.2]) {
  c.fillStyle = '#2b2522';
  c.beginPath();
  c.ellipse(x + 0.35, -2.58, 0.48, 0.1, 0, Math.PI, 0);
  c.fill();
  c.fillStyle = '#6b4a32';
  c.fillRect(x - 0.13, -2.6, 0.96, 0.05);
  c.fillStyle = 'rgba(206,222,230,0.7)';
  c.beginPath();
  c.moveTo(x - 0.15, -2.6);
  c.lineTo(x - 0.05, -2.9);
  c.lineTo(x + 0.12, -2.9);
  c.lineTo(x + 0.08, -2.6);
  c.closePath();
  c.fill();
}
// the tail: fin and rudder, the stabiliser
c.fillStyle = '#c8c8bf';
c.beginPath();
c.moveTo(4.2, -2.2);
c.quadraticCurveTo(4.7, -3.2, 5.3, -3.35);
c.quadraticCurveTo(5.75, -3.2, 5.7, -2.6);
c.lineTo(5.55, -1.9);
c.lineTo(5.35, -2.08);
c.closePath();
c.fill();
c.fillStyle = '#9a4a40';
c.beginPath();
c.moveTo(5.35, -3.3);
c.quadraticCurveTo(5.75, -3.2, 5.7, -2.6);
c.lineTo(5.6, -2.15);
c.lineTo(5.35, -2.1);
c.closePath();
c.fill();
c.strokeStyle = '#7c7d76';
c.lineWidth = 0.03;
c.beginPath();
c.moveTo(5.35, -3.33);
c.lineTo(5.35, -2.08);
c.stroke();
c.fillStyle = '#b8b8ae';
c.beginPath();
c.moveTo(3.7, -2.12);
c.lineTo(5.6, -2.2);
c.lineTo(5.65, -2.07);
c.lineTo(3.8, -2.04);
c.closePath();
c.fill();
// the tail skid
c.strokeStyle = '#4b4c4e';
c.lineWidth = 0.06;
c.beginPath();
c.moveTo(4.9, -1.95);
c.lineTo(5.1, -0.02);
c.stroke();
// the wing, high over the cockpits: its section seen end-on as a long thin aerofoil, and its near tip's edge
c.fillStyle = '#d4d4cb';
c.beginPath();
c.moveTo(-4.35, -3.62);
c.quadraticCurveTo(-4.4, -3.9, -3.6, -3.92);
c.bezierCurveTo(-2.4, -3.95, -1.4, -3.85, -0.9, -3.7);
c.lineTo(-0.9, -3.64);
c.bezierCurveTo(-2, -3.55, -3.6, -3.52, -4.35, -3.62);
c.closePath();
c.fill();
// cabane struts from the fuselage to the wing, and the near wing struts from below
c.strokeStyle = '#7b7f82';
c.lineWidth = 0.08;
c.beginPath();
c.moveTo(-3.3, -2.48);
c.lineTo(-3.1, -3.55);
c.moveTo(-2.2, -2.55);
c.lineTo(-1.9, -3.6);
c.moveTo(-2.6, -1.25);
c.lineTo(-3.6, -3.55);
c.moveTo(-1.0, -1.38);
c.lineTo(-1.6, -3.6);
c.stroke();
// the landing gear: V struts to the axle
c.lineWidth = 0.09;
c.strokeStyle = '#55595c';
c.beginPath();
c.moveTo(-3.6, -1.22);
c.lineTo(-3.15, -0.5);
c.moveTo(-2.4, -1.2);
c.lineTo(-3.15, -0.5);
c.stroke();
// the near wheel: tyre, spokes, hub
c.fillStyle = '#2a2b2d';
c.beginPath();
c.arc(-3.15, -0.48, 0.48, 0, Math.PI * 2);
c.fill();
c.fillStyle = '#9ea2a4';
c.beginPath();
c.arc(-3.15, -0.48, 0.34, 0, Math.PI * 2);
c.fill();
c.strokeStyle = '#6b6f71';
c.lineWidth = 0.025;
for (let k = 0; k < 10; k++) {
  const a = (k / 10) * Math.PI * 2;
  c.beginPath();
  c.moveTo(-3.15, -0.48);
  c.lineTo(-3.15 + 0.33 * Math.cos(a), -0.48 + 0.33 * Math.sin(a));
  c.stroke();
}
c.fillStyle = '#3f4244';
c.beginPath();
c.arc(-3.15, -0.48, 0.07, 0, Math.PI * 2);
c.fill();
  e.light(-5.95, -1.6, 0.25, '#fff6e0', 1, 'lamp');
  e.light(-4.8, -1.15, 0.12, '#ff9a50', 0.8, 'exhaust');
});
// the propeller standing still: its hub and two long wooden blades, up and down
e.layer('blades', { pivot: PIVOT }, c => {
c.fillStyle = '#5c6062';
c.beginPath();
c.ellipse(-5.86, -1.85, 0.12, 0.2, 0, 0, Math.PI * 2);
c.fill();
c.fillStyle = '#8f5f3b';
for (const s of [-1, 1]) {
  c.beginPath();
  c.moveTo(-5.9, -1.85);
  c.bezierCurveTo(-6.02, -1.85 + s * 0.5, -6.0, -1.85 + s * 1.1, -5.94, -1.85 + s * 1.38);
  c.quadraticCurveTo(-5.88, -1.85 + s * 1.45, -5.83, -1.85 + s * 1.36);
  c.bezierCurveTo(-5.8, -1.85 + s * 1.0, -5.8, -1.85 + s * 0.5, -5.85, -1.85);
  c.closePath();
  c.fill();
}
});
// the propeller turning: a pale blur of a disc, its hub
e.layer('disc', { pivot: PIVOT }, c => {
  c.fillStyle = 'rgba(200,190,170,0.28)';
  c.beginPath();
  c.ellipse(-5.9, -1.85, 0.1, 1.4, 0, 0, Math.PI * 2);
  c.fill();
  c.fillStyle = '#5c6062';
  c.beginPath();
  c.ellipse(-5.86, -1.85, 0.12, 0.2, 0, 0, Math.PI * 2);
  c.fill();
});
if (e.state.chocks && !e.state.plane_h) {
// the chocks before and behind it
g.fillStyle = '#6a5038';
for (const s of [-1, 1]) {
  g.beginPath();
  g.moveTo(-3.15 + s * 0.42, 0);
  g.lineTo(-3.15 + s * 0.85, 0);
  g.lineTo(-3.15 + s * 0.42, -0.32);
  g.closePath();
  g.fill();
}
}
e.at(-0.9, -2.6, 'cockpit');
e.at(-3.15, -0.5, 'wheel');
e.at(-5.9, -1.85, 'nose');
}
