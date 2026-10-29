// Elzéard's iron rod, leaning against the fountain's trough, when `rod` says (the last shot of «Рассказ»: the Traveller
// sitting on the rim, the rod beside him). Its point: `top`
if (e.state.rod) {
  g.strokeStyle = "#34343a";
  g.lineCap = "round";
  g.lineWidth = 0.024;
  g.beginPath();
  g.moveTo(0.3, 0.0);
  g.lineTo(-0.18, -1.38);
  g.stroke();
  e.at(-0.18, -1.38, "top");
}
