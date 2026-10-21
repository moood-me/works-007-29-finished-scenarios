// The boat's two thwarts seen from above (x along the boat; y across it): the ferryman's, amidships a little aft, and
// one forward — plain planks from side to side.
for (const x of [-0.35, 0.95]) {
  g.fillStyle = "#a08a6a";
  g.fillRect(x - 0.13, -0.6, 0.26, 1.2);
  g.strokeStyle = "rgba(70, 56, 40, 0.6)";
  g.lineWidth = 0.01;
  g.strokeRect(x - 0.13, -0.6, 0.26, 1.2);
}
