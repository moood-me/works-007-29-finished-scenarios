// The festival's garland cords strung across the square from the Meeting House to the houses opposite (−6 … 7.5 m
// across), three of them, 11, 17 and 24 m ahead, sagging from 6.6 m at the walls to 5.7 m in the middle; the pennants
// and the lanterns on them are elements of their own (copies) hung along the same curve
const sag = x => 6.6 - 0.9 * (1 - Math.pow((x - 0.75) / 6.75, 2));
for (const dz of [0, 6, 13]) {
  e.part(0, dz, g => {
    g.strokeStyle = '#7a6a58';
    g.lineWidth = 0.025;
    g.beginPath();
    for (let x = -6; x <= 7.5; x += 0.25) {
      if (x === -6) g.moveTo(x, -sag(x));
      else g.lineTo(x, -sag(x));
    }
    g.stroke();
  }, [-6.2, -6.8, 7.7, -5.5]);
}
