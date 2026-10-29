// swept down: as `cobweb` goes from 1 to 0 the web sags, tears loose, falls and is gone
const k = e.state.cobweb ?? 1, gone = 1 - k, w = e.layer('web');
w.alpha = Math.min(1, k * 1.6);
w.y = 0.9 * gone * gone;
w.rotate = 0.5 * gone;
w.scaleY = 1 + 0.4 * gone;
