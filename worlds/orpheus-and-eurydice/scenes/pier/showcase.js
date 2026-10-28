// The look of the world: the wedding night on the pier, the two at its end — first the whole place, then nearer, so
// both are seen looking at each other, then each of them nearer, turned a little toward us so the face is seen: she
// sits turned to her lanterns on the water and watches them (her head turned far round from her body, her hair's
// back would show under her chin), he sings out over the lake. Nobody moves but for breathing, the water, the reeds
// and the lights.
return [
  { name: 'the pier', run: async s => {
    await s.wait(10);
  } },
  { name: 'the two', run: async s => {
    const next = s.shot({ camera_target: 'between', camera_shot: 'full' });
    await s.until(() => next.ready);
    next.cut();
    await s.wait(8);
  } },
  { name: 'eurydice', run: async s => {
    const next = s.shot({ camera_target: 'eurydice', camera_shot: 'medium', eurydice_turn: 185, eurydice_look: 'lanterns:0' });
    await s.until(() => next.ready);
    next.cut();
    await s.wait(6);
  } },
  { name: 'orpheus', run: async s => {
    const next = s.shot({ camera_target: 'orpheus', camera_shot: 'medium', eurydice_turn: 150, eurydice_look: 'orpheus', orpheus_look: [1.2, 2, 1.1] });
    await s.until(() => next.ready);
    next.cut();
    await s.wait(6);
  } },
  { name: 'the lake', run: async s => {
    const next = s.shot({ camera_target: null, orpheus_look: 'eurydice' });
    await s.until(() => next.ready);
    next.cut();
    await s.wait(8);
  } },
];
