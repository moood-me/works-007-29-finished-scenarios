// The sounds of «The Canterville Ghost» (Web Audio): real recordings (sounds/ — CC0, from Freesound: sounds/README.md),
// as loud as the page's "sounds" slider says (MooodVolume.output). They wait with the music — the play paused, the page
// hidden — as the page holds MooodVolume; the game never pauses them itself (moood docs/games/README.md). The scenario
// calls sound its main instrument (§4): the storm of the first evening, chains and a groan in the corridor, the hall
// clock, the nightingale of the Garden — and the silence when the old man falls asleep: the whole house at once.
//   beds(levels, seconds) — the game's background as the page sounds it (bespoke.onBackground): each bed named to its
//     level (0…1), every other one to silence, over `seconds`. The game only declares it (story.js g.scene's `air`,
//     g.air); the page says when.
//   once(name, {loud, far, delay, rate, cut}) — a one-off sound (ONCE): loud — 0…1 of its own; far — heard through a
//     wall or from downstairs (dull, quieter); delay — seconds from now; rate — its speed (and pitch); cut — seconds
//     after which its tail fades out (the clock's strokes: each dies before the next)

// the beds — what lasts under a scene: a recording each, looped; `lufs` — its measured loudness (EBU R128, integrated),
// so that every bed at the same level sounds as loud: level 1 ≈ −22 LUFS as heard at the page's default "sounds"
// (0.4) — under the scenes' music (≈ −25…−32) at the levels the game gives (0.2…0.55)
//   storm — rain lashing the windows, far thunder (the evening they come) · fire — the library's fire · wind — round the
//   house at night · clock — the hall's long-case clock ticking · nightingale — the Garden of Death's, the funeral's, the
//   last shot's · birds — a summer morning in the garden · trees — autumn wind in the limes (its low rumble cut:
//   sounds/README.md) · night — a still night out of doors
const BED_AT = -13.1; // the file's loudness that plays at level 1 (−22 heard, the master and the slider after it)
export const BEDS = {
  storm: { file: 'storm.mp3', lufs: -22.7 },
  fire: { file: 'fire.mp3', lufs: -32.3 },
  wind: { file: 'wind.mp3', lufs: -22.1 },
  clock: { file: 'clock.mp3', lufs: -21.1 },
  nightingale: { file: 'nightingale.mp3', lufs: -19.5 },
  birds: { file: 'birds.mp3', lufs: -20.1 },
  trees: { file: 'trees.mp3', lufs: -44.1 },
  night: { file: 'night.mp3', lufs: -22.9 },
};
for (const b of Object.values(BEDS)) b.gain = 10 ** ((BED_AT - b.lufs) / 20);
// the one-off sounds: name → [file, its loudest 0.4 s (dBFS RMS)] — each brought to the same loudness at `loud` 1
// (≈ −18 heard: over the music, under the voices); the short sharp ones were evened out first (sounds/README.md). Their
// gain at most ×8
const ONCE_AT = -9.1;
const ONE = {
  thunder: ['thunder.mp3', -9.6], chains: ['chains.mp3', -18.0], chain_clink: ['chain_clink.mp3', -17.6], groan: ['groan.mp3', -11.8],
  creak: ['creak.mp3', -12.4], door: ['door.mp3', -19.5], smash: ['smash.mp3', -28.7], pillow: ['pillow.mp3', -22.0],
  peas: ['peas.mp3', -28.8], strike: ['strike.mp3', -15.9], hooves: ['hooves.mp3', -15.3], knock: ['knock.mp3', -23.0],
  armour: ['armour.mp3', -16.1], panel: ['panel.mp3', -13.7], bell: ['bell.mp3', -14.3], laugh: ['laugh.mp3', -12.4],
  floorboard: ['floorboard.mp3', -23.8], wings: ['wings.mp3', -24.4], carriage: ['carriage.mp3', -23.9], stamp: ['stamp.mp3', -16.3],
};
export const ONCE = Object.fromEntries(Object.entries(ONE).map(([k, [file, at]]) => [k, { file, gain: Math.min(8, 10 ** ((ONCE_AT - at) / 20)) }]));

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
    dull.frequency.value = 1400;
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

export function once(name, { loud = 1, far = false, delay = 0, rate = 1, cut = null } = {}) {
  const one = ONCE[name];
  if (!one) return;
  const a = audio();
  recording(one.file).then(buf => {
    const s = a.createBufferSource(), g = a.createGain();
    s.buffer = buf;
    s.playbackRate.value = rate;
    g.gain.value = one.gain * loud * (far ? 0.5 : 1);
    s.connect(g).connect(far ? dull : master);
    const t = a.currentTime + delay;
    s.start(t);
    if (cut) {
      g.gain.setValueAtTime(g.gain.value, t + cut * 0.6);
      g.gain.linearRampToValueAtTime(0, t + cut);
      s.stop(t + cut + 0.05);
    }
  }, () => {});
}
