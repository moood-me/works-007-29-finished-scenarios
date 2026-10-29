// Her little paper parcel on the grass by him (`parcel`): brown paper tied with string. Nothing is painted while
// `parcel` is false. Point `parcel#parcel`.
if (e.state.parcel) {
  g.fillStyle = '#c8b88e';
  g.fillRect(-0.08, -0.06, 0.16, 0.06);
  g.fillStyle = '#b0a078';
  g.fillRect(-0.08, -0.07, 0.16, 0.012);
  g.fillStyle = '#7a5e44';
  g.fillRect(-0.004, -0.07, 0.008, 0.07);
  g.fillRect(-0.08, -0.035, 0.16, 0.006);
}
e.at(0, -0.04, 'parcel');
