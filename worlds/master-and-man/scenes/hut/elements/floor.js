// The floor of the hut, seen from above: wide boards running from the back wall toward the eye, worn paler where
// people go, and a striped homespun runner from the passage's door into the room.
// (x −3.4…3.4 across, y −2.35 at the back wall … 2.35 toward the eye; the door's runner x 0.12…0.98)
const L = e.lib;
const rnd = () => e.rnd();
L.boards(g, -3.4, 3.4, -2.35, 2.35, 0.32, rnd);
// worn paler down the middle, where they go from the door to the table and the stove
const worn = g.createRadialGradient(0.2, 0.2, 0.2, 0.2, 0.2, 2.6);
worn.addColorStop(0, "rgba(214,192,156,0.35)");
worn.addColorStop(1, "rgba(214,192,156,0)");
g.fillStyle = worn;
g.fillRect(-3.4, -2.35, 6.8, 4.7);
// the runner: stripes across it, red, ochre, blue-grey and white, its fringe at the end
const STRIPES = ["#a83a2c", "#d8c8a4", "#5a6a84", "#d8c8a4", "#c08a3a", "#e8e0cc"];
const RX0 = 0.12;
const RX1 = 0.98;
let k = 0;
for (let y = -2.35; y < 2.1; y += 0.11) {
  g.fillStyle = STRIPES[k % STRIPES.length];
  g.fillRect(RX0, y, RX1 - RX0, 0.11);
  k++;
}
g.fillStyle = "#e8e0cc";
for (let x = RX0 + 0.02; x < RX1; x += 0.04) g.fillRect(x, 2.1, 0.012, 0.08);
