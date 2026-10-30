// The sounds of «The Canterville Ghost» (Web Audio): real recordings (sounds/ — CC0, from Freesound: sounds/README.md),
// as loud as the page's "sounds" slider says (MooodVolume.output). They wait with the music — the play paused, the page
// hidden — as the page holds MooodVolume; the game never pauses them itself (moood docs/games/README.md). The scenario
// calls sound its main instrument (§4): the storm of the first evening, chains and a groan in the corridor, the hall
// clock, the nightingale of the Garden — and the silence when the old man falls asleep: the whole house at once.
//   beds(levels, seconds) — the game's background as the page sounds it (bespoke.onBackground): each bed named to its
//     level (0…1), every other one to silence, over `seconds`. The game only declares it (story.js g.scene's `air`,
//     g.air); the page says when.
//   once(name, {loud, far, delay, rate}) — a one-off sound (ONCE): loud — 0…1 of its own; far — heard through a wall
//     or from downstairs (dull, quieter); delay — seconds from now; rate — its speed (and pitch)

// the beds — what lasts under a scene: a recording each, looped, as loud as level × gain (the recordings are brought to
// −24 dBFS RMS, sounds/README.md)
//   storm — rain lashing the windows, far thunder (the evening they come) · fire — the library's fire · wind — round the
//   house at night · clock — the hall's long-case clock ticking (heard up the stairs too) · nightingale — the Garden of
//   Death's, the funeral's, the last shot's · birds — a summer morning in the garden · trees — autumn wind in the limes ·
//   night — a still night out of doors
export const BEDS = {
  storm: { file: 'storm-859807.mp3', gain: 2.2 },
  fire: { file: 'fire-484338.mp3', gain: 2.6 },
  wind: { file: 'wind-797666.mp3', gain: 2.4 },
  clock: { file: 'clock.mp3', gain: 2.4 },
  nightingale: { file: 'nightingale.mp3', gain: 2.4 },
  birds: { file: 'birds.mp3', gain: 2.2 },
  trees: { file: 'trees.mp3', gain: 2.2 },
  night: { file: 'night.mp3', gain: 2.4 },
};
// the one-off sounds (each brought to a peak near −1 dBFS): name → its file
export const ONCE = {
  thunder: 'thunder.mp3', chains: 'chains.mp3', chain_clink: 'chain_clink.mp3', groan: 'groan.mp3', creak: 'creak.mp3',
  door: 'door.mp3', smash: 'smash.mp3', pillow: 'pillow.mp3', peas: 'peas.mp3', strike: 'strike.mp3', hooves: 'hooves.mp3',
  knock: 'knock.mp3', armour: 'armour.mp3', panel: 'panel.mp3', bell: 'bell.mp3', laugh: 'laugh.mp3',
  floorboard: 'floorboard.mp3', wings: 'wings.mp3', carriage: 'carriage.mp3',
};

let ctx = null, master = null, dull = null;
function audio() {
  if (!ctx) {
    ctx = new AudioContext();
    const limit = ctx.createDynamicsCompressor();
    limit.threshold.value = -10;
    limit.ratio.value = 4;
    master = ctx.createGain();
    master.gain.value = 0.9;
    master.connect(limit).connect(MooodVolume.output(ctx)).connect(ctx.destination);
    // through a wall, from downstairs: the highs gone
    dull = ctx.createBiquadFilter();
    dull.type = 'lowpass';
    dull.frequency.value = 700;
    dull.Q.value = 0.5;
    dull.connect(master);
  }
  return ctx;
}
// a recording, fetched and decoded once
const recordings = {};
function recording(file) {
  return (recordings[file] ??= fetch(new URL(`sounds/${file}`, import.meta.url))
    .then(r => { if (!r.ok) throw new Error(`no sound ${file}`); return r.arrayBuffer(); })
    .then(buf => audio().decodeAudioData(buf)));
}
function ramp(param, v, seconds) {
  const t = audio().currentTime;
  param.cancelScheduledValues(t);
  param.setValueAtTime(param.value, t);
  param.linearRampToValueAtTime(v, t + Math.max(0.05, seconds));
}

// the beds sounding: name → {gain (its node), src, stop: a timer taking it down once silent}
const sounding = {};
export function beds(levels = {}, seconds = 2) {
  for (const name of Object.keys(BEDS)) bed(name, levels[name] ?? 0, seconds);
}
function bed(name, level, seconds) {
  let b = sounding[name];
  if (!b) {
    if (!level) return;
    const a = audio(), gain = a.createGain();
    gain.gain.value = 0;
    gain.connect(master);
    b = sounding[name] = { gain, src: null, stop: null, on: true };
    recording(BEDS[name].file).then(buf => {
      if (!b.on) return;
      const s = b.src = a.createBufferSource();
      s.buffer = buf;
      s.loop = true;
      s.connect(gain);
      s.start(a.currentTime, Math.random() * buf.duration);
    }, () => {});
  }
  clearTimeout(b.stop);
  ramp(b.gain.gain, level * BEDS[name].gain, seconds);
  if (!level) b.stop = setTimeout(() => {
    b.on = false;
    b.src?.stop();
    b.gain.disconnect();
    delete sounding[name];
  }, (Math.max(0.05, seconds) + 0.2) * 1000);
}

export function once(name, { loud = 1, far = false, delay = 0, rate = 1 } = {}) {
  const file = ONCE[name];
  if (!file) return;
  const a = audio();
  recording(file).then(buf => {
    const s = a.createBufferSource(), g = a.createGain();
    s.buffer = buf;
    s.playbackRate.value = rate;
    g.gain.value = loud * (far ? 0.55 : 1);
    s.connect(g).connect(far ? dull : master);
    s.start(a.currentTime + delay);
  }, () => {});
}
