// The corridor's pieces (the game sets `beat`: modules/beats, lib.film; notes.md «Pieces»), and Sir Simon's light kept
// 0.6 m before him wherever he goes (`ghost_d` = `simon_d` − 0.6: the engine has no light that follows a person at an
// offset before them).
scene.kit.beats.play(scene, scene.lib.film(scene));
const light = () => scene.set('ghost_d', (scene.get('simon_d') ?? 4.6) - 0.6);
scene.on('change', 'simon_d', light);
scene.on('move', 'simon_d', light);
