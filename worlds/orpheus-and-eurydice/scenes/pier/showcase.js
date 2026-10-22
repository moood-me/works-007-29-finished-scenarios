// The look of the world: the wedding night on the pier, the two at its end — first the whole place, then nearer, so
// both are seen, then each of them close, turned a little toward us (she watches her lanterns on the water, he sings
// out over the lake), so the faces are seen. Nobody moves but for breathing, the water, the reeds and the lights.
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
    const next = s.shot({ camera_target: 'eurydice', camera_shot: 'close', eurydice_look: 'lanterns:0' });
    await s.until(() => next.ready);
    next.cut();
    await s.wait(6);
  } },
  { name: 'orpheus', run: async s => {
    const next = s.shot({ camera_target: 'orpheus', camera_shot: 'close', eurydice_look: 'orpheus', orpheus_look: [0.9, 2, 1.2] });
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
