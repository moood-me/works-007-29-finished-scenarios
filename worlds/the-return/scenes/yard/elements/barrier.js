// The crossing's barrier at the top of the rise, raised: a post, a counterweight, the striped pole up in the air.
g.fillStyle = "#5d5850";
g.fillRect(-0.09, -1.3, 0.18, 1.3);
g.save();
g.translate(0, -1.1);
g.rotate(-1.38);
for (let i = 0; i < 10; i++) {
  g.fillStyle = i % 2 ? "#2f2c2a" : "#ebe7de";
  g.fillRect(i * 0.5, -0.05, 0.5, 0.1);
}
g.fillStyle = "#4f4a44";
g.fillRect(-0.7, -0.09, 0.6, 0.18);
g.restore();
