// The garden's mechanics: its pieces (the game sets `beat`: modules/beats, lib.film); Sir Simon's own light kept just
// before him and dimmed as he goes into the earth (`simon_fade`: he sinks under the turned loam — his place's
// elevation `simon_e` — and his light goes), out while he is not here.
scene.kit.beats.play(scene, scene.lib.film(scene));

const ghost = () => {
  scene.set('ghost_a', (scene.get('simon_a') ?? 1.2) - 0.35);
  scene.set('ghost_d', (scene.get('simon_d') ?? 5.3) - 0.4);
};
const fade = () => {
  const f = scene.get('simon_fade') ?? 0;
  scene.set('simon_e', -0.6 * f);
  scene.set('ghost_light', scene.get('simon_here') === false ? 0 : 1 - f);
};
for (const k of ['simon_a', 'simon_d']) {
  scene.on('change', k, ghost);
  scene.on('move', k, ghost);
}
scene.on('change', 'simon_fade', fade);
scene.on('move', 'simon_fade', fade);
scene.on('change', 'simon_here', fade);
ghost();
fade();
