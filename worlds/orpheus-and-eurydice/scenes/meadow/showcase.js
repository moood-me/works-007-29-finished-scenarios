// The look of the meadow under the earth: first the whole place — the pale flowers, the stream going off toward the
// stair, the shades standing apart — then the two nearer: she on her stone by the stream, he come to her with his
// lantern; then each of them nearer — she looks down at the flower she let go on the water, he holds his lantern up
// to see her face —; then the shades; then the whole place again. Nobody moves but for breathing, the lantern's swing,
// the flowers, the stream and its rings.
return [
  { name: 'the meadow', run: async s => {
    await s.wait(10);
  } },
  { name: 'the two', run: async s => {
    const next = s.shot({ camera_target: 'between', camera_shot: 'full' });
    await s.until(() => next.ready);
    next.cut();
    await s.wait(8);
  } },
  { name: 'eurydice', run: async s => {
    const next = s.shot({ camera_target: 'eurydice', camera_shot: 'medium', eurydice_look: 'float_flower' });
    await s.until(() => next.ready);
    next.cut();
    await s.wait(6);
  } },
  { name: 'orpheus', run: async s => {
    const next = s.shot({ camera_target: 'orpheus', camera_shot: 'medium', eurydice_look: 'orpheus' });
    await s.until(() => next.ready);
    next.cut();
    await s.wait(6);
  } },
  { name: 'the shades', run: async s => {
    const next = s.shot({ camera_target: 'shade_1', camera_shot: 'wide' });
    await s.until(() => next.ready);
    next.cut();
    await s.wait(6);
  } },
  { name: 'the stream', run: async s => {
    const next = s.shot({ camera_target: null });
    await s.until(() => next.ready);
    next.cut();
    await s.wait(8);
  } },
];
