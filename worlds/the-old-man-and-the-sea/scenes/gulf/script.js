// The swell under the skiff: it rolls a little one way and back, slowly, never twice quite the same.
const swing = () => {
  const a = 1.1 + scene.random() * 0.9;
  scene.move('roll', a, { over: 3.4, ease: 'inOut' });
  scene.after(3.6, () => scene.move('roll', -0.8 * a, { over: 3.4, ease: 'inOut' }));
};
swing();
scene.every(7.2, swing);
