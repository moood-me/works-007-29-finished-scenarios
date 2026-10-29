// The cockpit's pieces: the game sets `beat` (modules/beats; lib.film; notes.md «Pieces»).
scene.kit.beats.play(scene, scene.lib.film(scene));
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
// The plane in the air: at dusk and over the clouds it rises and sinks a few centimetres, slowly; in the storm it is
// thrown — sudden drops and lifts of a hand's breadth or more.
const bob = () => {
  const rough = scene.get('storm') > 0.5 && scene.get('above') < 0.5;
  const to = (scene.random() * 2 - 1) * (rough ? 0.18 : 0.04);
  const over = rough ? 0.35 + 0.6 * scene.random() : 2.2 + 1.6 * scene.random();
  scene.set('bob', to, over, rough ? 'out' : 'inOut');
  scene.after(over, bob);
};
bob();
