// М2 «The Pen» (scenario §7: Ш1 «Dismiss» — the order signed on Roblet's box; the finale — the line in the log), in an
// insert of the scene: the paper close (the field's `paper`, opened by `paper_open`; the office's `log_page`, by
// `log_open`): lead slowly (a trace) — the pen from `<insert>#from` to `<insert>#to`, the ink coming with it (`ink`
// 0…1). Too quick or off the line — a blot (`blot` 1, a mistake; it stays), and the line goes on. Written — the insert
// closes, the end (clean; flawed with a blot). The log's words (`log_line`: bearing / unknown) are the game's: opts.line.
//   What he does: Rivière signs a man out of twenty years; writes one line of what is left of Fabien.
//   What he wants: to do it once, evenly, as the rule writes.
//   How it is for him: the old man's cap in his hands; the rain on the glass.
//   What the player feels: a slow line that must not shake.
//   → { blot }
import { keys, settle, count, line } from './hands.js';

// (of the line a second: quicker — a blot; the ghost's own pace must not be one)
const FAST = 2.6;

export function pen({ phrase, insert, open, blotted, hesitant }) {
  return {
    title: tr('The Pen'),
    about: 6,
    skipped: { blot: false },
    missed: { blot: true },
    points: [`${insert}#from`, `${insert}#to`],
    keys: [open, 'ink', 'blot', ...(insert === 'log_page' ? ['log_line'] : [])],
    async run(g, b, opts, signal) {
      const mg = g.minigame({ phrase });
      const over = settle(signal, () => { g.set('ink', 1); g.set(open, 0, 0.4); });
      g.set('ink', 0);
      g.set('blot', 0);
      if (opts.line) g.set('log_line', opts.line);
      g.set(open, 1, 0.4);
      const send = keys(g);
      let blot = false, scratch = false;
      // (the nib on the paper as the line begins)
      const r = await line(g, b, mg, { from: `${insert}#from`, to: `${insert}#to`, fast: FAST, progress: u => { send('ink', u); if (!scratch && u > 0.03) { scratch = true; g.sound('pen', { loud: 0.7 }); } },
        off: () => { if (!blot) { blot = true; g.set('blot', 1); mg.plate.set({ phrase: blotted }); } } });
      if (!r) return this.skipped;
      // (never touched: the line wrote itself, slowly, and the pen stood — a blot)
      if (r.alone && !blot) { blot = true; g.set('blot', 1); mg.plate.set({ phrase: hesitant }); }
      if (!(await count(mg, 0.8))) return this.skipped;
      g.set(open, 0, 0.4);
      over();
      await mg.end({ as: r.self ? 'neutral' : blot ? 'flawed' : 'clean' });
      return { blot };
    },
  };
}
