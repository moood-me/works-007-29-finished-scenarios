// The board at the forest's edge where the path goes into the wood (`board`: the wood named and protected — the
// epilogue's Name): a plank on two posts, its letters cut and painted white. Its points: `plate` (the letters), `foot`
// (the ground under it, where a rod goes in)
if (!e.state.board) return;
g.fillStyle = "#5b4936";
g.fillRect(-0.62, -1.75, 0.09, 1.77);
g.fillRect(0.53, -1.75, 0.09, 1.77);
g.fillStyle = "#7a6248";
g.beginPath();
g.roundRect(-0.75, -1.72, 1.5, 0.62, 0.03);
g.fill();
g.fillStyle = "#6a543d";
g.fillRect(-0.75, -1.42, 1.5, 0.012);
g.save();
g.translate(0, -1.41);
g.scale(0.01, 0.01);
g.fillStyle = "#eee6d4";
g.textAlign = "center";
g.textBaseline = "middle";
const fit = (text, size, y, weight) => {
  g.font = `${weight} ${size}px serif`;
  const w = g.measureText(text).width;
  if (w > 134) g.font = `${weight} ${Math.floor((size * 134) / w)}px serif`;
  g.fillText(text, 0, y);
};
fit(tr("Elzéard's Forest"), 17, -14, "bold");
fit(tr("Protected. No fires."), 10, 14, "normal");
g.restore();
e.at(0, -1.41, "plate");
e.at(0, 0, "foot");
