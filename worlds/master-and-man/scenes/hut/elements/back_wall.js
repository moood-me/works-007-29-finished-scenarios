// The back wall of the old man's hut, seen from inside: hewn logs darkened by the stove, the low door into the passage
// (open: the passage dark and cold beyond it, the leaf swung in against the passage's wall), a shelf above the door with
// the household's crockery. The stove stands before its right part, the table and the icons' corner before its left.
// (x −3.45…3.45 m: across the same; the door x 0.1…1.0, 1.75 m high over a high threshold; its foot at the floor)
const L = e.lib;
const C = L.C;
const rnd = () => e.rnd();
const X0 = -3.45;
const X1 = 3.45;
const TOP = -2.42;
const D0 = 0.1;
const D1 = 1.0;
const DH = 1.75;

L.logs(g, X0, X1, TOP, 0, 0.24, rnd);

// the door's opening: the passage beyond, dark and cold (its far boards, a crack of the evening at its outer door)
const cold = g.createLinearGradient(0, -DH, 0, 0);
cold.addColorStop(0, "#3a4250");
cold.addColorStop(1, "#56606e");
g.fillStyle = cold;
g.fillRect(D0, -DH, D1 - D0, DH);
g.fillStyle = "#4a5260";
for (let x = D0 + 0.12; x < D1; x += 0.16) g.fillRect(x, -DH, 0.01, DH);
g.fillStyle = "#8a9ab4";
g.fillRect(D0 + 0.52, -DH + 0.3, 0.025, DH - 0.45);
// (the leaf, open inward against the passage's right wall: a narrow dark slant of boards)
g.fillStyle = "#5e4a36";
g.beginPath();
g.moveTo(D1, -DH);
g.lineTo(D1 - 0.2, -DH + 0.1);
g.lineTo(D1 - 0.2, -0.16);
g.lineTo(D1, -0.12);
g.closePath();
g.fill();
// (the frame: planed jambs, a lintel, a high threshold)
g.fillStyle = C.board;
g.fillRect(D0 - 0.08, -DH - 0.1, 0.08, DH + 0.1);
g.fillRect(D1, -DH - 0.1, 0.08, DH + 0.1);
g.fillRect(D0 - 0.08, -DH - 0.1, D1 - D0 + 0.16, 0.1);
g.fillStyle = C.boardDark;
g.fillRect(D0 - 0.02, -0.14, D1 - D0 + 0.04, 0.14);
g.fillStyle = "rgba(60,44,30,0.35)";
g.fillRect(D0, -DH, 0.03, DH);

// the shelf over the door: a board on two brackets, the crockery on it — glazed bowls, a jug, a stack of plates
const SH = -2.0;
g.fillStyle = C.boardDark;
g.fillRect(-0.4, SH, 1.75, 0.04);
g.fillRect(-0.3, SH + 0.04, 0.04, 0.14);
g.fillRect(1.2, SH + 0.04, 0.04, 0.14);
const pots = [
  [-0.25, 0.09, 0.07, "#8a5a32"],
  [-0.05, 0.12, 0.13, "#6e7a5a"],
  [0.18, 0.07, 0.06, "#c8bca4"],
  [0.38, 0.08, 0.16, "#7a4a2a"],
  [0.62, 0.1, 0.07, "#4e5e74"],
  [0.85, 0.09, 0.12, "#a46a3a"],
  [1.08, 0.06, 0.05, "#d8cfbe"],
];
for (const [x, w, h, c] of pots) {
  g.fillStyle = c;
  g.beginPath();
  g.ellipse(x, SH - h * 0.45, w * 0.5, h * 0.55, 0, 0, Math.PI * 2);
  g.fill();
  g.fillRect(x - w * 0.32, SH - h, w * 0.64, h * 0.3);
}

// a woven towel hung on a peg by the corner, its red-bordered ends
g.fillStyle = C.linen;
g.fillRect(-1.12, -1.75, 0.2, 0.62);
L.border(g, -1.12, -0.92, -1.22, 0.07);
L.border(g, -1.12, -0.92, -1.32, 0.05);
g.fillStyle = C.boardDark;
g.fillRect(-1.05, -1.8, 0.06, 0.06);
