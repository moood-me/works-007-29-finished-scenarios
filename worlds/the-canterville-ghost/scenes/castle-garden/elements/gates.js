// The park gates at the end of the avenue (56 m off): two square stone piers with stone balls on them, and the
// wrought-iron gates standing open, folded back against them — the road going out between.
for (const s of [-1, 1]) {
  const x = s * 2.15;
  g.fillStyle = '#9a958a';
  g.fillRect(x - 0.35, -2.9, 0.7, 3.0);
  g.fillStyle = '#7c776d';
  g.fillRect(x - 0.42, -3.0, 0.84, 0.14);
  g.fillStyle = '#9a958a';
  g.beginPath();
  g.arc(x, -3.3, 0.28, 0, Math.PI * 2);
  g.fill();
  // the gate's leaf, open, seen edge on beside the pier: a narrow dark grille
  g.fillStyle = '#26262b';
  const x0 = x - s * 0.55;
  g.fillRect(Math.min(x0, x0 - s * 0.22), -2.2, 0.22, 2.2);
}
e.at(0, -1.5, 'gates');
