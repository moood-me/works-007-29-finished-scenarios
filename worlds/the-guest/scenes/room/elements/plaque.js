// The name board nailed to the third desk's side: a little board of pale wood, a pupil's name on it in the teacher's
// round hand.
g.fillStyle = '#c9b28a';
g.fillRect(-0.15, -0.14, 0.3, 0.13);
g.strokeStyle = '#8a7350';
g.lineWidth = 0.006;
g.strokeRect(-0.15, -0.14, 0.3, 0.13);
g.fillStyle = '#2c2420';
g.save();
g.translate(0, -0.075);
g.scale(0.01, 0.01);
g.font = 'italic 8px serif';
g.textAlign = 'center';
g.textBaseline = 'middle';
g.fillText(tr('Ali'), 0, 0);
g.restore();
e.at(0, -0.075, 'name');
