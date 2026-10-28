// A clump of round trees on the valley floor — along its hedges and lanes: three crowns together, each a dark lower
// round and a paler upper one, on short trunks
const tree = (x, h) => {
  g.fillStyle = "#4f453a";
  g.fillRect(x - 0.18, -h * 0.4, 0.36, h * 0.4);
  g.fillStyle = "#56693f";
  g.beginPath();
  g.ellipse(x, -h * 0.64, h * 0.36, h * 0.32, 0, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = "#728550";
  g.beginPath();
  g.ellipse(x - h * 0.07, -h * 0.72, h * 0.23, h * 0.19, 0, 0, Math.PI * 2);
  g.fill();
};
tree(-3.2, 5.4);
tree(3.4, 6.2);
tree(0, 7);
