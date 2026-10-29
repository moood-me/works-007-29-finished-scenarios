// Jack's room seen through his window (metres from its floor, 0.6 m up, at the middle; the far wall a step behind the
// window): pale blue wallpaper with a thin stripe, a shelf of schoolbooks, a poster of a rocket; its ceiling lamp's
// glow `lamp` (lit by `house_lights`). A year on (`sold`) the wall is bare — a paler square where the poster hung.
const sold = !!e.state.sold;
g.fillStyle = '#b9cbdc';
g.fillRect(-1.2, -2.85, 2.4, 2.87);
g.fillStyle = 'rgba(255,255,255,0.18)';
for (let x = -1.15; x < 1.2; x += 0.16) g.fillRect(x, -2.85, 0.03, 2.87);
if (sold) {
  g.fillStyle = 'rgba(232,240,246,0.6)';
  g.fillRect(0.15, -1.95, 0.5, 0.7);
} else {
  // the poster: a rocket going up over a night blue
  g.fillStyle = '#2e3f6e';
  g.fillRect(0.15, -1.95, 0.5, 0.7);
  g.fillStyle = '#e9e4d6';
  g.beginPath();
  g.moveTo(0.4, -1.85);
  g.lineTo(0.46, -1.6);
  g.lineTo(0.34, -1.6);
  g.closePath();
  g.fill();
  g.fillStyle = '#e0573f';
  g.fillRect(0.37, -1.6, 0.06, 0.12);
  // the shelf of schoolbooks
  g.fillStyle = '#9a7552';
  g.fillRect(-0.9, -1.25, 0.8, 0.03);
  for (let i = 0; i < 7; i++) {
    g.fillStyle = ['#a8423a', '#3f6b56', '#d9b44a', '#4c6a96', '#8a6a9a', '#c9733f', '#5f7d5a'][i];
    g.fillRect(-0.86 + i * 0.07, -1.25 - 0.17 - (i % 3) * 0.02, 0.055, 0.17 + (i % 3) * 0.02);
  }
}
e.light(0.55, -2.6, 0.3, '#ffd6a0', 0.9, 'lamp');
