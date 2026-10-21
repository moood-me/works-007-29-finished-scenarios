// The front slope of the house's roof, seen from above as a plane: deep snow on the planks, ridged by the wind in
// soft blue lines, its near edge (the eaves, y 2.7) a dark board under a rounded lip of snow.
// (x −4.4…4.4 m across, y −2.7…2.7 up the slope toward the eaves)
const C = e.lib.C;
g.fillStyle = C.snow;
g.fillRect(-4.4, -2.7, 8.8, 5.4);
g.strokeStyle = "rgba(180,194,214,0.5)";
g.lineWidth = 0.05;
for (let i = 0; i < 14; i++) {
  const y = -2.4 + e.rnd() * 4.6;
  const x = -4.4 + e.rnd() * 6;
  g.beginPath();
  g.moveTo(x, y);
  g.quadraticCurveTo(x + 1.2, y - 0.12, x + 2.4 + e.rnd() * 1.5, y + 0.05);
  g.stroke();
}
g.fillStyle = C.snowShade;
g.fillRect(-4.4, 2.42, 8.8, 0.14);
g.fillStyle = C.woodDark;
g.fillRect(-4.4, 2.56, 8.8, 0.14);
