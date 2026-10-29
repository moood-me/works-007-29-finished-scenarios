// The kitchen's mechanics: who wears what by `year` and `young` (lib.dress: a year on Jack grown and Dad grey; the
// prologue's Jack five), as the scene opens and whenever either changes; and its pieces (the game sets `beat`:
// modules/beats, lib.film).
const dress = () => {
  const d = scene.lib.dress(scene.kit.cast.characters, scene.get('year'), scene.get('young'));
  for (const k in d) scene.set(k, d[k]);
};
scene.on('change', 'year', dress);
scene.on('change', 'young', dress);
dress();
scene.kit.beats.play(scene, scene.lib.film(scene));
