// The office's back wall, seen from the room: pale distemper above a dado of dark varnished boards (to 0.85 m, the
// sill's height), a skirting; the big window onto the field cut out (x −1.0…1.8, sill 0.85 m, head 2.6 m), an old
// radiator under it; on the left a framed photograph of the line's first plane and a calendar; on the right a
// barometer. Smoke of years high on the plaster.
g.fillStyle = '#bdb49b';
g.beginPath();
g.rect(-2.5, -3.15, 5, 3.2);
g.rect(-1.0, -2.6, 2.8, 1.75);
g.fill('evenodd');
const smoke = g.createLinearGradient(0, -3.15, 0, -2.0);
smoke.addColorStop(0, 'rgba(118,100,74,0.35)');
smoke.addColorStop(1, 'rgba(118,100,74,0)');
g.fillStyle = smoke;
g.fillRect(-2.5, -3.15, 1.5, 1.15);
g.fillRect(1.8, -3.15, 0.7, 1.15);
g.fillRect(-1.0, -3.15, 2.8, 0.55);
// the dado: dark boards below the sill, its rail, the skirting
g.fillStyle = '#5b4231';
g.fillRect(-2.5, -0.85, 5, 0.85);
g.fillStyle = 'rgba(30,20,12,0.4)';
for (let x = -2.5; x < 2.5; x += 0.14) g.fillRect(x, -0.85, 0.008, 0.85);
g.fillStyle = '#3f2d20';
g.fillRect(-2.5, -0.9, 5, 0.06);
g.fillStyle = '#2b2018';
g.fillRect(-2.5, -0.13, 5, 0.13);
// the radiator under the window: upright cast-iron sections on two pipes
g.fillStyle = '#6a6c68';
for (let k = 0; k < 12; k++) g.fillRect(-0.45 + k * 0.12, -0.72, 0.08, 0.58);
g.fillRect(-0.47, -0.73, 1.44, 0.035);
g.fillRect(-0.47, -0.2, 1.44, 0.035);
// the photograph: a dark frame, a pale print of a biplane over the field, a pin of light on its glass
g.fillStyle = '#2e241c';
g.fillRect(-2.2, -2.35, 0.82, 0.6);
g.fillStyle = '#d6cfbd';
g.fillRect(-2.14, -2.29, 0.7, 0.48);
g.fillStyle = '#6f6a60';
g.fillRect(-1.98, -2.08, 0.38, 0.03);
g.fillRect(-1.93, -2.16, 0.28, 0.02);
g.fillRect(-1.83, -2.12, 0.03, 0.1);
g.fillStyle = '#8f8a7c';
g.fillRect(-2.14, -1.92, 0.7, 0.11);
// the calendar under it: a block of days on a card, one red figure
g.fillStyle = '#e8e2d2';
g.fillRect(-2.0, -1.55, 0.38, 0.5);
g.fillStyle = '#a63a30';
g.fillRect(-1.96, -1.5, 0.3, 0.08);
g.fillStyle = 'rgba(50,45,40,0.55)';
for (let r = 0; r < 5; r++) for (let c = 0; c < 6; c++) g.fillRect(-1.95 + c * 0.05, -1.36 + r * 0.06, 0.025, 0.02);
// the barometer on the right: a round brass case, a white dial
g.fillStyle = '#8a6e3a';
g.beginPath();
g.arc(2.15, -1.95, 0.16, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#ece6d6';
g.beginPath();
g.arc(2.15, -1.95, 0.12, 0, Math.PI * 2);
g.fill();
g.strokeStyle = '#2a2420';
g.lineWidth = 0.008;
g.beginPath();
g.moveTo(2.15, -1.95);
g.lineTo(2.08, -2.03);
g.stroke();
