// The sounds of «Night Flight» (Web Audio): real recordings (sounds/ — CC0, from Freesound: sounds/README.md), and the
// one tone that is a tone — the key held down for the bearing; as loud as the page's "sounds" slider says
// (MooodVolume.output). They wait with the music — the play paused, the page hidden — as the page holds MooodVolume;
// the game never pauses them itself (moood docs/games/README.md). The scenario calls sound its main instrument (§4): the
// tap of the radio operator's key becomes the inker's in the bureau, and the last tape speaks words or one long note;
// the drone of an engine over the field — it is landing, so he is alive; the clack of the switch and the floodlights
// coming on one by one.
//   beds(levels, seconds) — the game's background as the page sounds it (bespoke.onBackground): each bed named to its
//     level (0…1), every other one to silence, over `seconds`. The game only declares it (story.js g.scene's `air`,
//     g.air); the page says when.
//   once(name, {loud, far, delay, rate, cut}) — a one-off sound (ONCE): loud — 0…1 of its own; far — heard through a
//     wall, from across the field (dull, quieter); delay — seconds from now; rate — its speed (and pitch); cut — seconds
//     after which its tail fades out
//   tone(seconds, {loud, far, delay}) — the radio key held down: one long note (the bearing)
//   once('key', {loud, far, delay, cut, words}) — the radio operator's key: Morse as its buzzer gives it (dots and
//     dashes of a tone — no CC0 recording of a real key with words was found, sounds/README.md); words — what it
//     spells (by default a call and a few groups), cut — seconds at most

// the beds — what lasts under a scene: a recording each, looped, as loud as level × gain (the recordings are brought to
// −24 dBFS RMS, sounds/README.md); far — through the dull filter (an engine across the field, a typewriter behind the
// wall)
//   field — the wind over the open field at night · rain — rain on the office's window · storm — the storm round the
//   plane · cockpit — the engine and the wind in the open cockpit · idle — an engine idling, warming up by the hangar ·
//   drone — the same engine far off, over the dark (a plane coming in) · clock — the bureau's wall clock · inker — the
//   telegraph's receiver running · typewriter — a typewriter behind the wall · evening — the next evening at the field's
//   edge
export const BEDS = {
  field: { file: 'field.mp3', gain: 2.2 },
  rain: { file: 'rain.mp3', gain: 2.2 },
  storm: { file: 'storm.mp3', gain: 2.2 },
  cockpit: { file: 'cockpit.mp3', gain: 2.2 },
  idle: { file: 'idle.mp3', gain: 2.2 },
  drone: { file: 'idle.mp3', gain: 2.6, far: true },
  clock: { file: 'clock.mp3', gain: 2.4 },
  inker: { file: 'inker.mp3', gain: 2.2 },
  typewriter: { file: 'typewriter.mp3', gain: 3.2 },
  evening: { file: 'evening.mp3', gain: 2.2 },
};
// the one-off sounds (each brought to a peak near −1 dBFS): name → its file
export const ONCE = {
  switch: 'switch.mp3', flood: 'flood.mp3', ring: 'ring.mp3', receiver: 'receiver.mp3',
  landing: 'landing.mp3', takeoff: 'takeoff.mp3', runup: 'runup.mp3', engine_off: 'engine_off.mp3', thunder: 'thunder.mp3',
  tear: 'tear.mp3', pen: 'pen.mp3', door: 'door.mp3', toolbox: 'toolbox.mp3', spanner: 'spanner.mp3', chocks: 'chocks.mp3',
  sack: 'sack.mp3', cowling: 'cowling.mp3', cough: 'cough.mp3',
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
    // through a wall, across the field: the highs gone
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
    gain.connect(BEDS[name].far ? dull : master);
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

export function once(name, { loud = 1, far = false, delay = 0, rate = 1, cut = null, words = null } = {}) {
  if (name === 'key') return morse(words ?? KEYED[Math.floor(Math.random() * KEYED.length)], { loud: 0.3 * loud, far, delay, cut });
  const file = ONCE[name];
  if (!file) return;
  const a = audio();
  recording(file).then(buf => {
    const s = a.createBufferSource(), g = a.createGain();
    s.buffer = buf;
    s.playbackRate.value = rate;
    g.gain.value = loud * (far ? 0.55 : 1);
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

// the key: Morse at some eighteen words a minute, a dot a unit, a dash three, the gaps one, three (letters), seven
// (words); played as the tone below, each element its own soft-edged note
const CODE = { A: '.-', B: '-...', C: '-.-.', D: '-..', E: '.', F: '..-.', G: '--.', H: '....', I: '..', J: '.---', K: '-.-', L: '.-..',
  M: '--', N: '-.', O: '---', P: '.--.', Q: '--.-', R: '.-.', S: '...', T: '-', U: '..-', V: '...-', W: '.--', X: '-..-', Y: '-.--',
  Z: '--..', 1: '.----', 2: '..---', 3: '...--', 4: '....-', 5: '.....', 6: '-....', 7: '--...', 8: '---..', 9: '----.', 0: '-----' };
const KEYED = ['SAN JULIAN QRV', 'CIEL CLAIR', 'QTH TRELEW', 'QRZ DE F', 'PAT QSL'];
function morse(text, { loud = 0.3, far = false, delay = 0, cut = null } = {}) {
  const unit = 0.066;
  let t = delay;
  for (const ch of text.toUpperCase()) {
    if (cut != null && t - delay > cut) break;
    if (ch === ' ') { t += unit * 4; continue; }
    for (const el of CODE[ch] ?? '') {
      const d = el === '.' ? unit : unit * 3;
      tone(d, { loud, far, delay: t, edge: 0.006 });
      t += d + unit;
    }
    t += unit * 2;
  }
}

// the key held down: a radio note (the operator's buzzer as the ear has it — a pure tone a little rough at its edge),
// coming in and going out softly so it does not click
export function tone(seconds, { loud = 0.35, far = false, delay = 0, edge = 0.03 } = {}) {
  const a = audio(), t = a.currentTime + delay;
  const o = a.createOscillator(), rough = a.createOscillator(), g = a.createGain(), rg = a.createGain();
  o.type = 'sine';
  o.frequency.value = 760;
  rough.type = 'triangle';
  rough.frequency.value = 1520;
  rg.gain.value = 0.08;
  g.gain.setValueAtTime(0, t);
  g.gain.linearRampToValueAtTime(loud * (far ? 0.6 : 1), t + edge);
  g.gain.setValueAtTime(loud * (far ? 0.6 : 1), t + Math.max(edge, seconds - edge));
  g.gain.linearRampToValueAtTime(0, t + seconds);
  o.connect(g);
  rough.connect(rg).connect(g);
  g.connect(far ? dull : master);
  o.start(t);
  rough.start(t);
  o.stop(t + seconds + 0.05);
  rough.stop(t + seconds + 0.05);
}
