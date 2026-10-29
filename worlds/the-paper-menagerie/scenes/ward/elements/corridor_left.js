// The corridor's wall on the ward's side, seen from the corridor (x runs away from the eye down the corridor: distance
// 7.5 + x): the hospital's two-tone paint (lib's wall), a wooden hand-rail along it, the ward's door (number 312) at
// x −5.65 — shut, its ribbed pane warm with the bedside lamp beyond —, a red fire extinguisher, a row of three chairs
// at x −1…1, a notice board, the doors of the next wards further on.
e.lib.wall(g, -10.6, 10.6);
const door = (x, warm) => {
  g.fillStyle = '#e8e6dc';
  g.fillRect(x - 0.52, -2.18, 1.04, 2.18);
  g.fillStyle = '#d9cfb6';
  g.fillRect(x - 0.45, -2.1, 0.9, 2.1);
  g.fillStyle = '#b8b9b6';
  g.fillRect(x - 0.42, -0.32, 0.84, 0.28);
  g.fillStyle = warm ? '#f3dcae' : '#d8e2dc';
  g.fillRect(x - 0.2, -1.55, 0.4, 0.8);
  g.fillStyle = 'rgba(255,255,255,0.3)';
  for (let k = x - 0.19; k < x + 0.2; k += 0.03) g.fillRect(k, -1.55, 0.012, 0.8);
  g.fillStyle = '#8c8e8c';
  g.fillRect(x - 0.38, -1.08, 0.1, 0.025);
  g.fillStyle = '#f2f2ec';
  g.fillRect(x + 0.6, -1.7, 0.18, 0.1);
  g.fillStyle = '#3a4a5a';
  g.fillRect(x + 0.63, -1.67, 0.12, 0.035);
};
// the hand-rail
g.fillStyle = '#b48a5e';
g.fillRect(-10.6, -0.95, 21.2, 0.05);
g.fillStyle = '#8f6b47';
g.fillRect(-10.6, -0.905, 21.2, 0.012);
door(-5.65, true);
door(4.2, false);
door(9.4, false);
// the extinguisher
g.fillStyle = '#c23a30';
g.fillRect(-3.6, -1.15, 0.16, 0.42);
g.fillStyle = '#2a2a2a';
g.fillRect(-3.56, -1.22, 0.08, 0.08);
// three chairs against the wall: moulded blue seats on chrome legs
for (const x of [-0.9, -0.3, 0.3]) {
  g.fillStyle = '#9da3a6';
  g.fillRect(x - 0.2, -0.45, 0.02, 0.45);
  g.fillRect(x + 0.18, -0.45, 0.02, 0.45);
  g.fillStyle = '#4f6f9a';
  g.fillRect(x - 0.24, -0.5, 0.48, 0.07);
  g.fillRect(x - 0.22, -0.9, 0.44, 0.36);
}
// the notice board
g.fillStyle = '#b89668';
g.fillRect(1.4, -1.85, 1.1, 0.75);
for (let i = 0; i < 5; i++) {
  g.fillStyle = ['#f4f1e6', '#f2e3a0', '#dfe9f2', '#f4f1e6', '#f2d4c8'][i];
  g.fillRect(1.48 + (i % 3) * 0.33, -1.78 + Math.floor(i / 3) * 0.33, 0.26, 0.28);
}
e.at(-5.65, -1.4, 'door');
