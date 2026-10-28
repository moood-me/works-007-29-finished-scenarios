// The shelf over the stove: a plain wooden board on brackets; on it tea tins, a jar of rice, a stack of bowls and a
// paper crane folded from a newspaper, asleep.
g.fillStyle = '#9a7552';
g.fillRect(-0.55, -0.04, 1.1, 0.04);
g.fillRect(-0.45, 0.0, 0.03, 0.12);
g.fillRect(0.42, 0.0, 0.03, 0.12);
// two tea tins, red and green, with gold lids
for (const [x, c] of [
  [-0.42, '#a8423a'],
  [-0.3, '#3f6b56'],
]) {
  g.fillStyle = c;
  g.fillRect(x - 0.05, -0.2, 0.1, 0.16);
  g.fillStyle = '#c9a24a';
  g.fillRect(x - 0.05, -0.22, 0.1, 0.025);
}
// the rice jar
g.fillStyle = '#e9e4d6';
g.fillRect(-0.15, -0.24, 0.16, 0.2);
g.fillStyle = '#d6cfba';
g.fillRect(-0.15, -0.13, 0.16, 0.09);
// bowls, white with a blue band
for (let i = 0; i < 4; i++) {
  g.fillStyle = '#f6f3ec';
  g.fillRect(0.06, -0.08 - i * 0.04, 0.2, 0.04);
  g.fillStyle = '#5b7ea8';
  g.fillRect(0.06, -0.065 - i * 0.04, 0.2, 0.008);
}
// the newspaper crane, a little angular
g.fillStyle = '#ddd8cc';
g.beginPath();
g.moveTo(0.3, -0.04);
g.lineTo(0.37, -0.14);
g.lineTo(0.44, -0.04);
g.closePath();
g.fill();
g.fillStyle = '#cbc5b6';
g.beginPath();
g.moveTo(0.33, -0.08);
g.lineTo(0.28, -0.2);
g.lineTo(0.31, -0.1);
g.moveTo(0.41, -0.08);
g.lineTo(0.49, -0.17);
g.lineTo(0.44, -0.07);
g.fill();
g.fillStyle = 'rgba(80,80,80,0.35)';
for (let i = 0; i < 4; i++) g.fillRect(0.34 + i * 0.015, -0.1, 0.008, 0.004);
