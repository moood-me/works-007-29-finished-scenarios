// The moon's path on the lake, from above (x across, y toward the viewer; metres from the plane's middle, 161.5 m off
// and 74 m to the right; it runs from 3 m to 320 m ahead): the line on the water under the moon as the eye sees it —
// every point straight below the moon on the screen, 0.462 m across for each metre ahead (the moon stands 24.7° right
// of the gaze). Short level dabs of pale light strewn down it, as many in each stretch of the screen from the far shore
// to the frame's foot (the water a screen height below the eye is 1.7 m off, at the horizon hundreds): the far ones
// thin and close, the near ones wider and scattered wider; each sized by how far it is so it is seen the same, and
// kept short in depth so it does not smear sideways. A layer that wavers (shimmer), so the path glints.
const D0 = 161.5, A0 = 74, SLOPE = 0.462, EYE = 1.7;
e.layer('dabs', { shimmer: 0.7, flicker: 0.3 }, g => {
  for (let i = 0; i < 380; i++) {
    // where on the screen under the horizon (screen heights), so how far
    const below = 0.006 + 0.47 * e.anim.hash(i, 91), d = EYE / below;
    if (d < 3.2 || d > 318) continue;
    const spread = 0.012 + 0.05 * below / 0.47, x = SLOPE * d - A0 + (e.anim.hash(i, 92) - 0.5) * 2 * spread * d * (0.3 + 0.7 * e.anim.hash(i, 93));
    const w = (0.008 + 0.022 * e.anim.hash(i, 94)) * d, t = Math.min((0.0018 + 0.002 * e.anim.hash(i, 96)) * d * d / EYE, 0.05 * d);
    g.fillStyle = `rgba(214,224,250,${(0.2 + 0.45 * e.anim.hash(i, 95)).toFixed(2)})`;
    g.fillRect(x - w / 2, D0 - d - t / 2, w, t);
  }
});
