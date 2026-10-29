// The library's mechanics: its pieces (the game sets `beat`: modules/beats, lib.film); its doors' two leaves turned by
// `doors` (0 shut … 1 open out into the passage).
scene.kit.beats.play(scene, scene.lib.film(scene));
const doors = () => {
  const k = scene.get('doors') ?? 0;
  scene.set('door_l_f', 90 - 90 * k);
  scene.set('door_r_f', 90 + 90 * k);
};
scene.on('change', 'doors', doors);
scene.on('move', 'doors', doors);
doors();
