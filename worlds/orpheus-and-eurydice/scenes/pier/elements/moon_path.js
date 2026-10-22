// The moon's path on the lake, from above (x across, y toward the viewer; metres from the plane's middle, 165 m off
// and 76 m to the right): the line on the water under the moon as the eye sees it — every point straight below the
// moon on the screen, 0.462 m across for each metre ahead (the moon stands 24.7° right of the gaze). Short level dabs
// of pale light strewn along it, the far ones long in depth and close together (seen edge-on), the near ones small and
// scattered wider; a layer that wavers (shimmer), so the path glints and never stands still.
const D0 = 165, A0 = 76, SLOPE = 0.462;
e.layer('dabs', { shimmer: 0.7, flicker: 0.3 }, g => {
  for (let i = 0; i < 700; i++) {
    const u = e.anim.hash(i, 91), d = 10 + 310 * u ** 0.6;
    const x = SLOPE * d - A0 + (e.anim.hash(i, 92) - 0.5) * 0.07 * d * (0.4 + 0.6 * e.anim.hash(i, 93));
    const w = (0.012 + 0.02 * e.anim.hash(i, 94)) * d, t = 0.0035 * d * d / 1.7;
    const a = 0.35 + 0.55 * e.anim.hash(i, 95);
    g.fillStyle = `rgba(214,224,250,${a.toFixed(2)})`;
    g.fillRect(x - w / 2, D0 - d - t / 2, w, t);
  }
});
