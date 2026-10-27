// The lightning while the storm is on: now and then a flash — at once bright, a moment held, dying over a third of a
// second; sometimes a second one close after it.
scene.every(0.7, () => {
  if (scene.get('storm') < 0.5) return;
  if (scene.random() > 0.22) return;
  scene.set('flash', 1);
  scene.after(0.07, () => scene.set('flash', 0, 0.35, 'out'));
  if (scene.random() < 0.4) {
    scene.after(0.3, () => scene.set('flash', 0.8));
    scene.after(0.36, () => scene.set('flash', 0, 0.4, 'out'));
  }
});
