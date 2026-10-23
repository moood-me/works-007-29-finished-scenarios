// The festival's garland cords strung across the square from the Meeting House to the houses opposite (−7.5 … 9.5 m
// across), three of them, 9, 13.5 and 18 m ahead, sagging from 6.6 m at the walls to 5.6 m in the middle; the pennants
// and the lanterns on them are elements of their own (copies) hung along the same curve
const sag = x => 6.6 - 1.0 * (1 - Math.pow((x - 1) / 8.5, 2));
for (const dz of [0, 4.5, 9]) {
  e.part(0, dz, g => {
    g.strokeStyle = '#7a6a58';
    g.lineWidth = 0.025;
    g.beginPath();
    for (let x = -7.5; x <= 9.5; x += 0.25) {
      if (x === -7.5) g.moveTo(x, -sag(x));
      else g.lineTo(x, -sag(x));
    }
    g.stroke();
  }, [-7.7, -6.8, 9.7, -5.4]);
}
