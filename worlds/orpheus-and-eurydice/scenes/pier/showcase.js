// The look of the world: the wedding night on the pier, the two at its end — first the whole place, then nearer, so
// both faces are seen, then each of them. Nobody moves but for breathing, the water, the reeds and the lights.
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
    const next = s.shot({ camera_target: 'eurydice', camera_shot: 'close' });
    await s.until(() => next.ready);
    next.cut();
    await s.wait(6);
  } },
  { name: 'orpheus', run: async s => {
    const next = s.shot({ camera_target: 'orpheus', camera_shot: 'close' });
    await s.until(() => next.ready);
    next.cut();
    await s.wait(6);
  } },
  { name: 'the lake', run: async s => {
    const next = s.shot({ camera_target: null });
    await s.until(() => next.ready);
    next.cut();
    await s.wait(8);
  } },
];
