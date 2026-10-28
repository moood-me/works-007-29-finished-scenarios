// He rises by `beast` (his layers come up out of the sea), breathes and sways slowly, the head following the top of the
// neck and looking about; his eyes flare as a beam of the lamp comes round to him (bearing 24 from the lamp); the
// point `head` goes with the head.
const HX = -2.2;
const HY = -24;
const PY = 1.5;
const b = e.state.beast;
const sink = (1 - b) * 30;
const sway = 0.014 * e.anim.noise(e.t * 0.11, 1) + 0.006 * Math.sin(e.t * 0.45);
const neck = e.layer('neck');
const head = e.layer('head');
const back = e.layer('back');
neck.y = sink;
neck.rotate = sway;
back.y = (1 - b) * 6;
const c = Math.cos(sway);
const s = Math.sin(sway);
const tx = HX * c - (HY - PY) * s;
const ty = PY + HX * s + (HY - PY) * c;
head.x = tx - HX;
head.y = ty - HY + sink;
head.rotate = sway + 0.05 * e.anim.noise(e.t * 0.17, 4);
const shown = Math.min(1, b * 6);
neck.alpha = shown;
head.alpha = shown;
back.alpha = shown;
e.at(tx - 1.6, ty - 0.9 + sink, 'head');
const off = x => ((((x - 24) % 360) + 540) % 360) - 180;
const flare = Math.max(Math.exp(-((off(e.state.beam) / 9) ** 2)), Math.exp(-((off(e.state.beam_b) / 9) ** 2)));
const k = b * e.state.lamp * (0.45 + 1.4 * flare);
e.glow('eye_r', k);
e.glow('eye_l', 0.85 * k);
