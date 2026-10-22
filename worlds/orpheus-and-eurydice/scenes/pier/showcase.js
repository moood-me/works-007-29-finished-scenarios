// The look of the world: the wedding night on the pier, the two at its end — first the whole place, then nearer, so
// both are seen, then each of them from the side of the other — as the other sees them —, the face three-quarters to
// us. Nobody moves but for breathing, the water, the reeds and the lights.
// (each of them seen from a metre to the other's side, turned back onto them: camera_x aside, camera_yaw back)
const from = (who, side) => ({ camera_target: who, camera_shot: 'medium', camera_x: side, camera_yaw: -side * 45 });
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
    const next = s.shot(from('eurydice', 1));
    await s.until(() => next.ready);
    next.cut();
    await s.wait(6);
  } },
  { name: 'orpheus', run: async s => {
    const next = s.shot(from('orpheus', -1));
    await s.until(() => next.ready);
    next.cut();
    await s.wait(6);
  } },
  { name: 'the lake', run: async s => {
    const next = s.shot({ camera_target: null, camera_x: 0, camera_yaw: 0 });
    await s.until(() => next.ready);
    next.cut();
    await s.wait(8);
  } },
];
