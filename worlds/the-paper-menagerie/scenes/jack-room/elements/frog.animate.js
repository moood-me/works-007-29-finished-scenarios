// The frog on Dad's hands: carried to where his hands are this frame, sitting just above them.
if (e.state.dad_frog) {
  const p = e.point('dad#hands');
  if (p) {
    const l = e.layer('frog');
    l.x = p[0];
    l.y = p[1] - 0.02;
  }
}
