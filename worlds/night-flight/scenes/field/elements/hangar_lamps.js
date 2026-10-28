// The three lamps hanging inside the hangar on long cords from the roof, one behind another down its length (parts
// 0, 4.5 and 9 m back): wide enamel shades, the bulbs lit or grey by `hangar` (a switch, not a fade: it repaints);
// their lights `l0`…`l2`.
const lit = e.state.hangar > 0.5;
for (let i = 0; i < 3; i++) {
  e.part(0, i * 4.5, p => {
    p.strokeStyle = '#2e3032';
    p.lineWidth = 0.03;
    p.beginPath();
    p.moveTo(0, -7.6);
    p.lineTo(0, -6.15);
    p.stroke();
    p.fillStyle = '#3f5a4c';
    p.beginPath();
    p.moveTo(-0.36, -5.9);
    p.quadraticCurveTo(0, -6.3, 0.36, -5.9);
    p.closePath();
    p.fill();
    p.fillStyle = lit ? '#fff0cc' : '#8d8a82';
    p.beginPath();
    p.ellipse(0, -5.9, 0.16, 0.06, 0, 0, Math.PI * 2);
    p.fill();
    e.light(0, -5.85, 0.4, '#ffd49a', 1, `l${i}`);
  });
}
