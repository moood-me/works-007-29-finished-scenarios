// The shoe box with the animals in it, its front (0.34 m wide, 0.13 high): white card gone cream and grey with years
// of dust, the blue lid on with its white band. `box`: shut — here, the lid on; gone — taken down through the hatch.
// Box and lid are layers: `stir` makes them start now and then (Laohu inside, waking; the animals with him).
if (e.state.box === 'shut') {
  e.layer('box', { pivot: [0, 0] }, l => {
    l.fillStyle = '#ece6d6';
    l.fillRect(-0.17, -0.13, 0.34, 0.13);
    l.fillStyle = 'rgba(160,150,130,0.35)';
    l.fillRect(-0.17, -0.02, 0.34, 0.02);
    l.fillStyle = '#5b78a8';
    l.fillRect(-0.13, -0.08, 0.1, 0.02);
    e.lib.dust(l, -0.2, -0.15, 0.4, 0.16, 0.38);
  });
  e.layer('lid', { pivot: [0, -0.13] }, l => {
    l.fillStyle = '#3f5a86';
    l.fillRect(-0.178, -0.135, 0.356, 0.035);
    l.fillStyle = '#f2efe6';
    l.fillRect(-0.06, -0.135, 0.02, 0.035);
    e.lib.dust(l, -0.2, -0.14, 0.4, 0.045, 0.38);
  });
  e.at(0, -0.08, 'box');
  e.at(0, -0.13, 'lid');
}
