// The ceiling, seen from below (the card laid face down, its foot at the back wall, y −3.6 the end nearest the
// viewer): flat white plaster, and two long lamp housings in white enamel (unlit by day).
g.fillStyle = '#e9ebe6';
g.fillRect(-3.0, -3.65, 6.0, 3.7);
g.fillStyle = '#d9dcd5';
g.fillRect(-3.0, -0.1, 6.0, 0.12);
for (const x of [-1.2, 1.2]) {
  g.fillStyle = '#cfd2cc';
  g.fillRect(x - 0.17, -2.9, 0.34, 2.0);
  g.fillStyle = '#f7f7f2';
  g.fillRect(x - 0.12, -2.85, 0.24, 1.9);
}
