// «Рассказ» close up (an insert, stage heights; `notebook_open`): the Traveller's notebook open on his knee in the
// daylight — a page for each year, and on each one word, «It was.» (`notebook_page`: "was" — the spread as he has kept
// it; "blank" — he has leafed on to a clean page, where the name is written letter by letter, `notebook_name` 0…1, the
// letters layers the animate shows). `notebook_turn` 0…1: the wind turning the pages back — a leaf (a layer about the
// spine) flipping over three times. Points: `pages#name` (where the name is written).
const page = e.state.notebook_page ?? "was";
const INK = "#2f2a26", PAPER = "#ebe1c6", EDGE = "#cfc2a2";
const L = [0.47, 0.19, 0.405, 0.62], R = [0.905, 0.19, 0.405, 0.62]; // the left and the right page: x, y, w, h
// his knee and the coat under the book, warm grey-blue, a little light from the left
const bg = g.createLinearGradient(-0.4, 0, 2.2, 1);
bg.addColorStop(0, "#5d6b77");
bg.addColorStop(1, "#3e4852");
g.fillStyle = bg;
g.fillRect(-0.4, -0.05, 2.6, 1.1);
// the book's dark oilcloth covers showing round the pages
g.fillStyle = "#26211d";
g.fillRect(0.43, 0.16, 0.92, 0.68);
const sheet = (f, [x, y, w, h], spine) => {
  f.fillStyle = PAPER;
  f.fillRect(x, y, w, h);
  f.fillStyle = "rgba(120, 96, 60, 0.14)";
  f.fillRect(spine ? x + w - 0.035 : x, y, 0.035, h);
  f.strokeStyle = "rgba(110, 120, 140, 0.22)";
  f.lineWidth = 0.002;
  for (let ly = y + 0.06; ly < y + h - 0.02; ly += 0.045) {
    f.beginPath();
    f.moveTo(x + 0.03, ly);
    f.lineTo(x + w - 0.03, ly);
    f.stroke();
  }
  f.strokeStyle = EDGE;
  f.lineWidth = 0.003;
  f.strokeRect(x, y, w, h);
};
const hand = (f, text, x, y, size) => {
  f.fillStyle = INK;
  f.font = `italic ${size}px serif`;
  f.textAlign = "center";
  f.textBaseline = "alphabetic";
  f.fillText(text, x, y);
};
const WAS = tr("It was.");
sheet(g, L, true);
hand(g, WAS, L[0] + L[2] / 2, L[1] + L[3] * 0.42, 0.07);
sheet(g, R, false);
if (page === "was") hand(g, WAS, R[0] + R[2] / 2, R[1] + R[3] * 0.42, 0.07);
// the name on the clean page, written left to right
const NAME = tr("Elzéard"), size = 0.085, ny = R[1] + R[3] * 0.45;
g.font = `italic ${size}px serif`;
const total = g.measureText(NAME).width;
let nx = R[0] + R[2] / 2 - total / 2;
// twelve layers, the letters spread over them in order (a name of up to twelve letters): the animate shows them in turn
const letters = [...NAME], SLOTS = 12, slot = [];
letters.forEach((ch, i) => {
  slot.push({ ch, x: nx, j: Math.min(SLOTS - 1, Math.floor((i * SLOTS) / letters.length)) });
  nx += g.measureText(ch).width;
});
for (let j = 0; j < SLOTS; j++) {
  e.layer(`l${j}`, {}, (f) => {
    f.fillStyle = INK;
    f.font = `italic ${size}px serif`;
    f.textAlign = "left";
    f.textBaseline = "alphabetic";
    for (const o of slot) if (o.j === j) f.fillText(o.ch, o.x, ny);
  });
}
e.at(R[0] + R[2] / 2, ny - size * 0.3, "name");
// the leaf the wind turns: the right page lifted about the spine (its back a little darker), «It was.» on it
e.layer("leaf", { pivot: [0.89, 0.5] }, (f) => {
  sheet(f, R, false);
  hand(f, WAS, R[0] + R[2] / 2, R[1] + R[3] * 0.42, 0.07);
});
