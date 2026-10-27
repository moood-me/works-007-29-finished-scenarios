// The look of the house under the earth: first the whole hall — the fire, Hades in his chair before it, Orpheus
// standing with his lyre, Persephone and Eurydice by the pomegranate tree, the shades in the doorway —; then each of
// them nearer: Hades looking into his fire, Orpheus looking at him, Persephone looking long at Eurydice, Eurydice
// looking at Orpheus; then the hall again. Nobody moves but for breathing, the fire and its light.
return [
  { name: 'the hall', run: async s => {
    await s.wait(10);
  } },
  { name: 'hades', run: async s => {
    const next = s.shot({ camera_target: 'hades', camera_shot: 'medium' });
    await s.until(() => next.ready);
    next.cut();
    await s.wait(6);
  } },
  { name: 'orpheus', run: async s => {
    const next = s.shot({ camera_target: 'orpheus', camera_shot: 'medium' });
    await s.until(() => next.ready);
    next.cut();
    await s.wait(6);
  } },
  { name: 'persephone', run: async s => {
    const next = s.shot({ camera_target: 'persephone', camera_shot: 'medium' });
    await s.until(() => next.ready);
    next.cut();
    await s.wait(6);
  } },
  { name: 'eurydice', run: async s => {
    const next = s.shot({ camera_target: 'eurydice', camera_shot: 'medium' });
    await s.until(() => next.ready);
    next.cut();
    await s.wait(6);
  } },
  { name: 'the door', run: async s => {
    const next = s.shot({ camera_target: null });
    await s.until(() => next.ready);
    next.cut();
    await s.wait(8);
  } },
];
