// The cross-beam over the room (2.6 m ahead, its underside 2.2 m up): a rough-hewn log darkened by the hearth's
// smoke, its axe-marks paler, the iron hook the lamp hangs from (x 0.15); a crack over the umbrella where the roof's
// sand has stained it running down.
const r = e.lib.stream(121);
g.fillStyle = "#5b4636";
g.beginPath();
g.moveTo(-3, -2.6);
g.quadraticCurveTo(0, -2.63, 3, -2.58);
g.lineTo(3, -2.21);
g.quadraticCurveTo(0, -2.19, -3, -2.22);
g.closePath();
g.fill();
// the axe-marks: short paler dabs along it
g.fillStyle = "rgba(150, 122, 92, 0.45)";
for (let k = 0; k < 40; k++) {
  const x = -2.9 + r() * 5.8;
  const y = -2.56 + r() * 0.28;
  g.fillRect(x, y, 0.12 + r() * 0.2, 0.012);
}
// its lower edge in the soot
g.fillStyle = "rgba(40, 30, 22, 0.5)";
g.fillRect(-3, -2.26, 6, 0.05);
// the sand's stain under the crack
const stain = g.createLinearGradient(0, -2.6, 0, -2.2);
stain.addColorStop(0, "rgba(214, 184, 130, 0.2)");
stain.addColorStop(1, "rgba(214, 184, 130, 0.7)");
g.fillStyle = stain;
g.fillRect(1.05, -2.6, 0.26, 0.4);
// the lamp's hook
g.strokeStyle = "#2f2b27";
g.lineWidth = 0.02;
g.beginPath();
g.moveTo(0.15, -2.24);
g.lineTo(0.15, -2.15);
g.arc(0.13, -2.15, 0.02, 0, Math.PI);
g.stroke();
