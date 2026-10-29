// М10 «The Portrait» (2.7, the library at night, after the piece `sleepless`: Papa writing at his lamp, Virginia on the
// window-sill with her sketchbook), in the insert `sketchbook` (the page close, his head under the lamp half drawn —
// opened by `sketchbook_open`): trace — the pencil along his profile, from the brow to the chin (`sketchbook#start` →
// `sketchbook#end`), the line coming with it (`portrait` 0…1). Off it — the line goes askew (`askew` 1, a mistake): Papa
// will laugh «My nose is longer, I believe» and stand it by the inkstand all the same. Drawn — the insert closes, the end
// (clean; flawed askew).
//   What she does: Virginia draws her father at his lamp.
//   What she wants: to have him, as he is tonight — and to find a way to ask her question.
//   How it is for her: two who cannot sleep; the house too quiet.
//   What the player feels: care, a pencil following a face.
//   → { askew }
import { keys, settle, count, line } from './hands.js';

export default {
  title: tr('The Portrait'),
  about: 8,
  skipped: { askew: false },
  missed: { askew: true },
  points: ['sketchbook#start', 'sketchbook#end'],
  keys: ['sketchbook_open', 'portrait', 'askew'],
  async run(g, b, opts, signal) {
    const mg = g.minigame({ phrase: tr('Papa at his desk under the lamp; the sketchbook on her knees.') });
    const send = keys(g);
    const over = settle(signal, () => { g.set('portrait', 1); g.set('sketchbook_open', 0, 0.4); });
    g.set('portrait', 0);
    g.set('askew', 0);
    g.set('sketchbook_open', 1, 0.4);
    const r = await line(g, b, mg, { from: 'sketchbook#start', to: 'sketchbook#end', progress: u => send('portrait', u),
      off: () => g.set('askew', 1) });
    if (!r) return this.skipped;
    const askew = r.offs > 0;
    if (!(await count(mg, 0.8))) return this.skipped;
    g.set('sketchbook_open', 0, 0.4);
    over();
    await mg.end({ as: askew ? 'flawed' : 'clean' });
    return { askew };
  },
};
